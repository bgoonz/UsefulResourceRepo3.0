# Heroku

https://devcenter.heroku.com/articles/deploying-nodejs

Most used commands:

```s
# create
heroku create crybot

# test locally
heroku local worker
heroku local web
heroku local

# There are two apps here
heroku config -a crybot-web
heroku config -a crybot

heroku config:set DEBUG='*'
heroku config:get DEBUG

# pushing code
git push heroku master # crybot
git push web master # crybot-web

# Avoid being killed after not biding to $PORT (non-web apps)
heroku scale web=0 worker=1

# logs
heroku logs -t

# free hours left
heroku ps -a crybot

# start ticker
heroku ps:scale ticker=1 -a crybot

# unlimited free login
heroku addons:create logdna:quaco

# best logs
heroku addons:open logdna

# see ports
lsof -i -n -P | grep LISTEN
```

# Switching to OpenShift?

http://givemethechills.com/how-to-migrate-a-node-js-app-from-heroku-to-openshift/


# Archive

```s
# enabling metrics on logs
heroku labs:enable log-runtime-metrics # no good
heroku restart
```

