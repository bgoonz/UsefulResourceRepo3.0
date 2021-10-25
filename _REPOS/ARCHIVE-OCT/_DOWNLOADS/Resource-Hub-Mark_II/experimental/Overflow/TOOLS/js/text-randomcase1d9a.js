$(function () {
    mkTool('text-randomcase', function (text) {
        var ret = '';
        for (var i = 0; i < text.length; i++) {
            var char = text[i].toLowerCase();
            if (Math.random()<0.5) {
                ret += char;
            }
            else {
                ret += char.toUpperCase();
            }
        }
        return ret;
    });
});
