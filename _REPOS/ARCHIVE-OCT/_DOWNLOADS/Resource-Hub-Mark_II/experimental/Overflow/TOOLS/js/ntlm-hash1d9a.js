$(function () {
    mkTool(
        'ntlm-hash',
        function (text) {
            var utf16le = text.split('').join('\x00') + '\x00';
            return md4(utf16le).toUpperCase();
        }
    );
});
