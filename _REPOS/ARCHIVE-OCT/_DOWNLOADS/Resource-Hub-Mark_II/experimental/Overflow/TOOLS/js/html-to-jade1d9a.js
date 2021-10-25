$(function () {
    mkTool(
        'html-to-jade',
        function (text, asyncResultFn) {
            Html2Jade.convertHtml(text, null, function (err, ret) {
                if (err) {
                    throw new Error(err.toString());
                }
                asyncResultFn(ret);
            });
        },
        {
            asyncResultFn : function (result) {
                $('#html-to-jade-text').val(result);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
