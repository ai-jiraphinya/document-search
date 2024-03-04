/*! jiraphinya playground information please see ok */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1019],
  {
    9447: (n, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => h,
          contentTitle: () => m,
          default: () => v,
          frontMatter: () => c,
          metadata: () => u,
          toc: () => x,
        });
      var r = i(85893),
        t = i(11151);
      const a =
          'import Spinner from \'react-bootstrap/Spinner\';\n\nfunction BasicExample() {\n  return (\n    <Spinner animation="border" role="status">\n      <span className="visually-hidden">Loading...</span>\n    </Spinner>\n  );\n}\n\nexport default BasicExample;\n',
        o =
          "import Spinner from 'react-bootstrap/Spinner';\n\nfunction BorderExample() {\n  return <Spinner animation=\"border\" />;\n}\n\nexport default BorderExample;\n",
        s =
          "import Spinner from 'react-bootstrap/Spinner';\n\nfunction GrowExample() {\n  return <Spinner animation=\"grow\" />;\n}\n\nexport default GrowExample;\n",
        p =
          'import Spinner from \'react-bootstrap/Spinner\';\n\nfunction VariantsExample() {\n  return (\n    <>\n      <Spinner animation="border" variant="primary" />\n      <Spinner animation="border" variant="secondary" />\n      <Spinner animation="border" variant="success" />\n      <Spinner animation="border" variant="danger" />\n      <Spinner animation="border" variant="warning" />\n      <Spinner animation="border" variant="info" />\n      <Spinner animation="border" variant="light" />\n      <Spinner animation="border" variant="dark" />\n      <Spinner animation="grow" variant="primary" />\n      <Spinner animation="grow" variant="secondary" />\n      <Spinner animation="grow" variant="success" />\n      <Spinner animation="grow" variant="danger" />\n      <Spinner animation="grow" variant="warning" />\n      <Spinner animation="grow" variant="info" />\n      <Spinner animation="grow" variant="light" />\n      <Spinner animation="grow" variant="dark" />\n    </>\n  );\n}\n\nexport default VariantsExample;\n',
        l =
          'import Spinner from \'react-bootstrap/Spinner\';\n\nfunction SizesExample() {\n  return (\n    <>\n      <Spinner animation="border" size="sm" />\n      <Spinner animation="border" />\n      <Spinner animation="grow" size="sm" />\n      <Spinner animation="grow" />\n    </>\n  );\n}\n\nexport default SizesExample;\n',
        d =
          'import Button from \'react-bootstrap/Button\';\nimport Spinner from \'react-bootstrap/Spinner\';\n\nfunction ButtonExample() {\n  return (\n    <>\n      <Button variant="primary" disabled>\n        <Spinner\n          as="span"\n          animation="border"\n          size="sm"\n          role="status"\n          aria-hidden="true"\n        />\n        <span className="visually-hidden">Loading...</span>\n      </Button>{\' \'}\n      <Button variant="primary" disabled>\n        <Spinner\n          as="span"\n          animation="grow"\n          size="sm"\n          role="status"\n          aria-hidden="true"\n        />\n        Loading...\n      </Button>\n    </>\n  );\n}\n\nexport default ButtonExample;\n',
        c = {
          title: "Spinners",
          description:
            "Spinners can be used to show the loading state in your projects.",
        },
        m = void 0,
        u = {
          id: "components/spinners",
          title: "Spinners",
          description:
            "Spinners can be used to show the loading state in your projects.",
          source: "@site/docs/components/spinners.mdx",
          sourceDirName: "components",
          slug: "/components/spinners",
          permalink: "/docs/components/spinners",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Spinners",
            description:
              "Spinners can be used to show the loading state in your projects.",
          },
          sidebar: "sidebar",
          previous: {
            title: "Progress bars",
            permalink: "/docs/components/progress",
          },
          next: { title: "Tables", permalink: "/docs/components/table" },
        },
        h = {},
        x = [
          { value: "Example", id: "example", level: 2 },
          { value: "Animations", id: "animations", level: 2 },
          { value: "Variants", id: "variants", level: 2 },
          { value: "Sizing", id: "sizing", level: 2 },
          { value: "Buttons", id: "buttons", level: 2 },
          { value: "Accessibility", id: "accessibility", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Spinner", id: "spinner", level: 3 },
        ];
      function b(n) {
        const e = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, t.a)(),
            ...n.components,
          },
          { CodeBlock: i, PropsTable: c } = e;
        return (
          i || g("CodeBlock", !0),
          c || g("PropsTable", !0),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(e.h2, { id: "example", children: "Example" }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, r.jsx)(e.h2, { id: "animations", children: "Animations" }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "Bootstrap offers two animation styles for spinners. The animation style\ncan be configured with the ",
                  (0, r.jsx)(e.code, { children: "animation" }),
                  " property. An animation style\nmust always be provided when creating a spinner.",
                ],
              }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "** Border Spinner - ",
                  (0, r.jsx)(e.code, { children: "border" }),
                  "**",
                ],
              }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: o }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "** Grow Spinner - ",
                  (0, r.jsx)(e.code, { children: "grow" }),
                  " **",
                ],
              }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, r.jsx)(e.h2, { id: "variants", children: "Variants" }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "All standard visual variants are available for both animation styles by\nsetting the ",
                  (0, r.jsx)(e.code, { children: "variant" }),
                  " property. Alternatively spinners can be custom\nsized with the ",
                  (0, r.jsx)(e.code, { children: "style" }),
                  " property, or custom CSS classes.",
                ],
              }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, r.jsx)(e.h2, { id: "sizing", children: "Sizing" }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "In addition to the standard size, a smaller additional preconfigured\nsize is available by configuring the ",
                  (0, r.jsx)(e.code, { children: "size" }),
                  " property to ",
                  (0, r.jsx)(e.code, { children: "sm" }),
                  ".",
                ],
              }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, r.jsx)(e.h2, { id: "buttons", children: "Buttons" }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "Like the original Bootstrap spinners, these can also be used with\nbuttons. To use this component out-of-the-box it is recommended you\nchange the element type to ",
                  (0, r.jsx)(e.code, { children: "span" }),
                  " by configuring the ",
                  (0, r.jsx)(e.code, { children: "as" }),
                  " property when\nusing spinners inside buttons.",
                ],
              }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, r.jsx)(e.h2, {
                id: "accessibility",
                children: "Accessibility",
              }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "To ensure the maximum accessibility for spinner components it is\nrecommended you provide a relevant ARIA ",
                  (0, r.jsx)(e.code, { children: "role" }),
                  " property,\nand include screenreader-only readable text representation of the\nspinner's meaning inside the component using Bootstrap's ",
                  (0, r.jsx)(e.code, { children: "visually-hidden" }),
                  "\nclass.",
                ],
              }),
              "\n",
              (0, r.jsx)(e.p, {
                children:
                  "The example below provides an example of accessible usage of this\ncomponent.",
              }),
              "\n",
              (0, r.jsx)(i, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, r.jsx)(e.h2, { id: "api", children: "API" }),
              "\n",
              (0, r.jsx)(e.h3, { id: "spinner", children: "Spinner" }),
              "\n",
              (0, r.jsx)(c, { name: "Spinner" }),
            ],
          })
        );
      }
      function v(n = {}) {
        const { wrapper: e } = { ...(0, t.a)(), ...n.components };
        return e
          ? (0, r.jsx)(e, { ...n, children: (0, r.jsx)(b, { ...n }) })
          : b(n);
      }
      function g(n, e) {
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
      i.d(e, { Z: () => s, a: () => o });
      var r = i(67294);
      const t = {},
        a = r.createContext(t);
      function o(n) {
        const e = r.useContext(a);
        return r.useMemo(
          function () {
            return "function" == typeof n ? n(e) : { ...e, ...n };
          },
          [e, n]
        );
      }
      function s(n) {
        let e;
        return (
          (e = n.disableParentContext
            ? "function" == typeof n.components
              ? n.components(t)
              : n.components || t
            : o(n.components)),
          r.createElement(a.Provider, { value: e }, n.children)
        );
      }
    },
  },
]);
