$(function () {
    mkTool(
        'json-prettify',
        function (text) {
            var jsonObj = JSON.parse(text);
            var prettified = JSON.stringify(jsonObj, null, 2);
            return prettified;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text("Invalid JSON");
            }
        }
    );
});
