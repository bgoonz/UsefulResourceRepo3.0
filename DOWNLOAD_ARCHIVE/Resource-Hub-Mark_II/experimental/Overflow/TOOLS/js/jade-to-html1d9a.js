$(function () {
    mkTool(
        'jade-to-html',
        function (text) {
            var jadeText = jade.render(text, { pretty : true });
            jadeText = jadeText.replace(/^\n/, '');
            return jadeText;
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
