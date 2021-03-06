"""Tests for service authentication"""
import asyncio
import copy
import json
import os
import sys
from binascii import hexlify
from functools import partial
from queue import Queue
from threading import Thread
from unittest import mock
from urllib.parse import urlparse

import requests
import requests_mock
from pytest import raises
from tornado.httpserver import HTTPServer
from tornado.httputil import url_concat
from tornado.ioloop import IOLoop
from tornado.web import Application
from tornado.web import authenticated
from tornado.web import HTTPError
from tornado.web import RequestHandler

from .. import orm
from ..services.auth import _ExpiringDict
from ..services.auth import HubAuth
from ..services.auth import HubAuthenticated
from ..utils import url_path_join
from .mocking import public_host
from .mocking import public_url
from .test_api import add_user
from .utils import async_requests
from .utils import AsyncSession

# mock for sending monotonic counter way into the future
monotonic_future = mock.patch("time.monotonic", lambda: sys.maxsize)
ssl_enabled = False


def test_expiring_dict():
    cache = _ExpiringDict(max_age=30)
    cache["key"] = "cached value"
    assert "key" in cache
    assert cache["key"] == "cached value"

    with raises(KeyError):
        cache["nokey"]

    with monotonic_future:
        assert "key" not in cache

    cache["key"] = "cached value"
    assert "key" in cache
    with monotonic_future:
        assert "key" not in cache

    cache["key"] = "cached value"
    assert "key" in cache
    with monotonic_future:
        with raises(KeyError):
            cache["key"]

    cache["key"] = "cached value"
    assert "key" in cache
    with monotonic_future:
        assert cache.get("key", "default") == "default"

    cache.max_age = 0

    cache["key"] = "cached value"
    assert "key" in cache
    with monotonic_future:
        assert cache.get("key", "default") == "cached value"


def test_hub_auth():
    auth = HubAuth(cookie_name="foo")
    mock_model = {"name": "onyxia"}
    url = url_path_join(auth.api_url, "authorizations/cookie/foo/bar")
    with requests_mock.Mocker() as m:
        m.get(url, text=json.dumps(mock_model))
        user_model = auth.user_for_cookie("bar")
    assert user_model == mock_model
    # check cache
    user_model = auth.user_for_cookie("bar")
    assert user_model == mock_model

    with requests_mock.Mocker() as m:
        m.get(url, status_code=404)
        user_model = auth.user_for_cookie("bar", use_cache=False)
    assert user_model is None

    # invalidate cache with timer
    mock_model = {"name": "willow"}
    with monotonic_future, requests_mock.Mocker() as m:
        m.get(url, text=json.dumps(mock_model))
        user_model = auth.user_for_cookie("bar")
    assert user_model == mock_model

    with requests_mock.Mocker() as m:
        m.get(url, status_code=500)
        with raises(HTTPError) as exc_info:
            user_model = auth.user_for_cookie("bar", use_cache=False)
    assert exc_info.value.status_code == 502

    with requests_mock.Mocker() as m:
        m.get(url, status_code=400)
        with raises(HTTPError) as exc_info:
            user_model = auth.user_for_cookie("bar", use_cache=False)
    assert exc_info.value.status_code == 500


