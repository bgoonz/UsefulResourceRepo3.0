$(function () {
    // make categories work
    //
    $('.tool-category').click(function () {
        var self = this;

        if ($('.tool-category-list:visible').length) {
            var listId = $('.tool-category-list:visible').attr('id');
            var categoryId = $(self).attr('id');
            listId = listId.replace("tool-category-list-", "");
            categoryId = categoryId.replace("tool-category-", "");
            if (listId == categoryId) {
                hideToolList();
            }
        }

        $('.tool-category').removeClass('active');
        $('.tool-category-title').removeClass('active');
        $('.tool-category-description').removeClass('active');
        $('.tool-category-explore-button').removeClass('active');

        $(this).addClass('active');
        $(this).find('.tool-category-title').addClass('active');
        $(this).find('.tool-category-description').addClass('active');
        $(this).find('.tool-category-explore-button').addClass('active');

        function displayToolList () {
            var toolList = $(self).next();
            if (toolList) { // last tool doesn't have a tool list yet
                toolList = toolList.clone();

                // find the last category in the current row
                //
                var allCategories = $('.tool-category');
                var lastCategoryInRow;
                for (var i = 0; i < allCategories.length; i++) {
                    var currentCategory = allCategories[i];
                    if ($(currentCategory).position().top > $(self).position().top) {
                        lastCategoryInRow = allCategories[i-1];
                        break;
                    }
                }
                if (!lastCategoryInRow) {
                    lastCategoryInRow = allCategories[allCategories.length-1];
                }

                toolList.insertAfter($(lastCategoryInRow)).slideDown("fast");
            }
        }

        function hideToolList (cb) {
            $('.tool-category-list:visible').slideUp("fast", function () {
                $(this).remove();
                if (cb) cb();
            });

        }

        if ($('.tool-category-list:visible').length) {
            hideToolList(function () {
                displayToolList();
            });
        }
        else {
            displayToolList();
        }
    });
});
