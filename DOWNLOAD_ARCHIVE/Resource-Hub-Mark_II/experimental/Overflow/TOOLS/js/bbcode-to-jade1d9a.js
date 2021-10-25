$(function () {
    mkTool(
        'bbcode-to-jade',
        function (text, asyncResultFn) {
            var result = XBBCODE.process({
              text: text,
              removeMisalignedTags: false,
              addInLineBreaks: false
            });
            if (result.error) {
                throw new Error(result.errorQueue.join("\n"));
            }
            Html2Jade.convertHtml(result.html, null, function (err, ret) {
                if (err) {
                    throw new Error(err.toString());
                }
                asyncResultFn(ret);
            });
        },
        {
            asyncResultFn : function (result) {
                $('#bbcode-to-jade-text').val(result);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
