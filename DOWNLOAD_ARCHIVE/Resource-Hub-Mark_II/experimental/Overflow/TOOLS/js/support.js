$(function () {
    // make private support work
    $('#contact-submit input').click(function (ev) {
        ev.preventDefault();
        var button = $(this);

        var email = $('input[name="email"]').val();
        var subject = $('input[name="subject"]').val();
        var message = $('textarea').val();
        email = email.replace(/^\s+/, '').replace(/\s+$/, '');
        subject = subject.replace(/^\s+/, '').replace(/\s+$/, '');
        message = message.replace(/^\s+/, '').replace(/\s+$/, '');

        if (email.length == 0) {
            $('#contact-error').text("Email address is missing!");
            $('#contact-error').show();
            return;
        }

        if (email.length != 0) {
            if (!/.+@.+\..+/.test(email)) {
                $('#contact-error').text("Invalid email address!");
                $('#contact-error').show();
                return;
            }
        }

        if (subject.length < 10) {
            $('#contact-error').text("Subject is too short!");
            $('#contact-error').show();
            return;
        }

        if (message.length < 30) {
            $('#contact-error').text("The message is too short!");
            $('#contact-error').show();
            return;
        }

        var oldValue = button.val();
        button.val("Plase wait...");
        $.post('/api/account/support', {
            email : email,
            subject : subject,
            message : message
        }, function (data) {
            button.val(oldValue);
            if (/^error/i.test(data)) {
                $('#contact-error').text(data);
                $('#contact-error').show();
            }
            else {
                $('#contact-error').hide();
                $('#contact-success').text("New ticket created! We'll get back to you shortly.");
                $('#contact-success').show();
                button.prop('disabled', true);
            }
        });
    });

    // make public support work
    $('#support #ask form #ask-submit').click(function (ev) {
        ev.preventDefault();
        var button = $(this);

        var name = $('#support #ask input[name="name"]').val();
        var title = $('#support #ask input[name="title"]').val();
        var question = $('#support #ask textarea').val();
        name = name.replace(/^\s+/, '').replace(/\s+$/, '');
        title = title.replace(/^\s+/, '').replace(/\s+$/, '');
        question = question.replace(/^\s+/, '').replace(/\s+$/, '');

        if (name.length == 0) {
            $('#support-error').text("Please enter your name!");
            $('#support-error').show();
            return;
        }

        if (title.length < 10) {
            $('#support-error').text("Title is too short!");
            $('#support-error').show();
            return;
        }

        if (question.length < 30) {
            $('#support-error').text("Question is too short!");
            $('#support-error').show();
            return;
        }

        var oldValue = button.val();
        button.val("Plase wait...");
        $.post('/api/support/public', {
            name : name,
            title : title,
            question : question
        }, function (data) {
            button.val(oldValue);
            if (/^error/i.test(data)) {
                $('#support-error').text(data);
                $('#support-error').show();
            }
            else {
                $('#support-error').hide();
                button.prop('disabled', true);
                window.location.href = "/support/" + data;
            }
        });
    });

    // make answers work
    $('#support #answer form #answer-submit').click(function (ev) {
        ev.preventDefault();
        var button = $(this);

        var question_id = $('#support #answer input[name="question-id"]').val();
        var name = $('#support #answer input[name="name"]').val();
        var answer = $('#support #answer textarea').val();

        name = name.replace(/^\s+/, '').replace(/\s+$/, '');
        answer = answer.replace(/^\s+/, '').replace(/\s+$/, '');

        if (name.length == 0) {
            $('#support-error').text("Please enter your name!");
            $('#support-error').show();
            return;
        }

        if (answer.length < 10) {
            $('#support-error').text("Answer is too short!");
            $('#support-error').show();
            return;
        }

        var oldValue = button.val();
        button.val("Plase wait...");
        $.post('/api/support/public/answer', {
            name : name,
            answer : answer,
            question_id : question_id
        }, function (data) {
            button.val(oldValue);
            if (/^error/i.test(data)) {
                $('#support-error').text(data);
                $('#support-error').show();
            }
            else {
                $('#support-error').hide();
                button.prop('disabled', true);
                window.location.href = "/support/" + question_id;
            }
        });
    });

    // make copy support email easier
    $('#support #social .item a.copy').click(function (ev) {
        ev.preventDefault();
        $('#support #social .email input').select();
        document.execCommand('copy');
    });
});
