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
                                    <td width=75% align="left"><h2>Associate</h2></td>
                                    <td width=25% align="right"><a href="logoff.jsp"><img border="0" src="images/logout.png" alt="Single Signout"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
		  <td width="320">
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
		  	  <html:form action='/Associate.do' focus="qty"  styleId="form1">
			
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
						 <td ALIGN="left"><INPUT TYPE=TEXT  SIZE=8 NAME=qty ID=qty onkeypress="return noenter();"  TABINDEX="1" VALUE="<c:if test="${SelectForm.fifodate != null}"><c:out value="${SelectForm.qty}"/></c:if>" 
                                                                  <c:if test="${SelectForm.flagCheck != null}">  ONCHANGE="javascript:document.getElementById('finalbtn').click();"</c:if>></td>
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
					<c:if test="${SelectForm.flagCheck == null}"> <tr height="10">
						 <td align="left" width=22% colspan=1>FIFO Date</td>
						 <td align="left" align=left  colspan=4><INPUT id=fifodate 
                                                  title="The date format:MM/DD/YYYY" readOnly maxLength=10 
                                                  onchange=" error = 0; IsDate('MM/DD/YEAR', this); this.value = this.value.toUpperCase(); " 
                                                  size=10 name=fifodate  
                                                  onAttrModified=" error = 0; IsDate('MM/DD/YEAR', this); this.value = this.value.toUpperCase(); "
                                                  value="<c:out value="${SelectForm.fifodate}"/>">&nbsp;<BUTTON 
                                                  id=fifo_date_trigger ><IMG height=16 alt="Click here to select Fifo Date" tabindex="2" 
                                                  src="images/cal.gif" width=16 border=0></BUTTON></td>
                                                  
                                                   
					 
					 </tr>
                                         <html:submit property="submit"  style="visibility:hidden"  styleId="dotbtn" onclick="return check();"><bean:message key="button.fifo"/></html:submit>
                                         
                                         <SCRIPT type=text/javascript>
                                             Calendar.setup(
                                             {
                                                inputField : "fifodate",
                                                ifFormat   : "%m/%d/%Y",
                                                button     : "fifo_date_trigger",
                                                mondayFirst : false
                                             }
                                            );
                                            </SCRIPT></c:if>
                                         
                                         <html:submit property="submit" style="visibility:hidden"  styleId="finalbtn"  onclick="return validate();"><bean:message key="button.bctAssoc"/></html:submit>
					 <c:if test="${SelectForm.flagCheck != null}"> 
                                            <input type="hidden" name="to_storage_area" value="<c:out value="${SelectForm.to_storage_area}"/>">
                                            <input type="hidden" name="to_stor_level_1" value="<c:out value="${SelectForm.to_stor_level_1}"/>">
                                            <input type="hidden" name="to_stor_level_2" value="<c:out value="${SelectForm.to_stor_level_2}"/>">
                                            <input type="hidden" name="to_stor_level_3" value="<c:out value="${SelectForm.to_stor_level_3}"/>">
                                            
                                         </c:if>    
                                      <input type="button" id="fifoBtn" value="Ajax" style="visibility:hidden"  onClick="submitData();">   
                                      
                                        <tr height="10">
                                                <td align="left" colspan="1">Cont ID </td>
                                                <td colspan=4 align="left" ><span id="theResponse" style="visibility:hidden"></span><div id='tocontdiv'><input type="text" name="to_container_id" id="to_container_id" value="<c:out value="${SelectForm.to_container_id}"/>" /></div></td>
                                        </tr>
                                         <tr>
						 <td align="left" width="35%" >Stor Loc</td> 
						 <td width="20%" ALIGN="center">
                                                    <input type=text name="to_storage_area"  id="sareaid" size="4" maxlength="7" tabindex="3"  onkeypress="return noenter();" <c:if test="${SelectForm.flagCheck != null}">  value="<c:out value="${SelectForm.to_storage_area}"/>" disabled </c:if><c:if test="${SelectForm.flagCheck == null}">  value="<c:out value="${SelectForm.storage_area}"/>"  </c:if> ></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type=text name="to_stor_level_1" id="s1id" size="2" tabindex="4"  onkeypress="return noenter();" <c:if test="${SelectForm.flagCheck != null}"> value="<c:out value="${SelectForm.to_stor_level_1}"/>" disabled </c:if> <c:if test="${SelectForm.flagCheck == null}"> value="<c:out value="${SelectForm.stor_level_1}"/>"  </c:if> ></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type=text name="to_stor_level_2" id="s2id" size="2" tabindex="5" onkeypress="return noenter();" <c:if test="${SelectForm.flagCheck != null}">  value="<c:out value="${SelectForm.to_stor_level_2}"/>"disabled </c:if> <c:if test="${SelectForm.flagCheck == null}"> value="<c:out value="${SelectForm.stor_level_2}"/>"  </c:if> ></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type= text name="to_stor_level_3" id="s3id" size="2" tabindex="6" onkeydown="checksubmit();" onBlur="javascript:document.getElementById('finalbtn').click();" <c:if test="${SelectForm.flagCheck != null}"> value="<c:out value="${SelectForm.to_stor_level_3}"/>" disabled </c:if> <c:if test="${SelectForm.flagCheck == null}"> value="<c:out value="${SelectForm.stor_level_3}"/>"  </c:if>></input>
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
<SCRIPT type="text/javascript">
    

    function check(){
    
    if((document.getElementById('fifodate').value=='')||(document.getElementById('fifodate').value==null)){
        alert('Enter Fifo Date');
        return false;
        }
    else{
        
        return true;    
         }
    }
  
    var req;
  var which;

  function submitData() {
  
   fifoDateVal = document.getElementById('fifodate').value;
   if (fifoDateVal == "" ) {
      alert("Please fill in Fifo Date");
      return false;
    }
    
    // Ok, so now we retrieve the response as in all the other examples,
    // except that now we append the CSV onto the URL as a query string,
    // being sure to escape it first.
    retrieveURL("Fifo.do?fifoDateVal=" + escape(fifoDateVal));
  }

    function retrieveURL(url) {
    if (window.XMLHttpRequest) { // Non-IE browsers
      req = new XMLHttpRequest();
      req.onreadystatechange = processStateChange;
      try {
        req.open("GET", url, true);
      } catch (e) {
        alert(e);
      }
      req.send(null);
    } else if (window.ActiveXObject) { // IE
      req = new ActiveXObject("Microsoft.XMLHTTP");
      if (req) {
        req.onreadystatechange = processStateChange;
        req.open("GET", url, true);
        req.send();
      }
    }
  }

  function processStateChange() {
    
    if (req.readyState == 4) { // Complete
      if (req.status == 200) { // OK response
        result = req.responseText;
        document.getElementById("theResponse").innerHTML = result;
        //Whwn Calendar is clicked, make div hidden and span visible
        document.getElementById('tocontdiv').style.visibility='hidden'; 
        document.getElementById("theResponse").style.visibility= 'visible';
        document.getElementById("to_container_id").value = result;
        document.getElementById("sareaid").focus();       
        setTimeout("document.forms[0].to_storage_area.select()",1);
      }else{
        alert("Problem: " + req.statusText);
      }
    }
  }


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
 //   else if ((document.getElementById('fifodate').value=='')||(document.getElementById('fifodate').value==null)){   
 //       alert('Enter Fifo Date');
 //       return false;    
 //       }
    else if ((document.getElementById('to_container_id').value=='')||(document.getElementById('to_container_id').value==null)){   
        alert('Container ID must be present');
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
    setTimeout("document.forms[0].to_storage_area.select()",1);
    //document.getElementById('sareaid').focus();
    }
   
    }
    
    
    
    
</SCRIPT>

</html:html>
