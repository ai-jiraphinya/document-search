"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [7324],
  {
    52116: (n, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => x,
          contentTitle: () => v,
          default: () => y,
          frontMatter: () => m,
          metadata: () => b,
          toc: () => f,
        });
      var o = e(85893),
        a = e(11151);
      const r =
          'import Button from \'react-bootstrap/Button\';\n\nfunction ActiveExample() {\n  return (\n    <>\n      <Button variant="primary" size="lg" active>\n        Primary button\n      </Button>{\' \'}\n      <Button variant="secondary" size="lg" active>\n        Button\n      </Button>\n    </>\n  );\n}\n\nexport default ActiveExample;\n',
        i =
          'import Button from \'react-bootstrap/Button\';\n\nfunction BlockExample() {\n  return (\n    <div className="d-grid gap-2">\n      <Button variant="primary" size="lg">\n        Block level button\n      </Button>\n      <Button variant="secondary" size="lg">\n        Block level button\n      </Button>\n    </div>\n  );\n}\n\nexport default BlockExample;\n',
        l =
          'import Button from \'react-bootstrap/Button\';\n\nfunction DisabledExample() {\n  return (\n    <>\n      <Button variant="primary" size="lg" disabled>\n        Primary button\n      </Button>{\' \'}\n      <Button variant="secondary" size="lg" disabled>\n        Button\n      </Button>{\' \'}\n      <Button href="#" variant="secondary" size="lg" disabled>\n        Link\n      </Button>\n    </>\n  );\n}\n\nexport default DisabledExample;\n',
        u =
          "import { useEffect, useState } from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction LoadingButton() {\n  const [isLoading, setLoading] = useState(false);\n\n  useEffect(() => {\n    function simulateNetworkRequest() {\n      return new Promise((resolve) => setTimeout(resolve, 2000));\n    }\n\n    if (isLoading) {\n      simulateNetworkRequest().then(() => {\n        setLoading(false);\n      });\n    }\n  }, [isLoading]);\n\n  const handleClick = () => setLoading(true);\n\n  return (\n    <Button\n      variant=\"primary\"\n      disabled={isLoading}\n      onClick={!isLoading ? handleClick : null}\n    >\n      {isLoading ? 'Loading\u2026' : 'Click to load'}\n    </Button>\n  );\n}\n\nexport default LoadingButton;\n",
        s =
          "import Button from 'react-bootstrap/Button';\n\nfunction OutlineTypesExample() {\n  return (\n    <>\n      <Button variant=\"outline-primary\">Primary</Button>{' '}\n      <Button variant=\"outline-secondary\">Secondary</Button>{' '}\n      <Button variant=\"outline-success\">Success</Button>{' '}\n      <Button variant=\"outline-warning\">Warning</Button>{' '}\n      <Button variant=\"outline-danger\">Danger</Button>{' '}\n      <Button variant=\"outline-info\">Info</Button>{' '}\n      <Button variant=\"outline-light\">Light</Button>{' '}\n      <Button variant=\"outline-dark\">Dark</Button>\n    </>\n  );\n}\n\nexport default OutlineTypesExample;\n",
        d =
          'import Button from \'react-bootstrap/Button\';\n\nfunction SizesExample() {\n  return (\n    <>\n      <div className="mb-2">\n        <Button variant="primary" size="lg">\n          Large button\n        </Button>{\' \'}\n        <Button variant="secondary" size="lg">\n          Large button\n        </Button>\n      </div>\n      <div>\n        <Button variant="primary" size="sm">\n          Small button\n        </Button>{\' \'}\n        <Button variant="secondary" size="sm">\n          Small button\n        </Button>\n      </div>\n    </>\n  );\n}\n\nexport default SizesExample;\n',
        c =
          'import Button from \'react-bootstrap/Button\';\n\nfunction TagTypesExample() {\n  return (\n    <>\n      <Button href="#">Link</Button> <Button type="submit">Button</Button>{\' \'}\n      <Button as="input" type="button" value="Input" />{\' \'}\n      <Button as="input" type="submit" value="Submit" />{\' \'}\n      <Button as="input" type="reset" value="Reset" />\n    </>\n  );\n}\n\nexport default TagTypesExample;\n',
        g =
          'import { useState } from \'react\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport ToggleButton from \'react-bootstrap/ToggleButton\';\n\nfunction ToggleButtonExample() {\n  const [checked, setChecked] = useState(false);\n  const [radioValue, setRadioValue] = useState(\'1\');\n\n  const radios = [\n    { name: \'Active\', value: \'1\' },\n    { name: \'Radio\', value: \'2\' },\n    { name: \'Radio\', value: \'3\' },\n  ];\n\n  return (\n    <>\n      <ButtonGroup className="mb-2">\n        <ToggleButton\n          id="toggle-check"\n          type="checkbox"\n          variant="secondary"\n          checked={checked}\n          value="1"\n          onChange={(e) => setChecked(e.currentTarget.checked)}\n        >\n          Checked\n        </ToggleButton>\n      </ButtonGroup>\n      <br />\n      <ButtonGroup className="mb-2">\n        {radios.map((radio, idx) => (\n          <ToggleButton\n            key={idx}\n            id={`radio-${idx}`}\n            type="radio"\n            variant="secondary"\n            name="radio"\n            value={radio.value}\n            checked={radioValue === radio.value}\n            onChange={(e) => setRadioValue(e.currentTarget.value)}\n          >\n            {radio.name}\n          </ToggleButton>\n        ))}\n      </ButtonGroup>\n      <br />\n      <ToggleButton\n        className="mb-2"\n        id="toggle-check"\n        type="checkbox"\n        variant="outline-primary"\n        checked={checked}\n        value="1"\n        onChange={(e) => setChecked(e.currentTarget.checked)}\n      >\n        Checked\n      </ToggleButton>\n      <br />\n      <ButtonGroup>\n        {radios.map((radio, idx) => (\n          <ToggleButton\n            key={idx}\n            id={`radio-${idx}`}\n            type="radio"\n            variant={idx % 2 ? \'outline-success\' : \'outline-danger\'}\n            name="radio"\n            value={radio.value}\n            checked={radioValue === radio.value}\n            onChange={(e) => setRadioValue(e.currentTarget.value)}\n          >\n            {radio.name}\n          </ToggleButton>\n        ))}\n      </ButtonGroup>\n    </>\n  );\n}\n\nexport default ToggleButtonExample;\n',
        p =
          'import { useState } from \'react\';\nimport ToggleButton from \'react-bootstrap/ToggleButton\';\nimport ToggleButtonGroup from \'react-bootstrap/ToggleButtonGroup\';\n\nfunction ToggleButtonGroupControlled() {\n  const [value, setValue] = useState([1, 3]);\n\n  /*\n   * The second argument that will be passed to\n   * `handleChange` from `ToggleButtonGroup`\n   * is the SyntheticEvent object, but we are\n   * not using it in this example so we will omit it.\n   */\n  const handleChange = (val) => setValue(val);\n\n  return (\n    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>\n      <ToggleButton id="tbg-btn-1" value={1}>\n        Option 1\n      </ToggleButton>\n      <ToggleButton id="tbg-btn-2" value={2}>\n        Option 2\n      </ToggleButton>\n      <ToggleButton id="tbg-btn-3" value={3}>\n        Option 3\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n\nexport default ToggleButtonGroupControlled;\n',
        h =
          'import ToggleButton from \'react-bootstrap/ToggleButton\';\nimport ToggleButtonGroup from \'react-bootstrap/ToggleButtonGroup\';\n\nfunction ToggleButtonGroupUncontrolled() {\n  return (\n    <>\n      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">\n        <ToggleButton id="tbg-check-1" value={1}>\n          Checkbox 1 (pre-checked)\n        </ToggleButton>\n        <ToggleButton id="tbg-check-2" value={2}>\n          Checkbox 2\n        </ToggleButton>\n        <ToggleButton id="tbg-check-3" value={3}>\n          Checkbox 3 (pre-checked)\n        </ToggleButton>\n      </ToggleButtonGroup>\n      <br />\n      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>\n        <ToggleButton id="tbg-radio-1" value={1}>\n          Radio 1 (pre-checked)\n        </ToggleButton>\n        <ToggleButton id="tbg-radio-2" value={2}>\n          Radio 2\n        </ToggleButton>\n        <ToggleButton id="tbg-radio-3" value={3}>\n          Radio 3\n        </ToggleButton>\n      </ToggleButtonGroup>\n    </>\n  );\n}\n\nexport default ToggleButtonGroupUncontrolled;\n',
        B =
          'import Button from \'react-bootstrap/Button\';\n\nfunction TypesExample() {\n  return (\n    <>\n      <Button variant="primary">Primary</Button>{\' \'}\n      <Button variant="secondary">Secondary</Button>{\' \'}\n      <Button variant="success">Success</Button>{\' \'}\n      <Button variant="warning">Warning</Button>{\' \'}\n      <Button variant="danger">Danger</Button>{\' \'}\n      <Button variant="info">Info</Button>{\' \'}\n      <Button variant="light">Light</Button>{\' \'}\n      <Button variant="dark">Dark</Button>\n      <Button variant="link">Link</Button>\n    </>\n  );\n}\n\nexport default TypesExample;\n',
        m = {
          title: "Buttons",
          description:
            "Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
        },
        v = void 0,
        b = {
          id: "components/buttons",
          title: "Buttons",
          description:
            "Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
          source: "@site/docs/components/buttons.mdx",
          sourceDirName: "components",
          slug: "/components/buttons",
          permalink: "/docs/components/buttons",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Buttons",
            description:
              "Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
          },
          sidebar: "sidebar",
          previous: {
            title: "Button group",
            permalink: "/docs/components/button-group",
          },
          next: { title: "Cards", permalink: "/docs/components/cards" },
        },
        x = {},
        f = [
          { value: "Examples", id: "examples", level: 2 },
          { value: "Outline buttons", id: "outline-buttons", level: 3 },
          { value: "Button tags", id: "button-tags", level: 2 },
          { value: "Sizes", id: "sizes", level: 2 },
          { value: "Block buttons", id: "block-buttons", level: 2 },
          { value: "Active state", id: "active-state", level: 2 },
          { value: "Disabled state", id: "disabled-state", level: 3 },
          {
            value: "Button loading state",
            id: "button-loading-state",
            level: 2,
          },
          { value: "Checkbox / Radio", id: "checkbox--radio", level: 2 },
          { value: "Uncontrolled", id: "uncontrolled", level: 4 },
          { value: "Controlled", id: "controlled", level: 4 },
          { value: "API", id: "api", level: 2 },
          { value: "Button", id: "button", level: 3 },
          { value: "ToggleButtonGroup", id: "togglebuttongroup", level: 3 },
          { value: "ToggleButton", id: "togglebutton", level: 3 },
        ];
      function k(n) {
        const t = {
            code: "code",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            p: "p",
            ...(0, a.a)(),
            ...n.components,
          },
          { CodeBlock: e, PropsTable: m } = t;
        return (
          e || j("CodeBlock", !0),
          m || j("PropsTable", !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(t.h2, { id: "examples", children: "Examples" }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Use any of the available button style types to quickly create a styled\nbutton. Just modify the ",
                  (0, o.jsx)(t.code, { children: "variant" }),
                  " prop.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: B }),
              "\n",
              (0, o.jsx)(t.h3, {
                id: "outline-buttons",
                children: "Outline buttons",
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "For a lighter touch, Buttons also come in ",
                  (0, o.jsx)(t.code, { children: "outline-*" }),
                  "\nvariants with no background color.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, o.jsx)(t.h2, { id: "button-tags", children: "Button tags" }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Normally ",
                  (0, o.jsx)(t.code, { children: "<Button>" }),
                  " components will render a HTML\n",
                  (0, o.jsx)(t.code, { children: "<button>" }),
                  " element. However you can render whatever you'd\nlike, adding a ",
                  (0, o.jsx)(t.code, { children: "href" }),
                  " prop will automatically render an\n",
                  (0, o.jsx)(t.code, { children: "<a />" }),
                  " element. You can use the ",
                  (0, o.jsx)(t.code, { children: "as" }),
                  " prop to\nrender whatever your heart desires. React Bootstrap will take care of\nthe proper ARIA roles for you.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, o.jsx)(t.h2, { id: "sizes", children: "Sizes" }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Fancy larger or smaller buttons? Add ",
                  (0, o.jsx)(t.code, { children: 'size="lg"' }),
                  ",\n",
                  (0, o.jsx)(t.code, { children: 'size="sm"' }),
                  " for additional sizes.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, o.jsx)(t.h2, {
                id: "block-buttons",
                children: "Block buttons",
              }),
              "\n",
              (0, o.jsx)(t.p, {
                children:
                  "Create responsive stacks of full-width, \u201cblock buttons\u201d like those in Bootstrap 4\nwith a mix of our display and gap utilities.",
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, o.jsx)(t.h2, {
                id: "active-state",
                children: "Active state",
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "To set a button's active state simply set the component's\n",
                  (0, o.jsx)(t.code, { children: "active" }),
                  " prop.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, o.jsx)(t.h3, {
                id: "disabled-state",
                children: "Disabled state",
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Make buttons look inactive by adding the ",
                  (0, o.jsx)(t.code, { children: "disabled" }),
                  " prop to.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Watch out! ",
                  (0, o.jsx)(t.code, { children: "<a>" }),
                  " elements don't naturally support a\n",
                  (0, o.jsx)(t.code, { children: "disabled" }),
                  " attribute. In browsers that support it this is handled with a\n",
                  (0, o.jsx)(t.code, { children: "point-events: none" }),
                  " style but not all browsers support it\nyet.",
                ],
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "React Bootstrap will prevent any ",
                  (0, o.jsx)(t.code, { children: "onClick" }),
                  " handlers from\nfiring regardless of the rendered element.",
                ],
              }),
              "\n",
              (0, o.jsx)(t.h2, {
                id: "button-loading-state",
                children: "Button loading state",
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "When activating an asynchronous action from a button it is a good UX\npattern to give the user feedback as to the loading state, this can\neasily be done by updating your ",
                  (0, o.jsx)(t.code, { children: "<Button />" }),
                  "s\nprops from a state change like below.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: u }),
              "\n",
              (0, o.jsx)(t.h2, {
                id: "checkbox--radio",
                children: "Checkbox / Radio",
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Buttons can also be used to style ",
                  (0, o.jsx)(t.code, { children: "checkbox" }),
                  " and\n",
                  (0, o.jsx)(t.code, { children: "radio" }),
                  " form elements. This is helpful when you want a toggle\nbutton that works neatly inside an HTML form.",
                ],
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: g }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "The above handles styling, But requires manually controlling the\n",
                  (0, o.jsx)(t.code, { children: "checked" }),
                  " state for each radio or checkbox in the group.",
                ],
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "For a nicer experience with checked state management use the\n",
                  (0, o.jsx)(t.code, { children: "<ToggleButtonGroup>" }),
                  " instead of a ",
                  (0, o.jsx)(t.code, { children: "<ButtonGroup>" }),
                  " component.\nThe group behaves as a form component, where the ",
                  (0, o.jsx)(t.code, { children: "value" }),
                  " is an array of the selected\n",
                  (0, o.jsx)(t.code, { children: "value" }),
                  "s for a named checkbox group or the single toggled\n",
                  (0, o.jsx)(t.code, { children: "value" }),
                  " in a similarly named radio group.",
                ],
              }),
              "\n",
              (0, o.jsx)(t.h4, {
                id: "uncontrolled",
                children: "Uncontrolled",
              }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: h }),
              "\n",
              (0, o.jsx)(t.h4, { id: "controlled", children: "Controlled" }),
              "\n",
              (0, o.jsx)(e, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, o.jsx)(t.h2, { id: "api", children: "API" }),
              "\n",
              (0, o.jsx)(t.h3, { id: "button", children: "Button" }),
              "\n",
              (0, o.jsx)(m, { name: "Button" }),
              "\n",
              (0, o.jsx)(t.h3, {
                id: "togglebuttongroup",
                children: "ToggleButtonGroup",
              }),
              "\n",
              (0, o.jsx)(m, { name: "ToggleButtonGroup" }),
              "\n",
              (0, o.jsx)(t.h3, {
                id: "togglebutton",
                children: "ToggleButton",
              }),
              "\n",
              (0, o.jsx)(m, { name: "ToggleButton" }),
            ],
          })
        );
      }
      function y(n = {}) {
        const { wrapper: t } = { ...(0, a.a)(), ...n.components };
        return t
          ? (0, o.jsx)(t, { ...n, children: (0, o.jsx)(k, { ...n }) })
          : k(n);
      }
      function j(n, t) {
        throw new Error(
          "Expected " +
            (t ? "component" : "object") +
            " `" +
            n +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (n, t, e) => {
      e.d(t, { Z: () => l, a: () => i });
      var o = e(67294);
      const a = {},
        r = o.createContext(a);
      function i(n) {
        const t = o.useContext(r);
        return o.useMemo(
          function () {
            return "function" == typeof n ? n(t) : { ...t, ...n };
          },
          [t, n]
        );
      }
      function l(n) {
        let t;
        return (
          (t = n.disableParentContext
            ? "function" == typeof n.components
              ? n.components(a)
              : n.components || a
            : i(n.components)),
          o.createElement(r.Provider, { value: t }, n.children)
        );
      }
    },
  },
]);
