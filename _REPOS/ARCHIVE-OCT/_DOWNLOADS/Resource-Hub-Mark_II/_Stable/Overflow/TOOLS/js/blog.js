$(function () {
  $("#email a").click(function (ev) {
    ev.preventDefault();

    if ($("#email-form").is(":hidden")) {
      $("#email-form").slideDown();
    } else {
      $("#email-form").slideUp();
    }
  });

  $('#email-form-submit input[name="submit"]').click(function (ev) {
    ev.preventDefault();

    var email = $('#email-form-email input[name="email"]').val();
    var blog_post_id = $('#email-form input[name="blog_post_id"]').val();

    email = email.replace(/^\s+/, "").replace(/\s+$/, "");
    if (email.length == 0) {
      $("#email-form-error").text("Empty email");
      $("#email-form-error").show();
      return;
    }

    if (!/.+@.+\..+/.test(email)) {
      $("#email-form-error").text("Invalid email");
      $("#email-form-error").show();
      return;
    }

    $("#email-form-error").hide();

    $('#email-form-submit input[name="submit"]').val("Sending...");
    $('#email-form-submit input[name="submit"]').attr("disabled", true);

    $.post(
      "/api/blog/email",
      {
        blog_post_id: blog_post_id,
        email: email,
      },
      function (data) {
        $('#email-form-submit input[name="submit"]').val("Send!");
        $('#email-form-submit input[name="submit"]').attr("disabled", false);

        if (/^error/i.test(data)) {
          $("#email-form-error").text(data);
          $("#email-form-error").show();
        } else {
          $("#email-form-success").text(
            "Hooray! You've mailed this blog post to " + email + "!"
          );
          $("#email-form-success").show();
        }
      }
    );
  });

  $('#subscribe-submit input[name="submit"]').click(function (ev) {
    ev.preventDefault();

    var email = $('#subscribe-email input[name="email"]').val();
    var blog_post_id = $('#subscribe input[name="blog_post_id"]').val();

    email = email.replace(/^\s+/, "").replace(/\s+$/, "");
    if (email.length == 0) {
      $("#subscribe-error").text("Empty email");
      $("#subscribe-error").show();
      return;
    }

    if (!/.+@.+\..+/.test(email)) {
      $("#subscribe-error").text("Invalid email");
      $("#subscribe-error").show();
      return;
    }

    $("#subscribe-error").hide();

    $.post(
      "/api/blog/subscribe",
      {
        email: email,
        blog_post_id: blog_post_id,
      },
      function (data) {
        if (/^error/i.test(data)) {
          $("#subscribe-error").text(data);
          $("#subscribe-error").show();
        } else {
          $("#subscribe-success").text(
            "Hooray! You've subscribed to broowserools's blog!"
          );
          $("#subscribe-success").show();
          $("#subscribe-extra-message").text(data);
          $("#subscribe-extra-message").show();
        }
      }
    );
  });

  $('#subscribe-email input[name="email"]').focus(function () {
    $.post("/api/ui-event", {
      event: "blog-email-subscribe-focus",
    });
  });
});
