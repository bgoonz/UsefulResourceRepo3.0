/*
 * Template Name: Breezycv - Responsive vCard WordPress Theme
 * Author: lmpixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.5.1
 */

(function ($) {
  "use strict";
  var body = $("body");

  function imageCarousel() {
    $(".portfolio-page-carousel").each(function () {
      $(this).imagesLoaded(function () {
        $(".portfolio-page-carousel").owlCarousel({
          smartSpeed: 1200,
          items: 1,
          loop: true,
          dots: true,
          nav: true,
          navText: false,
          autoHeight: true,
          margin: 10,
        });
      });
    });
  }

  // Custom scroll
  function customScroll() {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
      $(".animated-section, .single-page-content").each(function () {
        $(this).perfectScrollbar();
      });
    } else {
      $(".animated-section, .single-page-content").each(function () {
        $(this).perfectScrollbar("destroy");
      });
    }
  }
  // /Custom scroll

  // Hide Mobile menu
  function mobileMenuHide() {
    var windowWidth = $(window).width(),
      siteHeader = $("#site_header");

    if (windowWidth < 1025) {
      siteHeader.addClass("mobile-menu-hide");
      $(".menu-toggle").removeClass("open");
      setTimeout(function () {
        siteHeader.addClass("animate");
      }, 500);
    } else {
      siteHeader.removeClass("animate");
    }
  }
  // /Hide Mobile menu

  // Custom scroll
  function updateScroll() {
    $(".animated-section, .single-page-content").each(function () {
      $(this).perfectScrollbar("update");
    });
  }
  // /Custom scroll

  // Ajax Pages loader
  function ajaxLoader() {
    var ajaxLoadedContent = $("#page-ajax-loaded");
    function showContent() {
      ajaxLoadedContent.removeClass("animated-section-moveToRight closed");
      ajaxLoadedContent.show();
      $("body").addClass("ajax-page-visible");
    }
    function hideContent() {
      $("#page-ajax-loaded").addClass("animated-section-moveToRight closed");
      $("body").removeClass("ajax-page-visible");
      setTimeout(function () {
        $("#page-ajax-loaded.closed").html("");
        ajaxLoadedContent.hide();
        $("#page-ajax-loaded").append(
          '<div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>'
        );
      }, 500);
    }

    $(document)
      .on(
        "click",
        ".site-auto-menu, #portfolio-page-close-button",
        function (e) {
          e.preventDefault();
          hideContent();
        }
      )
      .on("click", ".ajax-page-load", function () {
        var toLoad = $(this).attr("href") + "?ajax=true";
        showContent();
        ajaxLoadedContent.load(toLoad, function () {
          imageCarousel();

          var $gallery_container = $("#portfolio-gallery-grid");
          $gallery_container.imagesLoaded(function () {
            $gallery_container.masonry();
          });

          $(".portfolio-page-wrapper .portfolio-grid").each(function () {
            $(this).magnificPopup({
              delegate: "a.gallery-lightbox",
              type: "image",
              gallery: {
                enabled: true,
              },
            });
          });
        });

        return false;
      });
  }
  // /Ajax Pages loader

  // Contact form validator
  $(function () {
    $(".contact-form").each(function () {
      var contact_form_id = $(this).attr("id"),
        contact_form = $("#" + contact_form_id + ".contact-form");

      contact_form.validator();

      contact_form.on("submit", function (e) {
        if (!e.isDefaultPrevented()) {
          $.ajax({
            type: "POST",
            url: ajaxurl,
            data: $(this).serialize() + "&action=breezycv_contact_action",
            success: function (data) {
              var result = JSON.parse(data);
              var messageAlert = "alert-" + result.type;
              var messageText = result.message;

              var alertBox =
                '<div class="alert ' +
                messageAlert +
                ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                messageText +
                "</div>";
              if (messageAlert && messageText) {
                contact_form.find(".messages").html(alertBox);
                if (messageAlert == "alert-success") {
                  $(".contact-form")[0].reset();
                }
              }
            },
          });
          return false;
        }
      });
    });
  });
  // /Contact form validator

  // Portfolio subpage filters
  function portfolio_init() {
    $(".portfolio-content").each(function () {
      var portfolio_grid_container = $(this),
        portfolio_grid_container_id = $(this).attr("id"),
        portfolio_grid = $(
          "#" + portfolio_grid_container_id + " .portfolio-grid"
        ),
        portfolio_filter = $(
          "#" + portfolio_grid_container_id + " .portfolio-filters"
        ),
        portfolio_filter_item = $(
          "#" + portfolio_grid_container_id + " .portfolio-filters .filter"
        );

      if (portfolio_grid) {
        portfolio_grid.shuffle({
          speed: 450,
          itemSelector: "figure",
        });

        $(".site-auto-menu").on("click", "a", function (e) {
          portfolio_grid.shuffle("update");
        });

        portfolio_filter.on("click", ".filter", function (e) {
          portfolio_grid.shuffle("update");
          e.preventDefault();
          portfolio_filter_item.parent().removeClass("active");
          $(this).parent().addClass("active");
          portfolio_grid.shuffle("shuffle", $(this).attr("data-group"));
        });
      }
    });
  }
  // /Portfolio subpage filters

  // Animate layout
  function animateLayout() {
    var windowWidth = $(window).width(),
      animatedContainer = "",
      blogSidebar = $(".blog-sidebar"),
      animateType = $("#page_container").attr("data-animation");

    if (windowWidth > 1024) {
      animatedContainer = $(".page-container");
    } else {
      animatedContainer = $(".site-main");
    }

    animatedContainer.addClass("animated " + animateType);
    $(".page-scroll").addClass("add-prespective");
    animatedContainer.addClass("transform3d");
    setTimeout(function () {
      blogSidebar.removeClass("hidden-sidebar");
      $(".page-scroll").removeClass("add-prespective");
      animatedContainer.removeClass("transform3d");
    }, 1000);
  }
  // /Animate layout

  //On Window load & Resize
  $(window)
    .on("load", function () {
      //Load
      // Animation on Page Loading
      $(".preloader").fadeOut(800, "linear");
      animateLayout();

      // initializing page transition.
      var ptPage = $(".animated-sections");
      if (ptPage[0]) {
        PageTransitions.init({
          menu: "ul.main-menu",
        });
      }
    })
    .on("resize", function () {
      //Resize
      updateScroll();
      customScroll();
    });

  // On Document Load
  $(document).on("ready", function () {
    var movementStrength = 15;
    var height = movementStrength / $(document).height();
    var width = movementStrength / $(document).width();
    $("body").on("mousemove", function (e) {
      var pageX = e.pageX - $(document).width() / 2,
        pageY = e.pageY - $(document).height() / 2,
        newvalueX = width * pageX * -1,
        newvalueY = height * pageY * -1;
      if ($(".page-wrapper").hasClass("bg-move-effect")) {
        var elements = $(
          ".home-photo .hp-inner:not(.without-move), .lm-animated-bg"
        );
      } else {
        var elements = $(".home-photo .hp-inner:not(.without-move)");
      }
      elements.addClass("transition");
      elements.css({
        "background-position":
          "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )",
      });

      setTimeout(function () {
        elements.removeClass("transition");
      }, 300);
    });

    customScroll();

    // Initialize Portfolio grid
    var $portfolio_container = $(".portfolio-grid"),
      $gallery_container = $("#portfolio-gallery-grid");

    $gallery_container.imagesLoaded(function () {
      $gallery_container.masonry();
    });

    $portfolio_container.imagesLoaded(function () {
      portfolio_init(this);
    });

    imageCarousel();

    // Blog grid init
    var $container = $(".blog-masonry");
    $container.imagesLoaded(function () {
      $container.masonry({
        itemSelector: ".item",
        resize: false,
      });
    });

    // Mobile menu
    $(".menu-toggle").on("click", function () {
      $("#site_header").addClass("animate");
      $("#site_header").toggleClass("mobile-menu-hide");
      $(".menu-toggle").toggleClass("open");
    });

    // Mobile menu hide on main menu item click
    $(".main-menu").on("click", "a", function (e) {
      mobileMenuHide();
    });

    // Lightbox init
    body.magnificPopup({
      fixedContentPos: false,
      delegate: "a.lightbox.mfp-iframe",
      type: "image",
      removalDelay: 300,

      // Class that is added to popup wrapper and background
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: "mfp-fade",
      image: {
        // options for image content type
        titleSrc: "title",
        gallery: {
          enabled: true,
        },
      },

      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '<div class="mfp-title mfp-bottom-iframe-title"></div>' +
          "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
          youtube: {
            index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

            id: null, // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }

            src: "%id%?autoplay=1", // URL that will be set as a source for iframe.
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed",
          },
        },

        srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      },

      callbacks: {
        markupParse: function (template, values, item) {
          values.title = item.el.attr("title");
        },
      },
    });

    $(".ajax-page-load-link").magnificPopup({
      type: "ajax",
      removalDelay: 300,
      mainClass: "mfp-fade",
      gallery: {
        enabled: true,
      },
    });

    $(".portfolio-page-wrapper .portfolio-grid").each(function () {
      $(this).magnificPopup({
        delegate: "a.gallery-lightbox",
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    });

    //Form Controls
    $(".form-control")
      .val("")
      .on("focusin, click", function () {
        $(this)
          .parent(".form-group:not(.form-group-checkbox)")
          .addClass("form-group-focus");
      })
      .on("focusout", function () {
        if ($(this).val().length === 0) {
          $(this)
            .parent(".form-group:not(.form-group-checkbox)")
            .removeClass("form-group-focus");
        }
      });

    $("body").append(
      '<div id="page-ajax-loaded" class="page-portfolio-loaded animated animated-section-moveFromLeft" style="display: none"><div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>'
    );
    ajaxLoader();

    // Sidebar toggle
    $(".sidebar-toggle").on("click", function () {
      $("#blog-sidebar").toggleClass("open");
      $(this).toggleClass("open");
    });

    $(".section-content, .content-wrapper").mutate(
      "height",
      function (element, info) {
        updateScroll();
      }
    );
  });
})(jQuery);
