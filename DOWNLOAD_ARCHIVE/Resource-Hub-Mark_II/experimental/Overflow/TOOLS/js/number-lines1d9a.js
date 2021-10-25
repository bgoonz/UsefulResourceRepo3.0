$(function () {
    // make number-lines format work
    //
    $('#number-lines-format').click(function (ev) {
        ev.preventDefault();
        $('#number-lines-field').slideToggle();
    });

    // make number-lines tool work
    //
    mkTool('number-lines', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var lines = text.split('\n');
        var ret = '';

        var format = $('#number-lines-field input[name="format"]').val();
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var formatStr = format.replace("NR", i+1);
            ret += (formatStr + line) + '\n';
        }
        return ret;
    });
});
