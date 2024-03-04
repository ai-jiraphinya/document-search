"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [6778],
  {
    623: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => u,
          contentTitle: () => d,
          default: () => b,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => h,
        });
      var t = n(85893),
        l = n(11151);
      const a =
          'import FloatingLabel from \'react-bootstrap/FloatingLabel\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction FormFloatingBasicExample() {\n  return (\n    <>\n      <FloatingLabel\n        controlId="floatingInput"\n        label="Email address"\n        className="mb-3"\n      >\n        <Form.Control type="email" placeholder="name@example.com" />\n      </FloatingLabel>\n      <FloatingLabel controlId="floatingPassword" label="Password">\n        <Form.Control type="password" placeholder="Password" />\n      </FloatingLabel>\n    </>\n  );\n}\n\nexport default FormFloatingBasicExample;\n',
        r =
          'import Form from \'react-bootstrap/Form\';\n\nfunction FormFloatingCustom() {\n  return (\n    <>\n      <Form.Floating className="mb-3">\n        <Form.Control\n          id="floatingInputCustom"\n          type="email"\n          placeholder="name@example.com"\n        />\n        <label htmlFor="floatingInputCustom">Email address</label>\n      </Form.Floating>\n      <Form.Floating>\n        <Form.Control\n          id="floatingPasswordCustom"\n          type="password"\n          placeholder="Password"\n        />\n        <label htmlFor="floatingPasswordCustom">Password</label>\n      </Form.Floating>\n    </>\n  );\n}\n\nexport default FormFloatingCustom;\n',
        i =
          'import Col from \'react-bootstrap/Col\';\nimport FloatingLabel from \'react-bootstrap/FloatingLabel\';\nimport Form from \'react-bootstrap/Form\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction FormFloatingLayoutExample() {\n  return (\n    <Row className="g-2">\n      <Col md>\n        <FloatingLabel controlId="floatingInputGrid" label="Email address">\n          <Form.Control type="email" placeholder="name@example.com" />\n        </FloatingLabel>\n      </Col>\n      <Col md>\n        <FloatingLabel\n          controlId="floatingSelectGrid"\n          label="Works with selects"\n        >\n          <Form.Select aria-label="Floating label select example">\n            <option>Open this select menu</option>\n            <option value="1">One</option>\n            <option value="2">Two</option>\n            <option value="3">Three</option>\n          </Form.Select>\n        </FloatingLabel>\n      </Col>\n    </Row>\n  );\n}\n\nexport default FormFloatingLayoutExample;\n',
        s =
          'import FloatingLabel from \'react-bootstrap/FloatingLabel\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction FormFloatingSelectExample() {\n  return (\n    <FloatingLabel controlId="floatingSelect" label="Works with selects">\n      <Form.Select aria-label="Floating label select example">\n        <option>Open this select menu</option>\n        <option value="1">One</option>\n        <option value="2">Two</option>\n        <option value="3">Three</option>\n      </Form.Select>\n    </FloatingLabel>\n  );\n}\n\nexport default FormFloatingSelectExample;\n',
        m =
          'import FloatingLabel from \'react-bootstrap/FloatingLabel\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction FormFloatingTextareaExample() {\n  return (\n    <>\n      <FloatingLabel\n        controlId="floatingTextarea"\n        label="Comments"\n        className="mb-3"\n      >\n        <Form.Control as="textarea" placeholder="Leave a comment here" />\n      </FloatingLabel>\n      <FloatingLabel controlId="floatingTextarea2" label="Comments">\n        <Form.Control\n          as="textarea"\n          placeholder="Leave a comment here"\n          style={{ height: \'100px\' }}\n        />\n      </FloatingLabel>\n    </>\n  );\n}\n\nexport default FormFloatingTextareaExample;\n',
        c = {
          title: "Floating labels",
          description:
            "Create beautifully simple form labels that float over your input fields.",
          sidebar_position: 8,
        },
        d = void 0,
        p = {
          id: "forms/floating-labels",
          title: "Floating labels",
          description:
            "Create beautifully simple form labels that float over your input fields.",
          source: "@site/docs/forms/floating-labels.mdx",
          sourceDirName: "forms",
          slug: "/forms/floating-labels",
          permalink: "/docs/forms/floating-labels",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 8,
          frontMatter: {
            title: "Floating labels",
            description:
              "Create beautifully simple form labels that float over your input fields.",
            sidebar_position: 8,
          },
          sidebar: "sidebar",
          previous: {
            title: "Input Group",
            permalink: "/docs/forms/input-group",
          },
          next: { title: "Layout", permalink: "/docs/forms/layout" },
        },
        u = {},
        h = [
          { value: "Example", id: "example", level: 2 },
          { value: "Textareas", id: "textareas", level: 2 },
          { value: "Selects", id: "selects", level: 2 },
          { value: "Layout", id: "layout", level: 2 },
          {
            value: "Customizing rendering",
            id: "customizing-rendering",
            level: 2,
          },
          { value: "API", id: "api", level: 2 },
          { value: "FormFloating", id: "formfloating", level: 3 },
          { value: "FloatingLabel", id: "floatinglabel", level: 3 },
        ];
      function g(e) {
        const o = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, l.a)(),
            ...e.components,
          },
          { CodeBlock: n, PropsTable: c } = o;
        return (
          n || F("CodeBlock", !0),
          c || F("PropsTable", !0),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.h2, { id: "example", children: "Example" }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Wrap a ",
                  (0, t.jsx)(o.code, { children: "<Form.Control>" }),
                  " element in ",
                  (0, t.jsx)(o.code, { children: "<FloatingLabel>" }),
                  " to enable floating labels with\nBootstrap\u2019s textual form fields. A ",
                  (0, t.jsx)(o.code, { children: "placeholder" }),
                  " is required\non each ",
                  (0, t.jsx)(o.code, { children: "<Form.Control>" }),
                  " as our method of CSS-only\nfloating labels uses the ",
                  (0, t.jsx)(o.code, { children: ":placeholder-shown" }),
                  " pseudo-element.",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, t.jsx)(o.h2, { id: "textareas", children: "Textareas" }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "By default, ",
                  (0, t.jsx)(o.code, { children: "<textarea>" }),
                  "s will be the same height as ",
                  (0, t.jsx)(o.code, { children: "<input>" }),
                  "s. To set a custom\nheight on your ",
                  (0, t.jsx)(o.code, { children: "<textarea>" }),
                  ", do not use the ",
                  (0, t.jsx)(o.code, { children: "rows" }),
                  " attribute. Instead, set an\nexplicit ",
                  (0, t.jsx)(o.code, { children: "height" }),
                  " (either inline or via custom CSS).",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: m }),
              "\n",
              (0, t.jsx)(o.h2, { id: "selects", children: "Selects" }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Other than ",
                  (0, t.jsx)(o.code, { children: "<Form.Control>" }),
                  ", floating labels are only available on ",
                  (0, t.jsx)(o.code, { children: "<Form.Select>" }),
                  "s.\nThey work in the same way, but unlike ",
                  (0, t.jsx)(o.code, { children: "<input>" }),
                  "s, they\u2019ll always show the ",
                  (0, t.jsx)(o.code, { children: "<label>" }),
                  "\nin its floated state.",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, t.jsx)(o.h2, { id: "layout", children: "Layout" }),
              "\n",
              (0, t.jsx)(o.p, {
                children:
                  "When working with the Bootstrap grid system, be sure to place form\nelements within column classes.",
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "customizing-rendering",
                children: "Customizing rendering",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "If you need greater control over the rendering, use the ",
                  (0, t.jsx)(o.code, { children: "<FormFloating>" }),
                  " component\nto wrap your input and label. Also note that the ",
                  (0, t.jsx)(o.code, { children: "<Form.Control>" }),
                  " must come first\nso we can utilize a sibling selector (e.g., ~).",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, t.jsx)(o.h2, { id: "api", children: "API" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "formfloating",
                children: "FormFloating",
              }),
              "\n",
              (0, t.jsx)(c, { name: "FormFloating" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "floatinglabel",
                children: "FloatingLabel",
              }),
              "\n",
              (0, t.jsx)(c, { name: "FloatingLabel" }),
            ],
          })
        );
      }
      function b(e = {}) {
        const { wrapper: o } = { ...(0, l.a)(), ...e.components };
        return o
          ? (0, t.jsx)(o, { ...e, children: (0, t.jsx)(g, { ...e }) })
          : g(e);
      }
      function F(e, o) {
        throw new Error(
          "Expected " +
            (o ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, o, n) => {
      n.d(o, { Z: () => i, a: () => r });
      var t = n(67294);
      const l = {},
        a = t.createContext(l);
      function r(e) {
        const o = t.useContext(a);
        return t.useMemo(
          function () {
            return "function" == typeof e ? e(o) : { ...o, ...e };
          },
          [o, e]
        );
      }
      function i(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(l)
              : e.components || l
            : r(e.components)),
          t.createElement(a.Provider, { value: o }, e.children)
        );
      }
    },
  },
]);
