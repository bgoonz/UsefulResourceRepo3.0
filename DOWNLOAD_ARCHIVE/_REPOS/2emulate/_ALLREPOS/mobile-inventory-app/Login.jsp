<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@ taglib uri="http://jakarta.apache.org/struts/tags-bean" prefix="bean" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-logic" prefix="logic" %>
<%@page import="org.apache.commons.logging.Log"%>
<%@page import="org.apache.commons.logging.LogFactory"%>
<html:html>
<%
Log activity_log = LogFactory.getLog("activity.tracking");
Log error_log = LogFactory.getLog("errorlog.tracking");
String err_msg = (String) request.getAttribute("err_msg");
%>



<head>
  <title>Handheld Device</title>
  <meta name="generator" content="">
  <meta name="description" content="">
  <meta name="keywords" content="">
  
</head>
<body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000">
<img src="images/logo.GIF" >
	<BR><BR><BR>
     
            <% if(err_msg != null) {
            %>
       <table height="10" width="150" align="center" border="0">
            <tr>
                <td colspan=2><font color=red><html:errors/></font></td>
            </tr>  
            <tr><td colspan=2><font color=red><%= err_msg %></font></td></tr>
            </table>
            <% 
            }
            %>
      
	  <table height="90" width="50" align="center" BGCOLOR="#cccccc">
                <html:form focus="user_ID" action="/Login">  
                <!-- <th colspan=2 bgcolor="#00639C"><font color="white">Login Here</font></th> -->  
                  <td width="25%" align="right"><b>UserID:</b></td>
                  <td width="75%"><html:password property="user_ID" size="10" maxlength="18" value="" onchange="submit();"/></td>
                </tr>
              </html:form>  
          </table>
          <br>
<!--<i><b><u>Instructions:</u></b>
<br>
<br><b>Login</b> - Scan or type your badge ID or Operator ID or 4 digit Employee ID and hit 'Enter'
</i>
-->
</body>


</html:html>

