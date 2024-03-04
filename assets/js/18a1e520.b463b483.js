/*! jiraphinya playground information please see ok */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [692],
  {
    11478: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => l,
        });
      var n = r(85893),
        o = r(11151);
      const i = { title: "RTL", sidebar_position: 6 },
        s = void 0,
        d = {
          id: "getting-started/rtl",
          title: "RTL",
          description: "We recommend first reading Bootstrap's documentation",
          source: "@site/docs/getting-started/rtl.mdx",
          sourceDirName: "getting-started",
          slug: "/getting-started/rtl",
          permalink: "/docs/getting-started/rtl",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 6,
          frontMatter: { title: "RTL", sidebar_position: 6 },
          sidebar: "sidebar",
          previous: {
            title: "Getting help",
            permalink: "/docs/getting-started/support",
          },
          next: {
            title: "Server-side Rendering",
            permalink: "/docs/getting-started/server-side-rendering",
          },
        },
        c = {},
        l = [];
      function a(e) {
        const t = {
            code: "code",
            li: "li",
            ol: "ol",
            p: "p",
            pre: "pre",
            ...(0, o.a)(),
            ...e.components,
          },
          { DocLink: r } = t;
        return (
          r ||
            (function (e, t) {
              throw new Error(
                "Expected " +
                  (t ? "component" : "object") +
                  " `" +
                  e +
                  "` to be defined: you likely forgot to import, pass, or provide it."
              );
            })("DocLink", !0),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(t.p, {
                children: [
                  "We recommend first reading ",
                  (0, n.jsx)(r, {
                    path: "/getting-started/rtl",
                    children: "Bootstrap's documentation",
                  }),
                  "\nto become familiar with how Bootstrap's RTL support works.",
                ],
              }),
              "\n",
              (0, n.jsx)(t.p, {
                children:
                  "In order to enable RTL support with React-Bootstrap, follow these steps:",
              }),
              "\n",
              (0, n.jsxs)(t.ol, {
                children: [
                  "\n",
                  (0, n.jsxs)(t.li, {
                    children: [
                      "Set ",
                      (0, n.jsx)(t.code, { children: 'dir="rtl"' }),
                      " on the ",
                      (0, n.jsx)(t.code, { children: "<html>" }),
                      " element.",
                    ],
                  }),
                  "\n",
                  (0, n.jsxs)(t.li, {
                    children: [
                      "Add an appropriate lang attribute, like ",
                      (0, n.jsx)(t.code, { children: 'lang="ar"' }),
                      ", on the ",
                      (0, n.jsx)(t.code, { children: "<html>" }),
                      " element.",
                    ],
                  }),
                  "\n",
                  (0, n.jsxs)(t.li, {
                    children: [
                      "Include the RTL version of the CSS ",
                      (0, n.jsx)(t.code, { children: "bootstrap.rtl.min.css" }),
                      " in your project.",
                    ],
                  }),
                  "\n",
                  (0, n.jsxs)(t.li, {
                    children: [
                      "Set ",
                      (0, n.jsx)(t.code, { children: 'dir="rtl"' }),
                      " in a ",
                      (0, n.jsx)(t.code, { children: "ThemeProvider" }),
                      ":",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, n.jsx)(t.pre, {
                children: (0, n.jsx)(t.code, {
                  className: "language-jsx",
                  children:
                    '<ThemeProvider dir="rtl">\n  <App />\n</ThemeProvider>\n',
                }),
              }),
            ],
          })
        );
      }
      function p(e = {}) {
        const { wrapper: t } = { ...(0, o.a)(), ...e.components };
        return t
          ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(a, { ...e }) })
          : a(e);
      }
    },
    11151: (e, t, r) => {
      r.d(t, { Z: () => d, a: () => s });
      var n = r(67294);
      const o = {},
        i = n.createContext(o);
      function s(e) {
        const t = n.useContext(i);
        return n.useMemo(
          function () {
            return "function" == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function d(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          n.createElement(i.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
