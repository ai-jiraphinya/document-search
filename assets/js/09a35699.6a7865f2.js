/*! For license information please see ok สนามเด็กเล่น */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1675],
  {
    25443: (n, o, e) => {
      e.r(o),
        e.d(o, {
          assets: () => B,
          contentTitle: () => j,
          default: () => M,
          frontMatter: () => b,
          metadata: () => y,
          toc: () => k,
        });
      var t = e(85893),
        r = e(11151);
      const d =
          'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction BasicExample() {\n  return (\n    <Dropdown>\n      <Dropdown.Toggle variant="success" id="dropdown-basic">\n        Dropdown Button\n      </Dropdown.Toggle>\n\n      <Dropdown.Menu>\n        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n      </Dropdown.Menu>\n    </Dropdown>\n  );\n}\n\nexport default BasicExample;\n',
        i =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction BasicButtonExample() {\n  return (\n    <DropdownButton id="dropdown-basic-button" title="Dropdown button">\n      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n    </DropdownButton>\n  );\n}\n\nexport default BasicButtonExample;\n',
        p =
          'import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction ButtonCustomExample() {\n  return (\n    <>\n      <Dropdown as={ButtonGroup}>\n        <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>\n        <Dropdown.Menu className="super-colors">\n          <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n          <Dropdown.Item eventKey="3" active>\n            Active Item\n          </Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>{\' \'}\n      <Dropdown as={ButtonGroup}>\n        <Button variant="info">mix it up style-wise</Button>\n        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />\n        <Dropdown.Menu className="super-colors">\n          <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n          <Dropdown.Item eventKey="3" active>\n            Active Item\n          </Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n    </>\n  );\n}\n\nexport default ButtonCustomExample;\n',
        a =
          'import React, { useState } from \'react\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\nimport Form from \'react-bootstrap/Form\';\n\n// The forwardRef is important!!\n// Dropdown needs access to the DOM node in order to position the Menu\nconst CustomToggle = React.forwardRef(({ children, onClick }, ref) => (\n  <a\n    href=""\n    ref={ref}\n    onClick={(e) => {\n      e.preventDefault();\n      onClick(e);\n    }}\n  >\n    {children}\n    &#x25bc;\n  </a>\n));\n\n// forwardRef again here!\n// Dropdown needs access to the DOM of the Menu to measure it\nconst CustomMenu = React.forwardRef(\n  ({ children, style, className, \'aria-labelledby\': labeledBy }, ref) => {\n    const [value, setValue] = useState(\'\');\n\n    return (\n      <div\n        ref={ref}\n        style={style}\n        className={className}\n        aria-labelledby={labeledBy}\n      >\n        <Form.Control\n          autoFocus\n          className="mx-3 my-2 w-auto"\n          placeholder="Type to filter..."\n          onChange={(e) => setValue(e.target.value)}\n          value={value}\n        />\n        <ul className="list-unstyled">\n          {React.Children.toArray(children).filter(\n            (child) =>\n              !value || child.props.children.toLowerCase().startsWith(value),\n          )}\n        </ul>\n      </div>\n    );\n  },\n);\n\nrender(\n  <Dropdown>\n    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">\n      Custom toggle\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu as={CustomMenu}>\n      <Dropdown.Item eventKey="1">Red</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>\n      <Dropdown.Item eventKey="3" active>\n        Orange\n      </Dropdown.Item>\n      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>,\n);\n',
        s =
          'import ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport SplitButton from \'react-bootstrap/SplitButton\';\n\nfunction ButtonSizesExample() {\n  return (\n    <>\n      <div className="mb-2">\n        {[DropdownButton, SplitButton].map((DropdownType, idx) => (\n          <DropdownType\n            as={ButtonGroup}\n            key={idx}\n            id={`dropdown-button-drop-${idx}`}\n            size="lg"\n            title="Drop large"\n          >\n            <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n          </DropdownType>\n        ))}\n      </div>\n      <div>\n        {[DropdownButton, SplitButton].map((DropdownType, idx) => (\n          <DropdownType\n            as={ButtonGroup}\n            key={idx}\n            id={`dropdown-button-drop-${idx}`}\n            size="sm"\n            variant="secondary"\n            title="Drop small"\n          >\n            <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n          </DropdownType>\n        ))}\n      </div>\n    </>\n  );\n}\n\nexport default ButtonSizesExample;\n',
        l =
          "import Dropdown from 'react-bootstrap/Dropdown';\nimport DropdownButton from 'react-bootstrap/DropdownButton';\nimport SplitButton from 'react-bootstrap/SplitButton';\n\nfunction DropDirectioExample() {\n  return (\n    <>\n      <div className=\"mb-2\">\n        {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(\n          (direction) => (\n            <DropdownButton\n              as={ButtonGroup}\n              key={direction}\n              id={`dropdown-button-drop-${direction}`}\n              drop={direction}\n              variant=\"secondary\"\n              title={` Drop ${direction} `}\n            >\n              <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"3\">Something else here</Dropdown.Item>\n              <Dropdown.Divider />\n              <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n            </DropdownButton>\n          ),\n        )}\n      </div>\n\n      <div>\n        {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(\n          (direction) => (\n            <SplitButton\n              key={direction}\n              id={`dropdown-button-drop-${direction}`}\n              drop={direction}\n              variant=\"secondary\"\n              title={`Drop ${direction}`}\n            >\n              <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"3\">Something else here</Dropdown.Item>\n              <Dropdown.Divider />\n              <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n            </SplitButton>\n          ),\n        )}\n      </div>\n    </>\n  );\n}\n\nexport default DropDirectioExample;\n",
        c =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction DropdownItemTagsExample() {\n  return (\n    <DropdownButton id="dropdown-item-button" title="Dropdown button">\n      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>\n      <Dropdown.Item as="button">Action</Dropdown.Item>\n      <Dropdown.Item as="button">Another action</Dropdown.Item>\n      <Dropdown.Item as="button">Something else</Dropdown.Item>\n    </DropdownButton>\n  );\n}\n\nexport default DropdownItemTagsExample;\n',
        m =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction MenuAlignEndExample() {\n  return (\n    <DropdownButton\n      align="end"\n      title="Dropdown end"\n      id="dropdown-menu-align-end"\n    >\n      <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n    </DropdownButton>\n  );\n}\n\nexport default MenuAlignEndExample;\n',
        w =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport SplitButton from \'react-bootstrap/SplitButton\';\n\nfunction MenuAlignResponsiveExample() {\n  return (\n    <>\n      <div>\n        <DropdownButton\n          as={ButtonGroup}\n          align={{ lg: \'end\' }}\n          title="Left-aligned but right aligned when large screen"\n          id="dropdown-menu-align-responsive-1"\n        >\n          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>\n        </DropdownButton>\n      </div>\n      <div className="mt-2">\n        <SplitButton\n          align={{ lg: \'start\' }}\n          title="Right-aligned but left aligned when large screen"\n          id="dropdown-menu-align-responsive-2"\n        >\n          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>\n        </SplitButton>\n      </div>\n    </>\n  );\n}\n\nexport default MenuAlignResponsiveExample;\n',
        u =
          'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction MenuDividersExample() {\n  return (\n    <Dropdown.Menu show>\n      <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  );\n}\n\nexport default MenuDividersExample;\n',
        D =
          'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction MenuHeadersExample() {\n  return (\n    <Dropdown.Menu show>\n      <Dropdown.Header>Dropdown header</Dropdown.Header>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n    </Dropdown.Menu>\n  );\n}\n\nexport default MenuHeadersExample;\n',
        h =
          'import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction SplitBasicExample() {\n  return (\n    <Dropdown as={ButtonGroup}>\n      <Button variant="success">Split Button</Button>\n\n      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />\n\n      <Dropdown.Menu>\n        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n      </Dropdown.Menu>\n    </Dropdown>\n  );\n}\n\nexport default SplitBasicExample;\n',
        v =
          "import Dropdown from 'react-bootstrap/Dropdown';\nimport SplitButton from 'react-bootstrap/SplitButton';\n\nfunction SplitVariantExample() {\n  return (\n    <>\n      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(\n        (variant) => (\n          <SplitButton\n            key={variant}\n            id={`dropdown-split-variants-${variant}`}\n            variant={variant.toLowerCase()}\n            title={variant}\n          >\n            <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"3\" active>\n              Active Item\n            </Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n          </SplitButton>\n        ),\n      )}\n    </>\n  );\n}\n\nexport default SplitVariantExample;\n",
        g =
          "import ButtonGroup from 'react-bootstrap/ButtonGroup';\nimport Dropdown from 'react-bootstrap/Dropdown';\nimport DropdownButton from 'react-bootstrap/DropdownButton';\n\nfunction VariantsExample() {\n  return (\n    <>\n      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(\n        (variant) => (\n          <DropdownButton\n            as={ButtonGroup}\n            key={variant}\n            id={`dropdown-variants-${variant}`}\n            variant={variant.toLowerCase()}\n            title={variant}\n          >\n            <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"3\" active>\n              Active Item\n            </Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n          </DropdownButton>\n        ),\n      )}\n    </>\n  );\n}\n\nexport default VariantsExample;\n",
        x =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction ButtonDarkExample() {\n  return (\n    <>\n      <Dropdown data-bs-theme="dark">\n        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">\n          Dropdown Button\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#/action-1" active>\n            Action\n          </Dropdown.Item>\n          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <DropdownButton\n        id="dropdown-button-dark-example2"\n        variant="secondary"\n        title="Dropdown button"\n        className="mt-2"\n        data-bs-theme="dark"\n      >\n        <Dropdown.Item href="#/action-1" active>\n          Action\n        </Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n      </DropdownButton>\n    </>\n  );\n}\n\nexport default ButtonDarkExample;\n',
        I =
          'import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction NavbarDarkExample() {\n  return (\n    <Navbar variant="dark" bg="dark" expand="lg">\n      <Container fluid>\n        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n        <Navbar.Toggle aria-controls="navbar-dark-example" />\n        <Navbar.Collapse id="navbar-dark-example">\n          <Nav>\n            <NavDropdown\n              id="nav-dropdown-dark-example"\n              title="Dropdown"\n              menuVariant="dark"\n            >\n              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.2">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action/3.4">\n                Separated link\n              </NavDropdown.Item>\n            </NavDropdown>\n          </Nav>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default NavbarDarkExample;\n',
        f =
          'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction AutoCloseExample() {\n  return (\n    <>\n      <Dropdown className="d-inline mx-2">\n        <Dropdown.Toggle id="dropdown-autoclose-true">\n          Default Dropdown\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <Dropdown className="d-inline mx-2" autoClose="inside">\n        <Dropdown.Toggle id="dropdown-autoclose-inside">\n          Clickable Outside\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <Dropdown className="d-inline mx-2" autoClose="outside">\n        <Dropdown.Toggle id="dropdown-autoclose-outside">\n          Clickable Inside\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <Dropdown className="d-inline mx-2" autoClose={false}>\n        <Dropdown.Toggle id="dropdown-autoclose-false">\n          Manual Close\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n    </>\n  );\n}\n\nexport default AutoCloseExample;\n',
        b = {
          title: "Dropdowns",
          description:
            "Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin",
        },
        j = void 0,
        y = {
          id: "components/dropdowns",
          title: "Dropdowns",
          description:
            "Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin",
          source: "@site/docs/components/dropdowns.mdx",
          sourceDirName: "components",
          slug: "/components/dropdowns",
          permalink: "/docs/components/dropdowns",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Dropdowns",
            description:
              "Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin",
          },
          sidebar: "sidebar",
          previous: {
            title: "Close Button",
            permalink: "/docs/components/close-button",
          },
          next: { title: "Figures", permalink: "/docs/components/figures" },
        },
        B = {},
        k = [
          { value: "Overview", id: "overview", level: 2 },
          { value: "Accessibility", id: "accessibility", level: 2 },
          { value: "Examples", id: "examples", level: 2 },
          {
            value: "Single button dropdowns",
            id: "single-button-dropdowns",
            level: 3,
          },
          {
            value: "Split button dropdowns",
            id: "split-button-dropdowns",
            level: 3,
          },
          { value: "Sizing", id: "sizing", level: 2 },
          { value: "Dark dropdowns", id: "dark-dropdowns", level: 2 },
          { value: "Drop directions", id: "drop-directions", level: 2 },
          { value: "Dropdown items", id: "dropdown-items", level: 2 },
          { value: "Menu alignment", id: "menu-alignment", level: 2 },
          {
            value: "Responsive alignment",
            id: "responsive-alignment",
            level: 3,
          },
          { value: "Menu headers", id: "menu-headers", level: 2 },
          { value: "Menu dividers", id: "menu-dividers", level: 2 },
          { value: "AutoClose", id: "autoclose", level: 2 },
          { value: "Customization", id: "customization", level: 2 },
          {
            value: "Custom Dropdown Components",
            id: "custom-dropdown-components",
            level: 3,
          },
          { value: "API", id: "api", level: 2 },
          { value: "DropdownButton", id: "dropdownbutton", level: 3 },
          { value: "SplitButton", id: "splitbutton", level: 3 },
          { value: "Dropdown", id: "dropdown", level: 3 },
          { value: "DropdownToggle", id: "dropdowntoggle", level: 3 },
          { value: "DropdownMenu", id: "dropdownmenu", level: 3 },
          { value: "DropdownItem", id: "dropdownitem", level: 3 },
          { value: "DropdownHeader", id: "dropdownheader", level: 3 },
          { value: "DropdownDivider", id: "dropdowndivider", level: 3 },
        ];
      function S(n) {
        const o = {
            a: "a",
            admonition: "admonition",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            strong: "strong",
            ...(0, r.a)(),
            ...n.components,
          },
          { AriaAbbr: e, CodeBlock: b, PropsTable: j } = o;
        return (
          e || A("AriaAbbr", !0),
          b || A("CodeBlock", !0),
          j || A("PropsTable", !0),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.h2, { id: "overview", children: "Overview" }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Dropdowns are toggleable, contextual overlays for displaying lists of\nlinks and more. Like overlays, Dropdowns are built using a third-party\nlibrary ",
                  (0, t.jsx)("a", {
                    href: "https://popper.js.org/",
                    children: "Popper.js",
                  }),
                  ", which provides\ndynamic positioning and viewport detection.",
                ],
              }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "accessibility",
                children: "Accessibility",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "The ",
                  (0, t.jsxs)("a", {
                    href: "https://www.w3.org/TR/wai-aria/",
                    children: [
                      (0, t.jsx)("abbr", {
                        title: "Web Accessibility Initiative",
                        children: "WAI",
                      }),
                      " ",
                      (0, t.jsx)(e, {}),
                    ],
                  }),
                  " standard\ndefines a ",
                  (0, t.jsxs)(o.a, {
                    href: "https://www.w3.org/TR/wai-aria-1.1/#menu",
                    children: [
                      (0, t.jsx)(o.code, { children: 'role="menu"' }),
                      " widget",
                    ],
                  }),
                  ", but it's very specific to a certain kind of menu. ",
                  (0, t.jsx)(e, {}),
                  " menus, must\nonly contain ",
                  (0, t.jsx)(o.code, { children: 'role="menuitem"' }),
                  ", ",
                  (0, t.jsx)(o.code, { children: 'role="menuitemcheckbox"' }),
                  ", or ",
                  (0, t.jsx)(o.code, { children: 'role="menuitemradio"' }),
                  ".",
                ],
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "On the other hand, Bootstrap's dropdowns are designed to more generic\nand application in a variety of situations. For this reason we don't\nautomatically add the menu roles to the markup. We do implement some\nbasic keyboard navigation, and if you do provide the \"menu\" role,\nreact-bootstrap will do its best to ensure the focus management is\ncompliant with the ",
                  (0, t.jsx)(e, {}),
                  " authoring guidelines for menus.",
                ],
              }),
              "\n",
              (0, t.jsx)(o.h2, { id: "examples", children: "Examples" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "single-button-dropdowns",
                children: "Single button dropdowns",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "The basic Dropdown is composed of a wrapping ",
                  (0, t.jsx)(o.code, { children: "Dropdown" }),
                  " and\ninner ",
                  (0, t.jsx)(o.code, { children: "<DropdownMenu>" }),
                  ", and ",
                  (0, t.jsx)(o.code, { children: "<DropdownToggle>" }),
                  ". By\ndefault the ",
                  (0, t.jsx)(o.code, { children: "<DropdownToggle>" }),
                  " will render a\n",
                  (0, t.jsx)(o.code, { children: "Button" }),
                  " component and accepts all the same props.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Since the above is such a common configuration react-bootstrap provides\nthe ",
                  (0, t.jsx)(o.code, { children: "<DropdownButton>" }),
                  " component to help reduce typing. Provide\na ",
                  (0, t.jsx)(o.code, { children: "title" }),
                  " prop and some ",
                  (0, t.jsx)(o.code, { children: "<DropdownItem>" }),
                  "s and you're\nready to go.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, t.jsx)(o.p, {
                children:
                  "DropdownButton will forward Button props to the underlying Toggle\ncomponent",
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: g }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "split-button-dropdowns",
                children: "Split button dropdowns",
              }),
              "\n",
              (0, t.jsx)(o.p, {
                children:
                  "Similarly, You create a split dropdown by combining the Dropdown\ncomponents with another Button and a ButtonGroup.",
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: h }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "As with DropdownButton, ",
                  (0, t.jsx)(o.code, { children: "SplitButton" }),
                  " is provided as\nconvenience component.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: v }),
              "\n",
              (0, t.jsx)(o.h2, { id: "sizing", children: "Sizing" }),
              "\n",
              (0, t.jsx)(o.p, {
                children: "Dropdowns work with buttons of all sizes.",
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "dark-dropdowns",
                children: "Dark dropdowns",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Opt into darker dropdowns to match a dark navbar or custom style by adding\n",
                  (0, t.jsx)(o.code, { children: 'variant="dark"' }),
                  " onto an existing ",
                  (0, t.jsx)(o.code, { children: "DropdownMenu" }),
                  ". Alternatively, use\n",
                  (0, t.jsx)(o.code, { children: 'menuVariant="dark"' }),
                  " when using the ",
                  (0, t.jsx)(o.code, { children: "DropdownButton" }),
                  " component.",
                ],
              }),
              "\n",
              (0, t.jsx)(o.admonition, {
                title: "Heads up!",
                type: "caution",
                children: (0, t.jsxs)(o.p, {
                  children: [
                    "Dark variants for components were deprecated in Bootstrap v5.3.0 with the introduction\nof color modes. Instead of adding ",
                    (0, t.jsx)(o.code, { children: 'variant="dark"' }),
                    ", set ",
                    (0, t.jsx)(o.code, { children: 'data-bs-theme="dark"' }),
                    " on the root\nelement, a parent wrapper, or the component itself.",
                  ],
                }),
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: x }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Using ",
                  (0, t.jsx)(o.code, { children: 'menuVariant="dark"' }),
                  " in a ",
                  (0, t.jsx)(o.code, { children: "NavDropdown" }),
                  ":",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: I }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "drop-directions",
                children: "Drop directions",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Trigger dropdown menus above, below, left, or to the right of their\ntoggle elements, with the ",
                  (0, t.jsx)(o.code, { children: "drop" }),
                  " prop.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "dropdown-items",
                children: "Dropdown items",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "Historically dropdown menu contents had to be links, but that\u2019s no\nlonger the case with v4. Now you can optionally use\n",
                  (0, t.jsx)(o.code, { children: "<button>" }),
                  " elements in your dropdowns instead of just ",
                  (0, t.jsx)(o.code, { children: "<a>" }),
                  "s.",
                ],
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "You can also create non-interactive dropdown items with ",
                  (0, t.jsx)(o.code, { children: "<Dropdown.ItemText>" }),
                  ".\nFeel free to style further with custom CSS or text utilities.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "menu-alignment",
                children: "Menu alignment",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "By default, a dropdown menu is aligned to the left, but you can switch\nit by passing ",
                  (0, t.jsx)(o.code, { children: 'align="end"' }),
                  " to a ",
                  (0, t.jsx)(o.code, { children: "<Dropdown>" }),
                  ", ",
                  (0, t.jsx)(o.code, { children: "<DropdownButton>" }),
                  ", or ",
                  (0, t.jsx)(o.code, { children: "<SplitButton>" }),
                  ".",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: m }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "responsive-alignment",
                children: "Responsive alignment",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "If you want to use responsive menu alignment, pass an object containing a breakpoint to the\n",
                  (0, t.jsx)(o.code, { children: "align" }),
                  " prop on the ",
                  (0, t.jsx)(o.code, { children: "<DropdownMenu>" }),
                  ", ",
                  (0, t.jsx)(o.code, { children: "<DropdownButton>" }),
                  ", or ",
                  (0, t.jsx)(o.code, { children: "<SplitButton>" }),
                  ".\nYou can specify ",
                  (0, t.jsx)(o.code, { children: "start" }),
                  " or ",
                  (0, t.jsx)(o.code, { children: "end" }),
                  " for the various breakpoints.",
                ],
              }),
              "\n",
              (0, t.jsx)(o.admonition, {
                title: "Warning",
                type: "danger",
                children: (0, t.jsxs)(o.p, {
                  children: [
                    "Using responsive alignment will disable Popper usage so any dynamic\npositioning features such as ",
                    (0, t.jsx)("code", { children: "flip" }),
                    " will not work.",
                  ],
                }),
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: w }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "menu-headers",
                children: "Menu headers",
              }),
              "\n",
              (0, t.jsx)(o.p, {
                children: "Add a header to label sections of actions.",
              }),
              "\n",
              (0, t.jsx)(b, {
                language: "jsx",
                live: !0,
                previewClassName: "static-dropdown-menu",
                children: D,
              }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "menu-dividers",
                children: "Menu dividers",
              }),
              "\n",
              (0, t.jsx)(o.p, {
                children:
                  "Separate groups of related menu items with a divider.",
              }),
              "\n",
              (0, t.jsx)(b, {
                language: "jsx",
                live: !0,
                previewClassName: "static-dropdown-menu",
                children: u,
              }),
              "\n",
              (0, t.jsx)(o.h2, { id: "autoclose", children: "AutoClose" }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "By default, the dropdown menu is closed when selecting a menu item or clicking outside of the\ndropdown menu. This behaviour can be changed by using the ",
                  (0, t.jsx)(o.code, { children: "autoClose" }),
                  " property.",
                ],
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "By default, ",
                  (0, t.jsx)(o.code, { children: "autoClose" }),
                  " is set to the default value ",
                  (0, t.jsx)(o.code, { children: "true" }),
                  " and behaves like expected. By choosing ",
                  (0, t.jsx)(o.code, { children: "false" }),
                  ", the dropdown\nmenu can only be toggled by clicking on the dropdown button. ",
                  (0, t.jsx)(o.code, { children: "inside" }),
                  " makes the dropdown disappear ",
                  (0, t.jsx)(o.strong, { children: "only" }),
                  "\nby choosing a menu item and ",
                  (0, t.jsx)(o.code, { children: "outside" }),
                  " closes the dropdown menu ",
                  (0, t.jsx)(o.strong, { children: "only" }),
                  " by clicking outside.",
                ],
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  (0, t.jsx)(o.strong, { children: "Notice" }),
                  " how the dropdown is toggled in each scenario by clicking on the button.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, { language: "jsx", live: !0, children: f }),
              "\n",
              (0, t.jsx)(o.h2, {
                id: "customization",
                children: "Customization",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "If the default handling of the dropdown menu and toggle components\naren't to your liking, you can customize them, by using the more basic\n",
                  (0, t.jsx)(o.code, { children: "<Dropdown>" }),
                  " Component to explicitly specify the Toggle and\nMenu components",
                ],
              }),
              "\n",
              (0, t.jsx)(b, {
                language: "jsx",
                live: !0,
                previewClassName: "custom-dropdown-menu",
                children: p,
              }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "custom-dropdown-components",
                children: "Custom Dropdown Components",
              }),
              "\n",
              (0, t.jsxs)(o.p, {
                children: [
                  "For those that want to customize everything, you can forgo the included\nToggle and Menu components, and create your own. By providing custom\ncomponents to the ",
                  (0, t.jsx)(o.code, { children: "as" }),
                  " prop, you can control how each\ncomponent behaves. Custom toggle and menu components ",
                  (0, t.jsx)(o.strong, { children: "must" }),
                  " be able to accept refs.",
                ],
              }),
              "\n",
              (0, t.jsx)(b, {
                language: "jsx",
                live: !0,
                noInline: !0,
                children: a,
              }),
              "\n",
              (0, t.jsx)(o.h2, { id: "api", children: "API" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "dropdownbutton",
                children: "DropdownButton",
              }),
              "\n",
              (0, t.jsx)(j, { name: "DropdownButton" }),
              "\n",
              (0, t.jsx)(o.h3, { id: "splitbutton", children: "SplitButton" }),
              "\n",
              (0, t.jsx)(j, { name: "SplitButton" }),
              "\n",
              (0, t.jsx)(o.h3, { id: "dropdown", children: "Dropdown" }),
              "\n",
              (0, t.jsx)(j, { name: "Dropdown" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "dropdowntoggle",
                children: "DropdownToggle",
              }),
              "\n",
              (0, t.jsx)(j, { name: "DropdownToggle" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "dropdownmenu",
                children: "DropdownMenu",
              }),
              "\n",
              (0, t.jsx)(j, { name: "DropdownMenu" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "dropdownitem",
                children: "DropdownItem",
              }),
              "\n",
              (0, t.jsx)(j, { name: "DropdownItem" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "dropdownheader",
                children: "DropdownHeader",
              }),
              "\n",
              (0, t.jsx)(j, { name: "DropdownHeader" }),
              "\n",
              (0, t.jsx)(o.h3, {
                id: "dropdowndivider",
                children: "DropdownDivider",
              }),
              "\n",
              (0, t.jsx)(j, { name: "DropdownDivider" }),
            ],
          })
        );
      }
      function M(n = {}) {
        const { wrapper: o } = { ...(0, r.a)(), ...n.components };
        return o
          ? (0, t.jsx)(o, { ...n, children: (0, t.jsx)(S, { ...n }) })
          : S(n);
      }
      function A(n, o) {
        throw new Error(
          "Expected " +
            (o ? "component" : "object") +
            " `" +
            n +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (n, o, e) => {
      e.d(o, { Z: () => p, a: () => i });
      var t = e(67294);
      const r = {},
        d = t.createContext(r);
      function i(n) {
        const o = t.useContext(d);
        return t.useMemo(
          function () {
            return "function" == typeof n ? n(o) : { ...o, ...n };
          },
          [o, n]
        );
      }
      function p(n) {
        let o;
        return (
          (o = n.disableParentContext
            ? "function" == typeof n.components
              ? n.components(r)
              : n.components || r
            : i(n.components)),
          t.createElement(d.Provider, { value: o }, n.children)
        );
      }
    },
  },
]);
