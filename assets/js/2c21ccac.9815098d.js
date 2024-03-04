"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [5773],
  {
    54912: (t, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => c,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => u,
        });
      var o = i(85893),
        n = i(11151);
      const s = {
          title: "@restart/ui",
          description:
            "Low-level components and utilities for building beautiful accessible components",
          sidebar_position: 3,
        },
        r = void 0,
        a = {
          id: "utilities/restart-ui",
          title: "@restart/ui",
          description:
            "Low-level components and utilities for building beautiful accessible components",
          source: "@site/docs/utilities/restart-ui.mdx",
          sourceDirName: "utilities",
          slug: "/utilities/restart-ui",
          permalink: "/docs/utilities/restart-ui",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 3,
          frontMatter: {
            title: "@restart/ui",
            description:
              "Low-level components and utilities for building beautiful accessible components",
            sidebar_position: 3,
          },
          sidebar: "sidebar",
          previous: { title: "Ratios", permalink: "/docs/utilities/ratio" },
          next: { title: "Migrating", permalink: "/docs/migrating" },
        },
        c = {},
        u = [];
      function l(t) {
        const e = {
          a: "a",
          code: "code",
          p: "p",
          ...(0, n.a)(),
          ...t.components,
        };
        return (0, o.jsxs)(e.p, {
          children: [
            "Often times you may need a more generic or low-level version of a\nBootstrap component. Many of the ",
            (0, o.jsx)(e.code, { children: "react-bootstrap" }),
            " components\nare built on top of components from ",
            (0, o.jsx)(e.a, {
              href: "https://github.com/react-restart/ui",
              children: "@restart/ui",
            }),
            ".\nIf you find yourself at the limit of a Bootstrap component, consider using\nthe ",
            (0, o.jsx)(e.code, { children: "@restart/ui" }),
            " base component directly.",
          ],
        });
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, n.a)(), ...t.components };
        return e
          ? (0, o.jsx)(e, { ...t, children: (0, o.jsx)(l, { ...t }) })
          : l(t);
      }
    },
    11151: (t, e, i) => {
      i.d(e, { Z: () => a, a: () => r });
      var o = i(67294);
      const n = {},
        s = o.createContext(n);
      function r(t) {
        const e = o.useContext(s);
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
              ? t.components(n)
              : t.components || n
            : r(t.components)),
          o.createElement(s.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
