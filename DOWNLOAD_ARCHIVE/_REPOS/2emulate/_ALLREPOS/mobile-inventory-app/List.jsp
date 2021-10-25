<%@include file="includes/header.jsp"%>
<!-- main-page -->
<div data-role="page" data-theme="b" id="list-do" style="background: url('http://t1.gstatic.com/images?q=tbn:ANd9GcTNV8CYXH4P5tW5tGMGhrxdTo-8UqFYQrs4FLjJ1s4Mkre6jHhNbNdlPOiL') repeat">
		<%@include file="includes/app-header.jsp"%>

		<!-- sub-header -->
		<div data-theme="b" data-role="header">
				<h3>
						Item Locations
				</h3>
				<a data-role="button" data-direction="reverse" data-transition="flip" data-theme="b" href="/HHD/selectinv.do" data-icon="arrow-l" data-iconpos="left">
						Search Item
				</a>
		</div>
		<!-- /sub-header -->

		<!-- show errors -->
		<html:errors />

		<!-- show details  -->
		<div data-role="content">
				<div data-role="collapsible-set" data-theme="e" data-content-theme="d">
						<div data-role="collapsible" data-collapsed="true">
								<h3>
										Selected Item: <%= session.getAttribute("item_id") %> [<%= session.getAttribute("item_desc") %>]
								</h3>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup" data-mini="true">
												<label for="textinput1">
														BU:
												</label>
												<input id="textinput1" value="<%= session.getAttribute("bu") %>" type="text" readonly="readonly" />
										</fieldset>
								</div>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup">
												<label for="item-id">
														Item ID:
												</label>
												<input id="item-id" value="<%= session.getAttribute("item_id") %>" type="text" readonly="readonly" />
										</fieldset>
								</div>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup">
												<label for="textinput3">
														Description:
												</label>
												<input id="textinput3" value='<%= session.getAttribute("item_desc") %>' type="text" readonly="readonly" size="80"/>
										</fieldset>
								</div>
						</div>
				</div>
				<ul data-role="listview" data-divider-theme="b" data-inset="true">
						<!-- Table Header -->
						<li data-role="list-divider" role="heading">
								<h1>
									<div>Location</div> 
									<div>Qty  | Available | Container</div>
								<h1>
						</li>
						
						<!-- Table rows -->
						<c:forEach var="output"  items="${ListForm.results}" varStatus="status">
						<li data-theme="c">
								<a href="#actions" data-transition="slide">
									<div id="storage-area">
										<bean:write name="output" property="storage_area"/>
										<bean:write name="output" property="stor_level_1"/>	
										<bean:write name="output" property="stor_level_2"/>	
										<bean:write name="output" property="stor_level_3"/>	
									</div>
									<div>
										<span id="qty">
											<bean:write name="output" property="qty"/> 
											<bean:write name="output" property="uom"/> |
										</span>
										<span id="qty_avail">
											<bean:write name="output" property="qty_avail"/>
											<bean:write name="output" property="uom"/>
										</span>	|
										<span id="container_id">
											<c:if test="${output.container_id ==null}">
												--
											</c:if>
											<c:if test="${output.container_id !=null}">
												${output.container_id}
											</c:if>
										</span>
									</div>
								</a>
						</li>
						</c:forEach>
				</ul>
		</div>
</div>
<!-- /main-page  -->

