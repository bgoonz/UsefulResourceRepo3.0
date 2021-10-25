$(function () {
    mkTool('decimal-to-scientific', function (text) {
        var lines = text.split("\n");
        var ret = '';
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            line = line.replace(/\s+/g, '');
            if (line.length && /^[+-]?(\d+|\.\d+|\d+\.\d+)$/.test(line)) {
                var negative = false;
                if (/^-/.test(line)) {
                    negative = true;
                    line = line.substr(1);
                }
                if (/^\+/.test(line)) {
                    line = line.substr(1);
                }

                if (/^\d+$/.test(line)) {
                    var firstDigit = line[0];
                    var otherDigits = line.substr(1);
                    if (negative) {
                        ret += "-";
                    }
                    if (otherDigits.length) {
                        ret += firstDigit + '.' + otherDigits + '*10^' + otherDigits.length;
                    }
                    else {
                        ret += firstDigit;
                    }
                    ret += "\n";
                    continue;
                }
                else if (/^(0*)?\.\d+$/.test(line)) {
                    var firstPart = line.split('.')[0];
                    var secondPart = line.split('.')[1];

                    var firstDigit = '0';
                    var otherDigits = secondPart;
                    if (/^0+$/.test(otherDigits)) {
                        // case 0.0000000000 etc
                        ret += '0' + "\n";
                        continue;
                    }

                    // drop trailing zeroes from end
                    otherDigits = otherDigits.replace(/0+$/, '');

                    var m = otherDigits.match(/^(0+)(\d+)$/);
                    if (m) {
                        // case 0.0xxxxx
                        var zeroes = m[1];
                        var digitsAfterZeroes = m[2];
                        var firstDigitAfterZeroes = digitsAfterZeroes[0];
                        var otherDigitsAfterZeroes = digitsAfterZeroes.substr(1);

                        if (otherDigitsAfterZeroes.length) {
                            // case 0.0000000xxxxxxx
                            ret += firstDigitAfterZeroes + '.' + otherDigitsAfterZeroes + '*10^-' + (zeroes.length + 1);
                        }
                        else {
                            // case 0.0000000x
                            ret += firstDigitAfterZeroes + '*10^-' + (zeroes.length+1);
                        }
                        ret += "\n";
                        continue;
                    }

                    // case 0.xxxxx
                    var realFirstDigit = otherDigits[0];
                    var realOtherDigits = otherDigits.substr(1);
                    if (negative) {
                        ret += "-";
                    }
                    if (realOtherDigits.length) {
                        ret += realFirstDigit + '.' + realOtherDigits + '*10^-1';
                    }
                    else {
                        ret += realFirstDigit + '*10^-1';
                    }
                    ret += "\n";
                }
                else if (/^\d+\.\d+$/.test(line)) {
                    var firstPart = line.split('.')[0];
                    var secondPart = line.split('.')[1];

                    if (firstPart.length == 1) {
                        // case a.bbbbbbbbbb
                        if (negative) {
                            ret += "-";
                        }
                        ret += line + "\n";
                        continue;
                    }

                    var firstDigit = firstPart[0];
                    var otherDigits = firstPart.substr(1);

                    if (negative) {
                        ret += "-";
                    }
                    ret += firstDigit + '.' + otherDigits + '' + secondPart + '*10^' + otherDigits.length + "\n";
                }
            }
            else {
                ret += line + "\n";
            }
        }
        return ret;
    });
});
