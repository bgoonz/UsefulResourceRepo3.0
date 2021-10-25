$(function () {
    mkTool(
        'random-csv',
        function () {
            var cols = parseInt($('#random-csv-cols').val(), 10);
            var rows = parseInt($('#random-csv-rows').val(), 10);
            
            function randomString(len) {
                var alphabet = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
                var str = "";
                var length = parseInt(Math.random()*len)+1;
                for (var i = 0; i < length; i++) {
                    str += alphabet[parseInt(Math.random()*alphabet.length)];
                }
                return str;
            }

            var json = [];
            for (var row = 0; row < rows; row++) {
                var newRow = [];
                for (var col = 0; col < cols; col++) {
                    var field = randomString(10);
                    newRow.push(field);
                }
                json.push(newRow);
            }

            var converted = json2csv({
                data : json
            });
            return converted;
        },
        {
            allowEmptyText : true,
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err.message);
            }
        }
    );
});
