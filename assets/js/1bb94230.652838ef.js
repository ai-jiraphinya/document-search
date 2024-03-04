"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1110],
  {
    62967: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => m,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => p,
        });
      var t = n(85893),
        r = n(11151);
      const s =
          'import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction BasicExample() {\n  return (\n    <Form>\n      <Form.Group className="mb-3" controlId="formBasicEmail">\n        <Form.Label>Email address</Form.Label>\n        <Form.Control type="email" placeholder="Enter email" />\n        <Form.Text className="text-muted">\n          We\'ll never share your email with anyone else.\n        </Form.Text>\n      </Form.Group>\n\n      <Form.Group className="mb-3" controlId="formBasicPassword">\n        <Form.Label>Password</Form.Label>\n        <Form.Control type="password" placeholder="Password" />\n      </Form.Group>\n      <Form.Group className="mb-3" controlId="formBasicCheckbox">\n        <Form.Check type="checkbox" label="Check me out" />\n      </Form.Group>\n      <Button variant="primary" type="submit">\n        Submit\n      </Button>\n    </Form>\n  );\n}\n\nexport default BasicExample;\n',
        a =
          'import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\n\nfunction FormDisabledExample() {\n  return (\n    <Form>\n      <fieldset disabled>\n        <Form.Group className="mb-3">\n          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>\n          <Form.Control id="disabledTextInput" placeholder="Disabled input" />\n        </Form.Group>\n        <Form.Group className="mb-3">\n          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>\n          <Form.Select id="disabledSelect">\n            <option>Disabled select</option>\n          </Form.Select>\n        </Form.Group>\n        <Form.Group className="mb-3">\n          <Form.Check\n            type="checkbox"\n            id="disabledFieldsetCheck"\n            label="Can\'t check this"\n          />\n        </Form.Group>\n        <Button type="submit">Submit</Button>\n      </fieldset>\n    </Form>\n  );\n}\n\nexport default FormDisabledExample;\n',
        l =
          'import Form from \'react-bootstrap/Form\';\n\nfunction FormDisabledInputExample() {\n  return (\n    <>\n      <Form.Group className="mb-3">\n        <Form.Label>Disabled input</Form.Label>\n        <Form.Control placeholder="Disabled input" disabled />\n      </Form.Group>\n      <Form.Group className="mb-3">\n        <Form.Label>Disabled select menu</Form.Label>\n        <Form.Select disabled>\n          <option>Disabled select</option>\n        </Form.Select>\n      </Form.Group>\n      <Form.Group className="mb-3">\n        <Form.Check type="checkbox" label="Can\'t check this" disabled />\n      </Form.Group>\n    </>\n  );\n}\n\nexport default FormDisabledInputExample;\n',
        i = {
          title: "Forms",
          description:
            "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
          sidebar_label: "Overview",
          sidebar_position: 1,
        },
        d = void 0,
        c = {
          id: "forms/overview",
          title: "Forms",
          description:
            "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
          source: "@site/docs/forms/overview.mdx",
          sourceDirName: "forms",
          slug: "/forms/overview",
          permalink: "/docs/forms/overview",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: {
            title: "Forms",
            description:
              "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
            sidebar_label: "Overview",
            sidebar_position: 1,
          },
          sidebar: "sidebar",
          previous: { title: "Stacks", permalink: "/docs/layout/stack" },
          next: {
            title: "Form controls",
            permalink: "/docs/forms/form-control",
          },
        },
        m = {},
        p = [
          { value: "Overview", id: "overview", level: 2 },
          { value: "Disabled forms", id: "disabled-forms", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Form", id: "form", level: 3 },
          { value: "FormLabel", id: "formlabel", level: 3 },
        ];
      function u(e) {
        const o = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, r.a)(),
            ...e.components,
          },
          { CodeBlock: n, PropsTable: i } = o;
        return (
          n || b("CodeBlock", !0),
          i || b("PropsTable", !0),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.h2, { id: "overview", children: "Overview" }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "The ",
                  (0, t.jsx)(o.code, { children: "<FormControl>" }),
                  " component renders a form control with Bootstrap styling.\nThe ",
                  (0, t.jsx)(o.code, { children: "<FormGroup>" }),
                  " component wraps a form control with proper spacing, along\nwith support for a label, help text, and validation state. To ensure\naccessibility, set ",
                  (0, t.jsx)(o.code, { children: "controlId" }),
                  " on ",
                  (0, t.jsx)(o.code, { children: "<FormGroup>" }),
                  ", and use ",
                  (0, t.jsx)(o.code, { children: "<FormLabel>" }),
                  " for\nthe label.",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "The ",
                  (0, t.jsx)(o.code, { children: "<FormControl>" }),
                  " component directly renders the ",
                  (0, t.jsx)(o.code, { children: "<input>" }),
                  " or other specified\ncomponent. If you need to access the value of an uncontrolled ",
                  (0, t.jsx)(o.code, { children: "<FormControl>" }),
                  ",\nattach a ",
                  (0, t.jsx)(o.code, { children: "ref" }),
                  " to it as you would with an uncontrolled input, then call\n",
                  (0, t.jsx)(o.code, { children: "ReactDOM.findDOMNode(ref)" }),
                  " to get the DOM node. You can then interact with that\nnode as you would with any other uncontrolled input.",
                ],
              }),
              "\n",
              (0, t.jsx)(o.p, {
                children:
                  "If your application contains a large number of form groups, we recommend\nbuilding a higher-level component encapsulating a complete field group\nthat renders the label, the control, and any other necessary components.\nWe don't provide this out-of-the-box, because the composition of those\nfield groups is too specific to an individual application to admit a\ngood one-size-fits-all solution.",
              }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "disabled-forms",
                children: "Disabled forms",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Add the ",
                  (0, t.jsx)(o.code, { children: "disabled" }),
                  " boolean attribute on an input to prevent user interactions and\nmake it appear lighter.",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Add the ",
                  (0, t.jsx)(o.code, { children: "disabled" }),
                  " attribute to a ",
                  (0, t.jsx)(o.code, { children: "<fieldset>" }),
                  " to disable all the controls within.",
                ],
              }),
              "\n",
              (0, t.jsx)(n, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Browsers treat all native form controls (",
                  (0, t.jsx)(o.code, { children: "<input>" }),
                  ", ",
                  (0, t.jsx)(o.code, { children: "<select>" }),
                  " and ",
                  (0, t.jsx)(o.code, { children: "<button>" }),
                  " elements)\ninside ",
                  (0, t.jsx)(o.code, { children: "<fieldset disabled>" }),
                  " as disabled, preventing both keyboard and mouse interactions\non them.",
                ],
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "However, if your form also includes custom button-like elements such as\n",
                  (0, t.jsx)(o.code, { children: '<a ... class="btn btn-*">' }),
                  ", these will only be given a style of ",
                  (0, t.jsx)(o.code, { children: "pointer-events: none" }),
                  ",\nmeaning they are still focusable and operable using the keyboard. In this case, you must\nmanually modify these controls by adding ",
                  (0, t.jsx)(o.code, { children: 'tabindex="-1"' }),
                  " to prevent them from receiving\nfocus and ",
                  (0, t.jsx)(o.code, { children: 'aria-disabled="disabled"' }),
                  " to signal their state to assistive technologies.",
                ],
              }),
              "\n",
              (0, t.jsx)(o.h2, { id: "api", children: "API" }),
              "\n",
              (0, t.jsx)(o.h3, { id: "form", children: "Form" }),
              "\n",
              (0, t.jsx)(i, { name: "Form" }),
              "\n",
              (0, t.jsx)(o.h3, { id: "formlabel", children: "FormLabel" }),
              "\n",
              (0, t.jsx)(i, { name: "FormLabel" }),
            ],
          })
        );
      }
      function h(e = {}) {
        const { wrapper: o } = { ...(0, r.a)(), ...e.components };
        return o
          ? (0, t.jsx)(o, { ...e, children: (0, t.jsx)(u, { ...e }) })
          : u(e);
      }
      function b(e, o) {
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
      n.d(o, { Z: () => l, a: () => a });
      var t = n(67294);
      const r = {},
        s = t.createContext(r);
      function a(e) {
        const o = t.useContext(s);
        return t.useMemo(
          function () {
            return "function" == typeof e ? e(o) : { ...o, ...e };
          },
          [o, e]
        );
      }
      function l(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : a(e.components)),
          t.createElement(s.Provider, { value: o }, e.children)
        );
      }
    },
  },
]);
