$(function () {
    mkTool(
        'bcrypt',
        function (text, asyncResultFn) {
            var bcrypt = new bCrypt;
            var pass = $('#bcrypt-pass').val();
            var rounds = $('#bcrypt-rounds').val() || 10;
            bcrypt.hashpw(pass, bcrypt.gensalt(rounds), function (hash) {
                asyncResultFn(hash);
            });
        },
        {
            allowEmptyText : true,
            asyncResultFn : function (result) {
                $('#bcrypt-text').val(result);
            },
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );
});
