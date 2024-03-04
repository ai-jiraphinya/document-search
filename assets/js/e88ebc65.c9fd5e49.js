"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [5168],
  {
    77183: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => d,
          default: () => l,
          frontMatter: () => c,
          metadata: () => i,
          toc: () => m,
        });
      var n = r(85893),
        a = r(11151);
      const o =
          'import Breadcrumb from \'react-bootstrap/Breadcrumb\';\n\nfunction BreadcrumbExample() {\n  return (\n    <Breadcrumb>\n      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>\n      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">\n        Library\n      </Breadcrumb.Item>\n      <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n  );\n}\n\nexport default BreadcrumbExample;\n',
        c = {
          title: "Breadcrumbs",
          description:
            "Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS.",
        },
        d = void 0,
        i = {
          id: "components/breadcrumb",
          title: "Breadcrumbs",
          description:
            "Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS.",
          source: "@site/docs/components/breadcrumb.mdx",
          sourceDirName: "components",
          slug: "/components/breadcrumb",
          permalink: "/docs/components/breadcrumb",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Breadcrumbs",
            description:
              "Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS.",
          },
          sidebar: "sidebar",
          previous: { title: "Badges", permalink: "/docs/components/badge" },
          next: {
            title: "Button group",
            permalink: "/docs/components/button-group",
          },
        },
        s = {},
        m = [
          { value: "Example", id: "example", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Breadcrumb", id: "breadcrumb", level: 3 },
          { value: "BreadcrumbItem", id: "breadcrumbitem", level: 3 },
        ];
      function u(e) {
        const t = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, a.a)(),
            ...e.components,
          },
          { CodeBlock: r, PropsTable: c } = t;
        return (
          r || p("CodeBlock", !0),
          c || p("PropsTable", !0),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(t.h2, { id: "example", children: "Example" }),
              "\n",
              (0, n.jsxs)(t.p, {
                children: [
                  "Add ",
                  (0, n.jsx)(t.code, { children: "active" }),
                  " prop to the active ",
                  (0, n.jsx)(t.code, { children: "Breadcrumb.Item" }),
                  ". Do not set both ",
                  (0, n.jsx)(t.code, { children: "active" }),
                  " and ",
                  (0, n.jsx)(t.code, { children: "href" }),
                  " attributes. ",
                  (0, n.jsx)(t.code, { children: "active" }),
                  " overrides ",
                  (0, n.jsx)(t.code, { children: "href" }),
                  " and ",
                  (0, n.jsx)(t.code, { children: "span" }),
                  " element is rendered instead of ",
                  (0, n.jsx)(t.code, { children: "a" }),
                  ".",
                ],
              }),
              "\n",
              (0, n.jsx)(r, { language: "jsx", live: !0, children: o }),
              "\n",
              (0, n.jsx)(t.h2, { id: "api", children: "API" }),
              "\n",
              (0, n.jsx)(t.h3, { id: "breadcrumb", children: "Breadcrumb" }),
              "\n",
              (0, n.jsx)(c, { name: "Breadcrumb" }),
              "\n",
              (0, n.jsx)(t.h3, {
                id: "breadcrumbitem",
                children: "BreadcrumbItem",
              }),
              "\n",
              (0, n.jsx)(c, { name: "BreadcrumbItem" }),
            ],
          })
        );
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, a.a)(), ...e.components };
        return t
          ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(u, { ...e }) })
          : u(e);
      }
      function p(e, t) {
        throw new Error(
          "Expected " +
            (t ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, t, r) => {
      r.d(t, { Z: () => d, a: () => c });
      var n = r(67294);
      const a = {},
        o = n.createContext(a);
      function c(e) {
        const t = n.useContext(o);
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
              ? e.components(a)
              : e.components || a
            : c(e.components)),
          n.createElement(o.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
