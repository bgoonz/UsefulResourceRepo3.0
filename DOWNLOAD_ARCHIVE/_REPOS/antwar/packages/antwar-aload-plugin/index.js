const _ = require('lodash');

module.exports = function () {
  return {
    bodyContent() {
      const React = require('react');

      return () => (
        React.createElement(
          'script',
          {
            dangerouslySetInnerHTML: {
              __html: 'function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t};window.onload=function(){aload();};' // eslint-disable-line max-len
            }
          }
        )
      );
    },
    itemProcessItems(items) {
      const cheerio = require('cheerio');

      _.each(items, function (item) {
        const $ = cheerio.load(item.content);

        $('img').each(function () {
          const el = $(this);
          const src = el.attr('src');

          el.removeAttr('src');
          el.attr('data-aload', src);
        });

        item.content = $.html(); // eslint-disable-line no-param-reassign
      });

      return items;
    }
  };
};
