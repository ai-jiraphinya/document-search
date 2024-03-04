/*! jiraphinya playground information please see ok */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [9709],
  {
    97907: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => m,
          contentTitle: () => u,
          default: () => g,
          frontMatter: () => d,
          metadata: () => h,
          toc: () => p,
        });
      var i = t(85893),
        s = t(11151);
      const o =
          'import Alert from \'react-bootstrap/Alert\';\n\nfunction AdditionalContentExample() {\n  return (\n    <Alert variant="success">\n      <Alert.Heading>Hey, nice to see you</Alert.Heading>\n      <p>\n        Aww yeah, you successfully read this important alert message. This\n        example text is going to run a bit longer so that you can see how\n        spacing within an alert works with this kind of content.\n      </p>\n      <hr />\n      <p className="mb-0">\n        Whenever you need to, be sure to use margin utilities to keep things\n        nice and tidy.\n      </p>\n    </Alert>\n  );\n}\n\nexport default AdditionalContentExample;\n',
        a =
          "import Alert from 'react-bootstrap/Alert';\n\nfunction BasicExample() {\n  return (\n    <>\n      {[\n        'primary',\n        'secondary',\n        'success',\n        'danger',\n        'warning',\n        'info',\n        'light',\n        'dark',\n      ].map((variant) => (\n        <Alert key={variant} variant={variant}>\n          This is a {variant} alert\u2014check it out!\n        </Alert>\n      ))}\n    </>\n  );\n}\n\nexport default BasicExample;\n",
        r =
          "import { useState } from 'react';\nimport Alert from 'react-bootstrap/Alert';\nimport Button from 'react-bootstrap/Button';\n\nfunction AlertDismissibleExample() {\n  const [show, setShow] = useState(true);\n\n  if (show) {\n    return (\n      <Alert variant=\"danger\" onClose={() => setShow(false)} dismissible>\n        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>\n        <p>\n          Change this and that and try again. Duis mollis, est non commodo\n          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n          Cras mattis consectetur purus sit amet fermentum.\n        </p>\n      </Alert>\n    );\n  }\n  return <Button onClick={() => setShow(true)}>Show Alert</Button>;\n}\n\nexport default AlertDismissibleExample;\n";
      var l = t(35578);
      const c =
          "import Alert from 'react-bootstrap/Alert';\n\nfunction LinksExample() {\n  return (\n    <>\n      {[\n        'primary',\n        'secondary',\n        'success',\n        'danger',\n        'warning',\n        'info',\n        'light',\n        'dark',\n      ].map((variant) => (\n        <Alert key={variant} variant={variant}>\n          This is a {variant} alert with{' '}\n          <Alert.Link href=\"#\">an example link</Alert.Link>. Give it a click if\n          you like.\n        </Alert>\n      ))}\n    </>\n  );\n}\n\nexport default LinksExample;\n",
        d = {
          title: "Alerts",
          description:
            "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
        },
        u = void 0,
        h = {
          id: "components/alerts",
          title: "Alerts",
          description:
            "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
          source: "@site/docs/components/alerts.mdx",
          sourceDirName: "components",
          slug: "/components/alerts",
          permalink: "/docs/components/alerts",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Alerts",
            description:
              "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
          },
          sidebar: "sidebar",
          previous: {
            title: "Accordion",
            permalink: "/docs/components/accordion",
          },
          next: { title: "Badges", permalink: "/docs/components/badge" },
        },
        m = {},
        p = [
          { value: "Examples", id: "examples", level: 2 },
          { value: "Links", id: "links", level: 3 },
          { value: "Additional content", id: "additional-content", level: 3 },
          { value: "Dismissing", id: "dismissing", level: 3 },
          { value: "API", id: "api", level: 2 },
          { value: "Alert", id: "alert", level: 3 },
          { value: "AlertHeading", id: "alertheading", level: 3 },
          { value: "AlertLink", id: "alertlink", level: 3 },
        ];
      function f(e) {
        const n = {
            admonition: "admonition",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, s.a)(),
            ...e.components,
          },
          { CodeBlock: t, PropsTable: d } = n;
        return (
          t || x("CodeBlock", !0),
          d || x("PropsTable", !0),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n.h2, { id: "examples", children: "Examples" }),
              "\n",
              (0, i.jsxs)(n.p, {
                children: [
                  "Alerts are available for any length of text, as well as an optional\ndismiss button. For proper styling, use one of the eight ",
                  (0, i.jsx)(n.code, { children: "variant" }),
                  "s.",
                ],
              }),
              "\n",
              (0, i.jsx)(t, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, i.jsx)(n.admonition, {
                title: "Conveying meaning to assistive technologies",
                type: "info",
                children: (0, i.jsxs)(n.p, {
                  children: [
                    "Using color to add meaning only provides a visual indication, which will not\nbe conveyed to users of assistive technologies \u2013 such as screen readers.\nEnsure that information denoted by the color is either obvious from the\ncontent itself (e.g. the visible text), or is included through alternative\nmeans, such as additional text hidden with the ",
                    (0, i.jsx)(n.code, { children: ".visually-hidden" }),
                    "\nclass.",
                  ],
                }),
              }),
              "\n",
              (0, i.jsx)(n.h3, { id: "links", children: "Links" }),
              "\n",
              (0, i.jsxs)(n.p, {
                children: [
                  "For links, use the ",
                  (0, i.jsx)(n.code, { children: "<Alert.Link>" }),
                  " component to provide matching\ncolored links within any alert.",
                ],
              }),
              "\n",
              (0, i.jsx)(t, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, i.jsx)(n.h3, {
                id: "additional-content",
                children: "Additional content",
              }),
              "\n",
              (0, i.jsx)(n.p, {
                children:
                  "Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.",
              }),
              "\n",
              (0, i.jsx)(t, { language: "jsx", live: !0, children: o }),
              "\n",
              (0, i.jsx)(n.h3, { id: "dismissing", children: "Dismissing" }),
              "\n",
              (0, i.jsxs)(n.p, {
                children: [
                  "Add the ",
                  (0, i.jsx)(n.code, { children: "dismissible" }),
                  " prop to add a functioning dismiss\nbutton to the Alert.",
                ],
              }),
              "\n",
              (0, i.jsx)(t, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, i.jsx)(n.p, {
                children:
                  "You can also control the visual state directly which is great if you\nwant to build more complicated alerts.",
              }),
              "\n",
              (0, i.jsx)(t, { language: "jsx", live: !0, children: l.Z }),
              "\n",
              (0, i.jsx)(n.h2, { id: "api", children: "API" }),
              "\n",
              (0, i.jsx)(n.h3, { id: "alert", children: "Alert" }),
              "\n",
              (0, i.jsx)(d, { name: "Alert" }),
              "\n",
              (0, i.jsx)(n.h3, {
                id: "alertheading",
                children: "AlertHeading",
              }),
              "\n",
              (0, i.jsx)(d, { name: "AlertHeading" }),
              "\n",
              (0, i.jsx)(n.h3, { id: "alertlink", children: "AlertLink" }),
              "\n",
              (0, i.jsx)(d, { name: "AlertLink" }),
            ],
          })
        );
      }
      function g(e = {}) {
        const { wrapper: n } = { ...(0, s.a)(), ...e.components };
        return n
          ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) })
          : f(e);
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
    35578: (e, n, t) => {
      t.d(n, { Z: () => i });
      const i =
        "import { useState } from 'react';\nimport Alert from 'react-bootstrap/Alert';\nimport Button from 'react-bootstrap/Button';\n\nfunction AlertDismissible() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <>\n      <Alert show={show} variant=\"success\">\n        <Alert.Heading>My Alert</Alert.Heading>\n        <p>\n          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget\n          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet\n          fermentum.\n        </p>\n        <hr />\n        <div className=\"d-flex justify-content-end\">\n          <Button onClick={() => setShow(false)} variant=\"outline-success\">\n            Close me\n          </Button>\n        </div>\n      </Alert>\n\n      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}\n    </>\n  );\n}\n\nexport default AlertDismissible;\n";
    },
    11151: (e, n, t) => {
      t.d(n, { Z: () => r, a: () => a });
      var i = t(67294);
      const s = {},
        o = i.createContext(s);
      function a(e) {
        const n = i.useContext(o);
        return i.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : a(e.components)),
          i.createElement(o.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
