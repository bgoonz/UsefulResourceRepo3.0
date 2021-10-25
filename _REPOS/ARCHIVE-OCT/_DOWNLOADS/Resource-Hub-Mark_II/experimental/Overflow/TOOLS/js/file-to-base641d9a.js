$(function () {
    // todo: move to mk* function
    //
    if ($('#tool-file-to-base64').length) {
        var fileSelector = '#file-select';
        var submitSelector = '#submit';
        var selectedFile;

        // make file selector work
        $(fileSelector).on('change', function (ev) {
            $('#action-error').hide();
            var file = ev.target.files[0];
            selectedFile = file;
            $(submitSelector).attr('disabled', false);
        });

        // make drag & drop work
        $('#drag-and-drop').on('dragover', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $('#drag-and-drop').addClass('hover');
        });
        $('#drag-and-drop').on('dragenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $('#drag-and-drop').addClass('hover');
        });
        $('#drag-and-drop').on('dragleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $('#drag-and-drop').removeClass('hover');
        });
        $('#drag-and-drop').on('dragend', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $('#drag-and-drop').removeClass('hover');
        });
        $('#drag-and-drop').on('drop', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $('#drag-and-drop').removeClass('hover');
            $('#action-error').hide();
            ev.dataTransfer = ev.originalEvent.dataTransfer;
            var file = ev.dataTransfer.files[0];
            $('#drag-and-drop-selected').text("Selected " + file.name);
            selectedFile = file;
            $(submitSelector).attr('disabled', false);
        });

        // make convert button work
        //
        $(submitSelector).click(function () {
            var reader = new FileReader();
            reader.onload = function () {
                // reader result
                var comma = reader.result.indexOf(',');
                var base64 = reader.result.substr(comma+1);

                $('#file-to-base64-output textarea').val(base64);
                $('#file-to-base64-output').slideDown();
            }
            reader.readAsDataURL(selectedFile);
        });
    }
});
