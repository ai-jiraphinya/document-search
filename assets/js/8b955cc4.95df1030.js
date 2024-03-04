"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [7554],
  {
    35936: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => n,
          metadata: () => a,
          toc: () => u,
        });
      var o = s(85893),
        r = s(11151);
      const n = {
          title: "Getting help",
          description:
            "Stay up to date on the development of React-Bootstrap and reach out to the community with these helpful resources.",
          sidebar_position: 5,
        },
        i = void 0,
        a = {
          id: "getting-started/support",
          title: "Getting help",
          description:
            "Stay up to date on the development of React-Bootstrap and reach out to the community with these helpful resources.",
          source: "@site/docs/getting-started/support.mdx",
          sourceDirName: "getting-started",
          slug: "/getting-started/support",
          permalink: "/docs/getting-started/support",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 5,
          frontMatter: {
            title: "Getting help",
            description:
              "Stay up to date on the development of React-Bootstrap and reach out to the community with these helpful resources.",
            sidebar_position: 5,
          },
          sidebar: "sidebar",
          previous: {
            title: "Color modes",
            permalink: "/docs/getting-started/color-modes",
          },
          next: { title: "RTL", permalink: "/docs/getting-started/rtl" },
        },
        c = {},
        u = [
          { value: "Stack Overflow", id: "stack-overflow", level: 2 },
          { value: "Chat rooms", id: "chat-rooms", level: 2 },
          { value: "GitHub issues", id: "github-issues", level: 2 },
        ];
      function d(t) {
        const e = {
          a: "a",
          code: "code",
          h2: "h2",
          p: "p",
          ...(0, r.a)(),
          ...t.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(e.h2, {
              id: "stack-overflow",
              children: "Stack Overflow",
            }),
            "\n",
            (0, o.jsxs)(e.p, {
              children: [
                (0, o.jsx)(e.a, {
                  href: "http://stackoverflow.com/questions/ask",
                  children: "Ask questions",
                }),
                " about specific problems you have faced, including details about what exactly\nyou are trying to do. Make sure you tag your question with\n",
                (0, o.jsx)(e.code, { children: "react-bootstrap" }),
                ". You can also read through ",
                (0, o.jsx)(e.a, {
                  href: "http://stackoverflow.com/questions/tagged/react-bootstrap",
                  children: "existing React-Bootstrap questions",
                }),
                ".",
              ],
            }),
            "\n",
            (0, o.jsx)(e.h2, { id: "chat-rooms", children: "Chat rooms" }),
            "\n",
            (0, o.jsxs)(e.p, {
              children: [
                "Discuss questions in the ",
                (0, o.jsx)(e.code, { children: "#react-bootstrap" }),
                "\nchannel on the ",
                (0, o.jsx)(e.a, {
                  href: "https://discord.gg/AKfs9vpvRW",
                  children: "Reactiflux Discord",
                }),
                ".",
              ],
            }),
            "\n",
            (0, o.jsx)(e.h2, {
              id: "github-issues",
              children: "GitHub issues",
            }),
            "\n",
            (0, o.jsxs)(e.p, {
              children: [
                "The issue tracker is the preferred channel for bug reports, features\nrequests and submitting pull requests. See more about how we use issues\nin the ",
                (0, o.jsx)(e.a, {
                  href: "https://github.com/ai-jiraphinya/document-search/blob/master/CONTRIBUTING.md#issues",
                  children: "contribution guidelines",
                }),
                ".",
              ],
            }),
          ],
        });
      }
      function l(t = {}) {
        const { wrapper: e } = { ...(0, r.a)(), ...t.components };
        return e
          ? (0, o.jsx)(e, { ...t, children: (0, o.jsx)(d, { ...t }) })
          : d(t);
      }
    },
    11151: (t, e, s) => {
      s.d(e, { Z: () => a, a: () => i });
      var o = s(67294);
      const r = {},
        n = o.createContext(r);
      function i(t) {
        const e = o.useContext(n);
        return o.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function a(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(r)
              : t.components || r
            : i(t.components)),
          o.createElement(n.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
/*! For license information please see ok */
