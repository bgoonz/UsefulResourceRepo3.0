<%@include file="includes/header.jsp"%>

<!-- main-page -->
<div data-role="page" data-theme="b" id="page1" style="background: url('http://t1.gstatic.com/images?q=tbn:ANd9GcTNV8CYXH4P5tW5tGMGhrxdTo-8UqFYQrs4FLjJ1s4Mkre6jHhNbNdlPOiL') repeat">
		<%@include file="includes/app-header.jsp"%>
		
		<!-- sub-header -->
		<div data-theme="b" data-role="header">
				<h3>
						Search Item
				</h3>
				<a data-role="button" data-transition="fade" data-theme="b" href="/HHD/Login.do" data-icon="home" data-iconpos="left">
						home
				</a>
		</div>
		<!-- /sub-header -->
		
		<script type="text/javascript">
			window.onload = function() {
					setTimeout("document.forms[0].item_id.select()",1);
			}  
		</script>    

		<jsp:useBean class="com.vicr.mfg.hhd.util.ChooseList" 
								 scope="page" 
								 id="chooseListBean"> 

				<html:form focus="item_id" action="/List" method="post">
				<c:if test="${SelectForm.to_storage_area != null}">
					<font color=blue><c:out value="${SelectForm.msg}"/></font>
				</c:if>
				<c:if test="${SelectForm.to_container_id != null}">
					<font color=blue>Destination Container ID:<c:out value="${SelectForm.to_container_id}"/></font>
				</c:if>
				<% if(err_msg != null) { %>
					<table>
						<tr><td colspan=2><font color=red><html:errors/><br></font></td></tr>  
						<tr><td colspan=2><font color=red><%= err_msg %></font></td></tr>
					</table>
				<% } %>

				<jsp:setProperty name="chooseListBean" property="sessBu"  value="${bu}"/>
				<jsp:setProperty name="chooseListBean" property="sessOprId"  value="${oprid}"/>
						
								<div data-role="content">
										<div data-role="collapsible-set" data-theme="" data-content-theme="d">
												<div data-role="collapsible" data-collapsed="false">
														<h3>
																Inventory Transfer
														</h3>
														<div data-role="fieldcontain">
																<label for="selbu">
																		Business Unit:
																</label>
																<select name="bu" id="selbu">
										<jsp:getProperty name="chooseListBean" property="buList"/>
																</select>
														</div>
														<div data-role="fieldcontain">
																<fieldset data-role="controlgroup">
																		<label for="item_id">
																				ID:
																		</label>
																		<input placeholder="scan item ID or containter ID" type="text"  id="item_id" name="item_id" class="searchbox" maxlength="18"  onchange="submit();" onkeydown="if (window.event && window.event.keyCode == 13){submit();}" value="${item_id}" />
																</fieldset>
														</div>
												</div>
										</div>
										<input type="submit" value="Submit" data-inline="true" />
								</div>
			</html:form>
		</jsp:useBean>
</div> <!-- /main-page  -->
<%@include file="includes/footer.jsp"%>