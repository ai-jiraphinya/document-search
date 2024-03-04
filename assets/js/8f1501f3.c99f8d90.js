/*! For license information please see ok สนามเด็กเล่น */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1507],
  {
    74429: (o, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => f,
          contentTitle: () => h,
          default: () => C,
          frontMatter: () => u,
          metadata: () => b,
          toc: () => F,
        });
      var e = r(85893),
        t = r(11151);
      const l =
          'import Form from \'react-bootstrap/Form\';\n\nfunction FormGroupExample() {\n  return (\n    <Form>\n      <Form.Group className="mb-3" controlId="formGroupEmail">\n        <Form.Label>Email address</Form.Label>\n        <Form.Control type="email" placeholder="Enter email" />\n      </Form.Group>\n      <Form.Group className="mb-3" controlId="formGroupPassword">\n        <Form.Label>Password</Form.Label>\n        <Form.Control type="password" placeholder="Password" />\n      </Form.Group>\n    </Form>\n  );\n}\n\nexport default FormGroupExample;\n',
        a =
          'import Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction FormLabelSizingExample() {\n  return (\n    <>\n      <Row>\n        <Form.Label column="lg" lg={2}>\n          Large Text\n        </Form.Label>\n        <Col>\n          <Form.Control size="lg" type="text" placeholder="Large text" />\n        </Col>\n      </Row>\n      <br />\n      <Row>\n        <Form.Label column lg={2}>\n          Normal Text\n        </Form.Label>\n        <Col>\n          <Form.Control type="text" placeholder="Normal text" />\n        </Col>\n      </Row>\n      <br />\n      <Row>\n        <Form.Label column="sm" lg={2}>\n          Small Text\n        </Form.Label>\n        <Col>\n          <Form.Control size="sm" type="text" placeholder="Small text" />\n        </Col>\n      </Row>\n    </>\n  );\n}\n\nexport default FormLabelSizingExample;\n',
        i =
          'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction GridAutoSizingExample() {\n  return (\n    <Form>\n      <Row className="align-items-center">\n        <Col xs="auto">\n          <Form.Label htmlFor="inlineFormInput" visuallyHidden>\n            Name\n          </Form.Label>\n          <Form.Control\n            className="mb-2"\n            id="inlineFormInput"\n            placeholder="Jane Doe"\n          />\n        </Col>\n        <Col xs="auto">\n          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>\n            Username\n          </Form.Label>\n          <InputGroup className="mb-2">\n            <InputGroup.Text>@</InputGroup.Text>\n            <Form.Control id="inlineFormInputGroup" placeholder="Username" />\n          </InputGroup>\n        </Col>\n        <Col xs="auto">\n          <Form.Check\n            type="checkbox"\n            id="autoSizingCheck"\n            className="mb-2"\n            label="Remember me"\n          />\n        </Col>\n        <Col xs="auto">\n          <Button type="submit" className="mb-2">\n            Submit\n          </Button>\n        </Col>\n      </Row>\n    </Form>\n  );\n}\n\nexport default GridAutoSizingExample;\n',
        s =
          'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction GridAutoSizingColMixExample() {\n  return (\n    <Form>\n      <Row className="align-items-center">\n        <Col sm={3} className="my-1">\n          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>\n            Name\n          </Form.Label>\n          <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />\n        </Col>\n        <Col sm={3} className="my-1">\n          <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>\n            Username\n          </Form.Label>\n          <InputGroup>\n            <InputGroup.Text>@</InputGroup.Text>\n            <Form.Control\n              id="inlineFormInputGroupUsername"\n              placeholder="Username"\n            />\n          </InputGroup>\n        </Col>\n        <Col xs="auto" className="my-1">\n          <Form.Check\n            type="checkbox"\n            id="autoSizingCheck2"\n            label="Remember me"\n          />\n        </Col>\n        <Col xs="auto" className="my-1">\n          <Button type="submit">Submit</Button>\n        </Col>\n      </Row>\n    </Form>\n  );\n}\n\nexport default GridAutoSizingColMixExample;\n',
        m =
          "import Col from 'react-bootstrap/Col';\nimport Form from 'react-bootstrap/Form';\nimport Row from 'react-bootstrap/Row';\n\nfunction GridBasicExample() {\n  return (\n    <Form>\n      <Row>\n        <Col>\n          <Form.Control placeholder=\"First name\" />\n        </Col>\n        <Col>\n          <Form.Control placeholder=\"Last name\" />\n        </Col>\n      </Row>\n    </Form>\n  );\n}\n\nexport default GridBasicExample;\n",
        d =
          "import Col from 'react-bootstrap/Col';\nimport Form from 'react-bootstrap/Form';\nimport Row from 'react-bootstrap/Row';\n\nfunction GridColSizesExample() {\n  return (\n    <Form>\n      <Row>\n        <Col xs={7}>\n          <Form.Control placeholder=\"City\" />\n        </Col>\n        <Col>\n          <Form.Control placeholder=\"State\" />\n        </Col>\n        <Col>\n          <Form.Control placeholder=\"Zip\" />\n        </Col>\n      </Row>\n    </Form>\n  );\n}\n\nexport default GridColSizesExample;\n",
        c =
          'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction GridComplexExample() {\n  return (\n    <Form>\n      <Row className="mb-3">\n        <Form.Group as={Col} controlId="formGridEmail">\n          <Form.Label>Email</Form.Label>\n          <Form.Control type="email" placeholder="Enter email" />\n        </Form.Group>\n\n        <Form.Group as={Col} controlId="formGridPassword">\n          <Form.Label>Password</Form.Label>\n          <Form.Control type="password" placeholder="Password" />\n        </Form.Group>\n      </Row>\n\n      <Form.Group className="mb-3" controlId="formGridAddress1">\n        <Form.Label>Address</Form.Label>\n        <Form.Control placeholder="1234 Main St" />\n      </Form.Group>\n\n      <Form.Group className="mb-3" controlId="formGridAddress2">\n        <Form.Label>Address 2</Form.Label>\n        <Form.Control placeholder="Apartment, studio, or floor" />\n      </Form.Group>\n\n      <Row className="mb-3">\n        <Form.Group as={Col} controlId="formGridCity">\n          <Form.Label>City</Form.Label>\n          <Form.Control />\n        </Form.Group>\n\n        <Form.Group as={Col} controlId="formGridState">\n          <Form.Label>State</Form.Label>\n          <Form.Select defaultValue="Choose...">\n            <option>Choose...</option>\n            <option>...</option>\n          </Form.Select>\n        </Form.Group>\n\n        <Form.Group as={Col} controlId="formGridZip">\n          <Form.Label>Zip</Form.Label>\n          <Form.Control />\n        </Form.Group>\n      </Row>\n\n      <Form.Group className="mb-3" id="formGridCheckbox">\n        <Form.Check type="checkbox" label="Check me out" />\n      </Form.Group>\n\n      <Button variant="primary" type="submit">\n        Submit\n      </Button>\n    </Form>\n  );\n}\n\nexport default GridComplexExample;\n',
        p =
          'import Button from \'react-bootstrap/Button\';\nimport Col from \'react-bootstrap/Col\';\nimport Form from \'react-bootstrap/Form\';\nimport Row from \'react-bootstrap/Row\';\n\nfunction HorizontalExample() {\n  return (\n    <Form>\n      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">\n        <Form.Label column sm={2}>\n          Email\n        </Form.Label>\n        <Col sm={10}>\n          <Form.Control type="email" placeholder="Email" />\n        </Col>\n      </Form.Group>\n\n      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">\n        <Form.Label column sm={2}>\n          Password\n        </Form.Label>\n        <Col sm={10}>\n          <Form.Control type="password" placeholder="Password" />\n        </Col>\n      </Form.Group>\n      <fieldset>\n        <Form.Group as={Row} className="mb-3">\n          <Form.Label as="legend" column sm={2}>\n            Radios\n          </Form.Label>\n          <Col sm={10}>\n            <Form.Check\n              type="radio"\n              label="first radio"\n              name="formHorizontalRadios"\n              id="formHorizontalRadios1"\n            />\n            <Form.Check\n              type="radio"\n              label="second radio"\n              name="formHorizontalRadios"\n              id="formHorizontalRadios2"\n            />\n            <Form.Check\n              type="radio"\n              label="third radio"\n              name="formHorizontalRadios"\n              id="formHorizontalRadios3"\n            />\n          </Col>\n        </Form.Group>\n      </fieldset>\n      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">\n        <Col sm={{ span: 10, offset: 2 }}>\n          <Form.Check label="Remember me" />\n        </Col>\n      </Form.Group>\n\n      <Form.Group as={Row} className="mb-3">\n        <Col sm={{ span: 10, offset: 2 }}>\n          <Button type="submit">Sign in</Button>\n        </Col>\n      </Form.Group>\n    </Form>\n  );\n}\n\nexport default HorizontalExample;\n',
        u = {
          title: "Layout",
          description:
            "Give your forms some structure\u2014from inline to horizontal to custom grid implementations\u2014with our form layout options.",
          sidebar_position: 9,
        },
        h = void 0,
        b = {
          id: "forms/layout",
          title: "Layout",
          description:
            "Give your forms some structure\u2014from inline to horizontal to custom grid implementations\u2014with our form layout options.",
          source: "@site/docs/forms/layout.mdx",
          sourceDirName: "forms",
          slug: "/forms/layout",
          permalink: "/docs/forms/layout",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 9,
          frontMatter: {
            title: "Layout",
            description:
              "Give your forms some structure\u2014from inline to horizontal to custom grid implementations\u2014with our form layout options.",
            sidebar_position: 9,
          },
          sidebar: "sidebar",
          previous: {
            title: "Floating labels",
            permalink: "/docs/forms/floating-labels",
          },
          next: { title: "Validation", permalink: "/docs/forms/validation" },
        },
        f = {},
        F = [
          { value: "Forms", id: "forms", level: 2 },
          { value: "Form groups", id: "form-groups", level: 2 },
          { value: "Form grid", id: "form-grid", level: 2 },
          { value: "Horizontal form", id: "horizontal-form", level: 2 },
          {
            value: "Horizontal form label sizing",
            id: "horizontal-form-label-sizing",
            level: 3,
          },
          { value: "Column sizing", id: "column-sizing", level: 2 },
          { value: "Auto-sizing", id: "auto-sizing", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "FormGroup", id: "formgroup", level: 3 },
        ];
      function x(o) {
        const n = {
            a: "a",
            code: "code",
            h2: "h2",
            h3: "h3",
            li: "li",
            p: "p",
            ul: "ul",
            ...(0, t.a)(),
            ...o.components,
          },
          { CodeBlock: r, PropsTable: u } = n;
        return (
          r || g("CodeBlock", !0),
          u || g("PropsTable", !0),
          (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(n.h2, { id: "forms", children: "Forms" }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "Every group of form fields should reside in a ",
                  (0, e.jsx)(n.code, { children: "<Form>" }),
                  " element. Bootstrap\nprovides no default styling for the ",
                  (0, e.jsx)(n.code, { children: "<Form>" }),
                  " element, but there are some\npowerful browser features that are provided by default.",
                ],
              }),
              "\n",
              (0, e.jsxs)(n.ul, {
                children: [
                  "\n",
                  (0, e.jsxs)(n.li, {
                    children: [
                      "New to browser forms? Consider reviewing ",
                      (0, e.jsx)(n.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
                        children: "the MDN form docs",
                      }),
                      "\nfor an overview and complete list of available attributes.",
                    ],
                  }),
                  "\n",
                  (0, e.jsxs)(n.li, {
                    children: [
                      (0, e.jsx)(n.code, { children: "<button>" }),
                      "s within a ",
                      (0, e.jsx)(n.code, { children: "<Form>" }),
                      " default to ",
                      (0, e.jsx)(n.code, { children: 'type="submit"' }),
                      ", so strive to be\nspecific and always include a ",
                      (0, e.jsx)(n.code, { children: "type" }),
                      ".",
                    ],
                  }),
                  "\n",
                  (0, e.jsxs)(n.li, {
                    children: [
                      "You can disable all controls within a form by wrapping them in\na ",
                      (0, e.jsx)(n.code, { children: "<fieldset>" }),
                      " and setting the ",
                      (0, e.jsx)(n.code, { children: "disabled" }),
                      " attribute on it.",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "Since Bootstrap applies ",
                  (0, e.jsx)(n.code, { children: "display: block" }),
                  " and ",
                  (0, e.jsx)(n.code, { children: "width: 100%" }),
                  " to almost all our\nform controls, forms will by default stack vertically. Additional classes can\nbe used to vary this layout on a per-form basis.",
                ],
              }),
              "\n",
              (0, e.jsx)(n.h2, { id: "form-groups", children: "Form groups" }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "The ",
                  (0, e.jsx)(n.code, { children: "FormGroup" }),
                  " component is the easiest way to add some structure to forms.\nIt provides a flexible container for grouping of labels, controls, optional\nhelp text, and form validation messaging. Use it with ",
                  (0, e.jsx)(n.code, { children: "fieldset" }),
                  "s, ",
                  (0, e.jsx)(n.code, { children: "div" }),
                  "s,\nor nearly any other element.",
                ],
              }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "You also add the ",
                  (0, e.jsx)(n.code, { children: "controlId" }),
                  " prop to accessibly wire the nested label and\ninput together via the ",
                  (0, e.jsx)(n.code, { children: "id" }),
                  ".",
                ],
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, e.jsx)(n.h2, { id: "form-grid", children: "Form grid" }),
              "\n",
              (0, e.jsx)(n.p, {
                children:
                  "More complex forms can be built using the grid components. Use these for\nform layouts that require multiple columns, varied widths, and additional\nalignment options.",
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: m }),
              "\n",
              (0, e.jsx)(n.p, {
                children:
                  "More complex layouts can also be created with the grid system.",
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, e.jsx)(n.h2, {
                id: "horizontal-form",
                children: "Horizontal form",
              }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "Create horizontal forms with the grid by adding ",
                  (0, e.jsx)(n.code, { children: "as={Row}" }),
                  " to form groups and\nusing ",
                  (0, e.jsx)(n.code, { children: "Col" }),
                  " to specify the width of your labels and controls. Be sure to add\nthe ",
                  (0, e.jsx)(n.code, { children: "column " }),
                  " prop to your ",
                  (0, e.jsx)(n.code, { children: "FormLabel" }),
                  "s as well so they\u2019re vertically centered\nwith their associated form controls.",
                ],
              }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "At times, you maybe need to use margin or padding utilities to create that\nperfect alignment you need. For example, we\u2019ve removed the ",
                  (0, e.jsx)(n.code, { children: "padding-top" }),
                  " on our\nstacked radio inputs label to better align the text baseline.",
                ],
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, e.jsx)(n.h3, {
                id: "horizontal-form-label-sizing",
                children: "Horizontal form label sizing",
              }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "You can size the ",
                  (0, e.jsx)(n.code, { children: "<FormLabel>" }),
                  " using the ",
                  (0, e.jsx)(n.code, { children: "column" }),
                  " prop as shown.",
                ],
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, e.jsx)(n.h2, {
                id: "column-sizing",
                children: "Column sizing",
              }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "As shown in the previous examples, our grid system allows you to place any number\nof ",
                  (0, e.jsx)(n.code, { children: "<Col>" }),
                  "s within a ",
                  (0, e.jsx)(n.code, { children: "<Row>" }),
                  ". They'll split the available width equally between\nthem. You may also pick a subset of your columns to take up more or less space,\nwhile the remaining ",
                  (0, e.jsx)(n.code, { children: "<Col>" }),
                  "s equally split the rest, with specific column classes\nlike ",
                  (0, e.jsx)(n.code, { children: "<Col xs={7}>" }),
                  ".",
                ],
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, e.jsx)(n.h2, { id: "auto-sizing", children: "Auto-sizing" }),
              "\n",
              (0, e.jsxs)(n.p, {
                children: [
                  "The example below uses a flexbox utility to vertically center the contents and\nchanges ",
                  (0, e.jsx)(n.code, { children: "<Col>" }),
                  " to ",
                  (0, e.jsx)(n.code, { children: '<Col xs="auto">' }),
                  " so that your columns only take up as much\nspace as needed. Put another way, the column sizes itself based on the contents.",
                ],
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, e.jsx)(n.p, {
                children:
                  "You can then remix that once again with size-specific column classes.",
              }),
              "\n",
              (0, e.jsx)(r, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, e.jsx)(n.h2, { id: "api", children: "API" }),
              "\n",
              (0, e.jsx)(n.h3, { id: "formgroup", children: "FormGroup" }),
              "\n",
              (0, e.jsx)(u, { name: "FormGroup" }),
            ],
          })
        );
      }
      function C(o = {}) {
        const { wrapper: n } = { ...(0, t.a)(), ...o.components };
        return n
          ? (0, e.jsx)(n, { ...o, children: (0, e.jsx)(x, { ...o }) })
          : x(o);
      }
      function g(o, n) {
        throw new Error(
          "Expected " +
            (n ? "component" : "object") +
            " `" +
            o +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (o, n, r) => {
      r.d(n, { Z: () => i, a: () => a });
      var e = r(67294);
      const t = {},
        l = e.createContext(t);
      function a(o) {
        const n = e.useContext(l);
        return e.useMemo(
          function () {
            return "function" == typeof o ? o(n) : { ...n, ...o };
          },
          [n, o]
        );
      }
      function i(o) {
        let n;
        return (
          (n = o.disableParentContext
            ? "function" == typeof o.components
              ? o.components(t)
              : o.components || t
            : a(o.components)),
          e.createElement(l.Provider, { value: n }, o.children)
        );
      }
    },
  },
]);
