$(function () {
    mkTool(
        'bbcode-to-text',
        function (text) {
            var result = XBBCODE.process({
              text: text,
              removeMisalignedTags: false,
              addInLineBreaks: false
            });
            if (result.error) {
                throw new Error(result.errorQueue.join("\n"));
            }
            return $('<div>').html(result.html).text();
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
