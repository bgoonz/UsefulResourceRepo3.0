(function ($) {
  "use strict";
  $(document).on("ready", function () {
    $(".portfolio-content").each(function () {
      var portfolio_grid_container = $(this),
        portfolio_grid_container_id = $(this).attr("id"),
        portfolio_grid = $(
          "#" + portfolio_grid_container_id + " .portfolio-grid"
        ),
        load_more_button = $(
          "#" + portfolio_grid_container_id + " .pf-load-more"
        ),
        start_page_count = 1;

      load_more_button.click(function (e) {
        e.preventDefault();

        var button = $(this),
          pages = portfolio_grid.attr("data-pages-num"),
          categories = portfolio_grid_container.attr("data-categories"),
          categories_array = categories.split(","),
          data = {
            action: "loadmore",
            query: start_page_count,
            page: start_page_count,
            categories: categories_array,
          };

        $.ajax({
          url: ajaxurl,
          data: data,
          type: "POST",
          beforeSend: function (xhr) {
            button.text(button.attr("data-load-text"));
          },
          success: function (data, html) {
            if (data) {
              button.text(button.attr("data-more-text"));
              start_page_count++;

              portfolio_grid.append(data);

              var $figure = portfolio_grid.find("figure:not(.shuffle-item)");

              $figure.imagesLoaded().always(function () {
                portfolio_grid.shuffle("appended", $figure);
              });

              if (start_page_count == pages) {
                button.remove(); // if last page, remove the button
              }
            } else {
              button.remove(); // if no data, remove the button as well
            }
          },
        });
      });
    });
  });
})(jQuery);
