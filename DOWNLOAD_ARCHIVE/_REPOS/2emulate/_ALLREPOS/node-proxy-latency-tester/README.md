# Node Poxy Latency Tester

This command line tool helps you to create a proxy that adds adds a latency between two services. This is useful for testing purposes and simulations.

## Installation

via npm:

```bash
npm install -g node-proxy-latency-tester
```

## Usage

```
$ node-proxy-latency-tester -h

Usage:
  node-proxy-latency-tester [OPTIONS] [ARGS]

Options:
  -t, --target [NUMBER]  target port (service port) (Default is 8080)
  -f, --forward [NUMBER] forward port (new port through proxy) (Default is 7070)
  -l, --latency [NUMBER] latency in ms (Default is 0)
  -h, --help             Display help and usage details
```

Let's say that you have a service running on `localhost:8080` and you can add a latency of 300 ms without changing the service. You can easily accomplish this with:

```bash
np -t 8080 -f 8081 -l 300
```

Now you can use your service on port `8081` with a latency of 300 ms. You can also use `np` for short.
