$(function () {
    mkTool(
        'all-hashes',
        function (text) {
            // ntlm
            var utf16le = text.split('').join('\x00') + '\x00';
            var ntlmHash = md4(utf16le).toUpperCase();
            $('#hash-ntlm').val(ntlmHash);

            // md2
            var md2Hash = md2(text);
            $('#hash-md2').val(md2Hash);

            // md4
            var md4Hash = md4(text);
            $('#hash-md4').val(md4Hash);

            // md5
            var md5Hash = CryptoJS.MD5(text);
            $('#hash-md5').val(md5Hash);

            // md6
            var md6 = new md6hash();
            var md6Hash128 = md6.hex(text, 128);
            $('#hash-md6-128').val(md6Hash128);
            var md6 = new md6hash();
            var md6Hash256 = md6.hex(text, 256);
            $('#hash-md6-256').val(md6Hash256);
            var md6 = new md6hash();
            var md6Hash512 = md6.hex(text, 512);
            $('#hash-md6-512').val(md6Hash512);

            // ripemd
            var ripemdHash128 = CryptoJS.RIPEMD128(text);
            $('#hash-ripemd-128').val(ripemdHash128);
            var ripemdHash160 = CryptoJS.RIPEMD160(text);
            $('#hash-ripemd-160').val(ripemdHash160);
            var ripemdHash256 = CryptoJS.RIPEMD256(text);
            $('#hash-ripemd-256').val(ripemdHash256);
            var ripemdHash320 = CryptoJS.RIPEMD320(text);
            $('#hash-ripemd-320').val(ripemdHash320);

            // sha1
            var sha1Hash = CryptoJS.SHA1(text);
            $('#hash-sha1').val(sha1Hash);

            // sha3
            var sha3Hash224 = sha3_224(text);
            $('#hash-sha3-224').val(sha3Hash224);
            var sha3Hash256 = sha3_256(text);
            $('#hash-sha3-256').val(sha3Hash256);
            var sha3Hash384 = sha3_384(text);
            $('#hash-sha3-384').val(sha3Hash384);
            var sha3Hash512 = sha3_512(text);
            $('#hash-sha3-512').val(sha3Hash512);

            // sha 224
            var sha224Hash = CryptoJS.SHA224(text);
            $('#hash-sha-224').val(sha224Hash);

            // sha 256
            var sha256Hash = CryptoJS.SHA256(text);
            $('#hash-sha-256').val(sha256Hash);

            // sha 384
            var sha384Hash = CryptoJS.SHA384(text);
            $('#hash-sha-384').val(sha384Hash);

            // sha 512
            var sha512Hash = CryptoJS.SHA512(text);
            $('#hash-sha-512').val(sha512Hash);

            // crc16
            var crc16Hash = crc16(text);
            $('#hash-crc-16').val(crc16Hash);

            // crc32
            var crc32Hash = CRC32.str(text);
            var crc32Hash = (crc32Hash>>>0).toString(16);
            $('#hash-crc-32').val(crc32Hash);

            // adler32
            var hash = ADLER32.str(text);
            var hashHex = (hash>>>0).toString(16);
            var paddingLength = 8 - hashHex.length;
            while (paddingLength-- > 0) {
                hashHex = "0" + hashHex;
            }
            var adler32Hash = hashHex;
            $('#hash-adler-32').val(adler32Hash);

            // whirlpool
            var wirlpoolHash = Whirlpool(text).toLowerCase();
            $('#hash-whirlpool').val(wirlpoolHash);

            return text;
        },
        {
            allowEmptyText : true
        }
    );
});
