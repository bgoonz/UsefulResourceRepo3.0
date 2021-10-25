<%@include file="includes/header.jsp"%>
<!-- main-page -->
<div data-role="page" data-theme="b" id="page1" style="background: url('http://t1.gstatic.com/images?q=tbn:ANd9GcTNV8CYXH4P5tW5tGMGhrxdTo-8UqFYQrs4FLjJ1s4Mkre6jHhNbNdlPOiL') repeat">
		<%@include file="includes/app-header.jsp"%>

		<!-- content -->
		<div data-role="content">
				<ul data-role="listview" data-divider-theme="b" data-inset="true">
						<li data-role="list-divider" role="heading">
								Main Menu
						</li>
						<li data-theme="c">
								<a href="./selectinv.do" data-transition="slide">
										Inventory Transfer
								</a>
						</li>
						<li data-theme="c">
								<a href="logoff.jsp" data-transition="slide">
										Log Off
								</a>
						</li>
				</ul>
		</div>
		<!-- /content -->

</div> <!-- /main-page  -->
<%@include file="includes/footer.jsp"%>