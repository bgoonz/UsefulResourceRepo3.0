function jsonToTsv (json) {
    var ret = '';

    if (json instanceof Array) {
        if (json.length) {
            var obj = json[0];
            var keys = Object.keys(obj);
            if (keys.length == 0) {
                for (var i = 0; i < json.length; i++) {
                    var val = json[i];
                    ret += val;
                    if (i != json.length-1) {
                        ret += "\t";
                    }
                }
            }
            else {
                for (var i = 0; i < keys.length; i++) {
                    var title = keys[i];
                    ret += title;
                    if (i != keys.length-1) {
                        ret += "\t";
                    }
                }
                ret += "\n";

                for (var i = 0; i < json.length; i++) {
                    for (var j = 0; j < keys.length; j++) {
                        var key = keys[j];
                        ret += json[i][key];
                        if (j != keys.length-1) {
                            ret += "\t";
                        }
                    }
                    ret += "\n";
                }
            }
        }
    }
    else {
        // todo: reuse code from above
        var keys = Object.keys(json);
        for (var i = 0; i < keys.length; i++) {
            var title = keys[i];
            ret += title;
            if (i != keys.length-1) {
                ret += "\t";
            }
        }
        ret += "\n";

        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            ret += json[key];
            if (j != keys.length-1) {
                ret += "\t";
            }
        }
        ret += "\n";
    }
    return ret;
}
