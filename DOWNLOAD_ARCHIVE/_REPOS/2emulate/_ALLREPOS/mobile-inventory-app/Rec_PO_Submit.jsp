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
width: 400px;
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
<table width="480" border="0" align="left">
	<tr>
	<td>
	<table width="100%" border="0" align="left" BACKGROUND=".\gray.gif" >	
	<tr >
		<td width="45%" align="left"><img src=".\logo.gif" height="25px" ></td>
		<td width="15%"><a href=".\Rec_PO_Pick.html"><img src=".\back.GIF" height="25px" name="back" border="0"  alt="Back"></a></td>
		<td width="15%"><a href=".\Rec_Print_Putaway.html"><img src=".\print16.bmp" height="25px" border="0"  alt="Save and Print"></td>
		<td width="15%"><a href=".\Rec_Print_Putaway.html"><img src=".\noprint16.bmp" alt="Save without printing" border="0"   height="25px" align="right"></td>
		</tr>
	</table>
	</td>
</tr>
	<tr>
	<td>
	
	<table border="0" width="100%" align="left" BACKGROUND=".\gray.gif" class="stats" >
	<tr>
		<td width="40%" class="hed" >Item</td>
		<td width="60%">03030</td>
	</tr>
	<tr>
		<td class="hed" >Receiving Date</td>
		<td><BUTTON id=recv_date_trigger >
		<IMG height=16 alt="Click here to select Date" tabindex="2" 
        src=".\cal.gif" width=16 border=0></BUTTON>&nbsp;<input type="text" name="recp_date" class="small" size="10" value="03/14/2007"></td>
	</tr>
	</table>
</td>
</tr>
	<tr>
	<td>
		<table width="100%" border="0" align="left" BACKGROUND=".\gray.gif" class="stats" ><!--DWLayoutTable-->
				<tr >
				 <td width="15%" class="hed"  align="center">PO</td>
				 <td width="3%" class="hed" align="center">Ln</td>
				 <td width="3%" class="hed"  align="center">Sc</td>
				 <td width="15%" class="hed"  align="center">Receipt<br>Qty</td>
				 <td width="15%" class="hed"  align="center">Accept<br>Qty</td>
		  </tr>
		 <tr height="10" id="td1" >
				 <td align="left">167423</td>
				 <td align="center">1</td>
				 <td align="center">2</td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="4" value="200"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="4" value=""></td>
		  </tr>
		  <tr height="10" id="td2" >
		  		 <td  align="left">167423</td>
				 <td align="center">1</td>
				 <td align="center">3</td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="4" value="132"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="4" value=""></td>
		  </tr>	
		  		  <tr height="10" id="td3">
				 <td align="left">167423</td>
				 <td align="center">2</td>
				 <td align="center">1</td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="4" value="45"></td>
				 <td align="center"><input type="text" class="small" name="recv_qty" size="4" value=""></td>
		  </tr>	
	    </table>
</td></tr>
</table>
</FORM>
</body>
</html>

