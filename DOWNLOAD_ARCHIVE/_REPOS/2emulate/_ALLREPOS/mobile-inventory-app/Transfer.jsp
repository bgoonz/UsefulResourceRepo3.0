<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@ taglib uri="http://jakarta.apache.org/struts/tags-bean" prefix="bean" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-logic" prefix="logic" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="org.apache.commons.logging.Log"%>
<%@page import="org.apache.commons.logging.LogFactory"%>
<html:html>
<%
Log activity_log = LogFactory.getLog("activity.tracking");
Log error_log = LogFactory.getLog("errorlog.tracking");
String err_msg = (String) request.getAttribute("err_msg");
%>
<head>
  <title>Sample</title>
  <meta name="generator" content="">
  <meta name="description" content="">
  <meta name="keywords" content="">
   <link href="includes/CalendarControl.css"
        rel="stylesheet" 
        type="text/css">
  <LINK 
title=Calendar href="includes/calendar-win2k-1.css" 
type=text/css rel=stylesheet>      
        
  <script src="includes/CalendarControl.js"
          language="javascript"></script>
  <SCRIPT language=JavaScript 
src="includes/calendar.js"> </SCRIPT>

<SCRIPT language=JavaScript 
src="includes/calendar-en.js"></SCRIPT>

<SCRIPT language=JavaScript 
src="includes/calendar-setup.js"></SCRIPT>        

<script type="text/javascript">
function noenter() {
  return !(window.event && window.event.keyCode == 13); }
</script>

  </head>
<body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000" onload="initform();">

	<table cellspacing="0" border="0" height="40" width="320" align="left">
		<tr>
                    <tr valign=bottom>
                        <td>
                            <table width="320" >
                                <tr>
                                    <td width=25% height="39"><img src="images/logo.GIF" ></td>
                                    <td width=50% align="center"><h2>Transfer</h2></td>
                                    <td width=25% align="right"><a href="logoff.jsp"><img border="0" src="images/logout.png" alt="Single Signout"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                 
		  <td width="336">
		  	  <table border="0" height="20" width="320" align="center" BGCOLOR="#cccccc">
			  	  		<tr height="5">
			 				 <td width="43" align="LEFT"><b>BU:</td>
							 <td width="55" align="left"><%=session.getAttribute("bu") %></td>
							 <td width="70" align="RIGHT"><b>Item ID:</td>
							 <td width="172" align="left"><%= session.getAttribute("item_id") %></td>
						</tr>
						<tr height="5">
							 <td align="left"><a href="/HHD/Search.jsp"><img height="20" width=25  border="0" src="images/search_icon.gif"></a></td>
							 <td colspan=3 align="left"><%= session.getAttribute("item_desc") %></td>			
						</tr>
	  	    </table>
		  </td>
		</tr>
		<tr>
		  <td><html:errors/>	
		  	  <html:form action='/Transfer.do' focus="qty"  styleId="form1">
			
                        <table border="0" height="40" width="320" align="left">
			  <% if(err_msg != null) {
                            %>
                               <tr><td><font color=red><html:errors/><br></font></td></tr>  
                                <tr><td><font color=red><%= err_msg %></font></td></tr>
                            <% 
                            }
                        %>  
                                     <tr>
					 <td>					 
					 <table border="0" height="40" width="320" align="left" BGCOLOR="#cccccc">
					 <tr>
					 <td width="125">
					 <tr height="10">
						 <td align="left" colspan="3"><H3>Original Location</H3></td>
                                                 <td>UOM: </td>
                                                 <td><c:out value="${SelectForm.uom}"/></td>
					 </tr>
                                         
					 <tr>    <input type="hidden" name="uom"  value=" <c:out value="${SelectForm.uom}"/>"/>
                                                 <input type="hidden" name="storage_area"  value=" <c:out value="${SelectForm.storage_area}"/>"/>
                                                 <input type="hidden" name="stor_level_1" value="<c:out value="${SelectForm.stor_level_1}"/>"/>
                                                 <input type="hidden" name="stor_level_2" value="<c:out value="${SelectForm.stor_level_2}"/>"/>
                                                 <input type="hidden" name="stor_level_3" value="<c:out value="${SelectForm.stor_level_3}"/>"/>
                                                 <input type="hidden" name="qty_avail" value="<c:out value="${SelectForm.qty_avail}"/>"/>
                                                 
					 	 <td align="left">Stor Loc</td>
						 <td width="66" ALIGN="left"><c:out value="${SelectForm.storage_area}"/></td>
						 <td width="37"><c:out value="${SelectForm.stor_level_1}"/></td>
						 <td width="33"><c:out value="${SelectForm.stor_level_2}"/></td>
						 <td width="73"><c:out value="${SelectForm.stor_level_3}"/></td>
					 </tr>
                                         
					  <tr>
					 	 <td align="left">Quantity</td>
                                                 <td ALIGN="left"><INPUT TYPE=TEXT  SIZE=8 NAME=qty ID=qty onkeypress="return noenter();"   TABINDEX="1" VALUE="<% if(err_msg != null) {%><c:out value="${SelectForm.qty}"/><% }%>"></td>
						 <td align="left" colspan="2">Available </td>
						 <td ALIGN="left"><c:out value="${SelectForm.qty_avail}"/></td>
					 </tr>
                                        
					 </table>
					 </td>
					 </tr>
                                            
                                        <tr>
					 <td>					 
					 <table border="0" height="40" width="320" align="left" BGCOLOR="#cccccc">
					 					 <tr>
					 <td width="127">
					 <tr height="10">
						 <td align="left" colspan="5"><H3>Destination Location</H3></td>
					 </tr>
				
                                         
                                         <html:submit property="submit" style="visibility:hidden"  styleId="finalbtn"  onclick="return validate();"><bean:message key="button.contransfer"/></html:submit>
					 
                                         
                                         <tr>
						 <td align="left" width="35%">Stor Loc</td> 
						 <td width="20%" ALIGN="left">
                                                    <input type=text name="to_storage_area"  id="sareaid" size="4" maxlength="7" tabindex="1" onkeypress="return noenter();"></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type=text name="to_stor_level_1" id="s1id" size="4" tabindex="2" onkeypress="return noenter();" ></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type=text name="to_stor_level_2" id="s2id" size="4" tabindex="3" onkeypress="return noenter();"  ></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type= text name="to_stor_level_3" id="s3id" size="4" tabindex="4" onkeydown="checksubmit();" onBlur="javascript:document.getElementById('finalbtn').click();" ></input>
                                                 </td>
					 </tr>
                                    
                                         
					 </table>
					 </td>
					 </tr>
					 
				</table>
		  	  </html:form>
				</div>
				</FORM>
			</tr>		
	  </table>