def test_hub_authenticated(request):
    auth = HubAuth(cookie_name="jubal")
    mock_model = {"name": "jubalearly", "groups": ["lions"]}
    cookie_url = url_path_join(auth.api_url, "authorizations/cookie", auth.cookie_name)
    good_url = url_path_join(cookie_url, "early")
    bad_url = url_path_join(cookie_url, "late")

    class TestHandler(HubAuthenticated, RequestHandler):
        hub_auth = auth

        @authenticated
        def get(self):
            self.finish(self.get_current_user())

    # start hub-authenticated service in a thread:
    port = 50505
    q = Queue()

    def run():
        asyncio.set_event_loop(asyncio.new_event_loop())
        app = Application([("/*", TestHandler)], login_url=auth.login_url)

        http_server = HTTPServer(app)
        http_server.listen(port)
        loop = IOLoop.current()
        loop.add_callback(lambda: q.put(loop))
        loop.start()

    t = Thread(target=run)
    t.start()

    def finish_thread():
        loop.add_callback(loop.stop)
        t.join(timeout=30)
        assert not t.is_alive()

    request.addfinalizer(finish_thread)

    # wait for thread to start
    loop = q.get(timeout=10)

    with requests_mock.Mocker(real_http=True) as m:
        # no cookie
        r = requests.get("http://127.0.0.1:%i" % port, allow_redirects=False)
        r.raise_for_status()
        assert r.status_code == 302
        assert auth.login_url in r.headers["Location"]

        # wrong cookie
        m.get(bad_url, status_code=404)
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "late"},
            allow_redirects=False,
        )
        r.raise_for_status()
        assert r.status_code == 302
        assert auth.login_url in r.headers["Location"]

        # clear the cache because we are going to request
        # the same url again with a different result
        auth.cache.clear()

        # upstream 403
        m.get(bad_url, status_code=403)
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "late"},
            allow_redirects=False,
        )
        assert r.status_code == 500

        m.get(good_url, text=json.dumps(mock_model))

        # no specific allowed user
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "early"},
            allow_redirects=False,
        )
        r.raise_for_status()
        assert r.status_code == 200

        # pass allowed user
        TestHandler.hub_users = {"jubalearly"}
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "early"},
            allow_redirects=False,
        )
        r.raise_for_status()
        assert r.status_code == 200

        # no pass allowed ser
        TestHandler.hub_users = {"kaylee"}
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "early"},
            allow_redirects=False,
        )
        assert r.status_code == 403

        # pass allowed group
        TestHandler.hub_groups = {"lions"}
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "early"},
            allow_redirects=False,
        )
        r.raise_for_status()
        assert r.status_code == 200

        # no pass allowed group
        TestHandler.hub_groups = {"tigers"}
        r = requests.get(
            "http://127.0.0.1:%i" % port,
            cookies={"jubal": "early"},
            allow_redirects=False,
        )
        assert r.status_code == 403


async def test_hubauth_cookie(app, mockservice_url):
    """Test HubAuthenticated service with user cookies"""
    cookies = await app.login_user("badger")
    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/", cookies=cookies
    )
    r.raise_for_status()
    print(r.text)
    reply = r.json()
    sub_reply = {key: reply.get(key, "missing") for key in ["name", "admin"]}
    assert sub_reply == {"name": "badger", "admin": False}


async def test_hubauth_token(app, mockservice_url):
    """Test HubAuthenticated service with user API tokens"""
    u = add_user(app.db, name="river")
    token = u.new_api_token()
    app.db.commit()

    # token in Authorization header
    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/",
        headers={"Authorization": "token %s" % token},
    )
    reply = r.json()
    sub_reply = {key: reply.get(key, "missing") for key in ["name", "admin"]}
    assert sub_reply == {"name": "river", "admin": False}

    # token in ?token parameter
    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/?token=%s" % token
    )
    r.raise_for_status()
    reply = r.json()
    sub_reply = {key: reply.get(key, "missing") for key in ["name", "admin"]}
    assert sub_reply == {"name": "river", "admin": False}

    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/?token=no-such-token",
        allow_redirects=False,
    )
    assert r.status_code == 302
    assert "Location" in r.headers
    location = r.headers["Location"]
    path = urlparse(location).path
    assert path.endswith("/hub/login")


