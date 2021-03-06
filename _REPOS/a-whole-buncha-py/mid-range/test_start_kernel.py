from .test_embed_kernel import setup_kernel
from flaky import flaky

TIMEOUT = 15


@flaky(max_runs=3)
def test_ipython_start_kernel_userns():
    cmd = (
        "from IPython import start_kernel\n"
        'ns = {"tre": 123}\n'
        "start_kernel(user_ns=ns)"
    )

    with setup_kernel(cmd) as client:
        msg_id = client.inspect("tre")
        msg = client.get_shell_msg(block=True, timeout=TIMEOUT)
        content = msg["content"]
        assert content["found"]
        text = content["data"]["text/plain"]
        assert "123" in text

        # user_module should be an instance of DummyMod
        msg_id = client.execute("usermod = get_ipython().user_module")
        msg = client.get_shell_msg(block=True, timeout=TIMEOUT)
        content = msg["content"]
        assert content["status"] == "ok"
        msg_id = client.inspect("usermod")
        msg = client.get_shell_msg(block=True, timeout=TIMEOUT)
        content = msg["content"]
        assert content["found"]
        text = content["data"]["text/plain"]
        assert "DummyMod" in text


@flaky(max_runs=3)
def test_ipython_start_kernel_no_userns():
    # Issue #4188 - user_ns should be passed to shell as None, not {}
    cmd = "from IPython import start_kernel\n" "start_kernel()"

    with setup_kernel(cmd) as client:
        # user_module should not be an instance of DummyMod
        msg_id = client.execute("usermod = get_ipython().user_module")
        msg = client.get_shell_msg(block=True, timeout=TIMEOUT)
        content = msg["content"]
        assert content["status"] == "ok"
        msg_id = client.inspect("usermod")
        msg = client.get_shell_msg(block=True, timeout=TIMEOUT)
        content = msg["content"]
        assert content["found"]
        text = content["data"]["text/plain"]
        assert "DummyMod" not in text
