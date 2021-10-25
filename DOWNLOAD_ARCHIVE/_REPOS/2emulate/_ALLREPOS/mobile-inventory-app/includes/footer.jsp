        <script>
            //App custom javascript

						$(function(){
							markSelectedItemInListView();
							$(document).on('pageinit',function(){
								markSelectedItemInListView();
							});
						});
						
						function markSelectedItemInListView(){
							$('ul[data-role="listview"] li .ui-btn-text').on('click', function(){
								$('.amr-selected').removeClass('amr-selected');
								$(this).addClass("amr-selected");
								console.log('marked ==> ');
								console.log($(this));
							});
						}
        </script>
    </body>
</html>