async def test_hubauth_service_token(app, mockservice_url):
    """Test HubAuthenticated service with service API tokens"""

    token = hexlify(os.urandom(5)).decode("utf8")
    name = "test-api-service"
    app.service_tokens[token] = name
    await app.init_api_tokens()

    # token in Authorization header
    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/",
        headers={"Authorization": "token %s" % token},
    )
    r.raise_for_status()
    reply = r.json()
    assert reply == {"kind": "service", "name": name, "admin": False}
    assert not r.cookies

    # token in ?token parameter
    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/?token=%s" % token
    )
    r.raise_for_status()
    reply = r.json()
    assert reply == {"kind": "service", "name": name, "admin": False}

    r = await async_requests.get(
        public_url(app, mockservice_url) + "/whoami/?token=no-such-token",
        allow_redirects=False,
    )
    assert r.status_code == 302
    assert "Location" in r.headers
    location = r.headers["Location"]
    path = urlparse(location).path
    assert path.endswith("/hub/login")


async def test_oauth_service(app, mockservice_url):
    service = mockservice_url
    url = url_path_join(public_url(app, mockservice_url) + "owhoami/?arg=x")
    # first request is only going to login and get us to the oauth form page
    s = AsyncSession()
    name = "link"
    s.cookies = await app.login_user(name)

    r = await s.get(url)
    r.raise_for_status()
    # we should be looking at the oauth confirmation page
    assert urlparse(r.url).path == app.base_url + "hub/api/oauth2/authorize"
    # verify oauth state cookie was set at some point
    assert set(r.history[0].cookies.keys()) == {"service-%s-oauth-state" % service.name}

    # submit the oauth form to complete authorization
    r = await s.post(r.url, data={"scopes": ["identify"]}, headers={"Referer": r.url})
    r.raise_for_status()
    assert r.url == url
    # verify oauth cookie is set
    assert "service-%s" % service.name in set(s.cookies.keys())
    # verify oauth state cookie has been consumed
    assert "service-%s-oauth-state" % service.name not in set(s.cookies.keys())

    # second request should be authenticated, which means no redirects
    r = await s.get(url, allow_redirects=False)
    r.raise_for_status()
    assert r.status_code == 200
    reply = r.json()
    sub_reply = {key: reply.get(key, "missing") for key in ("kind", "name")}
    assert sub_reply == {"name": "link", "kind": "user"}

    # token-authenticated request to HubOAuth
    token = app.users[name].new_api_token()
    # token in ?token parameter
    r = await async_requests.get(url_concat(url, {"token": token}))
    r.raise_for_status()
    reply = r.json()
    assert reply["name"] == name

    # verify that ?token= requests set a cookie
    assert len(r.cookies) != 0
    # ensure cookie works in future requests
    r = await async_requests.get(url, cookies=r.cookies, allow_redirects=False)
    r.raise_for_status()
    assert r.url == url
    reply = r.json()
    assert reply["name"] == name


async def test_oauth_cookie_collision(app, mockservice_url):
    service = mockservice_url
    url = url_path_join(public_url(app, mockservice_url), "owhoami/")
    print(url)
    s = AsyncSession()
    name = "mypha"
    s.cookies = await app.login_user(name)
    state_cookie_name = "service-%s-oauth-state" % service.name
    service_cookie_name = "service-%s" % service.name
    oauth_1 = await s.get(url)
    print(oauth_1.headers)
    print(oauth_1.cookies, oauth_1.url, url)
    assert state_cookie_name in s.cookies
    state_cookies = [c for c in s.cookies.keys() if c.startswith(state_cookie_name)]
    # only one state cookie
    assert state_cookies == [state_cookie_name]
    state_1 = s.cookies[state_cookie_name]

    # start second oauth login before finishing the first
    oauth_2 = await s.get(url)
    state_cookies = [c for c in s.cookies.keys() if c.startswith(state_cookie_name)]
    assert len(state_cookies) == 2
    # get the random-suffix cookie name
    state_cookie_2 = sorted(state_cookies)[-1]
    # we didn't clobber the default cookie
    assert s.cookies[state_cookie_name] == state_1

    # finish oauth 2
    # submit the oauth form to complete authorization
    r = await s.post(
        oauth_2.url, data={"scopes": ["identify"]}, headers={"Referer": oauth_2.url}
    )
    r.raise_for_status()
    assert r.url == url
    # after finishing, state cookie is cleared
    assert state_cookie_2 not in s.cookies
    # service login cookie is set
    assert service_cookie_name in s.cookies
    service_cookie_2 = s.cookies[service_cookie_name]

    # finish oauth 1
    r = await s.post(
        oauth_1.url, data={"scopes": ["identify"]}, headers={"Referer": oauth_1.url}
    )
    r.raise_for_status()
    assert r.url == url

    # after finishing, state cookie is cleared (again)
    assert state_cookie_name not in s.cookies
    # service login cookie is set (again, to a different value)
    assert service_cookie_name in s.cookies
    assert s.cookies[service_cookie_name] != service_cookie_2

    # after completing both OAuth logins, no OAuth state cookies remain
    state_cookies = [s for s in s.cookies.keys() if s.startswith(state_cookie_name)]
    assert state_cookies == []


