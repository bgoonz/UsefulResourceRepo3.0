/*! For license information please see component---src-pages-index-js-76285d4252e8a211a04c.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "7W2i": function (e, t, a) {
      var n = a("SksO");
      (e.exports = function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n(e, t);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    Bnag: function (e, t) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    EbDI: function (e, t) {
      (e.exports = function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    Fxm3: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = function (e) {
        var t,
          a,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100;
        return function () {
          var l = +new Date();
          !!t && l < t + n
            ? (clearTimeout(a),
              (a = setTimeout(function () {
                (t = l), e();
              }, n)))
            : ((t = l), e());
        };
      };
      t.default = n;
    },
    Ijbi: function (e, t, a) {
      var n = a("WkPL");
      (e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    Nsbk: function (e, t) {
      function a(t) {
        return (
          (e.exports = a =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          a(t)
        );
      }
      (e.exports = a),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    RIqP: function (e, t, a) {
      var n = a("Ijbi"),
        l = a("EbDI"),
        r = a("ZhPi"),
        o = a("Bnag");
      (e.exports = function (e) {
        return n(e) || l(e) || r(e) || o();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    RXBc: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        r = a("7oih");
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var s = a("dI71"),
        i = a("YIkO"),
        c = a.n(i),
        m = a("dwco"),
        u = a.n(m),
        f = function (e) {
          return e.children;
        },
        p = (function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).handleClick = t.handleClick.bind(
                o(t)
              )),
              t
            );
          }
          Object(s.a)(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              u.a.polyfill();
            }),
            (a.handleClick = function (e) {
              e.preventDefault();
              var t = 0,
                a = !0,
                n = this.props,
                l = n.type,
                r = n.element,
                o = n.offset,
                s = n.timeout;
              if (l && r)
                switch (l) {
                  case "class":
                    a = !!(t = document.getElementsByClassName(r)[0]);
                    break;
                  case "id":
                    a = !!(t = document.getElementById(r));
                }
              a
                ? this.scrollTo(t, o, s)
                : console.log("Element not found: " + r);
            }),
            (a.scrollTo = function (e, t, a) {
              void 0 === t && (t = 0), void 0 === a && (a = null);
              var n = e
                ? e.getBoundingClientRect().top + window.pageYOffset
                : 0;
              a
                ? setTimeout(function () {
                    window.scroll({ top: n + t, left: 0, behavior: "smooth" });
                  }, a)
                : window.scroll({ top: n + t, left: 0, behavior: "smooth" });
            }),
            (a.render = function () {
              return l.a.createElement(
                f,
                null,
                "object" == typeof this.props.children
                  ? l.a.cloneElement(this.props.children, {
                      onClick: this.handleClick,
                    })
                  : l.a.createElement(
                      "span",
                      { onClick: this.handleClick },
                      this.props.children
                    )
              );
            }),
            t
          );
        })(l.a.Component),
        d = a("TUGy"),
        h = a.n(d),
        v = a("obyI"),
        g = a.n(v),
        b = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).state = {
                tabs: [
                  { content: "About", href: "about" },
                  { content: "Experience", href: "experience" },
                  { content: "Education", href: "education" },
                  { content: "Skills", href: "skills" },
                  { content: "Interests", href: "interests" },
                  { content: "Awards", href: "awards" },
                ],
                isCollapsed: !0,
              }),
              (a.toggleNavbar = a.toggleNavbar.bind(o(a))),
              a
            );
          }
          Object(s.a)(t, e);
          var a = t.prototype;
          return (
            (a.toggleNavbar = function () {
              this.setState({ isCollapsed: !this.state.isCollapsed });
            }),
            (a.render = function () {
              var e = this.state,
                t = e.tabs,
                a = e.isCollapsed;
              return l.a.createElement(
                "nav",
                {
                  className:
                    "navbar navbar-expand-lg navbar-dark bg-primary fixed-top",
                  id: "sideNav",
                },
                l.a.createElement(
                  "a",
                  { className: "navbar-brand", href: "#page-top" },
                  l.a.createElement(
                    "span",
                    { className: "d-block d-lg-none" },
                    g.a.firstName,
                    " ",
                    g.a.lastName
                  ),
                  l.a.createElement(
                    "span",
                    { className: "d-none d-lg-block" },
                    l.a.createElement("img", {
                      className:
                        "img-fluid img-profile rounded-circle mx-auto mb-2",
                      src: h.a,
                      alt: "",
                    })
                  )
                ),
                l.a.createElement(
                  "button",
                  {
                    className:
                      "navbar-toggler navbar-toggler-right " +
                      (a ? "collapsed" : ""),
                    type: "button",
                    "data-toggle": "collapse",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    onClick: this.toggleNavbar,
                  },
                  l.a.createElement("span", {
                    className: "navbar-toggler-icon",
                  })
                ),
                l.a.createElement(
                  "div",
                  {
                    className: "collapse navbar-collapse " + (a ? "" : "show"),
                    id: "navbarSupportedContent",
                  },
                  l.a.createElement(
                    c.a,
                    {
                      items: t.map(function (e) {
                        return e.href;
                      }),
                      currentClassName: "active",
                      offset: -300,
                      className: "navbar-nav",
                    },
                    t.map(function (e, t) {
                      var a = e.href,
                        n = e.content;
                      return l.a.createElement(
                        "li",
                        { className: "nav-item", key: a },
                        l.a.createElement(
                          p,
                          { type: "id", element: a },
                          l.a.createElement(
                            "a",
                            { className: "nav-link", href: "#" + a },
                            n
                          )
                        )
                      );
                    })
                  )
                )
              );
            }),
            t
          );
        })(n.Component);
      t.default = function () {
        return l.a.createElement(
          r.a,
          null,
          l.a.createElement(b, null),
          l.a.createElement(
            "div",
            { className: "container-fluid p-0" },
            l.a.createElement(
              "section",
              {
                className:
                  "resume-section p-3 p-lg-5 d-flex align-items-center",
                id: "about",
              },
              l.a.createElement(
                "div",
                { className: "w-100" },
                l.a.createElement(
                  "h1",
                  { className: "mb-0" },
                  g.a.firstName,
                  l.a.createElement(
                    "span",
                    { className: "text-primary" },
                    g.a.lastName
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "subheading mb-5" },
                  g.a.address,
                  " · ",
                  g.a.phone,
                  " ·",
                  l.a.createElement(
                    "a",
                    { href: "mailto:" + g.a.email },
                    g.a.email
                  )
                ),
                l.a.createElement(
                  "p",
                  { className: "lead mb-5" },
                  "I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                ),
                l.a.createElement(
                  "div",
                  { className: "social-icons" },
                  g.a.socialLinks.map(function (e) {
                    var t = e.icon,
                      a = e.url;
                    return l.a.createElement(
                      "a",
                      { key: a, href: a },
                      l.a.createElement("i", { className: "fab " + t })
                    );
                  })
                )
              )
            ),
            l.a.createElement("hr", { className: "m-0" }),
            l.a.createElement(
              "section",
              {
                className:
                  "resume-section p-3 p-lg-5 d-flex justify-content-center",
                id: "experience",
              },
              l.a.createElement(
                "div",
                { className: "w-100" },
                l.a.createElement("h2", { className: "mb-5" }, "Experience"),
                l.a.createElement(
                  "div",
                  {
                    className:
                      "resume-item d-flex flex-column flex-md-row justify-content-between mb-5",
                  },
                  l.a.createElement(
                    "div",
                    { className: "resume-content" },
                    l.a.createElement(
                      "h3",
                      { className: "mb-0" },
                      "Senior Web Developer"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "subheading mb-3" },
                      "Intelitec Solutions"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "resume-date text-md-right" },
                    l.a.createElement(
                      "span",
                      { className: "text-primary" },
                      "March 2013 - Present"
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  {
                    className:
                      "resume-item d-flex flex-column flex-md-row justify-content-between mb-5",
                  },
                  l.a.createElement(
                    "div",
                    { className: "resume-content" },
                    l.a.createElement(
                      "h3",
                      { className: "mb-0" },
                      "Web Developer"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "subheading mb-3" },
                      "Intelitec Solutions"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "resume-date text-md-right" },
                    l.a.createElement(
                      "span",
                      { className: "text-primary" },
                      "December 2011 - March 2013"
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  {
                    className:
                      "resume-item d-flex flex-column flex-md-row justify-content-between mb-5",
                  },
                  l.a.createElement(
                    "div",
                    { className: "resume-content" },
                    l.a.createElement(
                      "h3",
                      { className: "mb-0" },
                      "Junior Web Designer"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "subheading mb-3" },
                      "Shout! Media Productions"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "resume-date text-md-right" },
                    l.a.createElement(
                      "span",
                      { className: "text-primary" },
                      "July 2010 - December 2011"
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  {
                    className:
                      "resume-item d-flex flex-column flex-md-row justify-content-between",
                  },
                  l.a.createElement(
                    "div",
                    { className: "resume-content" },
                    l.a.createElement(
                      "h3",
                      { className: "mb-0" },
                      "Web Design Intern"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "subheading mb-3" },
                      "Shout! Media Productions"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "resume-date text-md-right" },
                    l.a.createElement(
                      "span",
                      { className: "text-primary" },
                      "September 2008 - June 2010"
                    )
                  )
                )
              )
            ),
            l.a.createElement("hr", { className: "m-0" }),
            l.a.createElement(
              "section",
              {
                className:
                  "resume-section p-3 p-lg-5 d-flex align-items-center",
                id: "education",
              },
              l.a.createElement(
                "div",
                { className: "w-100" },
                l.a.createElement("h2", { className: "mb-5" }, "Education"),
                l.a.createElement(
                  "div",
                  {
                    className:
                      "resume-item d-flex flex-column flex-md-row justify-content-between mb-5",
                  },
                  l.a.createElement(
                    "div",
                    { className: "resume-content" },
                    l.a.createElement(
                      "h3",
                      { className: "mb-0" },
                      "University of Colorado Boulder"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "subheading mb-3" },
                      "Bachelor of Science"
                    ),
                    l.a.createElement(
                      "div",
                      null,
                      "Computer Science - Web Development Track"
                    ),
                    l.a.createElement("p", null, "GPA: 3.23")
                  ),
                  l.a.createElement(
                    "div",
                    { className: "resume-date text-md-right" },
                    l.a.createElement(
                      "span",
                      { className: "text-primary" },
                      "August 2006 - May 2010"
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  {
                    className:
                      "resume-item d-flex flex-column flex-md-row justify-content-between",
                  },
                  l.a.createElement(
                    "div",
                    { className: "resume-content" },
                    l.a.createElement(
                      "h3",
                      { className: "mb-0" },
                      "James Buchanan High School"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "subheading mb-3" },
                      "Technology Magnet Program"
                    ),
                    l.a.createElement("p", null, "GPA: 3.56")
                  ),
                  l.a.createElement(
                    "div",
                    { className: "resume-date text-md-right" },
                    l.a.createElement(
                      "span",
                      { className: "text-primary" },
                      "August 2002 - May 2006"
                    )
                  )
                )
              )
            ),
            l.a.createElement("hr", { className: "m-0" }),
            l.a.createElement(
              "section",
              {
                className:
                  "resume-section p-3 p-lg-5 d-flex align-items-center",
                id: "skills",
              },
              l.a.createElement(
                "div",
                { className: "w-100" },
                l.a.createElement("h2", { className: "mb-5" }, "Skills"),
                l.a.createElement(
                  "div",
                  { className: "subheading mb-3" },
                  "Programming Languages & Tools"
                ),
                l.a.createElement(
                  "ul",
                  { className: "list-inline dev-icons" },
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-html5" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-css3-alt" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-js-square" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-angular" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-react" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-node-js" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-sass" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-less" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-wordpress" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-gulp" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-grunt" })
                  ),
                  l.a.createElement(
                    "li",
                    { className: "list-inline-item" },
                    l.a.createElement("i", { className: "fab fa-npm" })
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "subheading mb-3" },
                  "Workflow"
                ),
                l.a.createElement(
                  "ul",
                  { className: "fa-ul mb-0" },
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", { className: "fa-li fa fa-check" }),
                    "Mobile-First, Responsive Design"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", { className: "fa-li fa fa-check" }),
                    "Cross Browser Testing & Debugging"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", { className: "fa-li fa fa-check" }),
                    "Cross Functional Teams"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", { className: "fa-li fa fa-check" }),
                    "Agile Development & Scrum"
                  )
                )
              )
            ),
            l.a.createElement("hr", { className: "m-0" }),
            l.a.createElement(
              "section",
              {
                className:
                  "resume-section p-3 p-lg-5 d-flex align-items-center",
                id: "interests",
              },
              l.a.createElement(
                "div",
                { className: "w-100" },
                l.a.createElement("h2", { className: "mb-5" }, "Interests"),
                l.a.createElement(
                  "p",
                  null,
                  "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking."
                ),
                l.a.createElement(
                  "p",
                  { className: "mb-0" },
                  "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."
                )
              )
            ),
            l.a.createElement("hr", { className: "m-0" }),
            l.a.createElement(
              "section",
              {
                className:
                  "resume-section p-3 p-lg-5 d-flex align-items-center",
                id: "awards",
              },
              l.a.createElement(
                "div",
                { className: "w-100" },
                l.a.createElement(
                  "h2",
                  { className: "mb-5" },
                  "Awards & Certifications"
                ),
                l.a.createElement(
                  "ul",
                  { className: "fa-ul mb-0" },
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "Google Analytics Certified Developer"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "Mobile Web Specialist - Google Certification"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "1",
                    l.a.createElement("sup", null, "st"),
                    "Place - University of Colorado Boulder - Emerging Tech Competition 2009"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "1",
                    l.a.createElement("sup", null, "st"),
                    "Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "2",
                    l.a.createElement("sup", null, "nd"),
                    "Place - University of Colorado Boulder - Emerging Tech Competition 2008"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "1",
                    l.a.createElement("sup", null, "st"),
                    "Place - James Buchanan High School - Hackathon 2006"
                  ),
                  l.a.createElement(
                    "li",
                    null,
                    l.a.createElement("i", {
                      className: "fa-li fa fa-trophy text-warning",
                    }),
                    "3",
                    l.a.createElement("sup", null, "rd"),
                    "Place - James Buchanan High School - Hackathon 2005"
                  )
                )
              )
            )
          )
        );
      };
    },
    TSYQ: function (e, t, a) {
      var n;
      !(function () {
        "use strict";
        var a = {}.hasOwnProperty;
        function l() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var r = typeof n;
              if ("string" === r || "number" === r) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var o = l.apply(null, n);
                  o && e.push(o);
                }
              } else if ("object" === r)
                if (n.toString === Object.prototype.toString)
                  for (var s in n) a.call(n, s) && n[s] && e.push(s);
                else e.push(n.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((l.default = l), (e.exports = l))
          : void 0 ===
              (n = function () {
                return l;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    TUGy: function (e, t, a) {
      e.exports = a.p + "static/avatar-0b86057306243562bd42d278b7017ece.png";
    },
    W8MJ: function (e, t) {
      function a(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      (e.exports = function (e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    WkPL: function (e, t) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    YIkO: function (e, t, a) {
      "use strict";
      var n = a("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = n(a("pVnL")),
        r = n(a("lSNA")),
        o = n(a("RIqP")),
        s = n(a("lwsE")),
        i = n(a("a1gu")),
        c = n(a("Nsbk")),
        m = n(a("PJYZ")),
        u = n(a("W8MJ")),
        f = n(a("7W2i")),
        p = n(a("17x9")),
        d = n(a("q1tI")),
        h = n(a("TSYQ")),
        v = n(a("Fxm3"));
      var g = (function (e) {
        function t(e) {
          var a;
          return (
            (0, s.default)(this, t),
            ((a = (0, i.default)(this, (0, c.default)(t).call(this, e))).state =
              { targetItems: [], inViewState: [], isScrolledPast: [] }),
            (a._handleSpy = a._handleSpy.bind((0, m.default)(a))),
            a
          );
        }
        return (
          (0, f.default)(t, e),
          (0, u.default)(t, null, [
            {
              key: "propTypes",
              get: function () {
                return {
                  items: p.default.arrayOf(p.default.string).isRequired,
                  currentClassName: p.default.string.isRequired,
                  scrolledPastClassName: p.default.string,
                  style: p.default.object,
                  componentTag: p.default.oneOfType([
                    p.default.string,
                    p.default.elementType,
                  ]),
                  offset: p.default.number,
                  rootEl: p.default.string,
                  onUpdate: p.default.func,
                };
              },
            },
            {
              key: "defaultProps",
              get: function () {
                return {
                  items: [],
                  currentClassName: "",
                  style: {},
                  componentTag: "ul",
                  offset: 0,
                  onUpdate: function () {},
                };
              },
            },
          ]),
          (0, u.default)(t, [
            {
              key: "_initSpyTarget",
              value: function (e) {
                return e.map(function (e) {
                  return document.getElementById(e);
                });
              },
            },
            {
              key: "_fillArray",
              value: function (e, t) {
                for (var a = [], n = 0, l = e.length; n < l; n++) a[n] = t;
                return a;
              },
            },
            {
              key: "_isScrolled",
              value: function () {
                return this._getScrollDimension().scrollTop > 0;
              },
            },
            {
              key: "_getScrollDimension",
              value: function () {
                var e = document,
                  t = this.props.rootEl;
                return {
                  scrollTop: t
                    ? e.querySelector(t).scrollTop
                    : e.documentElement.scrollTop ||
                      e.body.parentNode.scrollTop ||
                      e.body.scrollTop,
                  scrollHeight: t
                    ? e.querySelector(t).scrollHeight
                    : e.documentElement.scrollHeight ||
                      e.body.parentNode.scrollHeight ||
                      e.body.scrollHeight,
                };
              },
            },
            {
              key: "_getElemsViewState",
              value: function (e) {
                for (
                  var t = [],
                    a = [],
                    n = [],
                    l = e || this.state.targetItems,
                    r = !1,
                    s = 0,
                    i = l.length;
                  s < i;
                  s++
                ) {
                  var c = l[s],
                    m = !r && this._isInView(c);
                  m ? ((r = !0), t.push(c)) : a.push(c);
                  var u = s === i - 1,
                    f = this._isScrolled();
                  this._isAtBottom() &&
                    this._isInView(c) &&
                    !m &&
                    u &&
                    f &&
                    (a.pop(),
                    a.push.apply(a, (0, o.default)(t)),
                    (t = [c]),
                    (n = this._fillArray(n, !1)),
                    (m = !0)),
                    n.push(m);
                }
                return {
                  inView: t,
                  outView: a,
                  viewStatusList: n,
                  scrolledPast:
                    this.props.scrolledPastClassName &&
                    this._getScrolledPast(n),
                };
              },
            },
            {
              key: "_isInView",
              value: function (e) {
                if (!e) return !1;
                var t,
                  a = this.props,
                  n = a.rootEl,
                  l = a.offset;
                n && (t = document.querySelector(n).getBoundingClientRect());
                var r = e.getBoundingClientRect(),
                  o = n ? t.height : window.innerHeight,
                  s = this._getScrollDimension().scrollTop,
                  i = s + o,
                  c = n ? r.top + s - t.top + l : r.top + s + l,
                  m = c + e.offsetHeight;
                return c < i && m > s;
              },
            },
            {
              key: "_isAtBottom",
              value: function () {
                var e = this.props.rootEl,
                  t = this._getScrollDimension(),
                  a = t.scrollTop,
                  n = t.scrollHeight;
                return (
                  a +
                    (e
                      ? document.querySelector(e).getBoundingClientRect().height
                      : window.innerHeight) >=
                  n
                );
              },
            },
            {
              key: "_getScrolledPast",
              value: function (e) {
                if (
                  !e.some(function (e) {
                    return e;
                  })
                )
                  return e;
                var t = !1;
                return e.map(function (e) {
                  return e && !t ? ((t = !0), !1) : !t;
                });
              },
            },
            {
              key: "_spy",
              value: function (e) {
                var t = this,
                  a = this._getElemsViewState(e),
                  n = this.state.inViewState;
                this.setState(
                  {
                    inViewState: a.viewStatusList,
                    isScrolledPast: a.scrolledPast,
                  },
                  function () {
                    t._update(n);
                  }
                );
              },
            },
            {
              key: "_update",
              value: function (e) {
                var t, a;
                ((t = this.state.inViewState),
                (a = e),
                t.length === a.length &&
                  t.every(function (e, t) {
                    return e === a[t];
                  })) ||
                  this.props.onUpdate(
                    this.state.targetItems[this.state.inViewState.indexOf(!0)]
                  );
              },
            },
            {
              key: "_handleSpy",
              value: function () {
                (0, v.default)(this._spy(), 100);
              },
            },
            {
              key: "_initFromProps",
              value: function () {
                var e = this._initSpyTarget(this.props.items);
                this.setState({ targetItems: e }), this._spy(e);
              },
            },
            {
              key: "offEvent",
              value: function () {
                (this.props.rootEl
                  ? document.querySelector(this.props.rootEl)
                  : window
                ).removeEventListener("scroll", this._handleSpy);
              },
            },
            {
              key: "onEvent",
              value: function () {
                (this.props.rootEl
                  ? document.querySelector(this.props.rootEl)
                  : window
                ).addEventListener("scroll", this._handleSpy);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this._initFromProps(), this.onEvent();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.offEvent();
              },
            },
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function () {
                this._initFromProps();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.componentTag,
                  a = this.props,
                  n = a.children,
                  o = a.className,
                  s = a.scrolledPastClassName,
                  i = a.style,
                  c = 0,
                  m = d.default.Children.map(n, function (t, a) {
                    var n;
                    if (!t) return null;
                    var o = t.type,
                      i = s && e.state.isScrolledPast[a],
                      m = (0, h.default)(
                        ((n = {}),
                        (0, r.default)(
                          n,
                          "".concat(t.props.className),
                          t.props.className
                        ),
                        (0, r.default)(
                          n,
                          "".concat(e.props.currentClassName),
                          e.state.inViewState[a]
                        ),
                        (0, r.default)(
                          n,
                          "".concat(e.props.scrolledPastClassName),
                          i
                        ),
                        n)
                      );
                    return d.default.createElement(
                      o,
                      (0, l.default)({}, t.props, { className: m, key: c++ }),
                      t.props.children
                    );
                  }),
                  u = (0, h.default)((0, r.default)({}, "".concat(o), o));
                return d.default.createElement(
                  t,
                  { className: u, style: i },
                  m
                );
              },
            },
          ]),
          t
        );
      })(d.default.Component);
      t.default = g;
    },
    ZhPi: function (e, t, a) {
      var n = a("WkPL");
      (e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === a && e.constructor && (a = e.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? n(e, t)
              : void 0
          );
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    a1gu: function (e, t, a) {
      var n = a("cDf5").default,
        l = a("PJYZ");
      (e.exports = function (e, t) {
        if (t && ("object" === n(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return l(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    dwco: function (e, t, a) {
      !(function () {
        "use strict";
        e.exports = {
          polyfill: function () {
            var e = window,
              t = document;
            if (
              !("scrollBehavior" in t.documentElement.style) ||
              !0 === e.__forceSmoothScrollPolyfill__
            ) {
              var a,
                n = e.HTMLElement || e.Element,
                l = {
                  scroll: e.scroll || e.scrollTo,
                  scrollBy: e.scrollBy,
                  elementScroll: n.prototype.scroll || s,
                  scrollIntoView: n.prototype.scrollIntoView,
                },
                r =
                  e.performance && e.performance.now
                    ? e.performance.now.bind(e.performance)
                    : Date.now,
                o =
                  ((a = e.navigator.userAgent),
                  new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(a)
                    ? 1
                    : 0);
              (e.scroll = e.scrollTo =
                function () {
                  void 0 !== arguments[0] &&
                    (!0 !== i(arguments[0])
                      ? d.call(
                          e,
                          t.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : e.scrollY || e.pageYOffset
                        )
                      : l.scroll.call(
                          e,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : e.scrollY || e.pageYOffset
                        ));
                }),
                (e.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (i(arguments[0])
                      ? l.scrollBy.call(
                          e,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : 0,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : 0
                        )
                      : d.call(
                          e,
                          t.body,
                          ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                          ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                        ));
                }),
                (n.prototype.scroll = n.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0])
                      if (!0 !== i(arguments[0])) {
                        var e = arguments[0].left,
                          t = arguments[0].top;
                        d.call(
                          this,
                          this,
                          void 0 === e ? this.scrollLeft : ~~e,
                          void 0 === t ? this.scrollTop : ~~t
                        );
                      } else {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError("Value could not be converted");
                        l.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                  }),
                (n.prototype.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (!0 !== i(arguments[0])
                      ? this.scroll({
                          left: ~~arguments[0].left + this.scrollLeft,
                          top: ~~arguments[0].top + this.scrollTop,
                          behavior: arguments[0].behavior,
                        })
                      : l.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left + this.scrollLeft
                            : ~~arguments[0] + this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top + this.scrollTop
                            : ~~arguments[1] + this.scrollTop
                        ));
                }),
                (n.prototype.scrollIntoView = function () {
                  if (!0 !== i(arguments[0])) {
                    var a = f(this),
                      n = a.getBoundingClientRect(),
                      r = this.getBoundingClientRect();
                    a !== t.body
                      ? (d.call(
                          this,
                          a,
                          a.scrollLeft + r.left - n.left,
                          a.scrollTop + r.top - n.top
                        ),
                        "fixed" !== e.getComputedStyle(a).position &&
                          e.scrollBy({
                            left: n.left,
                            top: n.top,
                            behavior: "smooth",
                          }))
                      : e.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: "smooth",
                        });
                  } else
                    l.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                });
            }
            function s(e, t) {
              (this.scrollLeft = e), (this.scrollTop = t);
            }
            function i(e) {
              if (
                null === e ||
                "object" != typeof e ||
                void 0 === e.behavior ||
                "auto" === e.behavior ||
                "instant" === e.behavior
              )
                return !0;
              if ("object" == typeof e && "smooth" === e.behavior) return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  e.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function c(e, t) {
              return "Y" === t
                ? e.clientHeight + o < e.scrollHeight
                : "X" === t
                ? e.clientWidth + o < e.scrollWidth
                : void 0;
            }
            function m(t, a) {
              var n = e.getComputedStyle(t, null)["overflow" + a];
              return "auto" === n || "scroll" === n;
            }
            function u(e) {
              var t = c(e, "Y") && m(e, "Y"),
                a = c(e, "X") && m(e, "X");
              return t || a;
            }
            function f(e) {
              for (; e !== t.body && !1 === u(e); ) e = e.parentNode || e.host;
              return e;
            }
            function p(t) {
              var a,
                n,
                l,
                o,
                s = (r() - t.startTime) / 468;
              (o = s = s > 1 ? 1 : s),
                (a = 0.5 * (1 - Math.cos(Math.PI * o))),
                (n = t.startX + (t.x - t.startX) * a),
                (l = t.startY + (t.y - t.startY) * a),
                t.method.call(t.scrollable, n, l),
                (n === t.x && l === t.y) ||
                  e.requestAnimationFrame(p.bind(e, t));
            }
            function d(a, n, o) {
              var i,
                c,
                m,
                u,
                f = r();
              a === t.body
                ? ((i = e),
                  (c = e.scrollX || e.pageXOffset),
                  (m = e.scrollY || e.pageYOffset),
                  (u = l.scroll))
                : ((i = a), (c = a.scrollLeft), (m = a.scrollTop), (u = s)),
                p({
                  scrollable: i,
                  method: u,
                  startTime: f,
                  startX: c,
                  startY: m,
                  x: n,
                  y: o,
                });
            }
          },
        };
      })();
    },
    lSNA: function (e, t) {
      (e.exports = function (e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    lwsE: function (e, t) {
      (e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    obyI: function (e, t) {
      e.exports = {
        siteTitle: "Gatsby Starter Resume",
        manifestName: "Resume",
        manifestShortName: "Landing",
        manifestStartUrl: "/",
        manifestBackgroundColor: "#663399",
        manifestThemeColor: "#663399",
        manifestDisplay: "standalone",
        manifestIcon: "src/assets/img/website-icon.png",
        pathPrefix: "/gatsby-starter-resume/",
        firstName: "Bryan",
        lastName: "Guner",
        socialLinks: [
          {
            icon: "fa-github",
            name: "Github",
            url: "https://github.com/bgoonz",
          },
          {
            icon: "fa-linkedin-in",
            name: "Linkedin",
            url: "https://www.linkedin.com/in/bryan-guner-046199128/",
          },
          {
            icon: "fa-twitter",
            name: "Twitter",
            url: "https://twitter.com/bgooonz",
          },
          {
            icon: "fa-facebook-f",
            name: "Facebook",
            url: "https://www.facebook.com/bryan.guner/",
          },
        ],
        email: "bryan.guner@gmail.com",
        phone: "+1 (551)-254-5505",
        address: "150 Henley Place, Weehawken, NJ",
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-76285d4252e8a211a04c.js.map
