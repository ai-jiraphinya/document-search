"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1651],
  {
    23861: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => T,
          contentTitle: () => m,
          default: () => u,
          frontMatter: () => d,
          metadata: () => p,
          toc: () => f,
        });
      var a = t(85893),
        o = t(11151);
      const i =
          'import { useState } from \'react\';\nimport Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction ControlledTabsExample() {\n  const [key, setKey] = useState(\'home\');\n\n  return (\n    <Tabs\n      id="controlled-tab-example"\n      activeKey={key}\n      onSelect={(k) => setKey(k)}\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default ControlledTabsExample;\n',
        s =
          'import Col from \'react-bootstrap/Col\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Row from \'react-bootstrap/Row\';\nimport Tab from \'react-bootstrap/Tab\';\n\nfunction LeftTabsExample() {\n  return (\n    <Tab.Container id="left-tabs-example" defaultActiveKey="first">\n      <Row>\n        <Col sm={3}>\n          <Nav variant="pills" className="flex-column">\n            <Nav.Item>\n              <Nav.Link eventKey="first">Tab 1</Nav.Link>\n            </Nav.Item>\n            <Nav.Item>\n              <Nav.Link eventKey="second">Tab 2</Nav.Link>\n            </Nav.Item>\n          </Nav>\n        </Col>\n        <Col sm={9}>\n          <Tab.Content>\n            <Tab.Pane eventKey="first">First tab content</Tab.Pane>\n            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>\n          </Tab.Content>\n        </Col>\n      </Row>\n    </Tab.Container>\n  );\n}\n\nexport default LeftTabsExample;\n',
        l =
          'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction NoAnimationExample() {\n  return (\n    <Tabs\n      defaultActiveKey="home"\n      transition={false}\n      id="noanim-tab-example"\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default NoAnimationExample;\n',
        r =
          'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction UncontrolledExample() {\n  return (\n    <Tabs\n      defaultActiveKey="profile"\n      id="uncontrolled-tab-example"\n      className="mb-3"\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default UncontrolledExample;\n',
        c =
          'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction FillExample() {\n  return (\n    <Tabs\n      defaultActiveKey="profile"\n      id="fill-tab-example"\n      className="mb-3"\n      fill\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="longer-tab" title="Loooonger Tab">\n        Tab content for Loooonger Tab\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default FillExample;\n',
        b =
          'import Tab from \'react-bootstrap/Tab\';\nimport Tabs from \'react-bootstrap/Tabs\';\n\nfunction JustifiedExample() {\n  return (\n    <Tabs\n      defaultActiveKey="profile"\n      id="justify-tab-example"\n      className="mb-3"\n      justify\n    >\n      <Tab eventKey="home" title="Home">\n        Tab content for Home\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Tab content for Profile\n      </Tab>\n      <Tab eventKey="longer-tab" title="Loooonger Tab">\n        Tab content for Loooonger Tab\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Tab content for Contact\n      </Tab>\n    </Tabs>\n  );\n}\n\nexport default JustifiedExample;\n',
        d = {
          title: "Tabbed components",
          description: "Dynamic tabbed interfaces",
          sidebar_label: "Tabs",
        },
        m = void 0,
        p = {
          id: "components/tabs",
          title: "Tabbed components",
          description: "Dynamic tabbed interfaces",
          source: "@site/docs/components/tabs.mdx",
          sourceDirName: "components",
          slug: "/components/tabs",
          permalink: "/docs/components/tabs",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Tabbed components",
            description: "Dynamic tabbed interfaces",
            sidebar_label: "Tabs",
          },
          sidebar: "sidebar",
          previous: { title: "Tables", permalink: "/docs/components/table" },
          next: { title: "Toasts", permalink: "/docs/components/toasts" },
        },
        T = {},
        f = [
          { value: "Examples", id: "examples", level: 2 },
          { value: "Controlled", id: "controlled", level: 2 },
          { value: "No animation", id: "no-animation", level: 2 },
          { value: "Fill and justify", id: "fill-and-justify", level: 2 },
          { value: "Dropdowns?", id: "dropdowns", level: 2 },
          { value: "Custom Tab Layout", id: "custom-tab-layout", level: 2 },
          { value: "Pills", id: "pills", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Tabs", id: "tabs", level: 3 },
          { value: "Tab", id: "tab", level: 3 },
          { value: "TabContainer", id: "tabcontainer", level: 3 },
          { value: "TabContent", id: "tabcontent", level: 3 },
          { value: "TabPane", id: "tabpane", level: 3 },
        ];
      function h(e) {
        const n = {
            a: "a",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, o.a)(),
            ...e.components,
          },
          { AriaAbbr: t, CodeBlock: d, PropsTable: m } = n;
        return (
          t || x("AriaAbbr", !0),
          d || x("CodeBlock", !0),
          m || x("PropsTable", !0),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n.h2, { id: "examples", children: "Examples" }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  "Create dynamic tabbed interfaces, as described in the\n",
                  (0, a.jsxs)(n.a, {
                    href: "https://www.w3.org/TR/wai-aria-practices/#tabpanel",
                    children: [
                      (0, a.jsx)("abbr", {
                        title: "Web Accessibility Initiative",
                        children: "WAI",
                      }),
                      " ",
                      (0, a.jsx)(t, {}),
                      " Authoring Practices",
                    ],
                  }),
                  ".\n",
                  (0, a.jsx)(n.code, { children: "Tabs" }),
                  " is a higher-level component for quickly creating a\n",
                  (0, a.jsx)(n.code, { children: "Nav" }),
                  " matched with a set of ",
                  (0, a.jsx)(n.code, { children: "TabPane" }),
                  "s.",
                ],
              }),
              "\n",
              (0, a.jsx)(d, {
                language: "jsx",
                live: !0,
                previewClassName: "bs-example-tabs",
                children: r,
              }),
              "\n",
              (0, a.jsx)(n.h2, { id: "controlled", children: "Controlled" }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  (0, a.jsx)(n.code, { children: "Tabs" }),
                  " can be controlled directly when you want to handle the\nselection logic personally.",
                ],
              }),
              "\n",
              (0, a.jsx)(d, {
                language: "jsx",
                live: !0,
                previewClassName: "bs-example-tabs",
                children: i,
              }),
              "\n",
              (0, a.jsx)(n.h2, {
                id: "no-animation",
                children: "No animation",
              }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  "Set the ",
                  (0, a.jsx)(n.code, { children: "transition" }),
                  " prop to ",
                  (0, a.jsx)(n.code, { children: "false" }),
                  ".",
                ],
              }),
              "\n",
              (0, a.jsx)(d, {
                language: "jsx",
                live: !0,
                previewClassName: "bs-example-tabs",
                children: l,
              }),
              "\n",
              (0, a.jsx)(n.h2, {
                id: "fill-and-justify",
                children: "Fill and justify",
              }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  "Similar to the ",
                  (0, a.jsx)(n.code, { children: "Nav" }),
                  " component, you can force the contents of your ",
                  (0, a.jsx)(n.code, { children: "Tabs" }),
                  " to extend the full available width. To\nproportionately fill the space use ",
                  (0, a.jsx)(n.code, { children: "fill" }),
                  ". Notice that the\n",
                  (0, a.jsx)(n.code, { children: "Tabs" }),
                  " is the entire width but each ",
                  (0, a.jsx)(n.code, { children: "Tab" }),
                  " item is a different size.",
                ],
              }),
              "\n",
              (0, a.jsx)(d, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  "If you want each ",
                  (0, a.jsx)(n.code, { children: "Tab" }),
                  " to be the same size use ",
                  (0, a.jsx)(n.code, { children: "justify" }),
                  ".",
                ],
              }),
              "\n",
              (0, a.jsx)(d, { language: "jsx", live: !0, children: b }),
              "\n",
              (0, a.jsx)(n.h2, { id: "dropdowns", children: "Dropdowns?" }),
              "\n",
              (0, a.jsx)(n.p, {
                children:
                  "Dynamic tabbed interfaces should not contain dropdown menus, as this\ncauses both usability and accessibility issues. From a usability\nperspective, the fact that the currently displayed tab\u2019s trigger element\nis not immediately visible (as it\u2019s inside the closed dropdown menu) can\ncause confusion. From an accessibility point of view, there is currently\nno sensible way to map this sort of construct to a standard WAI ARIA\npattern, meaning that it cannot be easily made understandable to users\nof assistive technologies.",
              }),
              "\n",
              (0, a.jsx)(n.p, {
                children:
                  "That said, it Dropdowns do work technically (sans focus management), but\nwe don't make any claims about support.",
              }),
              "\n",
              (0, a.jsx)(n.h2, {
                id: "custom-tab-layout",
                children: "Custom Tab Layout",
              }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  "For more complex layouts the flexible ",
                  (0, a.jsx)(n.code, { children: "TabContainer" }),
                  ",",
                ],
              }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  (0, a.jsx)(n.code, { children: "TabContent" }),
                  ", and ",
                  (0, a.jsx)(n.code, { children: "TabPane" }),
                  " components along with any\nstyle of ",
                  (0, a.jsx)(n.code, { children: "Nav" }),
                  " allow you to quickly piece together your own Tabs\ncomponent with additional markup needed.",
                ],
              }),
              "\n",
              (0, a.jsxs)(n.p, {
                children: [
                  "Create a set of NavItems each with an ",
                  (0, a.jsx)(n.code, { children: "eventKey" }),
                  "\ncorresponding to the eventKey of a ",
                  (0, a.jsx)(n.code, { children: "TabPane" }),
                  ". Wrap the whole\nthing in a ",
                  (0, a.jsx)(n.code, { children: "TabContainer" }),
                  " and you have fully functioning\ncustom tabs component. Check out the below example making use of the\ngrid system, pills and underline.",
                ],
              }),
              "\n",
              (0, a.jsx)(n.h2, { id: "pills", children: "Pills" }),
              "\n",
              (0, a.jsx)(d, {
                language: "jsx",
                live: !0,
                previewClassName: "bs-example-tabs",
                children: s,
              }),
              "\n",
              (0, a.jsx)(n.h2, { id: "api", children: "API" }),
              "\n",
              (0, a.jsx)(n.h3, { id: "tabs", children: "Tabs" }),
              "\n",
              (0, a.jsx)(m, { name: "Tabs" }),
              "\n",
              (0, a.jsx)(n.h3, { id: "tab", children: "Tab" }),
              "\n",
              (0, a.jsx)(m, { name: "Tab" }),
              "\n",
              (0, a.jsx)(n.h3, {
                id: "tabcontainer",
                children: "TabContainer",
              }),
              "\n",
              (0, a.jsx)(m, { name: "TabContainer" }),
              "\n",
              (0, a.jsx)(n.h3, { id: "tabcontent", children: "TabContent" }),
              "\n",
              (0, a.jsx)(m, { name: "TabContent" }),
              "\n",
              (0, a.jsx)(n.h3, { id: "tabpane", children: "TabPane" }),
              "\n",
              (0, a.jsx)(m, { name: "TabPane" }),
            ],
          })
        );
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, o.a)(), ...e.components };
        return n
          ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) })
          : h(e);
      }
      function x(e, n) {
        throw new Error(
          "Expected " +
            (n ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, n, t) => {
      t.d(n, { Z: () => l, a: () => s });
      var a = t(67294);
      const o = {},
        i = a.createContext(o);
      function s(e) {
        const n = a.useContext(i);
        return a.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          a.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
