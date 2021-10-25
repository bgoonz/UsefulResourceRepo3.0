<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
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
</style>
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
<script language="javascript">
function changeColor()
{
for (Count = 0; Count < document.forms[0].cgroup.length; Count++)
{
chckbx = 'check'+ (Count+1);
rw = 'td'+(Count+1);

check = document.getElementById(chckbx);
row = document.getElementById(rw);

if(check.checked==true)
	{
	row.bgColor = "black";
	for (j=0;j< row.childNodes.length;j++)
	{
		row.childNodes[j].style.color = 'white'
	}
	
	}
else if(check.checked==false)
	{
	
	row.bgColor = "#CCCCCC";
	
	for (j=0;j< row.childNodes.length;j++)
	{
		row.childNodes[j].style.color = 'black'
	}

	}
}
}

</script>
</head>

<body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000">
	<FORM name="myForm"  METHOD = POST>
	<table width="320" border="0" align="center" BACKGROUND=".\gray.gif" valign="top">	
	<tr valign="bottom" align="center">
		<td width="25%" align="left"><img src=".\logo.gif" height="25px" ></td>
		<td width="25%"><a href=".\Rec_PO_Pick.html"><img src=".\back.GIF" height="25px" name="back" border="0"  alt="Back"></a></td>
		<td width="25%"><a href=".\Rec_Print_Putaway.html"><img src=".\print16.bmp" height="25px" border="0"  alt="Save and Print"></td>
		<td width="25%"><a href=".\Rec_Print_Putaway.html"><img src=".\noprint16.bmp" alt="Save without printing"  border="0"  height="25px" align="right"></td>
		</tr>
	<tr>
	</table>
	<table width="320" height="50" border="0" align="center" BACKGROUND=".\gray.gif" valign="top" class="stats" >
	<td class="hed" >PO BU</td>
		<td>VICOR</td>
	</tr>
	
	<tr>
		<td width="40%" class="hed" >Operator Id</td>
		<td width="60%">BDOYLE</td>
	</tr>
	<tr>
		<td width="40%" class="hed" >Item</td>
		<td width="60%">03030</td>
	</tr>
	<tr>
		<td width="40%" class="hed" >Quantity</td>
		<td width="60%">377</td>
	</tr>
	
	</table>
	
	<table height="90" width="320" align="center" border="0" ><!--DWLayoutTable-->
	    <tr>
		<td width="320" colspan="3">
			<table width="100%" height="90" border="0" align="left" BACKGROUND=".\gray.gif" valign="top" class="stats" ><!--DWLayoutTable-->
				<tr height="10" valign="top" >
				 <td width="2%" align="center"><img src=".\print16.bmp"</td>
				 <td width="15%" class="hed"  align="center">Con ID</td>
				 <td width="10%" class="hed"  align="center">#Lbls</td>
				 <td width="10%" class="hed"  align="center">Qty/Lbl</td>
		  </tr>
		  <tr id="td1" onClick="document.getElementById('check1').checked = !(document.getElementById('check1').checked);changeColor();">
				 <td width="3%"><input type="checkbox" id="check1" onClick="changeColor()" name="cgroup" value="1"></td>
				 <td align="left"><input type="text" class="small" name="recv_qty" size="12" value="G317BM437A"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="2" value="1"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="6" value="302"></td>
		  </tr></div>
		   <tr id="td2" onClick="document.getElementById('check2').checked = !(document.getElementById('check2').checked);changeColor();">
				 <td width="3%"><input type="checkbox" id="check2" onClick="changeColor()" name="cgroup" value="2"></td>
				 <td align="left"><input type="text" class="small" name="recv_qty" size="12" value="G317BM469A"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="2" value="1"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="6" value="75"></td>
		  </tr>	
	    </table>
		
		  </td>
	    </tr>
		
	 </table>

</FORM>
</body>
</html>

