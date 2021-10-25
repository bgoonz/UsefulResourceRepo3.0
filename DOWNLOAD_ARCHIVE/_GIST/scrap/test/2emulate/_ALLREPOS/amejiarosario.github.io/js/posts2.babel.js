"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// wait for everything to be loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    const ScrollSpy = /*#__PURE__*/(() => {
      function ScrollSpy() {
        const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$activeClass = _ref.activeClass, activeClass = _ref$activeClass === void 0 ? 'active' : _ref$activeClass, _ref$tocLevelPrefixCl = _ref.tocLevelPrefixClass, tocLevelPrefixClass = _ref$tocLevelPrefixCl === void 0 ? '.toc-level-' : _ref$tocLevelPrefixCl, _ref$maxLevel = _ref.maxLevel, maxLevel = _ref$maxLevel === void 0 ? 6 : _ref$maxLevel, _ref$debug = _ref.debug, debug = _ref$debug === void 0 ? false : _ref$debug;

        _classCallCheck(this, ScrollSpy);

        this.tocTree = [];
        this.currentActives = [];
        this.tocLevelPrefixClass = tocLevelPrefixClass;
        this.activeClass = activeClass;
        this.maxLevel = maxLevel;
        this.debug = debug;
        if (this.debug) console.log({
          activeClass: activeClass,
          tocLevelPrefixClass: tocLevelPrefixClass,
          maxLevel: maxLevel,
          debug: debug
        });
      }

      _createClass(ScrollSpy, [{
        key: "getTocItems",
        value: function getTocItems() {
          // revese needed for easy find last on #setActiveClasses
          const traverseTree = function traverseTree(el) {
            let _el$children$;

            return Array.from((el === null || el === void 0 ? void 0 : (_el$children$ = el.children[1]) === null || _el$children$ === void 0 ? void 0 : _el$children$.children) || []).map(child => {
              return {
                item: child,
                children: traverseTree(child)
              };
            }).reverse();
          }; // .toc-child > .toc-item


          this.tocTree = Array.from(document.querySelectorAll('.toc > .toc-item')).map(item => {
            return {
              item: item,
              children: traverseTree(item)
            };
          }).reverse();
          if (this.debug) console.log({
            tocTree: this.tocTree
          });
        }
      }, {
        key: "calculateDocItemsOffsets",
        value: function calculateDocItemsOffsets() {
          const traverseTree = function traverseTree(root) {
            root.forEach(_ref2 => {
              const item = _ref2.item, children = _ref2.children;
              const id = item.querySelector('.toc-link').href.split('#')[1];
              const el = document.getElementById(decodeURIComponent(id)); // in case of emoji was used

              const offset = el.offsetTop - 1;
              item.setAttribute('data-offset', offset);
              traverseTree(children);
            });
          };

          traverseTree(this.tocTree);
        }
      }, {
        key: "setActiveClasses",
        value: function setActiveClasses() {
          const _this = this;

          this.removeCurrentClasses();
          const current = getScrollY();

          const traverseTree = function traverseTree(root) {
            const index = root.findIndex(d => {
              return current >= Number(d.item.getAttribute('data-offset'));
            }); // console.log({index, root})

            if (index >= 0) {
              const _root$index = root[index], item = _root$index.item, children = _root$index.children;
              const link = item.querySelector('.toc-link');
              item.classList.add(_this.activeClass); // li

              link.classList.add(_this.activeClass); // a

              _this.currentActives.push(item, link);

              traverseTree(children);
            }
          };

          traverseTree(this.tocTree);
        }
      }, {
        key: "removeCurrentClasses",
        value: function removeCurrentClasses() {
          const _this2 = this;

          this.currentActives.forEach(el => {
            return el.classList.remove(_this2.activeClass);
          });
          this.currentActives = [];
        }
      }]);

      return ScrollSpy;
    })();

    const scrollSpy = new ScrollSpy(); // const scrollSpy = new ScrollSpy({debug: true});

    scrollSpy.getTocItems();
    scrollSpy.calculateDocItemsOffsets();
    window.addEventListener("scroll", () => {
      return scrollSpy.setActiveClasses();
    });
    window.addEventListener("resize", () => {
      return scrollSpy.calculateDocItemsOffsets();
    });
  } catch (error) {
    console.info(error);
  }
});