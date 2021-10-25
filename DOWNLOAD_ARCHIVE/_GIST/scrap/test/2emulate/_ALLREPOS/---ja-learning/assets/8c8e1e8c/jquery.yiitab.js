/**
 * jQuery Yii plugin file.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @link http://www.yiiframework.com/
 * @copyright Copyright &copy; 2008-2010 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 * @version $Id: jquery.yiitab.js 1827 2010-02-20 00:43:32Z qiang.xue $
 */

($ => {
  $.extend($.fn, {
    yiitab() {
      function activate(id) {
        const pos = id.indexOf("#");
        if (pos >= 0) {
          id = id.substring(pos);
        }
        const $tab = $(id);
        const $container = $tab.parent();
        $container.find(">ul a").removeClass("active");
        $container.find('>ul a[href="' + id + '"]').addClass("active");
        $container.children("div").hide();
        $tab.show();
      }

      this.find(">ul a").click(function (event) {
        const href = $(this).attr("href");
        const pos = href.indexOf("#");
        activate(href);
        if (
          pos == 0 ||
          (pos > 0 &&
            (window.location.pathname == "" ||
              window.location.pathname == href.substring(0, pos)))
        )
          return false;
      });

      // activate a tab based on the current anchor
      const url = decodeURI(window.location);
      const pos = url.indexOf("#");
      if (pos >= 0) {
        const id = url.substring(pos);
        if (this.find('>ul a[href="' + id + '"]').length > 0) {
          activate(id);
          return;
        }
      }
    },
  });
})(jQuery);
