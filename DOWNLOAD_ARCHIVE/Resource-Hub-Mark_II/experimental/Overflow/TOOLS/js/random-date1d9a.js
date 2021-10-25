$(function () {
    // make random-date custom format work
    $('#random-date-format').change(function () {
        var format = $('#random-date-format').val();
        if (format == "custom") {
            $('#random-date-custom-format').slideDown();
        }
        else {
            $('#random-date-custom-format').slideUp();
        }
    })
    // make random-date change date range work
    $('#random-date-range').click(function (ev) {
        ev.preventDefault();
        $('#random-date-range-field').slideToggle();
    });

    // make random-date tool work
    //
    mkTool(
        'random-date',
        function () {
            var howMany = parseInt($('#random-date-how-many').val(), 10);
            var format = $('#random-date-format').val();
            var startDateStr = $('#random-date-range-field input[name="start"]').val();
            var endDateStr = $('#random-date-range-field input[name="end"]').val();

            var startDate = new Date(startDateStr).getTime();
            var endDate = new Date(endDateStr).getTime();
            if (isNaN(startDate)) {
                var startDate = new Date(1900, 0, 1).getTime();
            }
            if (isNaN(endDate)) {
                var endDate = new Date(2099, 0, 31).getTime();
            }

            var str = '';
            for (var i = 0; i < howMany; i++) {
                var date = new Date(startDate + Math.random() * (endDate - startDate + 1000));

                var months_long = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
                var months_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                    'Sep', 'Oct', 'Nov', 'Dec'];

                var yyyy = date.getFullYear();
                var yy = date.getFullYear().toString().substr(2,2);
                var month_long = months_long[date.getMonth()];
                var month_short = months_short[date.getMonth()];

                var month = date.getMonth() + 1;
                var mmonth = date.getMonth() + 1;
                if (mmonth < 10) {
                    mmonth = "0" + mmonth.toString();
                }

                var d = date.getDate();
                var dd = date.getDate();
                if (dd < 10) {
                    dd = "0" + dd.toString();
                }

                var h = date.getHours();
                var hh = date.getHours();
                if (hh < 10) {
                    hh = "0" + hh.toString();
                }

                var m = date.getMinutes();
                var mminute = date.getMinutes();
                if (mminute < 10) {
                    mminute = "0" + mminute.toString();
                }

                var s = date.getSeconds();
                var ss = date.getSeconds();
                if (ss < 10) {
                    ss = "0" + ss.toString();
                }

                if (format == "yyyy-mm-dd-hh-mm-ss") {
                    str += [yyyy,mmonth,dd].join('-') + ' ' + [hh,mminute,ss].join(':');
                }
                else if (format == "yyyy-dd-mm-hh-mm-ss") {
                    str += [yyyy,dd,mmonth].join('-') + ' ' + [hh,mminute,ss].join(':');
                }
                else if (format == "mm-dd-yyyy-hh-mm-ss") {
                    str += [mmonth,dd,yyyy].join('-') + ' ' + [hh,mminute,ss].join(':');
                }
                else if (format == "iso8601") {
                    var isoStr = date.toISOString();
                    isoStr = isoStr.replace(/\.\d+Z/, 'Z');
                    str += isoStr;
                }
                else if (format == "year-month-date-hh-mm-ss") {
                    str += [yyyy,month_long,dd].join(' ') + ' ' + [hh,mminute,ss].join(':');
                }
                else if (format == "year-date-month-hh-mm-ss") {
                    str += [yyyy,month_long,dd].join(' ') + ' ' + [hh,mminute,ss].join(':');
                }
                else if (format == "month-date-year-hh-mm-ss") {
                    str += [month_long,dd,yyyy].join(' ') + ' ' + [hh,mminute,ss].join(':');
                }
                else if (format == "custom") {
                    var customFormat = $('#random-date-custom-format input').val();
                    var customStr = customFormat;
                    customStr = customStr.replace(/YYYY/g, yyyy);
                    customStr = customStr.replace(/YY/g, yy);
                    customStr = customStr.replace(/MM/g, mmonth);
                    customStr = customStr.replace(/M/g, month);
                    customStr = customStr.replace(/month/g, month_long);
                    customStr = customStr.replace(/mon/g, month_short);
                    customStr = customStr.replace(/DD/g, dd);
                    customStr = customStr.replace(/d/g, d);
                    customStr = customStr.replace(/hh/g, hh);
                    customStr = customStr.replace(/h/g, h);
                    customStr = customStr.replace(/mm/g, mminute);
                    customStr = customStr.replace(/m/g, m);
                    customStr = customStr.replace(/ss/g, ss);
                    customStr = customStr.replace(/s/g, s);
                    str += customStr;
                }
                if (i != howMany-1) str += "\n";
            }
            return str;
        },
        {
            allowEmptyText : true
        }
    );
});
