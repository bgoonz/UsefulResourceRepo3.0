$(function () {
    mkTool(
        'xml-to-tsv',
        function (text, asyncResultFn) {
            var x2js = new X2JS();
            var parsed = x2js.xml_str2json(text);

            var keys = Object.keys(parsed);
            if (keys.length > 1) {
                throw new Error("XML contains multiple primary keys. Too complex to convert to TSV.");
            }

            var primaryKey = keys[0];

            if (typeof parsed[primaryKey] == 'string' || typeof parsed[primaryKey] == 'number') {
                // case:
                //
                // <cars>    <cars>
                //   x         5
                // </cars>   </cars>
                //
                return primaryKey + "\n" + parsed[primaryKey];
            }
            else if (typeof parsed[primaryKey] == 'object') {
                // case:
                //
                // <cars>
                //   <complex xml>
                // </cars>
                //
                var complexObjectKeys = Object.keys(parsed[primaryKey]);
                if (complexObjectKeys.length == 1) {
                    var primaryComplexObjectKey = complexObjectKeys[0];
                    if (typeof parsed[primaryKey][primaryComplexObjectKey] == 'string' || 
                        typeof parsed[primaryKey][primaryComplexObjectKey] == 'number')
                    {
                        // case:
                        //
                        // <cars>
                        //   <car>x</car>
                        // </cars>
                        return primaryKey + "\n" + parsed[primaryKey][primaryComplexObjectKey];
                    }
                    else if (parsed[primaryKey][primaryComplexObjectKey] instanceof Array) {
                        if (typeof parsed[primaryKey][primaryComplexObjectKey][0] == 'string' ||
                            typeof parsed[primaryKey][primaryComplexObjectKey][0] == 'number')
                        {
                            // case:
                            //
                            // <cars>
                            //   <car>x</car>
                            //   <car>y</car>
                            // </cars>
                            //
                            var ret = primaryKey + "\n";
                            for (var i = 0; i < parsed[primaryKey][primaryComplexObjectKey].length; i++) {
                                ret += parsed[primaryKey][primaryComplexObjectKey][i] + "\n";
                            }
                            return ret;
                        }
                        else if (typeof parsed[primaryKey][primaryComplexObjectKey][0] == 'object') {
                            // case:
                            //
                            // <cars>
                            //   <car>
                            //    <name>x</name>
                            //    <color>red</color>
                            //   </car>
                            //   <car>
                            //    <name>y</name>
                            //    <color>green</color>
                            //   </car>
                            // </cars>
                            var objKeys = Object.keys(parsed[primaryKey][primaryComplexObjectKey][0]);
                            var ret = objKeys.join("\t") + "\n";
                            for (var i = 0; i < parsed[primaryKey][primaryComplexObjectKey].length; i++) {
                                for (var j = 0; j < objKeys.length; j++) {
                                    ret += parsed[primaryKey][primaryComplexObjectKey][i][objKeys[j]] + "\t";
                                }
                                ret += "\n";
                            }
                            return ret;
                        }
                        else {
                            throw new Error("xml too complex to convert to tsv, or something went wrong");
                        }
                    } 
                    else if (typeof parsed[primaryKey][primaryComplexObjectKey] == 'object') {
                        // case:
                        //
                        // <cars>
                        //   <car>
                        //    <name>x</name>
                        //    <color>red</color>
                        //   </car>
                        // </cars>
                        var objKeys = Object.keys(parsed[primaryKey][primaryComplexObjectKey]);
                        var ret = objKeys.join("\t") + "\n";
                        for (var i = 0; i < objKeys.length; i++) {
                            ret += parsed[primaryKey][primaryComplexObjectKey][objKeys[i]] + "\t";
                        }
                        return ret;
                    }
                    else {
                        throw new Error("xml too complex to convert to tsv, or something went wrong");
                    }
                }
                else {
                    // case:
                    //
                    // <car>
                    //   <name>x</name>
                    //   <color>21</color>
                    // </car>
                    ret = complexObjectKeys.join("\t") + "\n";
                    for (var i = 0; i < complexObjectKeys.length; i++) {
                        ret += parsed[primaryKey][complexObjectKeys[i]] + "\t";
                    }
                    return ret;
                }
            }
            else {
                throw new Error("xml too complex to convert to tsv, or something went wrong");
            }
        },
        {
            exceptionFn : function (err) {
                $('#action-error').show();
                $('#action-error').text(err);
            }
        }
    );

});
