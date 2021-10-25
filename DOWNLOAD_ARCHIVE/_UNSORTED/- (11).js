document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});