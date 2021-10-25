function jsonToText (json) {
    var retText = '';

    if (typeof json == "object") {
        if (json instanceof Array) {
            $.each(json, function (key, val) {
                retText += jsonToText(val);
            });
        }
        else {
            $.each(json, function (key, val) {
                if (typeof val == "object") {
                    retText += key + "\n" + jsonToText (val);
                }
                else {
                    retText += key + " " + jsonToText (val);
                }
            });
        }
    }
    else {
        retText += json.toString() + "\n";
    }

    return retText;
}
