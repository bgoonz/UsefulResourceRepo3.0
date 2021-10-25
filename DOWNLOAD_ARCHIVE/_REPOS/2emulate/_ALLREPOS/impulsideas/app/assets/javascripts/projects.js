// Live Update on Create
var $form = $('form#new_project');
var $prev = $('#project_thumbnail');

if ($form && $prev) {
  $form.find('#project_title').on('keyup', function (e) {
    $prev.find('#title').text($(this).val());
  });

  $form.find('#project_short_description').on('keyup', function (e) {
    $prev.find('#description').text($(this).val());
  });

  $form.find('#project_funding_goal').on('keyup', function (e) {
    $prev.find('#goal').text($(this).val());
  });

  $form.find('#project_funding_duration').on('keyup', function (e) {
    $prev.find('#duration').text($(this).val());
  });

  $form.find('#project_short_description').on('keyup', function (e) {
    $prev.find('#description').text($(this).val());
  });
}