<!-- actions -->
<div data-role="page" id="actions">
		<%@include file="includes/app-header.jsp"%>
		
		<!-- sub-header -->
		<div data-theme="b" data-role="header">
				<h3>
						Perform Action
				</h3>
				<a data-role="button" data-direction="reverse" data-transition="slide" data-theme="b" href="#list-do" data-icon="arrow-l" data-iconpos="left">
						Back
				</a>
		</div>
		<!-- /sub-header -->

		<!-- show errors -->
		<html:errors/>
		
		<div data-role="content">
				<div data-role="collapsible-set" data-theme="e" data-content-theme="d">
						<div data-role="collapsible" data-collapsed="true">
								<h3>
										Location Selected: <span id="storage-location-text">####</span>
								</h3>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup" data-mini="true">
												<label for="storage-location">
														Storage Location:
												</label>
												<input id="storage-location" value="" type="text" /> <!-- placeholder="ARROW	01	AA	02" -->
										</fieldset>
								</div>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup" data-mini="true">
												<label for="container">
														Container:
												</label>
												<input id="container" value="" type="text" />
										</fieldset>
								</div>								
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup" data-mini="true">
												<label for="qty-val">
														Quantity:
												</label>
												<input id="qty-val" value="" type="text" />
										</fieldset>
								</div>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup" data-mini="true">
												<label for="qty-avail-val">
														Available Qty:
												</label>
												<input id="qty-avail-val" value="" type="text" />
										</fieldset>
								</div>
						</div>
				</div>
				<ul data-role="listview" data-divider-theme="b" data-inset="true">
						<li data-role="list-divider" role="heading">
								Actions
						</li>
						<li data-theme="c" class="container-context-hide">
								<a href="#associate" data-transition="slide">
										Associate
								</a>
						</li>
						<li data-theme="c" class="container-context-hide">
								<a href="#transfer" data-transition="slide">
										Transfer
								</a>
						</li>
						<li data-theme="c" class="container-context-show">
								<a href="#deassociate" data-transition="slide">
										Deassociate
								</a>
						</li>
						<li data-theme="c" class="container-context-show">
								<a href="#split" data-transition="slide">
										Split
								</a>
						</li>
						<li data-theme="c" class="container-context-show">
								<a href="#container-transfer" data-transition="slide">
										Container Transfer
								</a>
						</li>
				</ul>
		</div>
</div> <!-- /actions -->


<!-- associate -->
<div data-role="page" id="associate">
	<%@include file="includes/app-header.jsp"%>
	
	<!-- sub-header -->
		<div data-theme="b" data-role="header">
				<h3>
						Associate
				</h3>
				<a data-role="button" data-direction="reverse" data-transition="slide" data-theme="b" href="/HHD/selectinv.do" data-icon="arrow-l" data-iconpos="left">
						Back
				</a>
		</div>
		<!-- /sub-header -->
		
		<div data-role="content">
				<div data-role="collapsible-set" data-theme="b" data-content-theme="d">
						<div data-role="collapsible" data-collapsed="false">
								<h3>
										Original Location
								</h3>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup">
												<label for="textinput1">
														Quantity:
												</label>
												<input id="textinput1" placeholder="" value="" type="text" />
										</fieldset>
								</div>
						</div>
				</div>
				<div data-role="collapsible-set" data-theme="b" data-content-theme="d">
						<div data-role="collapsible" data-collapsed="false">
								<h3>
										Destination Location
								</h3>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup">
												<label for="textinput2">
														Cont ID
												</label>
												<input id="textinput2" placeholder="K00434224A" value="" type="text" />
										</fieldset>
								</div>
								<div data-role="fieldcontain">
										<fieldset data-role="controlgroup">
												<label for="textinput3">
														Stor Loc
												</label>
												<input id="textinput3" placeholder="RM 22 A 03" value="" type="text" />
										</fieldset>
								</div>
						</div>
				</div>
				
				<input type="submit" value="Submit" data-inline="true" data-theme="b" />
		</div>		
</div>

<script>
	$(function(){
		populateActionDetails();
	});
	
	function isEmptyOrNull(str){
		return str === null || str === "" || /\W+/g.test(str)
	}
	
	function populateActionDetails(){
		$('#actions').on('pageshow', function(e,data){
			
			console.log("#action.beforeshow'");
			console.log($('.amr-selected'));
			
			var storageArea = $('.amr-selected #storage-area', data.prevPage).text().trim().replace(/\W+/g," ");
			var qty = $('.amr-selected #qty', data.prevPage).text().trim().replace(/\W+/g," ");
			var qty_avail = $('.amr-selected #qty_avail', data.prevPage).text().trim().replace(/\W+/g," ");
			var container_id = $('.amr-selected #container_id', data.prevPage).text().trim().replace(/\W+/g," ");

			console.log("<"+container_id+">");
			if(isEmptyOrNull(container_id)){
				$('.container-context-show').hide();
				$('.container-context-hide').show();
				console.log('no-container');
			} else {
				$('.container-context-show').show();
				$('.container-context-hide').hide();
				console.log('has-container');
			}
			
			console.log(storageArea);
			console.log(qty);
			console.log(qty_avail);
			console.log(container_id);
			
			
			listDoPage = data.prevPage;
			//console.log(listDoPage);
			$('#storage-location').val(storageArea);
			$('#storage-location-text').text(storageArea);
			$('#container').val(container_id);
			$('#qty-val').val(qty);
			$('#qty-avail-val').val(qty_avail);
		});						
	}
</script>
<%@include file="includes/footer.jsp"%>

