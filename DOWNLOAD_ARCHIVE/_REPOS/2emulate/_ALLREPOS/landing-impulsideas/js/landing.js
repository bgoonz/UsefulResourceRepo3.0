$(function(){
  $('#boton').click(function(e){
    e.preventDefault();
    $.post('http://impulsideas-2014.herokuapp.com/contact_form.js', $('form').serialize());
  });
});
