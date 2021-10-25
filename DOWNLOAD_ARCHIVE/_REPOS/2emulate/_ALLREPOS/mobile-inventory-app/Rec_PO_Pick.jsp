<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@ taglib uri="http://jakarta.apache.org/struts/tags-bean" prefix="bean" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-html" prefix="html" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-logic" prefix="logic" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html:html>
    <head>
        <title>Receive PO</title>
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
width: 410px;
border: 0px;
border-collapse: collapse;
border-spacing: 0px;}
.table.Small {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    line-height: 10px;
}
table.stats td 
{
color: #000;
font-size:10px;
padding: 4px;
text-align: left;
border: 1px #fff solid;
}

table.stats td.hed
{background-color: #666;
color: #fff;
padding: 4px;
border-bottom: 2px #fff solid;
font-size: 10px;
font-weight: bold;} 

input.tinyCheckbox
{
	width: 0px;
	height: 0px;
}
-->

        </style>
        <script language="javascript">
function changeColor()
{

recsize = document.getElementById('resSize').value; 
for (Count = 0; Count < recsize; Count++)
{
checkbx = 'check'+ (Count+1);
rw = 'td'+(Count+1);
lc = 'l'+(Count+1);
sc = 's'+(Count+1);

check = document.getElementById(checkbx);
row = document.getElementById(rw);

if(check.checked==true)
	{
 
	row.bgColor = "black";
	for (j=0;j< row.childNodes.length;j++)
	{
		row.childNodes[j].style.color = 'white';
	}
	document.getElementById(checkbx).checked = true;
	}
else if(check.checked==false)
	{
	
	row.bgColor = "#CCCCCC";
	
	for (j=0;j< row.childNodes.length;j++)
	{
		row.childNodes[j].style.color = 'black';
	}
	document.getElementById(checkbx).checked = false;
	}

}
}

function chgTxtBox(chNo){

chx = 'check' +chNo;
rec = 'l'+ chNo;
acc = 's' + chNo;


if (document.getElementById(chx).checked){
    document.getElementById(rec).disabled = false;
    document.getElementById(acc).disabled = false;
    document.getElementById(acc).focus();
}else{
    document.getElementById(rec).disabled = true;
    document.getElementById(acc).disabled = true;
}
}

function initForm() {
      
      resSize = document.getElementById('resSize').value;
      for ( i = 1; i <= resSize; i++){
        sel = 's'+i;
        acc = document.getElementById(sel).value;
        if (acc != ''){
            checkRow(i);
            document.getElementById('s1').focus();
        }else
            {return false;}
      }
      return true;
      
      
    }  
     
function checkRow(id){
check = 'check'+id;
document.getElementById(check).checked = !document.getElementById(check).checked;
changeColor();
chgTxtBox(id);
}

function populateFields(){

lineSched = "";
recvqty = "";
accpqty = "";
resSize = document.getElementById('resSize').value;

for ( i = 1; i <= resSize; i++){

    if (document.getElementById('check'+i).checked){
        line= document.getElementById('line'+i).value;
        sched= document.getElementById('sched'+i).value;
        recv_qty = document.getElementById('recv_qty'+i).value;
        accp_qty = document.getElementById('accp_qty'+i).value;
        lineSched += line+":"+sched+",";
        recvqty+= recv_qty+",";
        accpqty+= accp_qty+",";
    }
    
}
    
    lineSched = lineSched.substring(0,lineSched.length-1);
    recvqty= recvqty.substring(0,recvqty.length-1);
    accpqty= accpqty.substring(0,accpqty.length-1);
    document.getElementById('v_linesched').value = lineSched;
    document.getElementById('v_qty_rec_ma').value = recvqty;
    document.getElementById('v_qty_acc_ma').value = accpqty;
 
    
}

function submitPrint(){
    if (valQtyMass()){
        document.getElementById('v_print_pb').value = "Y";
        populateFields();
        document.forms[0].submit();
    }
}

