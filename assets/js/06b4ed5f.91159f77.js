/*! For license information please see 06b4ed5f.91159f77.js.LICENSE.txt */
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1462],
  {
    60042: (e, r) => {
      var t;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function s() {
          for (var e = [], r = 0; r < arguments.length; r++) {
            var t = arguments[r];
            if (t) {
              var o = typeof t;
              if ("string" === o || "number" === o) e.push(t);
              else if (Array.isArray(t)) {
                if (t.length) {
                  var i = s.apply(null, t);
                  i && e.push(i);
                }
              } else if ("object" === o) {
                if (
                  t.toString !== Object.prototype.toString &&
                  !t.toString.toString().includes("[native code]")
                ) {
                  e.push(t.toString());
                  continue;
                }
                for (var a in t) n.call(t, a) && t[a] && e.push(a);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((s.default = s), (e.exports = s))
          : void 0 ===
              (t = function () {
                return s;
              }.apply(r, [])) || (e.exports = t);
      })();
    },
    58772: (e, r, t) => {
      "use strict";
      var n = t(90331);
      function s() {}
      function o() {}
      (o.resetWarningCache = s),
        (e.exports = function () {
          function e(e, r, t, s, o, i) {
            if (i !== n) {
              var a = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function r() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: r,
            element: e,
            elementType: e,
            instanceOf: r,
            node: e,
            objectOf: r,
            oneOf: r,
            oneOfType: r,
            shape: r,
            exact: r,
            checkPropTypes: o,
            resetWarningCache: s,
          };
          return (t.PropTypes = t), t;
        });
    },
    23615: (e, r, t) => {
      e.exports = t(58772)();
    },
    90331: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    80306: (e, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          assets: () => p,
          contentTitle: () => d,
          default: () => x,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => u,
        });
      var n = t(85893),
        s = t(11151),
        o = (t(67294), t(89542));
      const i = () =>
          (0, n.jsxs)(o.Z, {
            children: [
              (0, n.jsx)("thead", {
                children: (0, n.jsxs)("tr", {
                  children: [
                    (0, n.jsx)("th", { children: "Breakpoint" }),
                    (0, n.jsx)("th", { children: "Class infix" }),
                    (0, n.jsx)("th", { children: "Dimensions" }),
                  ],
                }),
              }),
              (0, n.jsxs)("tbody", {
                children: [
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", { children: "X-Small" }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("em", { children: "None" }),
                      }),
                      (0, n.jsx)("td", { children: "<576px" }),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", { children: "Small" }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("code", { children: "sm" }),
                      }),
                      (0, n.jsx)("td", { children: "\u2265576px" }),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", { children: "Medium" }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("code", { children: "md" }),
                      }),
                      (0, n.jsx)("td", { children: "\u2265768px" }),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", { children: "Large" }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("code", { children: "lg" }),
                      }),
                      (0, n.jsx)("td", { children: "\u2265992px" }),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", { children: "Extra large" }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("code", { children: "xl" }),
                      }),
                      (0, n.jsx)("td", { children: "\u22651200px" }),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", { children: "Extra extra large" }),
                      (0, n.jsx)("td", {
                        children: (0, n.jsx)("code", { children: "xxl" }),
                      }),
                      (0, n.jsx)("td", { children: "\u22651400px" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        a =
          "<ThemeProvider\n  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}\n  minBreakpoint=\"xxs\"\n>\n  <div>Your app...</div>\n</ThemeProvider>;\n",
        c = {
          title: "Breakpoints",
          description:
            "Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.",
        },
        d = void 0,
        l = {
          id: "layout/breakpoints",
          title: "Breakpoints",
          description:
            "Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.",
          source: "@site/docs/layout/breakpoints.mdx",
          sourceDirName: "layout",
          slug: "/layout/breakpoints",
          permalink: "/docs/layout/breakpoints",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Breakpoints",
            description:
              "Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.",
          },
          sidebar: "sidebar",
          previous: {
            title: "Server-side Rendering",
            permalink: "/docs/getting-started/server-side-rendering",
          },
          next: { title: "Grid", permalink: "/docs/layout/grid" },
        },
        p = {},
        u = [
          {
            value: "Available breakpoints",
            id: "available-breakpoints",
            level: 2,
          },
          { value: "Custom breakpoints", id: "custom-breakpoints", level: 2 },
          { value: "More information", id: "more-information", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "ThemeProvider", id: "themeprovider", level: 3 },
        ];
      function h(e) {
        const r = {
            code: "code",
            em: "em",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, s.a)(),
            ...e.components,
          },
          { CodeBlock: t, DocLink: o, PropsTable: c } = r;
        return (
          t || m("CodeBlock", !0),
          o || m("DocLink", !0),
          c || m("PropsTable", !0),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(r.h2, {
                id: "available-breakpoints",
                children: "Available breakpoints",
              }),
              "\n",
              (0, n.jsxs)(r.p, {
                children: [
                  "Bootstrap includes six default breakpoints, sometimes referred to as ",
                  (0, n.jsx)(r.em, { children: "grid tiers" }),
                  ",\nfor building responsively. These breakpoints can be customized if you\u2019re using our\nsource Sass files.",
                ],
              }),
              "\n",
              (0, n.jsx)(i, {}),
              "\n",
              (0, n.jsx)(r.h2, {
                id: "custom-breakpoints",
                children: "Custom breakpoints",
              }),
              "\n",
              (0, n.jsxs)(r.p, {
                children: [
                  "If you are looking to use custom breakpoints, you must wrap your application with\na theme provider and use the ",
                  (0, n.jsx)(r.code, { children: "breakpoints" }),
                  " prop to specify the breakpoints you\nwill use. This ensures that components such as ",
                  (0, n.jsx)(r.code, { children: "Row" }),
                  " or ",
                  (0, n.jsx)(r.code, { children: "Col" }),
                  " can parse the\ncorrect custom breakpoint props.",
                ],
              }),
              "\n",
              (0, n.jsx)(t, { language: "jsx", children: a }),
              "\n",
              (0, n.jsx)(r.h2, {
                id: "more-information",
                children: "More information",
              }),
              "\n",
              (0, n.jsxs)(r.p, {
                children: [
                  "For more information about breakpoints, see the ",
                  (0, n.jsx)(o, {
                    path: "/layout/breakpoints",
                    children: "Bootstrap documentation",
                  }),
                  ".",
                ],
              }),
              "\n",
              (0, n.jsx)(r.h2, { id: "api", children: "API" }),
              "\n",
              (0, n.jsx)(r.h3, {
                id: "themeprovider",
                children: "ThemeProvider",
              }),
              "\n",
              (0, n.jsx)(c, { name: "ThemeProvider" }),
            ],
          })
        );
      }
      function x(e = {}) {
        const { wrapper: r } = { ...(0, s.a)(), ...e.components };
        return r
          ? (0, n.jsx)(r, { ...e, children: (0, n.jsx)(h, { ...e }) })
          : h(e);
      }
      function m(e, r) {
        throw new Error(
          "Expected " +
            (r ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    89542: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => u });
      var n = t(60042),
        s = t.n(n),
        o = t(67294),
        i = t(23615),
        a = t.n(i),
        c = t(80338),
        d = t(85893);
      const l = {
          bsPrefix: a().string,
          striped: a().oneOfType([a().bool, a().string]),
          bordered: a().bool,
          borderless: a().bool,
          hover: a().bool,
          size: a().string,
          variant: a().string,
          responsive: a().oneOfType([a().bool, a().string]),
        },
        p = o.forwardRef((e, r) => {
          let {
            bsPrefix: t,
            className: n,
            striped: o,
            bordered: i,
            borderless: a,
            hover: l,
            size: p,
            variant: u,
            responsive: h,
            ...x
          } = e;
          const m = (0, c.vE)(t, "table"),
            b = s()(
              n,
              m,
              u && `${m}-${u}`,
              p && `${m}-${p}`,
              o && `${m}-${"string" == typeof o ? `striped-${o}` : "striped"}`,
              i && `${m}-bordered`,
              a && `${m}-borderless`,
              l && `${m}-hover`
            ),
            f = (0, d.jsx)("table", { ...x, className: b, ref: r });
          if (h) {
            let e = `${m}-responsive`;
            return (
              "string" == typeof h && (e = `${e}-${h}`),
              (0, d.jsx)("div", { className: e, children: f })
            );
          }
          return f;
        });
      p.propTypes = l;
      const u = p;
    },
    80338: (e, r, t) => {
      "use strict";
      t.d(r, {
        Hz: () => a,
        SC: () => b,
        ZP: () => f,
        cs: () => c,
        pi: () => x,
        vE: () => h,
        zG: () => m,
      });
      var n = t(23615),
        s = t.n(n),
        o = t(67294),
        i = t(85893);
      const a = ["xxl", "xl", "lg", "md", "sm", "xs"],
        c = "xs",
        d = o.createContext({ prefixes: {}, breakpoints: a, minBreakpoint: c }),
        { Consumer: l, Provider: p } = d;
      function u(e) {
        let {
          prefixes: r = {},
          breakpoints: t = a,
          minBreakpoint: n = c,
          dir: s,
          children: d,
        } = e;
        const l = (0, o.useMemo)(
          () => ({
            prefixes: { ...r },
            breakpoints: t,
            minBreakpoint: n,
            dir: s,
          }),
          [r, t, n, s]
        );
        return (0, i.jsx)(p, { value: l, children: d });
      }
      function h(e, r) {
        const { prefixes: t } = (0, o.useContext)(d);
        return e || t[r] || r;
      }
      function x() {
        const { breakpoints: e } = (0, o.useContext)(d);
        return e;
      }
      function m() {
        const { minBreakpoint: e } = (0, o.useContext)(d);
        return e;
      }
      function b() {
        const { dir: e } = (0, o.useContext)(d);
        return "rtl" === e;
      }
      u.propTypes = {
        prefixes: s().object,
        breakpoints: s().arrayOf(s().string),
        minBreakpoint: s().string,
        dir: s().string,
      };
      const f = u;
    },
    11151: (e, r, t) => {
      "use strict";
      t.d(r, { Z: () => a, a: () => i });
      var n = t(67294);
      const s = {},
        o = n.createContext(s);
      function i(e) {
        const r = n.useContext(o);
        return n.useMemo(
          function () {
            return "function" == typeof e ? e(r) : { ...r, ...e };
          },
          [r, e]
        );
      }
      function a(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          n.createElement(o.Provider, { value: r }, e.children)
        );
      }
    },
  },
]);
/*! For license information please see ok */
