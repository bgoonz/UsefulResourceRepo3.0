$(function () {
    mkTool(
        'bbcode-to-html',
        function (text) {
            var result = XBBCODE.process({
              text: text,
              removeMisalignedTags: false,
              addInLineBreaks: false
            });
            if (result.error) {
                throw new Error(result.errorQueue.join("\n"));
            }
            return result.html;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
})