function submitNoPrint(){
    if (valQtyMass()){
    document.getElementById('v_print_pb').value = "N";
    populateFields();
    document.forms[0].submit();
    }    
}

function valQtyMass(){

    resSize = document.getElementById('resSize').value;
    ischeck = false;
    
    for ( i = 1; i <= resSize; i++){
        
        
        if (document.getElementById('check'+i).checked){
            ischeck = true;
            if (!valRQty('l'+i))
            {    
                return false;
              
            }
            if (!valAQty('s'+i))
                return false;
        }
    
    }
    return ischeck;

}


function valRQty(strQty){
        qty = strQty;
        
        if((document.getElementById(qty).value=='')||(document.getElementById(qty).value==null)){
            alert('Please enter received quantity');
            document.getElementById(qty).focus();
            return false;
            }
        else if (isNaN(document.getElementById(qty).value)){   
            alert('Please enter a numeric value for received quantity');
            document.getElementById(qty).focus();
            return false;
            }
        else
            return true;
          
    }


function valAQty(strQty){
        qty = strQty;
        
        if((document.getElementById(qty).value=='')||(document.getElementById(qty).value==null)){
            alert('Please enter accepted quantity');
            document.getElementById(qty).focus();
            return false;
            }
        else if (isNaN(document.getElementById(qty).value)){   
            alert('Please enter a numeric value for accepted quantity');
            document.getElementById(qty).focus();
            return false;
            }
        else
            return true;
          
    }    
 
    function chgRecvQty(i){
    
    document.getElementById("l<c:out value='${status.count}'/>"+i).value = document.getElementById("s<c:out value='${status.count}'/>"+i).value;
    }
    
        </script>
    </head>
    
    <body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000" onload="initForm()">
        <html:form  action="/AddPO" method = "POST">
            <table width="320" border="0" align="left" >
                <tr>
                    <td>
                        <table width="100%" border="0" align="left" BGCOLOR="#cccccc" >	
                            <tr >
                                <td width="35%" align="left"><img src="images/logo.GIF" height="25px" ></td>
                                <td width="20%"><a href="Rec_PO_Add.jsp"><img src="images/back.gif" height="25px" name="back" border="0"  alt="Back" ></a></td>
                                <td width="15%"><a href="#"><img src="images/print16.bmp" height="25px" border="0"  alt="Save and Print" onclick="submitPrint();"></td>
                                <td width="15%"><a href="#"><img src="images/noprint16.bmp" alt="Save without printing" border="0"   height="25px" align="right" onclick="submitNoPrint();"></td>
                            </tr>
                        </table>
                </td></tr>
                <tr>
                    <td>
                        <table width="100%" border="0" align="left" BGCOLOR="#cccccc"  class="stats" >
                            <tr>
                                <td width="20%" class="hed" >PO BU</td>
                                <td width="10%"><c:out value="${FetchPOForm.bu}"/></td>
                                <td width="30%" class="hed" >PO</td>
                                <td width="40%"><c:out value="${FetchPOForm.poId}"/></td>
                            </tr>
                            <tr>
                                <td width="20%" class="hed" >Quantity</td>
                                <td width="10%" ><c:out value="${FetchPOForm.qty}"/></td>
                                <td class="hed" width="30%">Rec Dt</td>
                                <td width="40%"><input type="text" name="recv_date" class="small" size="12" value="${FetchPOForm.recv_dt}"></td>
                            </tr>
                            <input type="hidden" id="bu" name="bu" value="<c:out value="${FetchPOForm.bu}"/>"> </input>
                            <input type="hidden" id="po_id" name="po_id" value="<c:out value="${FetchPOForm.poId}"/>"> </input>
                            <input type="hidden" id="receiver_id" name="receiver_id" value="NEXT"> </input>
                            <input type="hidden" id="bill_of_lading" name="bill_of_lading" value="<c:out value="${FetchPOForm.boxNum}"/>"> </input>
                            <input type="hidden" id="item_id" name="item_id" value="<c:out value="${FetchPOForm.itemId}"/>"> </input>
                            <input type="hidden" id="shipto_id" name="shipto_id" value="<c:out value="${FetchPOForm.shipto_id}"/>"> </input>
                            <input type="hidden" id="v_linesched" name="v_linesched" value=""> </input>
                            <input type="hidden" id="v_qty_rec_ma" name="v_qty_rec_ma" value=""/> </input>
                            <input type="hidden" id="v_qty_acc_ma" name="v_qty_acc_ma" value=""> </input>
                            <input type="hidden" id="v_print_pb" name="v_print_pb" value=""> </input>
                            <input type="hidden" id="resSize" name="resSize" value="${lenResultSet}"> </input>
                            
                        </table>
                </td></tr>
                <%String err_msg = (String) request.getAttribute("err_msg");%>
                <% if(err_msg != null) {%> 
                <tr>
                    <td><div class="style3"><font color="red"><b>Error:</b><%=err_msg%></font>
                        </div>
                    </td>
                </tr>
                <%}
                %> 
                <tr>
                    <td>	
                        <table width="100%" height="90" border="0" align="center" BGCOLOR="#cccccc"  class="stats" ><!--DWLayoutTable-->
                            <tr height="10" valign="middle" >
                                <td  class="hed" colspan=2 align="right"> <div align="right">L</div></td>
                                <td class="hed"  align="left">S</td>
                                <td class="hed"  align="center">Item ID</td>
                                <td class="hed"  align="center">PO<br>Qty</td>
                                <td class="hed"  align="center">Acc Qty</td>
                                <td class="hed"  align="center">Bal Qty</td>
                                <td class="hed"  align="right"><div align="right">Due Date</div></td>
                            </tr>
                            <c:forEach var="output"  items="${FetchPOForm.srchResult}" varStatus="status">
                                <tr id="td<c:out value='${status.count}'/>" onClick="checkRow(<c:out value='${status.count}'/>);">
                                    <td width="0%"><input type="checkbox" class="tinyCheckbox" id="check<c:out value='${status.count}'/>" name="cgroup" value="<c:out value='${status.count}'/>" ></td>
                                    <td width="2%" align="center"><bean:write name="output" property="line_nbr"/></td>
                                    <td width="2%" align="center"><bean:write name="output" property="sched_nbr"/></td>
                                    <td nowrap width="24%" align="right"><bean:write name="output" property="item_id"/></td>
                                    <td width="16%" align="right"><bean:write name="output" property="qty_po"/></td>
                                    <td width="16%" align="right"><input type="text" class="small" name="accp_qty<c:out value='${status.count}'/>" 
                                            disabled="true" 
                                            id="s<c:out value='${status.count}'/>" size="4" 
                                            onchange="chgRecvQty(<c:out value='${status.count}'/>);"  value="<bean:write name="output" property="accpt_qty"/>"></td>
                                    <td width="16%" align="right"><bean:write name="output" property="bal_qty"/></td>
                                    <td nowrap width="30%" align="right"><bean:write name="output" property="due_dt"/></td>
                                    <input type="hidden" id="line<c:out value='${status.count}'/>" name="line" value="<bean:write name="output" property="line_nbr"/>"> </input>
                                    <input type="hidden" id="sched<c:out value='${status.count}'/>" name="sched" value="<bean:write name="output" property="sched_nbr"/>"> </input>
                                    <input type="hidden" name="recv_qty<c:out value='${status.count}'/>" disabled="true" id="l<c:out value='${status.count}'/>" size="4" value="<bean:write name="output" property="accpt_qty"/>">
                                </tr>
                            </c:forEach>
                            
                        </table>
                    </td>
                </tr>
            </table>
            
        </html:form>
    </body>
    
</html:html>

