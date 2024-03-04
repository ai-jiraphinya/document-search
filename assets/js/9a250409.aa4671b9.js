/*! For license information please see ok สนามเด็กเล่น */
"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [3504],
  {
    54965: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => p,
          default: () => u,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => m,
        });
      var o = t(85893),
        i = t(11151);
      const a =
          "import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Collapse from 'react-bootstrap/Collapse';\n\nfunction Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button\n        onClick={() => setOpen(!open)}\n        aria-controls=\"example-collapse-text\"\n        aria-expanded={open}\n      >\n        click\n      </Button>\n      <Collapse in={open}>\n        <div id=\"example-collapse-text\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n          labore wes anderson cred nesciunt sapiente ea proident.\n        </div>\n      </Collapse>\n    </>\n  );\n}\n\nexport default Example;\n",
        r =
          "import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\nimport Collapse from 'react-bootstrap/Collapse';\n\nfunction Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button\n        onClick={() => setOpen(!open)}\n        aria-controls=\"example-collapse-text\"\n        aria-expanded={open}\n      >\n        click\n      </Button>\n      <div style={{ minHeight: '150px' }}>\n        <Collapse in={open} dimension=\"width\">\n          <div id=\"example-collapse-text\">\n            <Card body style={{ width: '400px' }}>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Card>\n          </div>\n        </Collapse>\n      </div>\n    </>\n  );\n}\n\nexport default Example;\n",
        s =
          "import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Fade from 'react-bootstrap/Fade';\n\nfunction Example() {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button\n        onClick={() => setOpen(!open)}\n        aria-controls=\"example-fade-text\"\n        aria-expanded={open}\n      >\n        Toggle text\n      </Button>\n      <Fade in={open}>\n        <div id=\"example-fade-text\">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n          labore wes anderson cred nesciunt sapiente ea proident.\n        </div>\n      </Fade>\n    </>\n  );\n}\n\nexport default Example;\n",
        l = { title: "Transitions", sidebar_position: 1 },
        p = void 0,
        d = {
          id: "utilities/transitions",
          title: "Transitions",
          description:
            "Bootstrap includes a few general use CSS transitions that can be applied",
          source: "@site/docs/utilities/transitions.mdx",
          sourceDirName: "utilities",
          slug: "/utilities/transitions",
          permalink: "/docs/utilities/transitions",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { title: "Transitions", sidebar_position: 1 },
          sidebar: "sidebar",
          previous: { title: "Toasts", permalink: "/docs/components/toasts" },
          next: { title: "Ratios", permalink: "/docs/utilities/ratio" },
        },
        c = {},
        m = [
          { value: "Collapse", id: "collapse", level: 2 },
          { value: "Basic Example", id: "basic-example", level: 3 },
          { value: "Horizontal", id: "horizontal", level: 3 },
          { value: "Fade", id: "fade", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Collapse", id: "collapse-1", level: 3 },
          { value: "Fade", id: "fade-1", level: 3 },
        ];
      function h(e) {
        const n = {
            a: "a",
            admonition: "admonition",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, i.a)(),
            ...e.components,
          },
          { CodeBlock: t, PropsTable: l } = n;
        return (
          t || x("CodeBlock", !0),
          l || x("PropsTable", !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(n.p, {
                children: [
                  "Bootstrap includes a few general use CSS transitions that can be applied\nto a number of components. React Bootstrap, bundles them up into a few composable\n",
                  (0, o.jsx)(n.code, { children: "<Transition>" }),
                  " components from ",
                  (0, o.jsx)(n.a, {
                    href: "https://github.com/reactjs/react-transition-group",
                    children: "react-transition-group",
                  }),
                  ",\na commonly used animation wrapper for React.",
                ],
              }),
              "\n",
              (0, o.jsxs)(n.p, {
                children: [
                  "Encapsulating animations into components has the added benefit of making them more broadly useful,\nas well as portable for using in other libraries. All React-bootstrap components that can be animated,\nsupport pluggable ",
                  (0, o.jsx)(n.code, { children: "<Transition>" }),
                  " components.",
                ],
              }),
              "\n",
              (0, o.jsx)(n.h2, { id: "collapse", children: "Collapse" }),
              "\n",
              (0, o.jsx)(n.h3, {
                id: "basic-example",
                children: "Basic Example",
              }),
              "\n",
              (0, o.jsx)(n.p, {
                children:
                  "Add a collapse toggle animation to an element or component.",
              }),
              "\n",
              (0, o.jsx)(n.admonition, {
                title: "Smooth animations",
                type: "caution",
                children: (0, o.jsxs)(n.p, {
                  children: [
                    "If you're noticing choppy animations, and the component that's being collapsed\nhas non-zero margin or padding, try wrapping the contents of your\n",
                    (0, o.jsx)(n.code, { children: "<Collapse>" }),
                    " inside a node with no margin or padding, like the ",
                    (0, o.jsx)(n.code, { children: "<div>" }),
                    " in the example below.\nThis will allow the height to be computed properly, so the animation can proceed smoothly.",
                  ],
                }),
              }),
              "\n",
              (0, o.jsx)(t, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, o.jsx)(n.h3, { id: "horizontal", children: "Horizontal" }),
              "\n",
              (0, o.jsx)(n.p, {
                children:
                  "Add a collapse toggle animation to an element or component to transition the width instead of height.",
              }),
              "\n",
              (0, o.jsx)(n.admonition, {
                title: "Smooth animations",
                type: "caution",
                children: (0, o.jsxs)(n.p, {
                  children: [
                    "If you're noticing choppy animations, and the component that's being collapsed\nhas non-zero margin or padding, try wrapping the contents of your\n",
                    (0, o.jsx)(n.code, { children: "<Collapse>" }),
                    " inside a node with no margin or padding, like the ",
                    (0, o.jsx)(n.code, { children: "<div>" }),
                    " in the example below.\nThis will allow the height to be computed properly, so the animation can proceed smoothly.",
                  ],
                }),
              }),
              "\n",
              (0, o.jsx)(t, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, o.jsx)(n.h2, { id: "fade", children: "Fade" }),
              "\n",
              (0, o.jsx)(n.p, {
                children:
                  "Add a fade animation to a child element or component.",
              }),
              "\n",
              (0, o.jsx)(t, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, o.jsx)(n.h2, { id: "api", children: "API" }),
              "\n",
              (0, o.jsx)(n.h3, { id: "collapse-1", children: "Collapse" }),
              "\n",
              (0, o.jsx)(l, { name: "Collapse" }),
              "\n",
              (0, o.jsx)(n.h3, { id: "fade-1", children: "Fade" }),
              "\n",
              (0, o.jsx)(l, { name: "Fade" }),
            ],
          })
        );
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, i.a)(), ...e.components };
        return n
          ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) })
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
      t.d(n, { Z: () => s, a: () => r });
      var o = t(67294);
      const i = {},
        a = o.createContext(i);
      function r(e) {
        const n = o.useContext(a);
        return o.useMemo(
          function () {
            return "function" == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          o.createElement(a.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
