import asyncio

import aiohttp


URL_LIST = [
    'http://google.com',
    'http://abc.xyz',
    'http://github.com',
    'https://www.python.org/'
]


@asyncio.coroutine
def fetch_url(url):
    response = yield from aiohttp.request('GET', url)
    return (yield from response.text())


if __name__ == '__main__':
    loop = asyncio.get_event_loop()

    urls = {
        asyncio.async(fetch_url(url)): url
        for url in URL_LIST
    }

    responses, _ = loop.run_until_complete(asyncio.wait(urls))
    for response in responses:
        url = urls[response]
        print('{}: {}'.format(url, len(response.result())))

    loop.close()