async def test_oauth_logout(app, mockservice_url):
    """Verify that logout via the Hub triggers logout for oauth services

    1. clears session id cookie
    2. revokes oauth tokens
    3. cleared session id ensures cached auth miss
    4. cache hit
    """
    service = mockservice_url
    service_cookie_name = "service-%s" % service.name
    url = url_path_join(public_url(app, mockservice_url), "owhoami/?foo=bar")
    # first request is only going to set login cookie
    s = AsyncSession()
    name = "propha"
    app_user = add_user(app.db, app=app, name=name)

    def auth_tokens():
        """Return list of OAuth access tokens for the user"""
        return list(
            app.db.query(orm.OAuthAccessToken).filter(
                orm.OAuthAccessToken.user_id == app_user.id
            )
        )

    # ensure we start empty
    assert auth_tokens() == []

    s.cookies = await app.login_user(name)
    assert "jupyterhub-session-id" in s.cookies
    r = await s.get(url)
    r.raise_for_status()
    assert urlparse(r.url).path.endswith("oauth2/authorize")
    # submit the oauth form to complete authorization
    r = await s.post(r.url, data={"scopes": ["identify"]}, headers={"Referer": r.url})
    r.raise_for_status()
    assert r.url == url

    # second request should be authenticated
    r = await s.get(url, allow_redirects=False)
    r.raise_for_status()
    assert r.status_code == 200
    reply = r.json()
    sub_reply = {key: reply.get(key, "missing") for key in ("kind", "name")}
    assert sub_reply == {"name": name, "kind": "user"}
    # save cookies to verify cache
    saved_cookies = copy.deepcopy(s.cookies)
    session_id = s.cookies["jupyterhub-session-id"]

    assert len(auth_tokens()) == 1

    # hit hub logout URL
    r = await s.get(public_url(app, path="hub/logout"))
    r.raise_for_status()
    # verify that all cookies other than the service cookie are cleared
    assert list(s.cookies.keys()) == [service_cookie_name]
    # verify that clearing session id invalidates service cookie
    # i.e. redirect back to login page
    r = await s.get(url)
    r.raise_for_status()
    assert r.url.split("?")[0] == public_url(app, path="hub/login")

    # verify that oauth tokens have been revoked
    assert auth_tokens() == []

    # double check that if we hadn't cleared session id
    # login would have been cached.
    # it's not important that the old login is still cached,
    # but what is important is that the above logout was successful
    # due to session-id causing a cache miss
    # and not a failure to cache auth at all.
    s.cookies = saved_cookies
    # check that we got the old session id back
    assert session_id == s.cookies["jupyterhub-session-id"]

    r = await s.get(url, allow_redirects=False)
    r.raise_for_status()
    assert r.status_code == 200
    reply = r.json()
    sub_reply = {key: reply.get(key, "missing") for key in ("kind", "name")}
    assert sub_reply == {"name": name, "kind": "user"}
