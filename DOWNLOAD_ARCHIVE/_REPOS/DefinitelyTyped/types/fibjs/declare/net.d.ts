/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.25.0                                                   *
 *   	- date	: Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */





/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="EventInfo.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HandlerEx.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="Int64.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="Stats.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="SubProcess.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="ZmqSocket.d.ts" />

/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
	* @brief ??????????????????
	* @detail ?????????????????????????????????????????????????????????????????????,```JavaScript,var net = require('net');,```
	*/
declare module "net" {
	

	module net {
		
		/**
		 * 
		 * @brief ???????????????????????? ipv4
		 * 
		 * 
		 */
		export const AF_INET = 2;
		
		/**
		 * 
		 * @brief ???????????????????????? ipv6
		 * 
		 * 
		 */
		export const AF_INET6 = 10;
		
		/**
		 * 
		 * @brief ???????????????????????? tcp
		 * 
		 * 
		 */
		export const SOCK_STREAM = 1;
		
		/**
		 * 
		 * @brief ???????????????????????? udp
		 * 
		 * 
		 */
		export const SOCK_DGRAM = 2;
		
		
		
		/**
		 * 
		 * @brief ???????????? Socket ??????????????? Socket
		 * 
		 * 
		 */
		export class Socket extends Class_Socket {}
		
		
		/**
		 * 
		 * @brief ???????????? Smtp ??????????????? Smtp
		 * 
		 * 
		 */
		export class Smtp extends Class_Smtp {}
		
		
		/**
		 * 
		 * @brief ???????????? TcpServer ??????????????? TcpServer
		 * 
		 * 
		 */
		export class TcpServer extends Class_TcpServer {}
		
		
		/**
		 * 
		 * @brief ???????????? UrlObject ??????????????? UrlObject
		 * 
		 * 
		 */
		export class Url extends Class_UrlObject {}
		
		
		
		
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * @return ??????????????????
		 * 
		 * 
		 * 
		 */
		export function info(): Object;
	
		/**
		 * 
		 * @brief ?????????????????????????????????
		 * @param name ???????????????
		 * @param family ???????????????????????????????????? AF_INET
		 * @return ??????????????? ip ?????????
		 * 
		 * 
		 * @async
		 */
		export function resolve(name: string, family?: number/** = undefined*/): string;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????? resolve(name)
		 * @param name ???????????????
		 * @return ??????????????? ip ?????????
		 * 
		 * 
		 * @async
		 */
		export function ip(name: string): string;
	
		/**
		 * 
		 * @brief ????????????????????? ipv6 ?????????????????? resolve(name, net.AF_INET6)
		 * @param name ???????????????
		 * @return ??????????????? ipv6 ?????????
		 * 
		 * 
		 * @async
		 */
		export function ipv6(name: string): string;
	
		/**
		 * 
		 * @brief ???????????? Socket ??? SslSocket ?????????????????????
		 * @param url ????????????????????????????????????tcp://host:port ?????? ssl://host:port
		 * @param timeout ????????????????????????????????????????????????0
		 * @return ????????????????????? Socket ?????? SslSocket ??????
		 * 
		 * 
		 * @async
		 */
		export function connect(url: string, timeout?: number/** = 0*/): Class_Stream;
	
		/**
		 * 
		 * @brief ???????????? Smtp ?????????????????????????????? Smtp
		 * @param url ????????????????????????????????????tcp://host:port ?????? ssl://host:port
		 * @param timeout ????????????????????????????????????????????????0
		 * @return ????????????????????? Smtp ??????
		 * 
		 * 
		 * @async
		 */
		export function openSmtp(url: string, timeout?: number/** = 0*/): Class_Smtp;
	
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * @return ????????????????????????
		 * 
		 * 
		 * 
		 */
		export function backend(): string;
	
		/**
		 * 
		 * @brief ????????????????????? IP ??????
		 * @param ip ???????????????????????????
		 * @return ???????????? IP ??????????????? 0, ????????? IPv4 ????????? 4???????????? IPv6 ????????? 6
		 * 
		 * 
		 * 
		 */
		export function isIP(ip?: string/** = ""*/): number;
	
		/**
		 * 
		 * @brief ????????????????????? IPv4 ??????
		 * @param ip ???????????????????????????
		 * @return ????????? IPv4 ????????? true.???????????? false
		 * 
		 * 
		 * 
		 */
		export function isIPv4(ip?: string/** = ""*/): boolean;
	
		/**
		 * 
		 * @brief ????????????????????? IPv6 ??????
		 * @param ip ???????????????????????????
		 * @return ????????? IPv6 ????????? true.???????????? false
		 * 
		 * 
		 * 
		 */
		export function isIPv6(ip?: string/** = ""*/): boolean;
	
	} /** end of `module net` */
	export = net
}

/** endof `module Or Internal Object` */


