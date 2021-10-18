# socket \-\-- Network Communication

::: {.module synopsis="Network communication"} socket :::

Purpose

: Provides access to network communication

The `socket` module exposes the low-level C API for communicating over a network using the BSD socket interface. It includes the `socket` class, for handling the actual data channel, and also includes functions for network-related tasks such as converting a server\'s name to an address and formatting data to be sent across the network.

::: {.toctree} addressing tcp udp uds multicast binary nonblocking :::

::: {.seealso}

- `socket`{.interpreted-text role="pydoc"}
- `Python 2 to 3 porting notes for socket <porting-socket>`{.interpreted-text role="ref"}
- `select`{.interpreted-text role="mod"} \-- Testing a socket to see if it is ready for reading or writing for non-blocking I/O.
- `SocketServer`{.interpreted-text role="mod"} \-- Framework for creating network servers.
- `asyncio`{.interpreted-text role="mod"} \-- Asynchronous I/O and concurrency tools.
- `urllib`{.interpreted-text role="mod"} and `urllib2`{.interpreted-text role="mod"} \-- Most network clients should use the more convenient libraries for accessing remote resources through a URL.
- [Socket Programming HOWOTO](https://docs.python.org/3/howto/sockets.html) \-- An instructional guide by Gordon McMillan, included in the standard library documentation.
- _Foundations of Python Network Programming, 3/E_ \-- By Brandon Rhodes and John Goerzen. Published by Apress, 2014. ISBN-10: 1430258543.
- _Unix Network Programming, Volume 1: The Sockets Networking API, 3/E_ \-- By W. Richard Stevens, Bill Fenner, and Andrew M. Rudoff. Published by Addison-Wesley Professional, 2004. ISBN-10: 0131411551 :::
