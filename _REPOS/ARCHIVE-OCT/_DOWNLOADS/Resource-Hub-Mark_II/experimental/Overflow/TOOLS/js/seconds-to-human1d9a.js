$(function () {
    mkTool(
        'seconds-to-human',
        function (text) {
            text = text.replace(/\r\n/g, '\n');
            var lines = text.split('\n');
            var ret = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                if (/(\d+)/.test(line)) {
                    var years = 0
                    var months = 0;
                    var weeks = 0;
                    var days = 0;
                    var hours = 0;
                    var minutes = 0;
                    var seconds = line;

                    var years = Math.floor(seconds / 60 / 60 / 24 / 7 / 30 / 12);
                    seconds %= (60 * 60 * 24 * 7 * 30 * 12);
                    var months = Math.floor(seconds / 60 / 60 / 24 / 7 / 30);
                    seconds %= (60 * 60 * 24 * 7 * 30);
                    var weeks = Math.floor(seconds / 60 / 60 / 24 / 7);
                    seconds %= (60 * 60 * 24 * 7);
                    var days = Math.floor(seconds / 60 / 60 / 24);
                    seconds %= (60 * 60 * 24);
                    var hours = Math.floor(seconds / 60 / 60);
                    seconds %= (60 * 60);
                    var minutes = Math.floor(seconds / 60);
                    seconds %= (60);

                    function plural(count, singular) {
                        var ret = count;
                        if (count == 1) {
                            ret += ' ' + singular;
                        }
                        else {
                            ret += ' ' + singular + 's';
                        }
                        return ret;
                    }

                    if (years > 0) {
                        ret += plural(years, 'year') + " " + plural(months, 'month') + " " +
                            plural(weeks, 'week') + " " + plural(days, 'day') + " " +
                            plural(hours, 'hour') + " " + plural(minutes, 'minute') + " " +
                            plural(seconds, 'second');
                    }
                    else if (months > 0) {
                        ret += plural(months, 'month') + " " +
                            plural(weeks, 'week') + " " + plural(days, 'day') + " " +
                            plural(hours, 'hour') + " " + plural(minutes, 'minute') + " " +
                            plural(seconds, 'second');
                    }
                    else if (weeks > 0) {
                        ret += plural(weeks, 'week') + " " + plural(days, 'day') + " " +
                            plural(hours, 'hour') + " " + plural(minutes, 'minute') + " " +
                            plural(seconds, 'second');
                    }
                    else if (days > 0) {
                        ret += plural(days, 'day') + " " +
                            plural(hours, 'hour') + " " + plural(minutes, 'minute') + " " +
                            plural(seconds, 'second');
                    }
                    else if (hours > 0) {
                        ret += plural(hours, 'hour') + " " + plural(minutes, 'minute') + " " +
                            plural(seconds, 'second');
                    }
                    else if (minutes > 0) {
                        ret += plural(minutes, 'minute') + " " + plural(seconds, 'second');
                    }
                    else {
                        ret += plural(seconds, 'second');
                    }
                }
                else {
                    ret += line;
                }
                ret += '\n';
            }

            return ret;
        }
    );
});
