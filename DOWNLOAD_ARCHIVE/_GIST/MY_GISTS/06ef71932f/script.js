// Some of this code is me
// Some of this code is this fiddle http://jsfiddle.net/dNfsJ/ thx to AJ for finding it for me.

$(".slide").each(function (i) {
  var item = $(this);
  var item_clone = item.clone();
  item.data("clone", item_clone);
  var position = item.position();
  item_clone
    .css({
      left: position.left,
      top: position.top,
      visibility: "hidden",
    })
    .attr("data-pos", i + 1);

  $("#cloned-slides").append(item_clone);
});

$(".all-slides").sortable({
  axis: "y",
  revert: true,
  scroll: false,
  placeholder: "sortable-placeholder",
  cursor: "move",

  start: function (e, ui) {
    ui.helper.addClass("exclude-me");
    $(".all-slides .slide:not(.exclude-me)").css("visibility", "hidden");
    ui.helper.data("clone").hide();
    $(".cloned-slides .slide").css("visibility", "visible");
  },

  stop: function (e, ui) {
    $(".all-slides .slide.exclude-me").each(function () {
      var item = $(this);
      var clone = item.data("clone");
      var position = item.position();

      clone.css("left", position.left);
      clone.css("top", position.top);
      clone.show();

      item.removeClass("exclude-me");
    });

    $(".all-slides .slide").each(function () {
      var item = $(this);
      var clone = item.data("clone");

      clone.attr("data-pos", item.index());
    });

    $(".all-slides .slide").css("visibility", "visible");
    $(".cloned-slides .slide").css("visibility", "hidden");
  },

  change: function (e, ui) {
    $(".all-slides .slide:not(.exclude-me)").each(function () {
      var item = $(this);
      var clone = item.data("clone");
      clone.stop(true, false);
      var position = item.position();
      clone.animate(
        {
          left: position.left,
          top: position.top,
        },
        200
      );
    });
  },
});
