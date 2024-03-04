/*! For license information please see ok สนามเด็กเล่น */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [7874],
  {
    64480: (n, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => c,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => r,
          metadata: () => p,
          toc: () => m,
        });
      var t = i(85893),
        a = i(11151);
      const o =
          "import Pagination from 'react-bootstrap/Pagination';\n\nfunction AdvancedExample() {\n  return (\n    <Pagination>\n      <Pagination.First />\n      <Pagination.Prev />\n      <Pagination.Item>{1}</Pagination.Item>\n      <Pagination.Ellipsis />\n\n      <Pagination.Item>{10}</Pagination.Item>\n      <Pagination.Item>{11}</Pagination.Item>\n      <Pagination.Item active>{12}</Pagination.Item>\n      <Pagination.Item>{13}</Pagination.Item>\n      <Pagination.Item disabled>{14}</Pagination.Item>\n\n      <Pagination.Ellipsis />\n      <Pagination.Item>{20}</Pagination.Item>\n      <Pagination.Next />\n      <Pagination.Last />\n    </Pagination>\n  );\n}\n\nexport default AdvancedExample;\n",
        s =
          'import Pagination from \'react-bootstrap/Pagination\';\n\nlet active = 2;\nlet items = [];\nfor (let number = 1; number <= 5; number++) {\n  items.push(\n    <Pagination.Item key={number} active={number === active}>\n      {number}\n    </Pagination.Item>,\n  );\n}\n\nconst paginationBasic = (\n  <div>\n    <Pagination>{items}</Pagination>\n    <br />\n\n    <Pagination size="lg">{items}</Pagination>\n    <br />\n\n    <Pagination size="sm">{items}</Pagination>\n  </div>\n);\n\nrender(paginationBasic);\n',
        r = {
          title: "Pagination",
          description:
            "A set of presentational components for building pagination UI.",
        },
        l = void 0,
        p = {
          id: "components/pagination",
          title: "Pagination",
          description:
            "A set of presentational components for building pagination UI.",
          source: "@site/docs/components/pagination.mdx",
          sourceDirName: "components",
          slug: "/components/pagination",
          permalink: "/docs/components/pagination",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Pagination",
            description:
              "A set of presentational components for building pagination UI.",
          },
          sidebar: "sidebar",
          previous: {
            title: "Overlay",
            permalink: "/docs/components/overlays",
          },
          next: {
            title: "Placeholders",
            permalink: "/docs/components/placeholder",
          },
        },
        c = {},
        m = [
          { value: "Example", id: "example", level: 2 },
          { value: "More options", id: "more-options", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Pagination", id: "pagination", level: 3 },
          { value: "PageItem", id: "pageitem", level: 3 },
        ];
      function g(n) {
        const e = {
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, a.a)(),
            ...n.components,
          },
          { CodeBlock: i, PropsTable: r } = e;
        return (
          i || u("CodeBlock", !0),
          r || u("PropsTable", !0),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(e.h2, { id: "example", children: "Example" }),
              "\n",
              (0, t.jsx)(i, {
                language: "jsx",
                live: !0,
                noInline: !0,
                children: s,
              }),
              "\n",
              (0, t.jsx)(e.h2, {
                id: "more-options",
                children: "More options",
              }),
              "\n",
              (0, t.jsx)(e.p, {
                children:
                  'For building more complex pagination UI, there are few convenient\nsub-components for adding "First", "Previous", "Next", and "Last"\nbuttons, as well as an "Ellipsis" item for indicating\nprevious or continuing results.',
              }),
              "\n",
              (0, t.jsx)(i, { language: "jsx", live: !0, children: o }),
              "\n",
              (0, t.jsx)(e.h2, { id: "api", children: "API" }),
              "\n",
              (0, t.jsx)(e.h3, { id: "pagination", children: "Pagination" }),
              "\n",
              (0, t.jsx)(r, { name: "Pagination" }),
              "\n",
              (0, t.jsx)(e.h3, { id: "pageitem", children: "PageItem" }),
              "\n",
              (0, t.jsx)(r, { name: "PageItem" }),
            ],
          })
        );
      }
      function d(n = {}) {
        const { wrapper: e } = { ...(0, a.a)(), ...n.components };
        return e
          ? (0, t.jsx)(e, { ...n, children: (0, t.jsx)(g, { ...n }) })
          : g(n);
      }
      function u(n, e) {
        throw new Error(
          "Expected " +
            (e ? "component" : "object") +
            " `" +
            n +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (n, e, i) => {
      i.d(e, { Z: () => r, a: () => s });
      var t = i(67294);
      const a = {},
        o = t.createContext(a);
      function s(n) {
        const e = t.useContext(o);
        return t.useMemo(
          function () {
            return "function" == typeof n ? n(e) : { ...e, ...n };
          },
          [e, n]
        );
      }
      function r(n) {
        let e;
        return (
          (e = n.disableParentContext
            ? "function" == typeof n.components
              ? n.components(a)
              : n.components || a
            : s(n.components)),
          t.createElement(o.Provider, { value: e }, n.children)
        );
      }
    },
  },
]);
