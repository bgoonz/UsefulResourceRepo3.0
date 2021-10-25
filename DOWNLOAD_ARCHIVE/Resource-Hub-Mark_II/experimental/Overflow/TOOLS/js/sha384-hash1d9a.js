$(function () {
    mkTool(
        'sha384-hash',
        function (text) {
            var hash = CryptoJS.SHA384(text);
            return hash;
        },
        {
            allowEmptyText : true
        }
    );
});
