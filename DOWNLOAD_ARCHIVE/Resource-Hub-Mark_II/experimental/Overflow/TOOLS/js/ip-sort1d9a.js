$(function () {
    mkTool('ip-sort', function (text) {
        text = text.replace(/\r\n/g, '\n');
        var ips = text.split('\n');
        ips.sort(function (a, b) {
            var ip1 = a.split('.');
            var ip2 = b.split('.');
	
            var compa = parseInt(ip1[0],10) * 256 * 256 * 256 + parseInt(ip1[1],10) * 256 * 256 + parseInt(ip1[2],10) * 256 + parseInt(ip1[3],10);
            var compb = parseInt(ip2[0],10) * 256 * 256 * 256 + parseInt(ip2[1],10) * 256 * 256 + parseInt(ip2[2],10) * 256 + parseInt(ip2[3],10);
	
        	return compa-compb;
        });
        return ips.join("\n");
    });
});
