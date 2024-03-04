/*! jiraphinya playground information please see ok */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [2378],
  {
    52886: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => m,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => l,
          metadata: () => c,
          toc: () => p,
        });
      var o = n(85893),
        i = n(11151);
      const s =
          'import Form from \'react-bootstrap/Form\';\n\nfunction SelectBasicExample() {\n  return (\n    <Form.Select aria-label="Default select example">\n      <option>Open this select menu</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </Form.Select>\n  );\n}\n\nexport default SelectBasicExample;\n',
        r =
          'import Form from \'react-bootstrap/Form\';\n\nfunction SelectSizesExample() {\n  return (\n    <>\n      <Form.Select size="lg">\n        <option>Large select</option>\n      </Form.Select>\n      <br />\n      <Form.Select>\n        <option>Default select</option>\n      </Form.Select>\n      <br />\n      <Form.Select size="sm">\n        <option>Small select</option>\n      </Form.Select>\n    </>\n  );\n}\n\nexport default SelectSizesExample;\n',
        l = {
          title: "Select",
          description:
            "Customize the native <select> with custom CSS that changes the element\u2019s initial appearance.",
          sidebar_position: 4,
        },
        a = void 0,
        c = {
          id: "forms/select",
          title: "Select",
          description:
            "Customize the native <select> with custom CSS that changes the element\u2019s initial appearance.",
          source: "@site/docs/forms/select.mdx",
          sourceDirName: "forms",
          slug: "/forms/select",
          permalink: "/docs/forms/select",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 4,
          frontMatter: {
            title: "Select",
            description:
              "Customize the native <select> with custom CSS that changes the element\u2019s initial appearance.",
            sidebar_position: 4,
          },
          sidebar: "sidebar",
          previous: { title: "Form text", permalink: "/docs/forms/form-text" },
          next: {
            title: "Checks and radios",
            permalink: "/docs/forms/checks-radios",
          },
        },
        m = {},
        p = [
          { value: "Default", id: "default", level: 2 },
          { value: "Sizing", id: "sizing", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "FormSelect", id: "formselect", level: 3 },
        ];
      function u(e) {
        const t = {
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, i.a)(),
            ...e.components,
          },
          { CodeBlock: n, PropsTable: l } = t;
        return (
          n || h("CodeBlock", !0),
          l || h("PropsTable", !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(t.h2, { id: "default", children: "Default" }),
              "\n",
              (0, o.jsx)(n, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, o.jsx)(t.h2, { id: "sizing", children: "Sizing" }),
              "\n",
              (0, o.jsx)(t.p, {
                children:
                  "You may also choose from small and large custom selects to match our\nsimilarly sized text inputs.",
              }),
              "\n",
              (0, o.jsx)(n, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, o.jsx)(t.h2, { id: "api", children: "API" }),
              "\n",
              (0, o.jsx)(t.h3, { id: "formselect", children: "FormSelect" }),
              "\n",
              (0, o.jsx)(l, { name: "FormSelect" }),
            ],
          })
        );
      }
      function d(e = {}) {
        const { wrapper: t } = { ...(0, i.a)(), ...e.components };
        return t
          ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(u, { ...e }) })
          : u(e);
      }
      function h(e, t) {
        throw new Error(
          "Expected " +
            (t ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, t, n) => {
      n.d(t, { Z: () => l, a: () => r });
      var o = n(67294);
      const i = {},
        s = o.createContext(i);
      function r(e) {
        const t = o.useContext(s);
        return o.useMemo(
          function () {
            return "function" == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          o.createElement(s.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
