"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1009],
  {
    5594: (n, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => u,
          contentTitle: () => d,
          default: () => b,
          frontMatter: () => m,
          metadata: () => p,
          toc: () => c,
        });
      var r = o(85893),
        t = o(11151);
      const a =
          'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport * as formik from \'formik\';\nimport * as yup from \'yup\';\n\nfunction FormExample() {\n  const { Formik } = formik;\n\n  const schema = yup.object().shape({\n    firstName: yup.string().required(),\n    lastName: yup.string().required(),\n    username: yup.string().required(),\n    city: yup.string().required(),\n    state: yup.string().required(),\n    zip: yup.string().required(),\n    terms: yup.bool().required().oneOf([true], \'Terms must be accepted\'),\n  });\n\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: \'Mark\',\n        lastName: \'Otto\',\n        username: \'\',\n        city: \'\',\n        state: \'\',\n        zip: \'\',\n        terms: false,\n      }}\n    >\n      {({ handleSubmit, handleChange, values, touched, errors }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Row className="mb-3">\n            <Form.Group as={Col} md="4" controlId="validationFormik01">\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type="text"\n                name="firstName"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormik02">\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type="text"\n                name="lastName"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.lastName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormikUsername">\n              <Form.Label>Username</Form.Label>\n              <InputGroup hasValidation>\n                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n                <Form.Control\n                  type="text"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend"\n                  name="username"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type="invalid">\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Row>\n          <Row className="mb-3">\n            <Form.Group as={Col} md="6" controlId="validationFormik03">\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="City"\n                name="city"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type="invalid">\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="3" controlId="validationFormik04">\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="State"\n                name="state"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type="invalid">\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="3" controlId="validationFormik05">\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="Zip"\n                name="zip"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type="invalid">\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Row>\n          <Form.Group className="mb-3">\n            <Form.Check\n              required\n              name="terms"\n              label="Agree to terms and conditions"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              feedbackType="invalid"\n              id="validationFormik0"\n            />\n          </Form.Group>\n          <Button type="submit">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nexport default FormExample;\n',
        i =
          "import Form from 'react-bootstrap/Form';\nimport InputGroup from 'react-bootstrap/InputGroup';\n\nfunction ValidationInputGroupExample() {\n  return (\n    <InputGroup hasValidation>\n      <InputGroup.Text>@</InputGroup.Text>\n      <Form.Control type=\"text\" required isInvalid />\n      <Form.Control.Feedback type=\"invalid\">\n        Please choose a username.\n      </Form.Control.Feedback>\n    </InputGroup>\n  );\n}\n\nexport default ValidationInputGroupExample;\n",
        l =
          'import { useState } from \'react\';\nimport Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction FormExample() {\n  const [validated, setValidated] = useState(false);\n\n  const handleSubmit = (event) => {\n    const form = event.currentTarget;\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n\n    setValidated(true);\n  };\n\n  return (\n    <Form noValidate validated={validated} onSubmit={handleSubmit}>\n      <Row className="mb-3">\n        <Form.Group as={Col} md="4" controlId="validationCustom01">\n          <Form.Label>First name</Form.Label>\n          <Form.Control\n            required\n            type="text"\n            placeholder="First name"\n            defaultValue="Mark"\n          />\n          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="4" controlId="validationCustom02">\n          <Form.Label>Last name</Form.Label>\n          <Form.Control\n            required\n            type="text"\n            placeholder="Last name"\n            defaultValue="Otto"\n          />\n          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="4" controlId="validationCustomUsername">\n          <Form.Label>Username</Form.Label>\n          <InputGroup hasValidation>\n            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n            <Form.Control\n              type="text"\n              placeholder="Username"\n              aria-describedby="inputGroupPrepend"\n              required\n            />\n            <Form.Control.Feedback type="invalid">\n              Please choose a username.\n            </Form.Control.Feedback>\n          </InputGroup>\n        </Form.Group>\n      </Row>\n      <Row className="mb-3">\n        <Form.Group as={Col} md="6" controlId="validationCustom03">\n          <Form.Label>City</Form.Label>\n          <Form.Control type="text" placeholder="City" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid city.\n          </Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="3" controlId="validationCustom04">\n          <Form.Label>State</Form.Label>\n          <Form.Control type="text" placeholder="State" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid state.\n          </Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="3" controlId="validationCustom05">\n          <Form.Label>Zip</Form.Label>\n          <Form.Control type="text" placeholder="Zip" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid zip.\n          </Form.Control.Feedback>\n        </Form.Group>\n      </Row>\n      <Form.Group className="mb-3">\n        <Form.Check\n          required\n          label="Agree to terms and conditions"\n          feedback="You must agree before submitting."\n          feedbackType="invalid"\n        />\n      </Form.Group>\n      <Button type="submit">Submit form</Button>\n    </Form>\n  );\n}\n\nexport default FormExample;\n',
        s =
          'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport * as formik from \'formik\';\nimport * as yup from \'yup\';\n\nfunction FormExample() {\n  const { Formik } = formik;\n\n  const schema = yup.object().shape({\n    firstName: yup.string().required(),\n    lastName: yup.string().required(),\n    username: yup.string().required(),\n    city: yup.string().required(),\n    state: yup.string().required(),\n    zip: yup.string().required(),\n    file: yup.mixed().required(),\n    terms: yup.bool().required().oneOf([true], \'terms must be accepted\'),\n  });\n\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: \'Mark\',\n        lastName: \'Otto\',\n        username: \'\',\n        city: \'\',\n        state: \'\',\n        zip: \'\',\n        file: null,\n        terms: false,\n      }}\n    >\n      {({ handleSubmit, handleChange, values, touched, errors }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Row className="mb-3">\n            <Form.Group\n              as={Col}\n              md="4"\n              controlId="validationFormik101"\n              className="position-relative"\n            >\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type="text"\n                name="firstName"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="4"\n              controlId="validationFormik102"\n              className="position-relative"\n            >\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type="text"\n                name="lastName"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.lastName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">\n              <Form.Label>Username</Form.Label>\n              <InputGroup hasValidation>\n                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n                <Form.Control\n                  type="text"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend"\n                  name="username"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type="invalid" tooltip>\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Row>\n          <Row className="mb-3">\n            <Form.Group\n              as={Col}\n              md="6"\n              controlId="validationFormik103"\n              className="position-relative"\n            >\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="City"\n                name="city"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="3"\n              controlId="validationFormik104"\n              className="position-relative"\n            >\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="State"\n                name="state"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="3"\n              controlId="validationFormik105"\n              className="position-relative"\n            >\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="Zip"\n                name="zip"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Row>\n          <Form.Group className="position-relative mb-3">\n            <Form.Label>File</Form.Label>\n            <Form.Control\n              type="file"\n              required\n              name="file"\n              onChange={handleChange}\n              isInvalid={!!errors.file}\n            />\n            <Form.Control.Feedback type="invalid" tooltip>\n              {errors.file}\n            </Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group className="position-relative mb-3">\n            <Form.Check\n              required\n              name="terms"\n              label="Agree to terms and conditions"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              feedbackType="invalid"\n              id="validationFormik106"\n              feedbackTooltip\n            />\n          </Form.Group>\n          <Button type="submit">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nexport default FormExample;\n',
        m = {
          title: "Validation",
          description:
            "Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",
          sidebar_position: 10,
        },
        d = void 0,
        p = {
          id: "forms/validation",
          title: "Validation",
          description:
            "Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",
          source: "@site/docs/forms/validation.mdx",
          sourceDirName: "forms",
          slug: "/forms/validation",
          permalink: "/docs/forms/validation",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 10,
          frontMatter: {
            title: "Validation",
            description:
              "Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",
            sidebar_position: 10,
          },
          sidebar: "sidebar",
          previous: { title: "Layout", permalink: "/docs/forms/layout" },
          next: { title: "Accordion", permalink: "/docs/components/accordion" },
        },
        u = {},
        c = [
          {
            value: "Native HTML5 form validation",
            id: "native-html5-form-validation",
            level: 2,
          },
          {
            value: "Form libraries and server-rendered styles",
            id: "form-libraries-and-server-rendered-styles",
            level: 2,
          },
          { value: "Tooltips", id: "tooltips", level: 2 },
          {
            value: "Input group validation",
            id: "input-group-validation",
            level: 2,
          },
          { value: "API", id: "api", level: 2 },
          { value: "Feedback", id: "feedback", level: 3 },
        ];
      function F(n) {
        const e = {
            a: "a",
            admonition: "admonition",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, t.a)(),
            ...n.components,
          },
          { CodeBlock: o, PropsTable: m } = e;
        return (
          o || h("CodeBlock", !0),
          m || h("PropsTable", !0),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(e.h2, {
                id: "native-html5-form-validation",
                children: "Native HTML5 form validation",
              }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "For native HTML form validation\u2013",
                  (0, r.jsx)(e.a, {
                    href: "https://caniuse.com/#feat=form-validation",
                    children: "available in all our supported browsers",
                  }),
                  ",\nthe ",
                  (0, r.jsx)(e.code, { children: ":valid" }),
                  " and ",
                  (0, r.jsx)(e.code, { children: ":invalid" }),
                  " pseudo selectors are used to apply validation\nstyles as well as display feedback messages.",
                ],
              }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "Bootstrap scopes the ",
                  (0, r.jsx)(e.code, { children: ":valid" }),
                  " and ",
                  (0, r.jsx)(e.code, { children: ":invalid" }),
                  " styles to parent ",
                  (0, r.jsx)(e.code, { children: ".was-validated" }),
                  "\nclass, usually applied to the ",
                  (0, r.jsx)(e.code, { children: "<Form>" }),
                  " (you can use the ",
                  (0, r.jsx)(e.code, { children: "validated" }),
                  " prop\nas a shortcut). Otherwise, any required field without a value shows up\nas invalid on page load. This way, you may choose when to activate them\n(typically after form submission is attempted).",
                ],
              }),
              "\n",
              (0, r.jsx)(e.admonition, {
                title: "Watch out!",
                type: "caution",
                children: (0, r.jsxs)(e.p, {
                  children: [
                    "Browsers provide their own validation UI by default on ",
                    (0, r.jsx)(e.code, { children: "form" }),
                    "s. You can disable the\ndefault UI by adding the HTML ",
                    (0, r.jsx)(e.code, { children: "noValidate" }),
                    " attribute to your ",
                    (0, r.jsx)(e.code, { children: "<Form>" }),
                    " or ",
                    (0, r.jsx)(e.code, { children: "<form>" }),
                    " element.",
                  ],
                }),
              }),
              "\n",
              (0, r.jsx)(o, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, r.jsx)(e.h2, {
                id: "form-libraries-and-server-rendered-styles",
                children: "Form libraries and server-rendered styles",
              }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "It's often beneficial (especially in React) to handle form validation\nvia a library like Formik, or react-formal. In those cases, ",
                  (0, r.jsx)(e.code, { children: "isValid" }),
                  "\nand ",
                  (0, r.jsx)(e.code, { children: "isInvalid" }),
                  " props can be added to form controls to manually apply\nvalidation styles. Below is a quick example integrating with\n",
                  (0, r.jsx)(e.a, {
                    href: "https://github.com/jaredpalmer/formik",
                    children: "Formik",
                  }),
                  ".",
                ],
              }),
              "\n",
              (0, r.jsx)(o, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, r.jsx)(e.h2, { id: "tooltips", children: "Tooltips" }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "If your form layout allows it, you can use the ",
                  (0, r.jsx)(e.code, { children: "tooltip" }),
                  " prop to display\nvalidation feedback in a styled tooltip. Be sure to have a parent with\n",
                  (0, r.jsx)(e.code, { children: "position: relative" }),
                  " on it for tooltip positioning. In the example below,\nour column classes have this already, but your project may require an\nalternative setup.",
                ],
              }),
              "\n",
              (0, r.jsx)(o, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, r.jsx)(e.h2, {
                id: "input-group-validation",
                children: "Input group validation",
              }),
              "\n",
              (0, r.jsxs)(e.p, {
                children: [
                  "To properly show rounded corners in an ",
                  (0, r.jsx)(e.code, { children: "<InputGroup>" }),
                  " with validation,\nthe ",
                  (0, r.jsx)(e.code, { children: "<InputGroup>" }),
                  " requires the ",
                  (0, r.jsx)(e.code, { children: "hasValidation" }),
                  " prop.",
                ],
              }),
              "\n",
              (0, r.jsx)(o, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, r.jsx)(e.h2, { id: "api", children: "API" }),
              "\n",
              (0, r.jsx)(e.h3, { id: "feedback", children: "Feedback" }),
              "\n",
              (0, r.jsx)(m, { name: "Feedback" }),
            ],
          })
        );
      }
      function b(n = {}) {
        const { wrapper: e } = { ...(0, t.a)(), ...n.components };
        return e
          ? (0, r.jsx)(e, { ...n, children: (0, r.jsx)(F, { ...n }) })
          : F(n);
      }
      function h(n, e) {
        throw new Error(
          "Expected " +
            (e ? "component" : "object") +
            " `" +
            n +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (n, e, o) => {
      o.d(e, { Z: () => l, a: () => i });
      var r = o(67294);
      const t = {},
        a = r.createContext(t);
      function i(n) {
        const e = r.useContext(a);
        return r.useMemo(
          function () {
            return "function" == typeof n ? n(e) : { ...e, ...n };
          },
          [e, n]
        );
      }
      function l(n) {
        let e;
        return (
          (e = n.disableParentContext
            ? "function" == typeof n.components
              ? n.components(t)
              : n.components || t
            : i(n.components)),
          r.createElement(a.Provider, { value: e }, n.children)
        );
      }
    },
  },
]);
