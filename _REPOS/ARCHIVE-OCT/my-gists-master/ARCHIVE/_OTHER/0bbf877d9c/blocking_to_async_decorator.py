# -*- coding: utf-8 -*-
import time
import concurrent.futures

import tornado.concurrent
import tornado.web
import tornado.gen
import tornado.httpserver
import tornado.ioloop


class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.finish({"hello": "world"})


class Block(tornado.web.RequestHandler):
    def initialize(self, executor):
        self.executor = executor

    @tornado.concurrent.run_on_executor
    def make_sleep(self):
        time.sleep(5)

    @tornado.gen.coroutine
    def get(self):
        yield self.make_sleep()
        self.finish({"msg": "finish blocking call"})


if __name__ == "__main__":
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=5)
    app = tornado.web.Application(
        [(r"/", IndexHandler), (r"/block/", Block, dict(executor=executor))]
    )
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(8000)
    tornado.ioloop.IOLoop.instance().start()
