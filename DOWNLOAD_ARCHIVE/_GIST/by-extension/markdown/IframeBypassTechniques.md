# Content-Security-Policy (CSP) Bypass Techniques

> Hello readers, this writeup is a contribution towards our cyber community from where I have gained every bit of my knowledge. I will try…

[![Bhavesh Thakur](https://miro.medium.com/fit/c/56/56/2*TMST6bgrdVaQqdrss5ya_Q.jpeg)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/@bhaveshthakur2015?source=post_page-----e3fa475bfe5d--------------------------------)

Hello readers, this writeup is a contribution towards our cyber community from where I have gained every bit of my knowledge. I will try to cover all methods of CSP bypasses which I have learned to date.

**What is a CSP ?**

CSP stands for Content Security Policy which is a mechanism to define which resources can be fetched out or executed by a web page. In other words, it can be understood as a policy that decides which scripts, images, iframes can be called or executed on a particular page from different locations. Content Security Policy is implemented via response headers or meta elements of the HTML page. From there, it’s browser’s call to follow that policy and actively block violations as they are detected.

**Why it is used?**

Content Security Policy is widely used to secure web applications against content injection like cross-site scripting attacks. Also by using CSP the server can specify which protocols are allowed to be used. Can we think **CSP as mitigation of XSS**? The **answer is** **no**! CSP is an extra layer of security against content injection attacks. The first line of defense is output encoding and input validation always. A successful CSP implementation not only secures a web page against these vulnerabilities but also gives a wide range of attack details that were unsuccessful i.e. blocked by CSP itself. Web admin can be benefitted using this feature to spot a potential bug.

**How does it work?**

CSP works by restricting the origins that active and passive content can be loaded from. It can additionally restrict certain aspects of active content such as the execution of inline JavaScript, and the use of eval().

If you are a developer you will require to define all allowed origins for every type of resource your website utilizes. Suppose you are the owner of a website abc.com and these websites loads multiple resources like scripts, images, css from localhost, and different sources as well, say allowed.com. A very basic policy would be :

**Implemented via Response Header:**

Content-Security-policy: default-src ‘self’; script-src ‘self’ allowed.com; img-src ‘self’ allowed.com; style-src ‘self’;

**Implemented via meta tag:**

Now you may have a question that what are **default-src,img-src, style-src** and **script-src** . These are directives of CSP. Using directives only content policy can be properly implemented. Below is the list of some common CSP directives:

**script-src** : This directive specifies allowed sources for JavaScript. This includes not only URLs loaded directly into

This will **not-allowed** on the page. But why? Because inline-src is set to self. But Wait! where the hell it is mentioned? I can’t see inline-src defined in above CSP at all.The answer is have you noticed default-src ‘self’? So even other directives are not defined but they will be following default-src directive value only. Below is the list of directives which will follow default-src value even though they are not defined in the policy:**child-src connect-src font-src frame-src img-src manifest-src  
media-src object-src prefetch-src script-src script-src-elem  
script-src-attr style-src style-src-elem style-src-attr worker-src**

We have a fair understanding of content security policy directives and its resources. There is one more important thing we need to know. Whenever CSP restricts any invalid source to load data it can report about the incident to website administrators if below directive is defined in the policy:

Content-Security-Policy: default-src ‘self’; img-src [https://\*](https://%2A/); child-src ‘none’; report-uri /Report-parsing-url;

Administrators can track which kind of attack scripts or techniques are used by attackers to load malicious content from untrusted resources. Now, let’s move to the interesting part **Bypassing Techniques**:

Analyze the CSP policy properly. There are few online tools that are very helpful.

1. <https://csp-evaluator.withgoogle.com/>
2. [https://cspvalidator.org/](https://cspvalidator.org/#url=https://cspvalidator.org/)

Below is the screenshot of how they evaluate and provide you results.

![](https://miro.medium.com/max/60/1*UqmPG_15m90O6glKsTdvXw.png?q=20)

![](https://miro.medium.com/max/1400/1*UqmPG_15m90O6glKsTdvXw.png)

**Scenario** : **1**

Content-Security-Policy: script-src [https://facebook.com](https://facebook.com/) https://google.com ‘**unsafe-inline**’ https://\*; child-src ‘none’; report-uri /Report-parsing-url;

By observing this policy we can say it’s damn vulnerable and will allow inline scripting as well . The reason behind that is the usage of unsafe-inline source as a value of script-src directive.

working payload : "/&gt;

**Scenario** : **2**

Content-Security-Policy: script-src [https://facebook.com](https://facebook.com/) [https://google.com](https://google.com/) ‘**unsafe-eval**’ data: [http://\*;](https://*;) child-src ‘none’; report-uri /Report-parsing-url;

Again this is a misconfigured CSP policy due to usage of unsafe-eval.

working payload :

**Scenario** : **3**

Content-Security-Policy: script-src ‘self’ [https://facebook.com](https://facebook.com/) [https://google.com](https://google.com/) **https: data \*;** child-src ‘none’; report-uri /Report-parsing-url;

Again this is a misconfigured CSP policy due to usage of a wildcard in script-src.

working payloads :"/&gt;’&gt;

"/&gt;’&gt;

**Scenario**: **4**

Content-Security-Policy: script-src ‘self’ report-uri /Report-parsing-url;

Misconfigured CSP policy again! we can see object-src and default-src are missing here.

working payloads :"&gt;’&gt;

**Scenario**: **5**

Content-Security-Policy: script-src ‘self’; object-src ‘none’ ; report-uri /Report-parsing-url;

we can see object-src is set to none but yes this CSP can be bypassed too to perform XSS. How ? If the application allows users to upload any type of file to the host. An attacker can upload any malicious script and call within any tag.

working payloads :"/&gt;’&gt;

**Scenario** : **6**

Content-Security-Policy: script-src ‘self’ https://www.google.com; object-src ‘none’ ; report-uri /Report-parsing-url;

In such scenarios where script-src is set to self and a particular domain which is whitelisted, it can be bypassed using jsonp. [jsonp](https://github.com/zigoo0/JSONBee) endpoints allow insecure callback methods which allow an attacker to perform xss.

working payload :"&gt;

**Scenario** : **7**

Content-Security-Policy: script-src ‘self’ https://cdnjs.cloudflare.com/; object-src ‘none’ ; report-uri /Report-parsing-url;

In such scenarios where script-src is set to self and a javascript library domain which is whitelisted. It can be bypassed using any vulnerable version of javascript file from that library , which allows the attacker to perform xss.

working payloads :

{{ x = $on.curry.call().eval(“fetch(‘http://localhost/index.php’).then(d =&gt; {})”) }}

"&gt;

{{<span class="math inline">$eval.constructor('alert(1)')()}}&lt;/div&gt;"&gt;&lt;script src="https://cdnjs.cloudflare.com/angularjs/1.1.3/angular.min.js"&gt; &lt;/script&gt; &lt;div ng-app ng-csp id=p ng-click=$</span>event.view.alert(1337)&gt;

**Scenario** : **8**

Content-Security-Policy: script-src ‘self’ ajax.googleapis.com[;](https://cdnjs.cloudflare.com/;) object-src ‘none’ ;report-uri /Report-parsing-url;

If the application is using angular JS and scripts are loaded from a whitelisted domain. It is possible to bypass this CSP policy by calling callback functions and vulnerable class. For more details visit this awesome [git](https://github.com/cure53/XSSChallengeWiki/wiki/H5SC-Minichallenge-3:-%22Sh*t,-it's-CSP!%22) repo.

working payloads :ng-app"ng-csp ng-click=$event.view.alert(1337)&gt;

"&gt;

**Scenario** : **9**

Content-Security-Policy: script-src ‘self’ accounts.google.com/random/ website.with.redirect.com [;](https://cdnjs.cloudflare.com/;) object-src ‘none’ ; report-uri /Report-parsing-url;

In the above scenario, there are two whitelisted domains from where scripts can be loaded to the webpage. Now if one domain has any open redirect endpoint CSP can be bypassed easily. The reason behind that is an attacker can craft a payload using redirect domain targeting to other whitelisted domains having a jsonp endpoint. And in this scenario XSS will execute because while redirection browser only validated host, not the path parameters.

working payload :"&gt;’&gt;

"&gt;

**Scenario** : **10**

Content-Security-Policy:  
default-src ‘self’ data: \*; connect-src ‘self’; script-src ‘self’ ;  
report-uri /\_csp; upgrade-insecure-requests

THE above CSP policy can be bypassed using iframes. The condition is that application should allow iframes from the whitelisted domain. Now using a special attribute srcdoc of iframe, XSS can be easily achieved.

working payloads :\* sometimes it can be achieved using defer& async attributes of script within iframe (most of the time in new browser due to SOP it fails but who knows when you are lucky?)

I hope you enjoyed reading this. Special thanks to <span class="citation" data-cites="mikispag">\[@mikispag\]</span>(https://twitter.com/mikispag) & <span class="citation" data-cites="we1x">\[@we1x\]</span>(https://twitter.com/we1x) for their contribution to Google Security research in the domain of Content Security Policy secure implementation.

Thank You!

For any feedback or suggestions reach out to me @[Bhavesh_Thakur\_](https://twitter.com/Bhavesh_Thakur_)

[Source](https://medium.com/@bhaveshthakur2015/content-security-policy-csp-bypass-techniques-e3fa475bfe5d)
