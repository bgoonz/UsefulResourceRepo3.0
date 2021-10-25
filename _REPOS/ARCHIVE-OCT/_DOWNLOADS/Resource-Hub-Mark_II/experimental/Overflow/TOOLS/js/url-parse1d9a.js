$(function () {
    mkTool('url-parse', function (text) {
        var uri = new URI(text);
        var ret = '';

        ret += text + "\n\n";
        ret += "protocol:  " + uri.protocol() + "\n";
        ret += "username:  " + uri.username() + "\n";
        ret += "password:  " + uri.password() + "\n";
        ret += "hostname:  " + uri.hostname() + "\n";
        ret += "port:      " + uri.port() + "\n";
        ret += "full host: " + uri.host() + "\n";
        ret += "userinfo:  " + uri.userinfo() + "\n";
        ret += "authority: " + uri.authority() + "\n";
        ret += "origin:    " + uri.origin() + "\n";
        ret += "domain:    " + uri.domain() + "\n";
        ret += "subdomain: " + uri.subdomain() + "\n";
        ret += "tld:       " + uri.tld() + "\n";
        ret += "pathname:  " + uri.pathname() + "\n";
        ret += "directory: " + uri.directory() + "\n";
        ret += "filename:  " + uri.filename() + "\n";
        ret += "suffix:    " + uri.suffix() + "\n";
        ret += "query:     " + uri.query() + "\n";
        ret += "hash:      " + uri.hash() + "\n";
        ret += "fragment:  " + uri.fragment() + "\n";
        ret += "resource:  " + uri.resource() + "\n";

        return ret;
    });
});
