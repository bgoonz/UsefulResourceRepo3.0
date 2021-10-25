ASQ.react(function (proceed) {
  // called only once, lets you set up one or
  // more event handlers to call `proceed()`
  $("#form").submit(proceed);
})
  // the rest of this sequence will get fired off
  // EACH TIME the form is submitted
  .val(function (evt) {
    return evt.target;
  })
  .seq(validateForm)
  .seq(submitFormData)
  .or(handleError);
