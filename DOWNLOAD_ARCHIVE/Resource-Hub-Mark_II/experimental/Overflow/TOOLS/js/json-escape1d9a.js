$(function () {
    mkTool(
        'json-escape',
        function (text) {
            // validate if text parses, if it doesnt this will throw an exception
            JSON.parse(text);

            text = text.replace(/[\\]/g, '\\\\');
            text = text.replace(/[\/]/g, '\\/');
            text = text.replace(/[\b]/g, '\\b');
            text = text.replace(/[\f]/g, '\\f');
            text = text.replace(/[\n]/g, '\\n');
            text = text.replace(/[\r]/g, '\\r');
            text = text.replace(/[\t]/g, '\\t');
            text = text.replace(/[\"]/g, '\\"');
            return text;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.toString());
            }
        }
    );
});
