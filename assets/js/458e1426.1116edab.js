"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [7788],
  {
    93531: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => F,
          contentTitle: () => u,
          default: () => h,
          frontMatter: () => c,
          metadata: () => x,
          toc: () => f,
        });
      var r = n(85893),
        t = n(11151);
      const l =
          'import Form from \'react-bootstrap/Form\';\n\nfunction TextControlsExample() {\n  return (\n    <Form>\n      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">\n        <Form.Label>Email address</Form.Label>\n        <Form.Control type="email" placeholder="name@example.com" />\n      </Form.Group>\n      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">\n        <Form.Label>Example textarea</Form.Label>\n        <Form.Control as="textarea" rows={3} />\n      </Form.Group>\n    </Form>\n  );\n}\n\nexport default TextControlsExample;\n',
        a =
          'import Form from \'react-bootstrap/Form\';\n\nfunction InputSizesExample() {\n  return (\n    <>\n      <Form.Control size="lg" type="text" placeholder="Large text" />\n      <br />\n      <Form.Control type="text" placeholder="Normal text" />\n      <br />\n      <Form.Control size="sm" type="text" placeholder="Small text" />\n    </>\n  );\n}\n\nexport default InputSizesExample;\n',
        i =
          'import Form from \'react-bootstrap/Form\';\n\nfunction FormControlDisabledExample() {\n  return (\n    <>\n      <Form.Control\n        type="text"\n        placeholder="Disabled input"\n        aria-label="Disabled input example"\n        disabled\n        readOnly\n      />\n      <br />\n      <Form.Control\n        type="text"\n        placeholder="Disabled readonly input"\n        aria-label="Disabled input example"\n        readOnly\n      />\n    </>\n  );\n}\n\nexport default FormControlDisabledExample;\n',
        s =
          'import Form from \'react-bootstrap/Form\';\n\nfunction InputReadOnlyExample() {\n  return (\n    <Form.Control type="text" placeholder="Readonly input here..." readOnly />\n  );\n}\n\nexport default InputReadOnlyExample;\n',
        m =
          'import Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction PlaintextExample() {\n  return (\n    <Form>\n      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">\n        <Form.Label column sm="2">\n          Email\n        </Form.Label>\n        <Col sm="10">\n          <Form.Control plaintext readOnly defaultValue="email@example.com" />\n        </Col>\n      </Form.Group>\n\n      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">\n        <Form.Label column sm="2">\n          Password\n        </Form.Label>\n        <Col sm="10">\n          <Form.Control type="password" placeholder="Password" />\n        </Col>\n      </Form.Group>\n    </Form>\n  );\n}\n\nexport default PlaintextExample;\n',
        p =
          'import Form from \'react-bootstrap/Form\';\n\nfunction FormFileExample() {\n  return (\n    <>\n      <Form.Group controlId="formFile" className="mb-3">\n        <Form.Label>Default file input example</Form.Label>\n        <Form.Control type="file" />\n      </Form.Group>\n      <Form.Group controlId="formFileMultiple" className="mb-3">\n        <Form.Label>Multiple files input example</Form.Label>\n        <Form.Control type="file" multiple />\n      </Form.Group>\n      <Form.Group controlId="formFileDisabled" className="mb-3">\n        <Form.Label>Disabled file input example</Form.Label>\n        <Form.Control type="file" disabled />\n      </Form.Group>\n      <Form.Group controlId="formFileSm" className="mb-3">\n        <Form.Label>Small file input example</Form.Label>\n        <Form.Control type="file" size="sm" />\n      </Form.Group>\n      <Form.Group controlId="formFileLg" className="mb-3">\n        <Form.Label>Large file input example</Form.Label>\n        <Form.Control type="file" size="lg" />\n      </Form.Group>\n    </>\n  );\n}\n\nexport default FormFileExample;\n',
        d =
          'import Form from \'react-bootstrap/Form\';\n\nfunction ColorPickerExample() {\n  return (\n    <>\n      <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>\n      <Form.Control\n        type="color"\n        id="exampleColorInput"\n        defaultValue="#563d7c"\n        title="Choose your color"\n      />\n    </>\n  );\n}\n\nexport default ColorPickerExample;\n',
        c = {
          title: "Form controls",
          description:
            "Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more.",
          sidebar_position: 2,
        },
        u = void 0,
        x = {
          id: "forms/form-control",
          title: "Form controls",
          description:
            "Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more.",
          source: "@site/docs/forms/form-control.mdx",
          sourceDirName: "forms",
          slug: "/forms/form-control",
          permalink: "/docs/forms/form-control",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: {
            title: "Form controls",
            description:
              "Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more.",
            sidebar_position: 2,
          },
          sidebar: "sidebar",
          previous: { title: "Overview", permalink: "/docs/forms/overview" },
          next: { title: "Form text", permalink: "/docs/forms/form-text" },
        },
        F = {},
        f = [
          { value: "Example", id: "example", level: 2 },
          { value: "Sizing", id: "sizing", level: 2 },
          { value: "Disabled", id: "disabled", level: 2 },
          { value: "Readonly", id: "readonly", level: 2 },
          { value: "Readonly plain text", id: "readonly-plain-text", level: 2 },
          { value: "File input", id: "file-input", level: 2 },
          { value: "Color", id: "color", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "FormControl", id: "formcontrol", level: 3 },
        ];
      function b(e) {
        const o = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, t.a)(),
            ...e.components,
          },
          { CodeBlock: n, PropsTable: c } = o;
        return (
          n || C("CodeBlock", !0),
          c || C("PropsTable", !0),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(o.h2, { id: "example", children: "Example" }),
              "\n",
              (0, r.jsxs)(o.p, {
                children: [
                  "For textual form controls\u2014like ",
                  (0, r.jsx)(o.code, { children: "input" }),
                  "s and ",
                  (0, r.jsx)(o.code, { children: "textarea" }),
                  "s\u2014use the ",
                  (0, r.jsx)(o.code, { children: "FormControl" }),
                  " component.\nFormControl adds some additional styles for general appearance, focus\nstate, sizing, and more.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, r.jsx)(o.h2, { id: "sizing", children: "Sizing" }),
              "\n",
              (0, r.jsxs)(o.p, {
                children: [
                  "Use ",
                  (0, r.jsx)(o.code, { children: "size" }),
                  " on ",
                  (0, r.jsx)(o.code, { children: "<FormControl>" }),
                  " to change the size of the input.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, r.jsx)(o.h2, { id: "disabled", children: "Disabled" }),
              "\n",
              (0, r.jsxs)(o.p, {
                children: [
                  "Add the ",
                  (0, r.jsx)(o.code, { children: "disabled" }),
                  " prop on an input to give it a grayed out appearance and remove pointer events.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, r.jsx)(o.h2, { id: "readonly", children: "Readonly" }),
              "\n",
              (0, r.jsxs)(o.p, {
                children: [
                  "Add the ",
                  (0, r.jsx)(o.code, { children: "readOnly" }),
                  " prop on an input to prevent modification\nof the input's value. Read-only inputs appear lighter (just like\ndisabled inputs), but retain the standard cursor.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, r.jsx)(o.h2, {
                id: "readonly-plain-text",
                children: "Readonly plain text",
              }),
              "\n",
              (0, r.jsxs)(o.p, {
                children: [
                  "If you want to have readonly elements in your form styled as plain text,\nuse the ",
                  (0, r.jsx)(o.code, { children: "plaintext" }),
                  " prop on FormControls to remove the\ndefault form field styling and preserve the correct margin and padding.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: m }),
              "\n",
              (0, r.jsx)(o.h2, { id: "file-input", children: "File input" }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, r.jsx)(o.h2, { id: "color", children: "Color" }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, r.jsx)(o.h2, { id: "api", children: "API" }),
              "\n",
              (0, r.jsx)(o.h3, { id: "formcontrol", children: "FormControl" }),
              "\n",
              (0, r.jsx)(c, { name: "FormControl" }),
            ],
          })
        );
      }
      function h(e = {}) {
        const { wrapper: o } = { ...(0, t.a)(), ...e.components };
        return o
          ? (0, r.jsx)(o, { ...e, children: (0, r.jsx)(b, { ...e }) })
          : b(e);
      }
      function C(e, o) {
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
      n.d(o, { Z: () => i, a: () => a });
      var r = n(67294);
      const t = {},
        l = r.createContext(t);
      function a(e) {
        const o = r.useContext(l);
        return r.useMemo(
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
              ? e.components(t)
              : e.components || t
            : a(e.components)),
          r.createElement(l.Provider, { value: o }, e.children)
        );
      }
    },
  },
]);
/*! jiraphinya playground information please see ok */