</body>
<script>
    function validate(){
    if((document.getElementById('qty').value=='')||(document.getElementById('qty').value==null)){
        alert('Enter Quantity');
        document.getElementById('qty').focus();
        return false;
        }
    else if (parseFloat(document.getElementById('qty').value) > parseFloat(document.getElementById('qty_avail').value)){   
        alert('Please enter quantity less that available quantity');
        document.getElementById('qty').focus();
        return false;
        }
    else if (isNaN(document.getElementById('qty').value)){   
        alert('Please enter a numeric value for Quantity');
        document.getElementById('qty').focus();
        return false;
        }    
    else if ((document.getElementById('sareaid').value=='')||(document.getElementById('sareaid').value==null)){   
        alert('Enter Destination Storage Area');
        document.getElementById('sareaid').focus();
        return false;    
        }
    else if ((document.getElementById('s1id').value=='')||(document.getElementById('s1id').value==null)){   
        alert('Enter Destination Storage Location 1');
        document.getElementById('s1id').focus();
        return false;    
        }
    else if ((document.getElementById('s2id').value=='')||(document.getElementById('s2id').value==null)){   
        alert('Enter Destination Storage Location 2');
        document.getElementById('s2id').focus();
        return false;    
        }
    else if ((document.getElementById('s3id').value=='')||(document.getElementById('s3id').value==null)){   
        alert('Enter Destination Storage Location 3');
        document.getElementById('s3id').focus();
        return false;    
        }
    else{
        return true;    
         }
   }
    
  
   function checksubmit(){
    
    if (window.event && window.event.keyCode == 13){
        document.getElementById('finalbtn').click();
    }
    
    }

   function initform(){
    
    if((document.getElementById('qty').value=='')||(document.getElementById('qty').value==null)){
    document.getElementById('qty').focus();
    }else{
    document.getElementById('sareaid').focus();
    }
   
    }
    
</script>
</html:html>

