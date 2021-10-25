/*
 * Async Treeview 0.1 - Lazy-loading extension for Treeview
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 *
 * Copyright (c) 2007 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id$
 *
 */

($ => {
  function load(settings, root, child, container) {
    function createNode(parent) {
      const current = $("<li/>")
        .attr("id", this.id || "")
        .html("<span>" + this.text + "</span>")
        .appendTo(parent);
      if (this.classes) {
        current.children("span").addClass(this.classes);
      }
      if (this.expanded) {
        current.addClass("open");
      }
      if (this.hasChildren || (this.children && this.children.length)) {
        const branch = $("<ul/>").appendTo(current);
        if (this.hasChildren) {
          current.addClass("hasChildren");
          createNode.call(
            {
              classes: "placeholder",
              text: "&nbsp;",
              children: [],
            },
            branch
          );
        }
        if (this.children && this.children.length) {
          $.each(this.children, createNode, [branch]);
        }
      }
    }
    $.ajax(
      $.extend(
        true,
        {
          url: settings.url,
          dataType: "json",
          data: {
            root: root,
          },
          success(response) {
            child.empty();
            $.each(response, createNode, [child]);
            $(container).treeview({ add: child });
          },
        },
        settings.ajax
      )
    );
    /*
	$.getJSON(settings.url, {root: root}, function(response) {
		function createNode(parent) {
			var current = $("<li/>").attr("id", this.id || "").html("<span>" + this.text + "</span>").appendTo(parent);
			if (this.classes) {
				current.children("span").addClass(this.classes);
			}
			if (this.expanded) {
				current.addClass("open");
			}
			if (this.hasChildren || this.children && this.children.length) {
				var branch = $("<ul/>").appendTo(current);
				if (this.hasChildren) {
					current.addClass("hasChildren");
					createNode.call({
						classes: "placeholder",
						text: "&nbsp;",
						children:[]
					}, branch);
				}
				if (this.children && this.children.length) {
					$.each(this.children, createNode, [branch])
				}
			}
		}
		child.empty();
		$.each(response, createNode, [child]);
        $(container).treeview({add: child});
    });
    */
  }

  const proxied = $.fn.treeview;
  $.fn.treeview = function (settings) {
    if (!settings.url) {
      return proxied.apply(this, arguments);
    }
    const container = this;
    if (!container.children().size()) load(settings, "source", this, container);
    const userToggle = settings.toggle;
    return proxied.call(
      this,
      $.extend({}, settings, {
        collapsed: true,
        toggle() {
          const $this = $(this);
          if ($this.hasClass("hasChildren")) {
            const childList = $this.removeClass("hasChildren").find("ul");
            load(settings, this.id, childList, container);
          }
          if (userToggle) {
            userToggle.apply(this, arguments);
          }
        },
      })
    );
  };
})(jQuery);
