"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [1863],
  {
    56745: (e, r, n) => {
      n.r(r),
        n.d(r, {
          assets: () => m,
          contentTitle: () => g,
          default: () => v,
          frontMatter: () => u,
          metadata: () => x,
          toc: () => h,
        });
      var s = n(85893),
        t = n(11151);
      const a =
          "import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction AnimatedExample() {\n  return <ProgressBar animated now={45} />;\n}\n\nexport default AnimatedExample;\n",
        o =
          "import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction BasicExample() {\n  return <ProgressBar now={60} />;\n}\n\nexport default BasicExample;\n",
        i =
          'import ProgressBar from \'react-bootstrap/ProgressBar\';\n\nfunction ContextualExample() {\n  return (\n    <div>\n      <ProgressBar variant="success" now={40} />\n      <ProgressBar variant="info" now={20} />\n      <ProgressBar variant="warning" now={60} />\n      <ProgressBar variant="danger" now={80} />\n    </div>\n  );\n}\n\nexport default ContextualExample;\n',
        l =
          "import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction ScreenreaderLabelExample() {\n  const now = 60;\n  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;\n}\n\nexport default ScreenreaderLabelExample;\n",
        d =
          'import ProgressBar from \'react-bootstrap/ProgressBar\';\n\nfunction StackedExample() {\n  return (\n    <ProgressBar>\n      <ProgressBar striped variant="success" now={35} key={1} />\n      <ProgressBar variant="warning" now={20} key={2} />\n      <ProgressBar striped variant="danger" now={10} key={3} />\n    </ProgressBar>\n  );\n}\n\nexport default StackedExample;\n',
        c =
          'import ProgressBar from \'react-bootstrap/ProgressBar\';\n\nfunction StripedExample() {\n  return (\n    <div>\n      <ProgressBar striped variant="success" now={40} />\n      <ProgressBar striped variant="info" now={20} />\n      <ProgressBar striped variant="warning" now={60} />\n      <ProgressBar striped variant="danger" now={80} />\n    </div>\n  );\n}\n\nexport default StripedExample;\n',
        p =
          "import ProgressBar from 'react-bootstrap/ProgressBar';\n\nfunction WithLabelExample() {\n  const now = 60;\n  return <ProgressBar now={now} label={`${now}%`} />;\n}\n\nexport default WithLabelExample;\n",
        u = {
          title: "Progress bars",
          description:
            "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.",
        },
        g = void 0,
        x = {
          id: "components/progress",
          title: "Progress bars",
          description:
            "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.",
          source: "@site/docs/components/progress.mdx",
          sourceDirName: "components",
          slug: "/components/progress",
          permalink: "/docs/components/progress",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Progress bars",
            description:
              "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.",
          },
          sidebar: "sidebar",
          previous: {
            title: "Placeholders",
            permalink: "/docs/components/placeholder",
          },
          next: { title: "Spinners", permalink: "/docs/components/spinners" },
        },
        m = {},
        h = [
          { value: "Example", id: "example", level: 2 },
          { value: "With label", id: "with-label", level: 2 },
          {
            value: "Screenreader only label",
            id: "screenreader-only-label",
            level: 2,
          },
          {
            value: "Contextual alternatives",
            id: "contextual-alternatives",
            level: 2,
          },
          { value: "Striped", id: "striped", level: 2 },
          { value: "Animated", id: "animated", level: 2 },
          { value: "Stacked", id: "stacked", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "ProgressBar", id: "progressbar", level: 3 },
        ];
      function f(e) {
        const r = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, t.a)(),
            ...e.components,
          },
          { CodeBlock: n, PropsTable: u } = r;
        return (
          n || b("CodeBlock", !0),
          u || b("PropsTable", !0),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r.h2, { id: "example", children: "Example" }),
              "\n",
              (0, s.jsx)(r.p, { children: "Default progress bar." }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: o }),
              "\n",
              (0, s.jsx)(r.h2, { id: "with-label", children: "With label" }),
              "\n",
              (0, s.jsxs)(r.p, {
                children: [
                  "Add a ",
                  (0, s.jsx)(r.code, { children: "label" }),
                  " prop to show a visible percentage. For low\npercentages, consider adding a min-width to ensure the label's text is\nfully visible.",
                ],
              }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, s.jsx)(r.h2, {
                id: "screenreader-only-label",
                children: "Screenreader only label",
              }),
              "\n",
              (0, s.jsxs)(r.p, {
                children: [
                  "Add a ",
                  (0, s.jsx)(r.code, { children: "visuallyHidden" }),
                  " prop to hide the label visually.",
                ],
              }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, s.jsx)(r.h2, {
                id: "contextual-alternatives",
                children: "Contextual alternatives",
              }),
              "\n",
              (0, s.jsx)(r.p, {
                children:
                  "Progress bars use some of the same button and alert classes for\nconsistent styles.",
              }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, s.jsx)(r.h2, { id: "striped", children: "Striped" }),
              "\n",
              (0, s.jsx)(r.p, {
                children: "Uses a gradient to create a striped effect.",
              }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, s.jsx)(r.h2, { id: "animated", children: "Animated" }),
              "\n",
              (0, s.jsxs)(r.p, {
                children: [
                  "Add ",
                  (0, s.jsx)(r.code, { children: "animated" }),
                  " prop to animate the stripes right to left.",
                ],
              }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: a }),
              "\n",
              (0, s.jsx)(r.h2, { id: "stacked", children: "Stacked" }),
              "\n",
              (0, s.jsxs)(r.p, {
                children: [
                  "Nest ",
                  (0, s.jsx)(r.code, { children: "<ProgressBar />" }),
                  "s to stack them.",
                ],
              }),
              "\n",
              (0, s.jsx)(n, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, s.jsx)(r.h2, { id: "api", children: "API" }),
              "\n",
              (0, s.jsx)(r.h3, { id: "progressbar", children: "ProgressBar" }),
              "\n",
              (0, s.jsx)(u, { name: "ProgressBar" }),
            ],
          })
        );
      }
      function v(e = {}) {
        const { wrapper: r } = { ...(0, t.a)(), ...e.components };
        return r
          ? (0, s.jsx)(r, { ...e, children: (0, s.jsx)(f, { ...e }) })
          : f(e);
      }
      function b(e, r) {
        throw new Error(
          "Expected " +
            (r ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, r, n) => {
      n.d(r, { Z: () => i, a: () => o });
      var s = n(67294);
      const t = {},
        a = s.createContext(t);
      function o(e) {
        const r = s.useContext(a);
        return s.useMemo(
          function () {
            return "function" == typeof e ? e(r) : { ...r, ...e };
          },
          [r, e]
        );
      }
      function i(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          s.createElement(a.Provider, { value: r }, e.children)
        );
      }
    },
  },
]);
/*! jiraphinya playground information please see ok */
