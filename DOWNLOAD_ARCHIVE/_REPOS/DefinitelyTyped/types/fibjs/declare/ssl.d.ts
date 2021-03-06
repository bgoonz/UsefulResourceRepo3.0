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
	* @brief ssl/tls ??????
	* @detail 
	*/
declare module "ssl" {
	

	module ssl {
		
		/**
		 * 
		 * @brief ??????????????????????????????
		 * 
		 * 
		 */
		export const VERIFY_NONE = 0;
		
		/**
		 * 
		 * @brief ?????????????????????????????????????????????????????????
		 * 
		 * 
		 */
		export const VERIFY_OPTIONAL = 1;
		
		/**
		 * 
		 * @brief ????????????????????????????????????????????????????????????
		 * 
		 * 
		 */
		export const VERIFY_REQUIRED = 2;
		
		/**
		 * 
		 * @brief ?????????????????????????????????
		 * 
		 * 
		 */
		export const BADCERT_EXPIRED = 1;
		
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * 
		 */
		export const BADCERT_REVOKED = 2;
		
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * 
		 */
		export const BADCERT_CN_MISMATCH = 4;
		
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * 
		 */
		export const BADCERT_NOT_TRUSTED = 8;
		
		/**
		 * 
		 * @brief ssl ???????????? ssl 3.0
		 * 
		 * 
		 */
		export const ssl3 = 0;
		
		/**
		 * 
		 * @brief ssl ???????????? tls 1.0
		 * 
		 * 
		 */
		export const tls1 = 1;
		
		/**
		 * 
		 * @brief ssl ???????????? tls 1.1
		 * 
		 * 
		 */
		export const tls1_1 = 2;
		
		/**
		 * 
		 * @brief ssl ???????????? tls 1.2
		 * 
		 * 
		 */
		export const tls1_2 = 3;
		
		
		/**
		 * 
		 * @brief ????????????????????? ssl ????????????????????????????????????
		 * 
		 * 
		 */
		export const ca: Class_X509Cert;
		
		/**
		 * 
		 * @brief ???????????????????????????????????? VERIFY_REQUIRED
		 * 
		 * 
		 */
		export const verification: number;
		
		/**
		 * 
		 * @brief ????????????????????????????????? ssl3
		 * 
		 * 
		 */
		export const min_version: number;
		
		/**
		 * 
		 * @brief ????????????????????????????????? tls1_1
		 * 
		 * 
		 */
		export const max_version: number;
		
		
		/**
		 * 
		 * @brief ???????????? SslSocket ??????????????? SslSocket
		 * 
		 * 
		 */
		export class Socket extends Class_SslSocket {}
		
		
		/**
		 * 
		 * @brief ???????????? SslHandler ??????????????? SslHandler
		 * 
		 * 
		 */
		export class Handler extends Class_SslHandler {}
		
		
		/**
		 * 
		 * @brief ???????????? SslServer ??????????????? SslServer
		 * 
		 * 
		 */
		export class Server extends Class_SslServer {}
		
		
		
		
		/**
		 * 
		 * @brief ???????????? SslSocket ?????????????????????
		 * @param url ????????????????????????????????????ssl://host:port
		 * @param timeout ????????????????????????????????????????????????0
		 * @return ????????????????????? SslSocket ??????
		 * 
		 * 
		 * @async
		 */
		export function connect(url: string, timeout?: number/** = 0*/): Class_Stream;
	
		/**
		 * 
		 * @brief ???????????????????????????
		 * @param crt X509Cert ???????????????????????????????????????
		 * @param key PKey ?????????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function setClientCert(crt: Class_X509Cert, key: Class_PKey): void;
	
		/**
		 * 
		 * @brief ???????????????????????????????????????
		 * @param crtFile X509Cert ?????????????????????????????????????????????
		 * @param keyFile PKey ???????????????????????????????????????
		 * @param password ????????????
		 * 
		 * 
		 * 
		 */
		export function loadClientCertFile(crtFile: string, keyFile: string, password?: string/** = ""*/): void;
	
		/**
		 * 
		 * @brief ?????????????????????????????????????????? ssl.ca.loadRootCerts
		 * ????????????????????????http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt
		 * 
		 * 
		 */
		export function loadRootCerts(): void;
	
	} /** end of `module ssl` */
	export = ssl
}

/** endof `module Or Internal Object` */


