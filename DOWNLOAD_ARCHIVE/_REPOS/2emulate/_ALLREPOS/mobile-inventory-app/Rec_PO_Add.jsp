<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@ taglib uri="http://jakarta.apache.org/struts/tags-bean" prefix="bean" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-logic" prefix="logic" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="org.apache.commons.logging.Log"%>
<%@page import="org.apache.commons.logging.LogFactory"%>

<html:html>
<head>
    <title>Sample</title>
    <meta name="generator" content="">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <style type="text/css">
        <!--
.style1 {font-size: 9px}
.style2 {font-size: 12px}
.style3 {
	font-size: xx-small;
	font-family: Verdana, Arial, Helvetica, sans-serif;
}
table.stats 
{text-align: center;
font-family: Verdana, Geneva, Arial, Helvetica, sans-serif ;
font-weight: normal;
font-size: 11px;
color: #fff;
width: 320px;
border: 0px;
border-collapse: collapse;
border-spacing: 0px;}

table.stats td 
{
color: #000;
font-size:10px;
padding: 4px;
text-align: left;
border: 1px #fff solid;
}

.table.Small {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    line-height: 10px;
}

table.stats td.hed
{background-color: #666;
color: #fff;
padding: 4px;
text-align: left;
border-bottom: 2px #fff solid;
font-size: 10px;
font-weight: bold;} 
-->
    </style>
    <script type="text/javascript">

    
    window.onload = function() {
        setTimeout("document.forms[0].boxNum.select()",1);
    } 
     
    function valNoBox(){
    
        if((document.getElementById('boxNum').value=='')||(document.getElementById('boxNum').value==null)){
            alert('Please enter Number of Box(es)');
            document.getElementById('boxNum').focus();
            return false;
            }
        else if (isNaN(document.getElementById('boxNum').value)){   
            alert('Please enter a numeric value for Number of Box(es)');
            document.getElementById('boxNum').focus();
            return false;
            }
        else
            return true;
          
    }
    
    
    function valQty(){

        if((document.getElementById('qty').value=='')||(document.getElementById('qty').value==null)){
            alert('Please enter Quantity');
            document.getElementById('qty').focus();
            return false;
            }
        else if (isNaN(document.getElementById('qty').value)){   
            alert('Please enter a numeric value for Quantity');
            document.getElementById('qty').focus();
            return false;
            }
        else
            document.getElementById('qty').value = parseInt(document.getElementById('qty').value);
            //alert (document.getElementById('qty').value);
            return true;
          
    }
    
    
    function valPO(){

        if((document.getElementById('poId').value=='')||(document.getElementById('poId').value==null)){
            alert('Please enter Purchase Order Number');
            document.getElementById('poId').focus();
            return false;
            }
        else
            return true;
        
    }
    
    
        function valItem(){

        if((document.getElementById('itemId').value=='')||(document.getElementById('itemId').value==null)){
            alert('Please enter Item ID. \n Enter MISC for a miscellaneous item');
            document.getElementById('itemId').focus();
            return false;
            }
        else
            return true;
         
    }
    
    function validate(frm){
    
    if (valNoBox() && valPO() && valQty() ){
        frm.submit();
        }else{
        return false;
        }
   
    }
    
    </script>  
    
    
</head>
<jsp:useBean class="com.vicr.mfg.hhd.util.ChooseList" 
             scope="page" 
             id="chooseListBean"> 
<body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000">
   
    
<html:form focus="boxNum" action="/FetchPO" method="post">
    
 <table height="55" border="0" width="300" align="center">
        <tr>
            <td align="left"><img src="images/logo.GIF"/></td>
            <td align="right"><a href="logoff.jsp"><img border="0" src="images/logout.png" alt="Single Signout"></a></td>
        </tr>
    </table>
    
<table height="180" width="260" align="left" border="0" >
<%String receiverId = (String) request.getAttribute("receiverId");%>
<% if(receiverId != null) {%> 
<tr>
    <td><div class="style3"><font color="red"><b>Transaction successful!<br>Receiver ID:</b><%=receiverId%></font>
        </div>
    </td>
</tr>
<%}
%> 
<tr valign="bottom">
    <td>
        
        <table height="90" width="260" align="left" border="0" class="stats" BGCOLOR="#cccccc" >
            
            <tr height="35" valign="bottom">
                <td width="35%" class="hed" align="left"><b>BU</b></td>
                <td width="50%"><SELECT NAME="bu" size=1 id="selbu" >
                        <jsp:getProperty name="chooseListBean" property="buList"/>
                </select><font color="red">*</font>  </td>
            </tr>
            <tr height="20">
                <td width="35%" align="left" class="hed" ><b>No. of Boxes</b></td>
                <td width="50%" align="left"><INPUT TYPE=TEXT  SIZE=10 NAME="boxNum" id="boxNum" VALUE="" class="Small" onchange="return valNoBox();"><font color="red">*</font></td>
            </tr>
            <tr height="20">
                <td width="35%" align="left" class="hed" ><b>PO #</b></td>
                <td width="50%" align="left"><INPUT TYPE=TEXT  SIZE=15 NAME="poId" id="poId" VALUE="" class="Small" onchange="return valPO();"><font color="red">*</font></td>
            </tr>  
            <tr height="20">
                <td width="35%" align="left" class="hed"><b>Item ID</b></td>
                <td width="50%" align="left"><INPUT TYPE=TEXT  SIZE=15 NAME="itemId" id="itemId" VALUE="" class="Small"> <!--onchange="return valItem();"--></td>
            </tr> 
            <tr height="20">
                <td width="35%" align="left" class="hed"><b>Quantity</b></td>
                <td width="50%" align="left"><INPUT TYPE=TEXT  SIZE=10 NAME="qty" id="qty" VALUE="" class="Small" onchange="return validate(this.form);"><font color="red">*</font></td>
            </tr> 
        </table>
        
    </td>
</tr>
<tr><td>
<logic:present name="messages">
    <div class="style3"><font color="red"><b>Error:</b>
        <logic:iterate id="msg" name="messages">
    <bean:message name="msg"/></div>
    </logic:iterate>
    <br>
</logic:present>    

<table BGCOLOR="#cccccc" align="center" >
    <tr valign="middle" height="10">
        <td width="35%" align="right" >
            <a href="Mainmenu.jsp"><img src="images/back.gif" name="back" border="0" height="25px"  alt="Back"></a>&nbsp;
        </td>
        <td width="10%"></td>
        <td width="35%" align="left">
            <input type="image" src="images/ru.bmp" alt="Fetch" height="25px" onClick="return validate(this.form);"> 
        </td>
    </tr>
</table>
</td></tr>

</table>


</html:form>
</body>
</jsp:useBean>
</html:html>
