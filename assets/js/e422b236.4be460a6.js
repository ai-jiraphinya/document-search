"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [7009],
  {
    17467: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => d,
          metadata: () => c,
          toc: () => u,
        });
      var o = i(85893),
        n = i(11151);
      const a =
          "import Ratio from 'react-bootstrap/Ratio';\n\nfunction CustomExample() {\n  return (\n    <>\n      <Ratio aspectRatio={1 / 2}>\n        <div>2x1</div>\n      </Ratio>\n      <Ratio aspectRatio={50}>\n        <div>2x1</div>\n      </Ratio>\n    </>\n  );\n}\n\nexport default CustomExample;\n",
        s =
          "import Ratio from 'react-bootstrap/Ratio';\n\nfunction DefaultExample() {\n  return (\n    <>\n      {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (\n        <Ratio key={ratio} aspectRatio={ratio}>\n          <div>{ratio}</div>\n        </Ratio>\n      ))}\n    </>\n  );\n}\n\nexport default DefaultExample;\n",
        r =
          'import Ratio from \'react-bootstrap/Ratio\';\n\nfunction BasicExample() {\n  return (\n    <div style={{ width: 660, height: \'auto\' }}>\n      <Ratio aspectRatio="16x9">\n        <embed type="image/svg+xml" src="/img/TheresaKnott_castle.svg" />\n      </Ratio>\n    </div>\n  );\n}\n\nexport default BasicExample;\n',
        d = {
          title: "Ratios",
          description:
            "Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",
          sidebar_position: 2,
        },
        l = void 0,
        c = {
          id: "utilities/ratio",
          title: "Ratios",
          description:
            "Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",
          source: "@site/docs/utilities/ratio.mdx",
          sourceDirName: "utilities",
          slug: "/utilities/ratio",
          permalink: "/docs/utilities/ratio",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: {
            title: "Ratios",
            description:
              "Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.",
            sidebar_position: 2,
          },
          sidebar: "sidebar",
          previous: {
            title: "Transitions",
            permalink: "/docs/utilities/transitions",
          },
          next: {
            title: "@restart/ui",
            permalink: "/docs/utilities/restart-ui",
          },
        },
        p = {},
        u = [
          { value: "About", id: "about", level: 2 },
          { value: "Example", id: "example", level: 2 },
          { value: "Aspect ratios", id: "aspect-ratios", level: 2 },
          { value: "Custom", id: "custom", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Ratio", id: "ratio", level: 3 },
        ];
      function h(e) {
        const t = {
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, n.a)(),
            ...e.components,
          },
          { CodeBlock: i, PropsTable: d } = t;
        return (
          i || x("CodeBlock", !0),
          d || x("PropsTable", !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(t.h2, { id: "about", children: "About" }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Use the ratio helper to manage the aspect ratios of external content like\n",
                  (0, o.jsx)(t.code, { children: "<iframe>" }),
                  "s, ",
                  (0, o.jsx)(t.code, { children: "<embed>" }),
                  "s, ",
                  (0, o.jsx)(t.code, { children: "<video>" }),
                  "s, and ",
                  (0, o.jsx)(t.code, { children: "<object>" }),
                  "s. These helpers also can be used on\nany standard HTML child element (e.g., a ",
                  (0, o.jsx)(t.code, { children: "<div>" }),
                  " or ",
                  (0, o.jsx)(t.code, { children: "<img>" }),
                  "). Styles are applied from\nthe parent .ratio class directly to the child.",
                ],
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "You don't need to include ",
                  (0, o.jsx)(t.code, { children: 'frameborder="0"' }),
                  " in your ",
                  (0, o.jsx)(t.code, { children: "iframe" }),
                  "s.",
                ],
              }),
              "\n",
              (0, o.jsx)(t.h2, { id: "example", children: "Example" }),
              "\n",
              (0, o.jsx)(i, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, o.jsx)(t.h2, {
                id: "aspect-ratios",
                children: "Aspect ratios",
              }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Aspect ratios can be customized using ",
                  (0, o.jsx)(t.code, { children: "aspectRatio" }),
                  ". By default the following ",
                  (0, o.jsx)(t.code, { children: "aspectRatio" }),
                  "\nvalues are provided:",
                ],
              }),
              "\n",
              (0, o.jsx)(i, {
                language: "jsx",
                live: !0,
                previewClassName: "ratio-example",
                children: s,
              }),
              "\n",
              (0, o.jsx)(t.h2, { id: "custom", children: "Custom" }),
              "\n",
              (0, o.jsxs)(t.p, {
                children: [
                  "Create custom aspect ratios by passing a number to ",
                  (0, o.jsx)(t.code, { children: "aspectRatio" }),
                  " instead of using the above\npre-defined values. You can use either a fraction or percentage to define the custom ratio.",
                ],
              }),
              "\n",
              (0, o.jsx)(i, {
                language: "jsx",
                live: !0,
                previewClassName: "ratio-example",
                children: a,
              }),
              "\n",
              (0, o.jsx)(t.h2, { id: "api", children: "API" }),
              "\n",
              (0, o.jsx)(t.h3, { id: "ratio", children: "Ratio" }),
              "\n",
              (0, o.jsx)(d, { name: "Ratio" }),
            ],
          })
        );
      }
      function m(e = {}) {
        const { wrapper: t } = { ...(0, n.a)(), ...e.components };
        return t
          ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(h, { ...e }) })
          : h(e);
      }
      function x(e, t) {
        throw new Error(
          "Expected " +
            (t ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, t, i) => {
      i.d(t, { Z: () => r, a: () => s });
      var o = i(67294);
      const n = {},
        a = o.createContext(n);
      function s(e) {
        const t = o.useContext(a);
        return o.useMemo(
          function () {
            return "function" == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          o.createElement(a.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
