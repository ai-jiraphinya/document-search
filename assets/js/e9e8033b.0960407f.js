"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [9822],
  {
    54485: (o, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => p,
        });
      var n = e(85893),
        r = e(11151);
      const d =
          'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction Example() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <DropdownButton\n        id="dropdown-button-dark-example2"\n        variant="secondary"\n        title="Light dropdown"\n        className="mt-2"\n        data-bs-theme="light"\n      >\n        <Dropdown.Item href="#/action-1" active>\n          Action\n        </Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n      </DropdownButton>\n\n      <DropdownButton\n        id="dropdown-button-dark-example2"\n        variant="secondary"\n        title="Dark dropdown"\n        className="mt-2"\n        data-bs-theme="dark"\n      >\n        <Dropdown.Item href="#/action-1" active>\n          Action\n        </Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n      </DropdownButton>\n    </Stack>\n  );\n}\n\nexport default ColorMode;\n',
        i = { title: "Color modes", sidebar_position: 4 },
        s = "Color modes",
        a = {
          id: "getting-started/color-modes",
          title: "Color modes",
          description:
            "Bootstrap v5.3 now supports color modes such as dark mode. Color modes can be",
          source: "@site/docs/getting-started/color-modes.mdx",
          sourceDirName: "getting-started",
          slug: "/getting-started/color-modes",
          permalink: "/docs/getting-started/color-modes",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 4,
          frontMatter: { title: "Color modes", sidebar_position: 4 },
          sidebar: "sidebar",
          previous: {
            title: "Theming",
            permalink: "/docs/getting-started/theming",
          },
          next: {
            title: "Getting help",
            permalink: "/docs/getting-started/support",
          },
        },
        c = {},
        p = [
          { value: "Example", id: "example", level: 2 },
          { value: "Customizing", id: "customizing", level: 2 },
        ];
      function l(o) {
        const t = {
            code: "code",
            h1: "h1",
            h2: "h2",
            p: "p",
            ...(0, r.a)(),
            ...o.components,
          },
          { CodeBlock: e, DocLink: i } = t;
        return (
          e || h("CodeBlock", !0),
          i || h("DocLink", !0),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(t.h1, { id: "color-modes", children: "Color modes" }),
              "\n",
              (0, n.jsxs)(t.p, {
                children: [
                  "Bootstrap v5.3 now supports color modes such as dark mode. Color modes can be\ntoggled globally on the ",
                  (0, n.jsx)(t.code, { children: "<html>" }),
                  " element, or on specific components and elements,\nthanks to the ",
                  (0, n.jsx)(t.code, { children: "data-bs-theme" }),
                  " attribute.",
                ],
              }),
              "\n",
              (0, n.jsx)(t.h2, { id: "example", children: "Example" }),
              "\n",
              (0, n.jsx)(e, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, n.jsx)(t.h2, { id: "customizing", children: "Customizing" }),
              "\n",
              (0, n.jsxs)(t.p, {
                children: [
                  "For more information on how colors modes work or how to customize colors, check out\nthe ",
                  (0, n.jsx)(i, {
                    path: "/customize/color-modes",
                    children: "Bootstrap color mode docs",
                  }),
                  ".",
                ],
              }),
            ],
          })
        );
      }
      function m(o = {}) {
        const { wrapper: t } = { ...(0, r.a)(), ...o.components };
        return t
          ? (0, n.jsx)(t, { ...o, children: (0, n.jsx)(l, { ...o }) })
          : l(o);
      }
      function h(o, t) {
        throw new Error(
          "Expected " +
            (t ? "component" : "object") +
            " `" +
            o +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (o, t, e) => {
      e.d(t, { Z: () => s, a: () => i });
      var n = e(67294);
      const r = {},
        d = n.createContext(r);
      function i(o) {
        const t = n.useContext(d);
        return n.useMemo(
          function () {
            return "function" == typeof o ? o(t) : { ...t, ...o };
          },
          [t, o]
        );
      }
      function s(o) {
        let t;
        return (
          (t = o.disableParentContext
            ? "function" == typeof o.components
              ? o.components(r)
              : o.components || r
            : i(o.components)),
          n.createElement(d.Provider, { value: t }, o.children)
        );
      }
    },
  },
]);
