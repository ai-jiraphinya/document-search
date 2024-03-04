"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [7623],
  {
    18453: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => v,
          contentTitle: () => b,
          default: () => j,
          frontMatter: () => x,
          metadata: () => f,
          toc: () => g,
        });
      var i = n(85893),
        o = n(11151);
      const s =
          "import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction DefaultExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item>Cras justo odio</ListGroup.Item>\n      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default DefaultExample;\n",
        r =
          'import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction LinkedExample() {\n  const alertClicked = () => {\n    alert(\'You clicked the third ListGroupItem\');\n  };\n\n  return (\n    <ListGroup defaultActiveKey="#link1">\n      <ListGroup.Item action href="#link1">\n        Link 1\n      </ListGroup.Item>\n      <ListGroup.Item action href="#link2" disabled>\n        Link 2\n      </ListGroup.Item>\n      <ListGroup.Item action onClick={alertClicked}>\n        This one is a button\n      </ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default LinkedExample;\n',
        a =
          'import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction ActiveExample() {\n  return (\n    <ListGroup as="ul">\n      <ListGroup.Item as="li" active>\n        Cras justo odio\n      </ListGroup.Item>\n      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item as="li" disabled>\n        Morbi leo risus\n      </ListGroup.Item>\n      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default ActiveExample;\n',
        l =
          "import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction DisabledExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>\n      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default DisabledExample;\n",
        p =
          'import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction StyleExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item>No style</ListGroup.Item>\n      <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n      <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>\n      <ListGroup.Item variant="success">Success</ListGroup.Item>\n      <ListGroup.Item variant="danger">Danger</ListGroup.Item>\n      <ListGroup.Item variant="warning">Warning</ListGroup.Item>\n      <ListGroup.Item variant="info">Info</ListGroup.Item>\n      <ListGroup.Item variant="light">Light</ListGroup.Item>\n      <ListGroup.Item variant="dark">Dark</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default StyleExample;\n',
        u =
          'import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction StyleActionsExample() {\n  return (\n    <ListGroup>\n      <ListGroup.Item>No style</ListGroup.Item>\n      <ListGroup.Item variant="primary">Primary</ListGroup.Item>\n      <ListGroup.Item action variant="secondary">\n        Secondary\n      </ListGroup.Item>\n      <ListGroup.Item action variant="success">\n        Success\n      </ListGroup.Item>\n      <ListGroup.Item action variant="danger">\n        Danger\n      </ListGroup.Item>\n      <ListGroup.Item action variant="warning">\n        Warning\n      </ListGroup.Item>\n      <ListGroup.Item action variant="info">\n        Info\n      </ListGroup.Item>\n      <ListGroup.Item action variant="light">\n        Light\n      </ListGroup.Item>\n      <ListGroup.Item action variant="dark">\n        Dark\n      </ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default StyleActionsExample;\n',
        c =
          "import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction FlushExample() {\n  return (\n    <ListGroup variant=\"flush\">\n      <ListGroup.Item>Cras justo odio</ListGroup.Item>\n      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n      <ListGroup.Item>Morbi leo risus</ListGroup.Item>\n      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default FlushExample;\n",
        d =
          'import ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction NumberedExample() {\n  return (\n    <ListGroup as="ol" numbered>\n      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>\n      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>\n      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default NumberedExample;\n',
        m =
          'import Badge from \'react-bootstrap/Badge\';\nimport ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction DefaultExample() {\n  return (\n    <ListGroup as="ol" numbered>\n      <ListGroup.Item\n        as="li"\n        className="d-flex justify-content-between align-items-start"\n      >\n        <div className="ms-2 me-auto">\n          <div className="fw-bold">Subheading</div>\n          Cras justo odio\n        </div>\n        <Badge bg="primary" pill>\n          14\n        </Badge>\n      </ListGroup.Item>\n      <ListGroup.Item\n        as="li"\n        className="d-flex justify-content-between align-items-start"\n      >\n        <div className="ms-2 me-auto">\n          <div className="fw-bold">Subheading</div>\n          Cras justo odio\n        </div>\n        <Badge bg="primary" pill>\n          14\n        </Badge>\n      </ListGroup.Item>\n      <ListGroup.Item\n        as="li"\n        className="d-flex justify-content-between align-items-start"\n      >\n        <div className="ms-2 me-auto">\n          <div className="fw-bold">Subheading</div>\n          Cras justo odio\n        </div>\n        <Badge bg="primary" pill>\n          14\n        </Badge>\n      </ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default DefaultExample;\n',
        h =
          "import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction HorizontalExample() {\n  return (\n    <ListGroup horizontal>\n      <ListGroup.Item>This</ListGroup.Item>\n      <ListGroup.Item>ListGroup</ListGroup.Item>\n      <ListGroup.Item>renders</ListGroup.Item>\n      <ListGroup.Item>horizontally!</ListGroup.Item>\n    </ListGroup>\n  );\n}\n\nexport default HorizontalExample;\n",
        L =
          "import ListGroup from 'react-bootstrap/ListGroup';\n\nfunction HorizontalResponsiveExample() {\n  return (\n    <>\n      {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (\n        <ListGroup key={breakpoint} horizontal={breakpoint} className=\"my-2\">\n          <ListGroup.Item>This ListGroup</ListGroup.Item>\n          <ListGroup.Item>renders horizontally</ListGroup.Item>\n          <ListGroup.Item>on {breakpoint}</ListGroup.Item>\n          <ListGroup.Item>and above!</ListGroup.Item>\n        </ListGroup>\n      ))}\n    </>\n  );\n}\n\nexport default HorizontalResponsiveExample;\n",
        G =
          'import Col from \'react-bootstrap/Col\';\nimport ListGroup from \'react-bootstrap/ListGroup\';\nimport Row from \'react-bootstrap/Row\';\nimport Tab from \'react-bootstrap/Tab\';\n\nfunction TabsExample() {\n  return (\n    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">\n      <Row>\n        <Col sm={4}>\n          <ListGroup>\n            <ListGroup.Item action href="#link1">\n              Link 1\n            </ListGroup.Item>\n            <ListGroup.Item action href="#link2">\n              Link 2\n            </ListGroup.Item>\n          </ListGroup>\n        </Col>\n        <Col sm={8}>\n          <Tab.Content>\n            <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>\n            <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>\n          </Tab.Content>\n        </Col>\n      </Row>\n    </Tab.Container>\n  );\n}\n\nexport default TabsExample;\n',
        x = {
          title: "List groups",
          description:
            "List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",
        },
        b = void 0,
        f = {
          id: "components/list-group",
          title: "List groups",
          description:
            "List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",
          source: "@site/docs/components/list-group.mdx",
          sourceDirName: "components",
          slug: "/components/list-group",
          permalink: "/docs/components/list-group",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "List groups",
            description:
              "List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",
          },
          sidebar: "sidebar",
          previous: { title: "Images", permalink: "/docs/components/images" },
          next: { title: "Modals", permalink: "/docs/components/modal" },
        },
        v = {},
        g = [
          { value: "Basic Example", id: "basic-example", level: 2 },
          { value: "Active items", id: "active-items", level: 3 },
          { value: "Disabled items", id: "disabled-items", level: 3 },
          { value: "Actionable items", id: "actionable-items", level: 3 },
          { value: "Flush", id: "flush", level: 3 },
          { value: "Numbered", id: "numbered", level: 3 },
          { value: "Horizontal", id: "horizontal", level: 3 },
          { value: "Contextual classes", id: "contextual-classes", level: 3 },
          { value: "Tabbed Interfaces", id: "tabbed-interfaces", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "ListGroup", id: "listgroup", level: 3 },
          { value: "ListGroupItem", id: "listgroupitem", level: 3 },
        ];
      function I(t) {
        const e = {
            a: "a",
            admonition: "admonition",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            strong: "strong",
            ...(0, o.a)(),
            ...t.components,
          },
          { CodeBlock: n, PropsTable: x } = e;
        return (
          n || y("CodeBlock", !0),
          x || y("PropsTable", !0),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(e.h2, {
                id: "basic-example",
                children: "Basic Example",
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: s,
              }),
              "\n",
              (0, i.jsx)(e.h3, {
                id: "active-items",
                children: "Active items",
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Set the ",
                  (0, i.jsx)(e.code, { children: "active" }),
                  " prop to indicate the list groups current active selection.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: a,
              }),
              "\n",
              (0, i.jsx)(e.h3, {
                id: "disabled-items",
                children: "Disabled items",
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Set the ",
                  (0, i.jsx)(e.code, { children: "disabled" }),
                  " prop to prevent actions on a ",
                  (0, i.jsx)(e.code, { children: "<ListGroup.Item>" }),
                  ". For elements\nthat aren't naturally disable-able (like anchors) ",
                  (0, i.jsx)(e.code, { children: "onClick" }),
                  " handlers are added\nthat call ",
                  (0, i.jsx)(e.code, { children: "preventDefault" }),
                  " to mimick disabled behavior.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: l,
              }),
              "\n",
              (0, i.jsx)(e.h3, {
                id: "actionable-items",
                children: "Actionable items",
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Toggle the ",
                  (0, i.jsx)(e.code, { children: "action" }),
                  " prop to create ",
                  (0, i.jsx)("em", { children: "actionable" }),
                  " list group\nitems, with disabled, hover and active styles. List item actions will render\na ",
                  (0, i.jsx)(e.code, { children: "<button>" }),
                  " or ",
                  (0, i.jsx)(e.code, { children: "<a>" }),
                  " (depending on the presence of an ",
                  (0, i.jsx)(e.code, { children: "href" }),
                  ") by default but\ncan be overridden by setting the ",
                  (0, i.jsx)(e.code, { children: "as" }),
                  " prop as usual.",
                ],
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "List items ",
                  (0, i.jsx)(e.code, { children: "actions" }),
                  " are distinct from plain items to ensure that click or tap\naffordances aren't applied to non-interactive items.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: r,
              }),
              "\n",
              (0, i.jsx)(e.h3, { id: "flush", children: "Flush" }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Add the ",
                  (0, i.jsx)(e.code, { children: "flush" }),
                  " variant to remove outer borders and rounded corners to render list group items\nedge-to-edge in a parent container ",
                  (0, i.jsxs)(e.a, {
                    href: "cards#list-groups",
                    children: [
                      "such as a ",
                      (0, i.jsx)(e.code, { children: "Card" }),
                    ],
                  }),
                  ".",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: c,
              }),
              "\n",
              (0, i.jsx)(e.h3, { id: "numbered", children: "Numbered" }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Add the ",
                  (0, i.jsx)(e.code, { children: "numbered" }),
                  " prop to opt into numbered list group items. Numbers are generated via CSS\n(as opposed to a ",
                  (0, i.jsx)(e.code, { children: "<ol>" }),
                  "s default browser styling) for better placement inside list group items\nand to allow for better customization.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: d,
              }),
              "\n",
              (0, i.jsx)(e.p, {
                children: "These work great with custom content as well.",
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: m,
              }),
              "\n",
              (0, i.jsx)(e.h3, { id: "horizontal", children: "Horizontal" }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Use the ",
                  (0, i.jsx)(e.code, { children: "horizontal" }),
                  " prop to make the ListGroup render horizontally. Currently ",
                  (0, i.jsx)(e.strong, {
                    children:
                      "horizontal list groups cannot be combined with flush list groups.",
                  }),
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: h,
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "There are responsive variants to ",
                  (0, i.jsx)(e.code, { children: "horizontal" }),
                  ": setting it to ",
                  (0, i.jsx)(e.code, { children: "{sm|md|lg|xl|xxl}" }),
                  " makes the list group horizontal starting at that breakpoint\u2019s ",
                  (0, i.jsx)(e.code, { children: "min-width" }),
                  ".",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: L,
              }),
              "\n",
              (0, i.jsx)(e.h3, {
                id: "contextual-classes",
                children: "Contextual classes",
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "Use contextual variants on ",
                  (0, i.jsx)(e.code, { children: "<ListGroup.Item>" }),
                  "s to style them with a stateful background and color.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: p,
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "When paired with ",
                  (0, i.jsx)(e.code, { children: "action" }),
                  "s, additional hover and active styles apply.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: u,
              }),
              "\n",
              (0, i.jsx)(e.admonition, {
                title: "Conveying meaning to assistive technologies",
                type: "info",
                children: (0, i.jsxs)(e.p, {
                  children: [
                    "Using color to add meaning only provides a visual indication, which will not\nbe conveyed to users of assistive technologies \u2013 such as screen readers.\nEnsure that information denoted by the color is either obvious from the\ncontent itself (e.g. the visible text), or is included through alternative\nmeans, such as additional text hidden with the ",
                    (0, i.jsx)(e.code, { children: ".visually-hidden" }),
                    "\nclass.",
                  ],
                }),
              }),
              "\n",
              (0, i.jsx)(e.h2, {
                id: "tabbed-interfaces",
                children: "Tabbed Interfaces",
              }),
              "\n",
              (0, i.jsxs)(e.p, {
                children: [
                  "You can also use the [Tab][tabs] components to create ARIA compliant tabbable\ninterfaces with the ",
                  (0, i.jsx)(e.code, { children: "<ListGroup>" }),
                  " component. Swap out the ",
                  (0, i.jsx)(e.code, { children: "<Nav>" }),
                  " component\nfor the list group and you are good to go.",
                ],
              }),
              "\n",
              (0, i.jsx)(n, {
                language: "jsx",
                live: !0,
                previewClassName: "list-group",
                children: G,
              }),
              "\n",
              (0, i.jsx)(e.h2, { id: "api", children: "API" }),
              "\n",
              (0, i.jsx)(e.h3, { id: "listgroup", children: "ListGroup" }),
              "\n",
              (0, i.jsx)(x, { name: "ListGroup" }),
              "\n",
              (0, i.jsx)(e.h3, {
                id: "listgroupitem",
                children: "ListGroupItem",
              }),
              "\n",
              (0, i.jsx)(x, { name: "ListGroupItem" }),
            ],
          })
        );
      }
      function j(t = {}) {
        const { wrapper: e } = { ...(0, o.a)(), ...t.components };
        return e
          ? (0, i.jsx)(e, { ...t, children: (0, i.jsx)(I, { ...t }) })
          : I(t);
      }
      function y(t, e) {
        throw new Error(
          "Expected " +
            (e ? "component" : "object") +
            " `" +
            t +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (t, e, n) => {
      n.d(e, { Z: () => a, a: () => r });
      var i = n(67294);
      const o = {},
        s = i.createContext(o);
      function r(t) {
        const e = i.useContext(s);
        return i.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function a(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(o)
              : t.components || o
            : r(t.components)),
          i.createElement(s.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
/*! jiraphinya playground information please see ok */
