$(function () {
    mkTool(
        'json-unescape',
        function (text) {
            text = text.replace(/\\\\/g, '\\');
            text = text.replace(/\\\//g, '/');
            text = text.replace(/\\\b/g, '\b');
            text = text.replace(/\\\f/g, '\f');
            text = text.replace(/\\\n/g, '\n');
            text = text.replace(/\\\r/g, '\r');
            text = text.replace(/\\\t/g, '\t');
            text = text.replace(/\\\"/g, '"');
            var jsonObj = JSON.parse(text);
            var json = JSON.stringify(jsonObj);
            return json;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.toString());
            }
        }
    );
});
