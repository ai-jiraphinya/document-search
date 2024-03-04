"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [638],
  {
    64921: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      var o = n(85893),
        s = n(11151),
        a = n(35578);
      const r = { title: "Why React-Bootstrap?", sidebar_position: 2 },
        i = void 0,
        l = {
          id: "getting-started/why-react-bootstrap",
          title: "Why React-Bootstrap?",
          description: "React-Bootstrap is a complete re-implementation of the",
          source: "@site/docs/getting-started/why-react-bootstrap.mdx",
          sourceDirName: "getting-started",
          slug: "/getting-started/why-react-bootstrap",
          permalink: "/docs/getting-started/why-react-bootstrap",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { title: "Why React-Bootstrap?", sidebar_position: 2 },
          sidebar: "sidebar",
          previous: {
            title: "Introduction",
            permalink: "/docs/getting-started/introduction",
          },
          next: {
            title: "Theming",
            permalink: "/docs/getting-started/theming",
          },
        },
        c = {},
        d = [
          {
            value: "A Simple React Component",
            id: "a-simple-react-component",
            level: 2,
          },
          { value: "Bootstrap", id: "bootstrap", level: 3 },
          { value: "React-Bootstrap", id: "react-bootstrap", level: 3 },
          {
            value: "Bootstrap with state",
            id: "bootstrap-with-state",
            level: 2,
          },
          { value: "React-bootstrap", id: "react-bootstrap-1", level: 3 },
          { value: "Bootstrap", id: "bootstrap-1", level: 3 },
        ];
      function p(t) {
        const e = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            pre: "pre",
            strong: "strong",
            ...(0, s.a)(),
            ...t.components,
          },
          { CodeBlock: n } = e;
        return (
          n ||
            (function (t, e) {
              throw new Error(
                "Expected " +
                  (e ? "component" : "object") +
                  " `" +
                  t +
                  "` to be defined: you likely forgot to import, pass, or provide it."
              );
            })("CodeBlock", !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(e.p, {
                children: [
                  "React-Bootstrap is a complete re-implementation of the\nBootstrap components using React. It has\xa0",
                  (0, o.jsxs)(e.strong, {
                    children: [
                      "no dependency\non either\xa0",
                      (0, o.jsx)(e.code, { children: "bootstrap.js" }),
                      "\xa0or jQuery.",
                    ],
                  }),
                  " If you have React\nsetup and React-Bootstrap installed, you have everything\nyou need.",
                ],
              }),
              "\n",
              (0, o.jsx)(e.p, {
                children:
                  "Methods and events using jQuery is done imperatively\nby directly manipulating the DOM. In contrast, React\nuses updates to the state to update the virtual DOM.\nIn this way, React-Bootstrap provides a more reliable\nsolution by incorporating Bootstrap functionality into\nReact's virtual DOM. Below are a few examples of how\nReact-Bootstrap components differ from Bootstrap.",
              }),
              "\n",
              (0, o.jsx)(e.h2, {
                id: "a-simple-react-component",
                children: "A Simple React Component",
              }),
              "\n",
              (0, o.jsx)(e.p, {
                children:
                  "The CSS and details of Bootstrap components are rather\nopinionated and lengthy. React-Bootstrap simplifies\nthis by condensing the original Bootstrap into React-styled\ncomponents.",
              }),
              "\n",
              (0, o.jsx)(e.h3, { id: "bootstrap", children: "Bootstrap" }),
              "\n",
              (0, o.jsx)(e.pre, {
                children: (0, o.jsx)(e.code, {
                  className: "language-jsx",
                  children:
                    'import * as React from \'react\';\n\nfunction Example() {\n  return (\n    <div class="alert alert-danger alert-dismissible fade show" role="alert">\n      <strong>Oh snap! You got an error!</strong>\n      <p>Change this and that and try again.</p>\n      <button\n        type="button"\n        class="close"\n        data-dismiss="alert"\n        aria-label="Close"\n      >\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n  );\n}\n',
                }),
              }),
              "\n",
              (0, o.jsx)(e.h3, {
                id: "react-bootstrap",
                children: "React-Bootstrap",
              }),
              "\n",
              (0, o.jsx)(e.pre, {
                children: (0, o.jsx)(e.code, {
                  className: "language-jsx",
                  children:
                    "import * as React from 'react';\nimport Alert from 'react-bootstrap/Alert';\n\nfunction Example() {\n  return (\n    <Alert dismissible variant=\"danger\">\n      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>\n      <p>Change this and that and try again.</p>\n    </Alert>\n  );\n}\n",
                }),
              }),
              "\n",
              (0, o.jsx)(e.h2, {
                id: "bootstrap-with-state",
                children: "Bootstrap with state",
              }),
              "\n",
              (0, o.jsx)(e.p, {
                children:
                  "Since React-Bootstrap is built with React Javascript, state\ncan be passed within React-Bootstrap components as a prop.\nIt also makes it easier to manage the state as updates are\nmade using React\u2019s state instead of directly manipulating\nthe state of the DOM. This also gives a lot of flexibility\nwhen creating more complex components.",
              }),
              "\n",
              (0, o.jsx)(e.h3, {
                id: "react-bootstrap-1",
                children: "React-bootstrap",
              }),
              "\n",
              (0, o.jsx)(n, { language: "jsx", live: !0, children: a.Z }),
              "\n",
              (0, o.jsx)(e.h3, { id: "bootstrap-1", children: "Bootstrap" }),
              "\n",
              (0, o.jsx)(e.pre, {
                children: (0, o.jsx)(e.code, {
                  className: "language-html",
                  children:
                    '<div class="alert alert-success alert-dismissible fade show firstCollapsible" role="alert">\n  <strong>How\'s it going?!</strong>\n  <p>\n    Duis mollis, est non commodo luctus, nisi erat porttitor ligula,\n    eget lacinia odio sem nec elit. Cras mattis consectetur purus sit\n    amet fermentum.\n  </p>\n  <hr/>\n  <div class="d-flex justify-content-end">\n\t<button type="button" class="btn btn-outline-success">Close me ya\'ll!</button>\n  </div>\n</div>\n<div class="d-flex justify-content-start alert fade show">\n\t<button type="button" class="btn btn-primary d-none secondCollapsible">Show Alert</button>\n</div>\n',
                }),
              }),
              "\n",
              (0, o.jsx)(e.pre, {
                children: (0, o.jsx)(e.code, {
                  className: "language-js",
                  children:
                    "$('.btn-outline-success').on('click', function(e) {\n    $('.firstCollapsible').addClass('d-none');\n    $('.secondCollapsible').removeClass('d-none');\n})\n\n$('.btn-primary').on('click', function(e) {\n    $('.firstCollapsible').removeClass('d-none');\n    $('.secondCollapsible').addClass('d-none');\n})\n",
                }),
              }),
            ],
          })
        );
      }
      function u(t = {}) {
        const { wrapper: e } = { ...(0, s.a)(), ...t.components };
        return e
          ? (0, o.jsx)(e, { ...t, children: (0, o.jsx)(p, { ...t }) })
          : p(t);
      }
    },
    35578: (t, e, n) => {
      n.d(e, { Z: () => o });
      const o =
        "import { useState } from 'react';\nimport Alert from 'react-bootstrap/Alert';\nimport Button from 'react-bootstrap/Button';\n\nfunction AlertDismissible() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <>\n      <Alert show={show} variant=\"success\">\n        <Alert.Heading>My Alert</Alert.Heading>\n        <p>\n          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget\n          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet\n          fermentum.\n        </p>\n        <hr />\n        <div className=\"d-flex justify-content-end\">\n          <Button onClick={() => setShow(false)} variant=\"outline-success\">\n            Close me\n          </Button>\n        </div>\n      </Alert>\n\n      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}\n    </>\n  );\n}\n\nexport default AlertDismissible;\n";
    },
    11151: (t, e, n) => {
      n.d(e, { Z: () => i, a: () => r });
      var o = n(67294);
      const s = {},
        a = o.createContext(s);
      function r(t) {
        const e = o.useContext(a);
        return o.useMemo(
          function () {
            return "function" == typeof t ? t(e) : { ...e, ...t };
          },
          [e, t]
        );
      }
      function i(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? "function" == typeof t.components
              ? t.components(s)
              : t.components || s
            : r(t.components)),
          o.createElement(a.Provider, { value: e }, t.children)
        );
      }
    },
  },
]);
