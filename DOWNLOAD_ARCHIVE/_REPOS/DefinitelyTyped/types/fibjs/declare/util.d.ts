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
	* @detail 
	*/
declare module "util" {
	

	module util {
		
		
		
		/**
		 * 
		 * @brief ????????????????????????????????????????????????????????????????????? Stats ?????????
		 * 
		 * 
		 */
		export class Stats extends Class_Stats {}
		
		
		/**
		 * 
		 * @brief LRU(least recently used) ????????????????????? LruCache ?????????
		 * 
		 * 
		 */
		export class LruCache extends Class_LruCache {}
		
		
		
		
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * @param fmt ??????????????????
		 * @param args ??????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function format(fmt: string, ...args: any[]): string;
	
		/**
		 * 
		 * @brief ?????????????????????
		 * 
		 * @param args ??????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function format(...args: any[]): string;
	
		/**
		 * 
		 * @brief ????????????????????? constructor ?????????????????????????????????????????????????????????????????????????????????????????????superConstructor?????????????????????
		 * 
		 * @param constructor ?????????????????????
		 * @param superConstructor ??????????????????
		 * 
		 * 
		 * 
		 */
		export function inherits(constructor: any, superConstructor: any): void;
	
		/**
		 * 
		 * @brief ???????????? obj ?????????????????????????????????????????? ????????? options ???????????????????????????????????????????????????
		 * 
		 * @param obj ???????????????????????????
		 * @param options ????????????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function inspect(obj: Object, options?: Object/** = v8::Object::New(isolate)*/): string;
	
