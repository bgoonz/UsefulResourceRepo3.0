/// <reference path="../../../lib/jquery-1.2.6.js" />
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2009 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.2.2 (03/09/2009 22:39:06)
*/
($ => {
  const pasteEventName = ($.browser.msie ? "paste" : "input") + ".mask";
  const iPhone = window.orientation != undefined;

  $.mask = {
    //Predefined character definitions
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]",
    },
  };

  $.fn.extend({
    //Helper Function for Caret positioning
    caret(begin, end) {
      if (this.length == 0) return;
      if (typeof begin == "number") {
        end = typeof end == "number" ? end : begin;
        return this.each(function () {
          if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(begin, end);
          } else if (this.createTextRange) {
            const range = this.createTextRange();
            range.collapse(true);
            range.moveEnd("character", end);
            range.moveStart("character", begin);
            range.select();
          }
        });
      } else {
        if (this[0].setSelectionRange) {
          begin = this[0].selectionStart;
          end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          const range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart("character", -100000);
          end = begin + range.text.length;
        }
        return { begin: begin, end: end };
      }
    },
    unmask() {
      return this.trigger("unmask");
    },
    mask(mask, settings) {
      if (!mask && this.length > 0) {
        const input = $(this[0]);
        var tests = input.data("tests");
        return $.map(input.data("buffer"), (c, i) => {
          return tests[i] ? c : null;
        }).join("");
      }
      settings = $.extend(
        {
          placeholder: "_",
          completed: null,
        },
        settings
      );

      const defs = $.mask.definitions;
      var tests = [];
      let partialPosition = mask.length;
      let firstNonMaskPos = null;
      let len = mask.length;

      $.each(mask.split(""), (i, c) => {
        if (c == "?") {
          len--;
          partialPosition = i;
        } else if (defs[c]) {
          tests.push(new RegExp(defs[c]));
          if (firstNonMaskPos == null) firstNonMaskPos = tests.length - 1;
        } else {
          tests.push(null);
        }
      });

      return this.each(function () {
        const input = $(this);
        const buffer = $.map(mask.split(""), (c, i) => {
          if (c != "?") return defs[c] ? settings.placeholder : c;
        });
        let ignore = false; //Variable for ignoring control keys
        let focusText = input.val();

        input.data("buffer", buffer).data("tests", tests);

        function seekNext(pos) {
          while (++pos <= len && !tests[pos]);
          return pos;
        }

        function shiftL(pos) {
          while (!tests[pos] && --pos >= 0);
          for (let i = pos; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder;
              const j = seekNext(i);
              if (j < len && tests[i].test(buffer[j])) {
                buffer[i] = buffer[j];
              } else break;
            }
          }
          writeBuffer();
          input.caret(Math.max(firstNonMaskPos, pos));
        }

        function shiftR(pos) {
          for (let i = pos, c = settings.placeholder; i < len; i++) {
            if (tests[i]) {
              const j = seekNext(i);
              const t = buffer[i];
              buffer[i] = c;
              if (j < len && tests[j].test(t)) c = t;
              else break;
            }
          }
        }

        function keydownEvent(e) {
          const pos = $(this).caret();
          const k = e.keyCode;
          ignore = k < 16 || (k > 16 && k < 32) || (k > 32 && k < 41);

          //delete selection before proceeding
          if (pos.begin - pos.end != 0 && (!ignore || k == 8 || k == 46))
            clearBuffer(pos.begin, pos.end);

          //backspace, delete, and escape get special treatment
          if (k == 8 || k == 46 || (iPhone && k == 127)) {
            //backspace/delete
            shiftL(pos.begin + (k == 46 ? 0 : -1));
            return false;
          } else if (k == 27) {
            //escape
            input.val(focusText);
            input.caret(0, checkVal());
            return false;
          }
        }

        function keypressEvent(e) {
          if (ignore) {
            ignore = false;
            //Fixes Mac FF bug on backspace
            return e.keyCode == 8 ? false : null;
          }
          e = e || window.event;
          const k = e.charCode || e.keyCode || e.which;
          const pos = $(this).caret();

          if (e.ctrlKey || e.altKey || e.metaKey) {
            //Ignore
            return true;
          } else if ((k >= 32 && k <= 125) || k > 186) {
            //typeable characters
            const p = seekNext(pos.begin - 1);
            if (p < len) {
              const c = String.fromCharCode(k);
              if (tests[p].test(c)) {
                shiftR(p);
                buffer[p] = c;
                writeBuffer();
                const next = seekNext(p);
                $(this).caret(next);
                if (settings.completed && next == len)
                  settings.completed.call(input);
              }
            }
          }
          return false;
        }

        function clearBuffer(start, end) {
          for (let i = start; i < end && i < len; i++) {
            if (tests[i]) buffer[i] = settings.placeholder;
          }
        }

        function writeBuffer() {
          return input.val(buffer.join("")).val();
        }

        function checkVal(allow) {
          //try to place characters where they belong
          const test = input.val();
          let lastMatch = -1;
          for (var i = 0, pos = 0; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder;
              while (pos++ < test.length) {
                const c = test.charAt(pos - 1);
                if (tests[i].test(c)) {
                  buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }
              if (pos > test.length) break;
            } else if (buffer[i] == test[pos] && i != partialPosition) {
              pos++;
              lastMatch = i;
            }
          }
          if (!allow && lastMatch + 1 < partialPosition) {
            input.val("");
            clearBuffer(0, len);
          } else if (allow || lastMatch + 1 >= partialPosition) {
            writeBuffer();
            if (!allow) input.val(input.val().substring(0, lastMatch + 1));
          }
          return partialPosition ? i : firstNonMaskPos;
        }

        if (!input.attr("readonly"))
          input
            .one("unmask", () => {
              input.unbind(".mask").removeData("buffer").removeData("tests");
            })
            .bind("focus.mask", () => {
              focusText = input.val();
              const pos = checkVal();
              writeBuffer();
              setTimeout(() => {
                if (pos == mask.length) input.caret(0, pos);
                else input.caret(pos);
              }, 0);
            })
            .bind("blur.mask", () => {
              checkVal();
              if (input.val() != focusText) input.change();
            })
            .bind("keydown.mask", keydownEvent)
            .bind("keypress.mask", keypressEvent)
            .bind(pasteEventName, () => {
              setTimeout(() => {
                input.caret(checkVal(true));
              }, 0);
            });

        checkVal(); //Perform initial check for existing values
      });
    },
  });
})(jQuery);
