"use strict";

const app = {}; // GA: Global functions

function createFunctionWithTimeout(callback, opt_timeout) {
  let called = false;

  function fn() {
    if (!called) {
      called = true;
      callback();
    }
  }

  setTimeout(fn, opt_timeout || 1000);
  return fn;
}

const track = function track(url, category, internal) {
  category = category || 'outbound';
  ga('send', 'event', category, 'click', url, {
    'transport': 'beacon',
    'hitCallback': function hitCallback() {
      if (!internal) {
        window.open(url, '_blank'); // new tab
        //  document.location = url; // same page
      }
    }
  });
}; // Overlay search button
// var searchButton = document.getElementById('search-modal');
// if (searchButton) {
//   searchButton.addEventListener('click', openModal);
// }
//
// function openModal() {
//   var overlay = document.getElementById('search-overlay');
//   if (overlay) {
//     overlay.style.display = 'block';
//   }
// }
//
// function closeModal() {
//   var overlay = document.getElementById('search-overlay');
//   if (overlay) {
//     overlay.style.display = 'none';
//   }
// }
//
// var closeOverlay = document.getElementById('close-search-overlay');
// if (closeOverlay) {
//   closeOverlay.addEventListener('click', closeModal);
// }


function loadOverlay() {
  const body = document.body, overlay = document.querySelector('.overlay'), overlayBtts = document.querySelectorAll('a[class$="overlay"]');
  [].forEach.call(overlayBtts, btt => {
    btt.addEventListener('click', function () {
      /* Detect the button class name */
      const overlayOpen = this.className === 'open-overlay'; // triggers search

      if (overlayOpen && app.search && app.search.start) {
        app.search.start();
        searchTracking();
        filterTracker();
      }
      /* Toggle the aria-hidden state on the overlay and the
       no-scroll class on the body */


      overlay.setAttribute('aria-hidden', !overlayOpen);
      body.classList.toggle('noscroll', overlayOpen);
      /* On some mobile browser when the overlay was previously
       opened and scrolled, if you open it again it doesn't
       reset its scrollTop property */

      overlay.scrollTop = 0;
    }, false);
  });
}

function searchTracking() {
  const search = document.getElementById('search-box');
  let t;

  if (search) {
    search.addEventListener('keypress', function onkeypress() {
      if (t) {
        clearTimeout(t);
      }

      t = setTimeout(() => {
        ga('send', 'event', 'search', 'term', search.value);
      }, 1000);
    });
  }
}

function filterTracker() {
  const classname = document.getElementsByClassName("facets");
  let t;
  let buffer = "";

  const myFunction = function myFunction(e) {
    const el = e.target;
    const name = (el.name || el.className) + ' ' + (el.value || el.textContent);
    buffer += name.trim() + '; ';

    if (t) {
      clearTimeout(t);
    }

    t = setTimeout(() => {
      const value = buffer.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
      ga('send', 'event', 'search', 'filter', value);
      buffer = "";
    }, 500);
  };

  for (let i = 0; i < classname.length; i++) {
    console.log(classname[i]);
    classname[i].addEventListener('click', myFunction, false);
  }
} // Onload scripts


window.onload = () => {
  app.search = loadSearch();
  loadOverlay();
};