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
<body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000">

	<table cellspacing="0" border="0" height="40" width="320" align="left">
		<tr>
                    <tr valign=bottom>
                        <td>
                            <table width="320" >
                                <tr>
                                    <td width=25% height="39"><img src="images/logo.GIF" ></td>
                                    <td width=75% align="left"><h2>Container Transfer</h2></td>
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
		  	  <html:form action='/ConTransfer.do' focus="to_storage_area"  styleId="form1">
			
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
                                                 <td><%=session.getAttribute("sess_uom")%></td>
					 </tr>
                                         
					 <tr>    <input type="hidden" name="uom"  value=" <%=session.getAttribute("sess_uom")%>"/>
                                                 <input type="hidden" name="qty_avail" value="<%=session.getAttribute("sess_qtyAvail")%>"/>
                                                 <input type="hidden" name="container_id" id="container_id" value="<%=session.getAttribute("sess_container")%>"/>
					 	 <td align="left">Cont ID</td>
						 <td colspan=4 align=left><%=session.getAttribute("sess_container")%></td>
						 
					 </tr>
                                         <tr>
                                            <td></td>
                                            <td width="66"></td>
                                            <td width="37"></td>
                                            <td width="33"></td>
                                            <td width="73"></td>
                                         </tr>
					 <tr>
					 	 <td align="left" >Qty Available:</td>
						 <td ALIGN="left" colspan=4><%=session.getAttribute("sess_qtyAvail")%></td>
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
					 <tr height="10">
						 <td align="left" colspan=2 width=22%>Expiration Date</td>
						 <td align="left" colspan=3 align=left valign=center><INPUT id=expiry_date
                                                  title="The date format:MM/DD/YYYY" readOnly maxLength=10 
                                                  onchange=" error = 0; IsDate('MM/DD/YEAR', this); this.value = this.value.toUpperCase(); " 
                                                  size=10 name=expiry_date  
                                                  onAttrModified=" error = 0; IsDate('MM/DD/YEAR', this); this.value = this.value.toUpperCase(); "
                                                  value="">&nbsp;<BUTTON 
                                                  id=expiry_date_trigger ><IMG height=16 alt="Click here to select Expiration Date"  
                                                  src="images/cal.gif" width=16 border=0></BUTTON></td>
                                                 
                                                  
					 
					 </tr>
                                         <input type="button" id="fifoBtn" value="Ajax" style="visibility:hidden"  onClick="submitData();">
                                         <SCRIPT type=text/javascript>
                                             Calendar.setup(
                                             {
                                                inputField : "expiry_date",
                                                ifFormat   : "%m/%d/%Y",
                                                button     : "expiry_date_trigger",
                                                mondayFirst : false
                                             }
                                            );
                                            
                                           function submitData(){
                                                //Do Nothing
                                                document.getElementById("sareaid").focus();       
                                                setTimeout("document.forms[0].to_storage_area.select()",1);
                                                return false;
                                            }
                                            </SCRIPT>
                                         
                                         <html:submit property="submit" style="visibility:hidden"  styleId="finalbtn"  onclick="return validate();"><bean:message key="button.contransfer"/></html:submit>
					 
                                         
                                         <tr>
						 <td align="left" width="35%">Stor Loc</td> 
						 <td width="20%" ALIGN="center">
                                                    <input type=text name="to_storage_area"  id="sareaid" size="4" maxlength="7" tabindex="1" onkeypress="return noenter();"></input>
                                                 </td>
                                                 <td width="15%" ALIGN="left">
                                                    <input type=text name="to_stor_level_1" id="s1id" size="4" tabindex="2" onkeypress="return noenter();" ></input>
                                                 </td>
                                                 <td width="15%"  ALIGN="left">
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
    if ((document.getElementById('sareaid').value=='')||(document.getElementById('sareaid').value==null)){   
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
        if ((document.getElementById('expiry_date').value=='')||(document.getElementById('expiry_date').value==null)){ 
            document.getElementById('expiry_date').value=' ';
         }
        return true;    
         }
   }
    
   function checksubmit(){
    
    if (window.event && window.event.keyCode == 13){
        document.getElementById('finalbtn').click();
    }
    
    }
   
</script>
</html:html>

