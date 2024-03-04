/*! jiraphinya playground information please see ok */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [9277],
  {
    21178: (n, o, t) => {
      t.r(o),
        t.d(o, {
          assets: () => h,
          contentTitle: () => b,
          default: () => f,
          frontMatter: () => c,
          metadata: () => I,
          toc: () => x,
        });
      var e = t(85893),
        r = t(11151);
      const p =
          'import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction BasicExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n        <Form.Control\n          placeholder="Username"\n          aria-label="Username"\n          aria-describedby="basic-addon1"\n        />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control\n          placeholder="Recipient\'s username"\n          aria-label="Recipient\'s username"\n          aria-describedby="basic-addon2"\n        />\n        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>\n      </InputGroup>\n\n      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>\n      <InputGroup className="mb-3">\n        <InputGroup.Text id="basic-addon3">\n          https://example.com/users/\n        </InputGroup.Text>\n        <Form.Control id="basic-url" aria-describedby="basic-addon3" />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <InputGroup.Text>$</InputGroup.Text>\n        <Form.Control aria-label="Amount (to the nearest dollar)" />\n        <InputGroup.Text>.00</InputGroup.Text>\n      </InputGroup>\n\n      <InputGroup>\n        <InputGroup.Text>With textarea</InputGroup.Text>\n        <Form.Control as="textarea" aria-label="With textarea" />\n      </InputGroup>\n    </>\n  );\n}\n\nexport default BasicExample;\n',
        u =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction ButtonDropdownsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-1"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n        <Form.Control aria-label="Text input with dropdown button" />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control aria-label="Text input with dropdown button" />\n\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-2"\n          align="end"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n      </InputGroup>\n\n      <InputGroup>\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-3"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n        <Form.Control aria-label="Text input with 2 dropdown buttons" />\n        <DropdownButton\n          variant="outline-secondary"\n          title="Dropdown"\n          id="input-group-dropdown-4"\n          align="end"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </DropdownButton>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default ButtonDropdownsExample;\n',
        a =
          'import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction ButtonsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <Button variant="outline-secondary" id="button-addon1">\n          Button\n        </Button>\n        <Form.Control\n          aria-label="Example text with button addon"\n          aria-describedby="basic-addon1"\n        />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control\n          placeholder="Recipient\'s username"\n          aria-label="Recipient\'s username"\n          aria-describedby="basic-addon2"\n        />\n        <Button variant="outline-secondary" id="button-addon2">\n          Button\n        </Button>\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Button variant="outline-secondary">Button</Button>\n        <Button variant="outline-secondary">Button</Button>\n        <Form.Control aria-label="Example text with two button addons" />\n      </InputGroup>\n\n      <InputGroup>\n        <Form.Control\n          placeholder="Recipient\'s username"\n          aria-label="Recipient\'s username with two button addons"\n        />\n        <Button variant="outline-secondary">Button</Button>\n        <Button variant="outline-secondary">Button</Button>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default ButtonsExample;\n',
        i =
          'import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction CheckboxesExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <InputGroup.Checkbox aria-label="Checkbox for following text input" />\n        <Form.Control aria-label="Text input with checkbox" />\n      </InputGroup>\n      <InputGroup>\n        <InputGroup.Radio aria-label="Radio button for following text input" />\n        <Form.Control aria-label="Text input with radio button" />\n      </InputGroup>\n    </>\n  );\n}\n\nexport default CheckboxesExample;\n',
        d =
          'import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction MultipleAddonsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <InputGroup.Text>$</InputGroup.Text>\n        <InputGroup.Text>0.00</InputGroup.Text>\n        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />\n      </InputGroup>\n      <InputGroup>\n        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />\n        <InputGroup.Text>$</InputGroup.Text>\n        <InputGroup.Text>0.00</InputGroup.Text>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default MultipleAddonsExample;\n',
        l =
          'import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction MultipleInputsExample() {\n  return (\n    <InputGroup className="mb-3">\n      <InputGroup.Text>First and last name</InputGroup.Text>\n      <Form.Control aria-label="First name" />\n      <Form.Control aria-label="Last name" />\n    </InputGroup>\n  );\n}\n\nexport default MultipleInputsExample;\n',
        s =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\nimport SplitButton from \'react-bootstrap/SplitButton\';\n\nfunction SegmentedButtonDropdownsExample() {\n  return (\n    <>\n      <InputGroup className="mb-3">\n        <SplitButton\n          variant="outline-secondary"\n          title="Action"\n          id="segmented-button-dropdown-1"\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </SplitButton>\n        <Form.Control aria-label="Text input with dropdown button" />\n      </InputGroup>\n\n      <InputGroup className="mb-3">\n        <Form.Control aria-label="Text input with dropdown button" />\n        <SplitButton\n          variant="outline-secondary"\n          title="Action"\n          id="segmented-button-dropdown-2"\n          alignRight\n        >\n          <Dropdown.Item href="#">Action</Dropdown.Item>\n          <Dropdown.Item href="#">Another action</Dropdown.Item>\n          <Dropdown.Item href="#">Something else here</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#">Separated link</Dropdown.Item>\n        </SplitButton>\n      </InputGroup>\n    </>\n  );\n}\n\nexport default SegmentedButtonDropdownsExample;\n',
        m =
          'import Form from \'react-bootstrap/Form\';\nimport InputGroup from \'react-bootstrap/InputGroup\';\n\nfunction SizesExample() {\n  return (\n    <>\n      <InputGroup size="sm" className="mb-3">\n        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>\n        <Form.Control\n          aria-label="Small"\n          aria-describedby="inputGroup-sizing-sm"\n        />\n      </InputGroup>\n      <br />\n      <InputGroup className="mb-3">\n        <InputGroup.Text id="inputGroup-sizing-default">\n          Default\n        </InputGroup.Text>\n        <Form.Control\n          aria-label="Default"\n          aria-describedby="inputGroup-sizing-default"\n        />\n      </InputGroup>\n      <br />\n      <InputGroup size="lg">\n        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>\n        <Form.Control\n          aria-label="Large"\n          aria-describedby="inputGroup-sizing-sm"\n        />\n      </InputGroup>\n    </>\n  );\n}\n\nexport default SizesExample;\n',
        c = {
          title: "Input Group",
          description:
            "Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.",
          sidebar_position: 7,
        },
        b = void 0,
        I = {
          id: "forms/input-group",
          title: "Input Group",
          description:
            "Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.",
          source: "@site/docs/forms/input-group.mdx",
          sourceDirName: "forms",
          slug: "/forms/input-group",
          permalink: "/docs/forms/input-group",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 7,
          frontMatter: {
            title: "Input Group",
            description:
              "Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.",
            sidebar_position: 7,
          },
          sidebar: "sidebar",
          previous: { title: "Range", permalink: "/docs/forms/range" },
          next: {
            title: "Floating labels",
            permalink: "/docs/forms/floating-labels",
          },
        },
        h = {},
        x = [
          { value: "Example", id: "example", level: 2 },
          { value: "Sizing", id: "sizing", level: 2 },
          {
            value: "Checkboxes and radios",
            id: "checkboxes-and-radios",
            level: 2,
          },
          { value: "Multiple inputs", id: "multiple-inputs", level: 2 },
          { value: "Multiple addons", id: "multiple-addons", level: 2 },
          { value: "Button addons", id: "button-addons", level: 2 },
          {
            value: "Buttons with Dropdowns",
            id: "buttons-with-dropdowns",
            level: 2,
          },
          { value: "Segmented buttons", id: "segmented-buttons", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "InputGroup", id: "inputgroup", level: 3 },
        ];
      function w(n) {
        const o = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, r.a)(),
            ...n.components,
          },
          { CodeBlock: t, PropsTable: c } = o;
        return (
          t || G("CodeBlock", !0),
          c || G("PropsTable", !0),
          (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(o.h2, { id: "example", children: "Example" }),
              "\n",
              (0, e.jsxs)(o.p, {
                children: [
                  "Place one add-on or button on either side of an input. You may also\nplace one on both sides of an input. Remember to place\n",
                  (0, e.jsx)(o.code, { children: "<label>" }),
                  "s outside the input group.",
                ],
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, e.jsx)(o.h2, { id: "sizing", children: "Sizing" }),
              "\n",
              (0, e.jsxs)(o.p, {
                children: [
                  "Add the relative form sizing classes to the ",
                  (0, e.jsx)(o.code, { children: "InputGroup" }),
                  " and\ncontents within will automatically resize\u2014no need for repeating the form\ncontrol size classes on each element.",
                ],
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: m }),
              "\n",
              (0, e.jsx)(o.h2, {
                id: "checkboxes-and-radios",
                children: "Checkboxes and radios",
              }),
              "\n",
              (0, e.jsxs)(o.p, {
                children: [
                  "Use the ",
                  (0, e.jsx)(o.code, { children: "InputGroup.Radio" }),
                  " or\n",
                  (0, e.jsx)(o.code, { children: "InputGroup.Checkbox" }),
                  " to add options to an input group.",
                ],
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, e.jsx)(o.h2, {
                id: "multiple-inputs",
                children: "Multiple inputs",
              }),
              "\n",
              (0, e.jsx)(o.p, {
                children:
                  "While multiple inputs are supported visually, validation styles are only\navailable for input groups with a single input.",
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, e.jsx)(o.h2, {
                id: "multiple-addons",
                children: "Multiple addons",
              }),
              "\n",
              (0, e.jsx)(o.p, {
                children:
                  "Multiple add-ons are supported and can be mixed with checkbox and radio\ninput versions.",
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, e.jsx)(o.h2, {
                id: "button-addons",
                children: "Button addons",
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, e.jsx)(o.h2, {
                id: "buttons-with-dropdowns",
                children: "Buttons with Dropdowns",
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: u }),
              "\n",
              (0, e.jsx)(o.h2, {
                id: "segmented-buttons",
                children: "Segmented buttons",
              }),
              "\n",
              (0, e.jsx)(t, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, e.jsx)(o.h2, { id: "api", children: "API" }),
              "\n",
              (0, e.jsx)(o.h3, { id: "inputgroup", children: "InputGroup" }),
              "\n",
              (0, e.jsx)(c, { name: "InputGroup" }),
            ],
          })
        );
      }
      function f(n = {}) {
        const { wrapper: o } = { ...(0, r.a)(), ...n.components };
        return o
          ? (0, e.jsx)(o, { ...n, children: (0, e.jsx)(w, { ...n }) })
          : w(n);
      }
      function G(n, o) {
        throw new Error(
          "Expected " +
            (o ? "component" : "object") +
            " `" +
            n +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (n, o, t) => {
      t.d(o, { Z: () => a, a: () => u });
      var e = t(67294);
      const r = {},
        p = e.createContext(r);
      function u(n) {
        const o = e.useContext(p);
        return e.useMemo(
          function () {
            return "function" == typeof n ? n(o) : { ...o, ...n };
          },
          [o, n]
        );
      }
      function a(n) {
        let o;
        return (
          (o = n.disableParentContext
            ? "function" == typeof n.components
              ? n.components(r)
              : n.components || r
            : u(n.components)),
          e.createElement(p.Provider, { value: o }, n.children)
        );
      }
    },
  },
]);
