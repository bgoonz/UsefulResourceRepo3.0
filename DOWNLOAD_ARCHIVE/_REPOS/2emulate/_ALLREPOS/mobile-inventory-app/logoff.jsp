<%
request.getSession().invalidate();
//response.sendRedirect("https://issoprd.vicorpower.vicr.com/iSSOw/logout");
String serverName = pageContext.getRequest().getServerName();
String targetURL = "";

//PRODUCTION
if (serverName.indexOf("cimprd") > -1) {
    targetURL = "https://issoprd.vicorpower.vicr.com/iSSOw/logout";
}
//TEST
else if (serverName.indexOf("cimtriage") > -1) {
    targetURL = "https://isso.vicorpower.vicr.com/iSSOw/logout";
}
//DEVELOPMENT
else {
    targetURL = "https://isso.vicorpower.vicr.com/iSSOw/logout";
}

response.sendRedirect(targetURL);


%>