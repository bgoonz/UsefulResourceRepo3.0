$(function () {
    mkTool('text-replace', function (text) {
        var replaceFrom = $('#text-replace-from').val();
        var replaceTo = $('#text-replace-to').val();
        if (replaceTo == "\\n") {
            replaceTo = "\n";
        }
        else if (replaceTo == "\\t") {
            replaceTo = "\t";
        }
        return text.split(replaceFrom).join(replaceTo);
    });
});