		/**
		 * 
		 * @brief ?????????????????????????????????????????????(????????????????????????)
		 * 
		 * @param v ???????????????????????????
		 * @return ????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isEmpty(v: any): boolean;
	
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ???????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isArray(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Boolean
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Boolean ????????? True
		 * 
		 * 
		 * 
		 */
		export function isBoolean(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Null
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Null ????????? True
		 * 
		 * 
		 * 
		 */
		export function isNull(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Null ?????? Undefined
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Null ?????? Undefined ????????? True
		 * 
		 * 
		 * 
		 */
		export function isNullOrUndefined(v: any): boolean;
	
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ???????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isNumber(v: any): boolean;
	
		/**
		 * 
		 * @brief ???????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ??????????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isString(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Undefined
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Undefined ????????? True
		 * 
		 * 
		 * 
		 */
		export function isUndefined(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ?????????????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isRegExp(v: any): boolean;
	
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ???????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isObject(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ?????????????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isDate(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ?????????????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isNativeError(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ?????????????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isPrimitive(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????Symbol??????
		 * 
		 * @param v ???????????????????????????
		 * @return ?????????Symbol??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isSymbol(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? DataView ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? DataView ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isDataView(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? External ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? External ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isExternal(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Map ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Map ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isMap(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? MapIterator ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? MapIterator ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isMapIterator(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Promise ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Promise ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isPromise(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? AsyncFunction ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? AsyncFunction ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isAsyncFunction(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Set ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Set ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isSet(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? SetIterator ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? SetIterator ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isSetIterator(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? TypedArray ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? TypedArray ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isTypedArray(v: any): boolean;
	
		/**
		 * 
		 * @brief ?????????????????????????????? Uint8Array ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ????????? Uint8Array ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isUint8Array(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ?????????????????????????????? True
		 * 
		 * 
		 * 
		 */
		export function isFunction(v: any): boolean;
	
		/**
		 * 
		 * @brief ???????????????????????????????????? Buffer ??????
		 * 
		 * @param v ???????????????????????????
		 * @return ??????????????? Buffer ??????????????? True
		 * 
		 * 
		 * 
		 */
		export function isBuffer(v: any): boolean;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @param key ????????????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function has(v: any, key: string): boolean;
	
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function keys(v: any): any[];
	
		/**
		 * 
		 * @brief ????????????????????????????????????
		 * 
		 * @param v ???????????????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function values(v: any): any[];
	
		/**
		 * 
		 * @brief ???????????????????????????????????????????????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @return ??????????????????
		 * 
		 * 
		 * 
		 */
		export function clone(v: any): any;
	
		/**
		 * 
		 * @brief ?????????????????????????????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @param objs ?????????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function extend(v: any, ...objs: any[]): any;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????????????????????????? extend ?????????
		 * 
		 * @param v ????????????????????????
		 * @param objs ?????????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function _extend(v: any, ...objs: any[]): any;
	
		/**
		 * 
		 * @brief ????????????object??????????????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @param objs ??????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function pick(v: any, ...objs: any[]): Object;
	
		/**
		 * 
		 * @brief ????????????object??????????????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @param keys ??????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function omit(v: any, ...keys: any[]): Object;
	
		/**
		 * 
		 * @brief ??????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function first(v: any): any;
	
		/**
		 * 
		 * @brief ?????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @param n ??????????????????????????????
		 * @return ???????????????????????????
		 * 
		 * 
		 * 
		 */
		export function first(v: any, n: number): any;
	
		/**
		 * 
		 * @brief ?????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function last(v: any): any;
	
		/**
		 * 
		 * @brief ?????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @param n ??????????????????????????????
		 * @return ???????????????????????????
		 * 
		 * 
		 * 
		 */
		export function last(v: any, n: number): any;
	
		/**
		 * 
		 * @brief ???????????????????????????????????????
		 * 
		 * @param v ????????????????????????
		 * @param sorted ???????????????????????????????????????????????????????????????????????????
		 * @return ??????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function unique(v: any, sorted?: boolean/** = false*/): any[];
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????????????????????????????
		 * 
		 * @param arrs ?????????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function union(...arrs: any[]): any[];
	
		/**
		 * 
		 * @brief ?????????????????? arr ??????????????????????????????????????????????????????
		 * 
		 * @param arrs ???????????????????????????????????????????????????
		 * @return ???????????????????????????
		 * 
		 * 
		 * 
		 */
		export function intersection(...arrs: any[]): any[];
	
		/**
		 * 
		 * @brief ??????????????????????????????(???????????????????????????)????????????????????????????????? ??????????????? shallow ?????????????????????????????????????????????
		 * 
		 * @param arr ???????????????????????????
		 * @param shallow ???????????????????????????????????????????????? false
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function flatten(arr: any, shallow?: boolean/** = false*/): any[];
	
		/**
		 * 
		 * @brief ?????????????????? arr ???????????????????????????????????????????????????
		 * 
		 * @param arr ???????????????????????????
		 * @param els ?????????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function without(arr: any, ...els: any[]): any[];
	
		/**
		 * 
		 * @brief ?????????????????? arr ??????????????? without ???????????????????????????
		 * 
		 * @param list ???????????????????????????
		 * @param arrs ?????????????????????????????????????????????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function difference(list: any[], ...arrs: any[]): any[];
	
		/**
		 * 
		 * @brief ?????? list ??????????????????????????????????????????????????????????????????????????? context ??????????????? iterator ????????? context ???????????????????????? iterator ???????????????????????????(element, index, list)
		 * 
		 * @param list ????????????????????????????????????
		 * @param iterator ?????????????????????????????????
		 * @param context ???????????? iterator ???????????? context ??????
		 * @return ?????? list ??????
		 * 
		 * 
		 * 
		 */
		export function each(list: any, iterator: Function, context?: any/** = v8::Undefined(isolate)*/): any;
	
		/**
		 * 
		 * @brief ?????????????????????iterator??????????????? list ??????????????????????????????????????????????????????????????? context ??????????????? iterator ????????? context ???????????????????????? iterator ???????????????????????????(element, index, list)
		 * 
		 * @param list ????????????????????????????????????
		 * @param iterator ?????????????????????????????????
		 * @param context ???????????? iterator ???????????? context ??????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function map(list: any, iterator: Function, context?: any/** = v8::Undefined(isolate)*/): any[];
	
		/**
		 * 
		 * @brief ??? list??? ?????????????????????????????????????????????????????? context ??????????????? iterator ????????? context ???????????????????????? iterator ???????????????????????????(memo, element, index, list)
		 * 
		 * @param list ????????????????????????????????????
		 * @param iterator ?????????????????????????????????
		 * @param memo ????????????????????????
		 * @param context ???????????? iterator ???????????? context ??????
		 * @return ?????????????????????
		 * 
		 * 
		 * 
		 */
		export function reduce(list: any, iterator: Function, memo: any, context?: any/** = v8::Undefined(isolate)*/): any;
	
		/**
		 * 
		 * @brief ??????????????????????????????
		 * util.compile ???????????????????????? v8 ?????????????????????(?????????????????????)???????????????????????????????????? *.jsc ??????????????? run ??? require ?????????????????????
		 * 
		 * ??????????????????????????????????????????????????????????????????????????? Function.toString ?????????????????????????????????
		 * 
		 * @param srcname ??????????????????????????????
		 * @param script ??????????????????????????????
		 * @param mode ???????????????0: module, 1: script, 2: worker???????????? 0
		 * @return ?????????????????????????????????
		 * 
		 * 
		 * 
		 */
		export function compile(srcname: string, script: string, mode?: number/** = 0*/): Class_Buffer;
	
		/**
		 * 
		 * @brief ?????? callback ??? async ?????????????????????
		 * 
		 * util.sync ??? callback ???????????? async ??????????????? sync ???????????????????????????
		 * 
		 * callback ???????????????
		 * ```JavaScript
		 * // callback
		 * var util = require('util');
		 * 
		 * function cb_test(a, b, cb) {
		 * setTimeout(() => {
		 * cb(null, a + b);
		 * }, 100);
		 * }
		 * 
		 * var fn_sync = util.sync(cb_test);
		 * console.log(fn_sync(100, 200));
		 * ```
		 * async ???????????????
		 * ```JavaScript
		 * // async/await
		 * var util = require('util');
		 * 
		 * async function async_test(a, b) {
		 * return a + b;
		 * }
		 * 
		 * var fn_sync = util.sync(async_test);
		 * console.log(fn_sync(100, 200));
		 * ```
		 * ?????????????????? async ????????? promise ?????????????????????????????? sync ?????????
		 * ```JavaScript
		 * // async/await
		 * var util = require('util');
		 * 
		 * function async_test(a, b) {
		 * return new Promise(function (resolve, reject) {
		 * resolve(a + b);
		 * });
		 * }
		 * 
		 * var fn_sync = util.sync(async_test, true);
		 * console.log(fn_sync(100, 200));
		 * ```
		 * 
		 * @param func ???????????????????????????
		 * @param async_func ????????? async ?????????????????? func?????? false ???????????????
		 * @return ???????????????????????????
		 * 
		 * 
		 * 
		 */
		export function sync(func: Function, async_func?: boolean/** = false*/): Function;
	
		/**
		 * 
		 * @brief ??????????????????????????????????????????
		 * 
		 * ```JavaScript
		 * {
		 * "fibjs": "0.1.0",
		 * "svn": 1753,
		 * "build": "Dec 10 2013 21:44:17",
		 * "vender": {
		 * "ev": "4.11",
		 * "exif": "0.6.21",
		 * "gd": "2.1.0-alpha",
		 * "jpeg": "8.3",
		 * "log4cpp": "1.0",
		 * "mongo": "0.7",
		 * "pcre": "8.21",
		 * "png": "1.5.4",
		 * "sqlite": "3.8.1",
		 * "tiff": "3.9.5",
		 * "uuid": "1.6.2",
		 * "v8": "3.23.17 (candidate)",
		 * "zlib": "1.2.7",
		 * "zmq": "3.1"
		 * }
		 * }
		 * ```
		 * @return ????????????????????????
		 * 
		 * 
		 * 
		 */
		export function buildInfo(): Object;
	
	} /** end of `module util` */
	export = util
}

/** endof `module Or Internal Object` */


