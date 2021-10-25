$(function(){
  $('.faq .question').on('click', function(e){
    e.preventDefault();
    console.log('click');
    // $('.faq .answer').hide();
    $(this).parent().find('.answer').slideToggle(300);
  });
});
