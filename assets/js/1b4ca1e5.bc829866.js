"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [6263],
  {
    3438: (o, n, e) => {
      e.r(n),
        e.d(n, {
          assets: () => j,
          contentTitle: () => b,
          default: () => y,
          frontMatter: () => w,
          metadata: () => g,
          toc: () => R,
        });
      var t = e(85893),
        r = e(11151);
      const l =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction ContainerExample() {\n  return (\n    <Container>\n      <Row>\n        <Col>1 of 1</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default ContainerExample;\n",
        i =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction ContainerFluidExample() {\n  return (\n    <Container fluid>\n      <Row>\n        <Col>1 of 1</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default ContainerFluidExample;\n",
        a =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction ContainerFluidBreakpointExample() {\n  return (\n    <Container fluid=\"md\">\n      <Row>\n        <Col>1 of 1</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default ContainerFluidBreakpointExample;\n",
        s =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction AutoLayoutExample() {\n  return (\n    <Container>\n      <Row>\n        <Col>1 of 2</Col>\n        <Col>2 of 2</Col>\n      </Row>\n      <Row>\n        <Col>1 of 3</Col>\n        <Col>2 of 3</Col>\n        <Col>3 of 3</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default AutoLayoutExample;\n",
        d =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction RowColLayoutExample() {\n  return (\n    <Container>\n      <Row xs={2} md={4} lg={6}>\n        <Col>1 of 2</Col>\n        <Col>2 of 2</Col>\n      </Row>\n      <Row xs={1} md={2}>\n        <Col>1 of 3</Col>\n        <Col>2 of 3</Col>\n        <Col>3 of 3</Col>\n      </Row>\n      <Row xs=\"auto\">\n        <Col>1 of 3</Col>\n        <Col>2 of 3</Col>\n        <Col>3 of 3</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default RowColLayoutExample;\n",
        c =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction RowColLayoutColWidthBreakpointExample() {\n  return (\n    <Container>\n      <Row md={4}>\n        <Col>1 of 3</Col>\n        <Col xs={6}>2 of 3</Col>\n        <Col>3 of 3</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default RowColLayoutColWidthBreakpointExample;\n",
        p =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction AutoLayoutSizingExample() {\n  return (\n    <Container>\n      <Row>\n        <Col>1 of 3</Col>\n        <Col xs={6}>2 of 3 (wider)</Col>\n        <Col>3 of 3</Col>\n      </Row>\n      <Row>\n        <Col>1 of 3</Col>\n        <Col xs={5}>2 of 3 (wider)</Col>\n        <Col>3 of 3</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default AutoLayoutSizingExample;\n",
        m =
          'import Container from \'react-bootstrap/Container\';\nimport Row from \'react-bootstrap/Row\';\nimport Col from \'react-bootstrap/Col\';\n\nfunction AutoLayoutVariableExample() {\n  return (\n    <Container>\n      <Row className="justify-content-md-center">\n        <Col xs lg="2">\n          1 of 3\n        </Col>\n        <Col md="auto">Variable width content</Col>\n        <Col xs lg="2">\n          3 of 3\n        </Col>\n      </Row>\n      <Row>\n        <Col>1 of 3</Col>\n        <Col md="auto">Variable width content</Col>\n        <Col xs lg="2">\n          3 of 3\n        </Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default AutoLayoutVariableExample;\n',
        u =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction OffsettingExample() {\n  return (\n    <Container>\n      <Row>\n        <Col md={4}>md=4</Col>\n        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>\n      </Row>\n      <Row>\n        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n      </Row>\n      <Row>\n        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default OffsettingExample;\n",
        C =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction OrderingExample() {\n  return (\n    <Container>\n      <Row>\n        <Col xs>First, but unordered</Col>\n        <Col xs={{ order: 12 }}>Second, but last</Col>\n        <Col xs={{ order: 1 }}>Third, but second</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default OrderingExample;\n",
        x =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction OrderingFirstLastExample() {\n  return (\n    <Container>\n      <Row>\n        <Col xs={{ order: 'last' }}>First, but last</Col>\n        <Col xs>Second, but unordered</Col>\n        <Col xs={{ order: 'first' }}>Third, but first</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default OrderingFirstLastExample;\n",
        f =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction ResponsiveExample() {\n  return (\n    <Container>\n      {/* Stack the columns on mobile by making one full-width and the other half-width */}\n      <Row>\n        <Col xs={12} md={8}>\n          xs=12 md=8\n        </Col>\n        <Col xs={6} md={4}>\n          xs=6 md=4\n        </Col>\n      </Row>\n\n      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}\n      <Row>\n        <Col xs={6} md={4}>\n          xs=6 md=4\n        </Col>\n        <Col xs={6} md={4}>\n          xs=6 md=4\n        </Col>\n        <Col xs={6} md={4}>\n          xs=6 md=4\n        </Col>\n      </Row>\n\n      {/* Columns are always 50% wide, on mobile and desktop */}\n      <Row>\n        <Col xs={6}>xs=6</Col>\n        <Col xs={6}>xs=6</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default ResponsiveExample;\n",
        h =
          "import Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\n\nfunction ResponsiveAutoExample() {\n  return (\n    <Container>\n      <Row>\n        <Col sm={8}>sm=8</Col>\n        <Col sm={4}>sm=4</Col>\n      </Row>\n      <Row>\n        <Col sm>sm=true</Col>\n        <Col sm>sm=true</Col>\n        <Col sm>sm=true</Col>\n      </Row>\n    </Container>\n  );\n}\n\nexport default ResponsiveAutoExample;\n",
        w = { title: "Grid system", sidebar_label: "Grid" },
        b = void 0,
        g = {
          id: "layout/grid",
          title: "Grid system",
          description:
            "Bootstrap\u2019s grid system uses a series of containers, rows, and columns",
          source: "@site/docs/layout/grid.mdx",
          sourceDirName: "layout",
          slug: "/layout/grid",
          permalink: "/docs/layout/grid",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: { title: "Grid system", sidebar_label: "Grid" },
          sidebar: "sidebar",
          previous: {
            title: "Breakpoints",
            permalink: "/docs/layout/breakpoints",
          },
          next: { title: "Stacks", permalink: "/docs/layout/stack" },
        },
        j = {},
        R = [
          { value: "Container", id: "container", level: 2 },
          { value: "Fluid Container", id: "fluid-container", level: 3 },
          { value: "Auto-layout columns", id: "auto-layout-columns", level: 2 },
          {
            value: "Setting one column width",
            id: "setting-one-column-width",
            level: 3,
          },
          {
            value: "Variable width content",
            id: "variable-width-content",
            level: 3,
          },
          { value: "Responsive grids", id: "responsive-grids", level: 2 },
          {
            value: "Setting column widths in Row",
            id: "setting-column-widths-in-row",
            level: 3,
          },
          { value: "API", id: "api", level: 2 },
          { value: "Container", id: "container-1", level: 3 },
          { value: "Row", id: "row", level: 3 },
          { value: "Col", id: "col", level: 3 },
        ];
      function v(o) {
        const n = {
            a: "a",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            strong: "strong",
            ...(0, r.a)(),
            ...o.components,
          },
          { CodeBlock: e, PropsTable: w } = n;
        return (
          e || k("CodeBlock", !0),
          w || k("PropsTable", !0),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(n.p, {
                children: [
                  "Bootstrap\u2019s grid system uses a series of containers, rows, and columns\nto layout and align content. It\u2019s built with\n",
                  (0, t.jsx)(n.a, {
                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes",
                    children: "flexbox",
                  }),
                  "\nand is fully responsive. Below is an example and an in-depth look at how the\ngrid comes together.",
                ],
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  (0, t.jsx)(n.strong, {
                    children: "New to or unfamiliar with flexbox?",
                  }),
                  " ",
                  (0, t.jsx)(n.a, {
                    href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background",
                    children: "Read this CSS Tricks flexbox guide",
                  }),
                  "\nfor background, terminology, guidelines, and code snippets.",
                ],
              }),
              "\n",
              (0, t.jsx)(n.h2, { id: "container", children: "Container" }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "Containers provide a means to center and horizontally pad your site\u2019s\ncontents. Use ",
                  (0, t.jsx)(n.code, { children: "Container" }),
                  " for a responsive pixel width.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: l,
              }),
              "\n",
              (0, t.jsx)(n.h3, {
                id: "fluid-container",
                children: "Fluid Container",
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "You can use ",
                  (0, t.jsx)(n.code, { children: "<Container fluid />" }),
                  " for width: 100% across\nall viewport and device sizes.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: i,
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "You can set breakpoints for the ",
                  (0, t.jsx)(n.code, { children: "fluid" }),
                  " prop. Setting it to a\nbreakpoint (",
                  (0, t.jsx)(n.code, { children: "sm, md, lg, xl, xxl" }),
                  ") will set the\n",
                  (0, t.jsx)(n.code, { children: "Container" }),
                  " as fluid until the specified breakpoint.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: a,
              }),
              "\n",
              (0, t.jsx)(n.h2, {
                id: "auto-layout-columns",
                children: "Auto-layout columns",
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "When no column widths are specified the ",
                  (0, t.jsx)(n.code, { children: "Col" }),
                  " component will\nrender equal width columns",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: s,
              }),
              "\n",
              (0, t.jsx)(n.h3, {
                id: "setting-one-column-width",
                children: "Setting one column width",
              }),
              "\n",
              (0, t.jsx)(n.p, {
                children:
                  "Auto-layout for flexbox grid columns also means you can set the width of\none column and have the sibling columns automatically resize around it.\nYou may use predefined grid classes (as shown below), grid mixins, or\ninline widths. Note that the other columns will resize no matter the\nwidth of the center column.",
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: p,
              }),
              "\n",
              (0, t.jsx)(n.h3, {
                id: "variable-width-content",
                children: "Variable width content",
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "Set the column value (for any breakpoint size) to ",
                  (0, t.jsx)(n.code, { children: "auto" }),
                  " to\nsize columns based on the natural width of their content.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: m,
              }),
              "\n",
              (0, t.jsx)(n.h2, {
                id: "responsive-grids",
                children: "Responsive grids",
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "The ",
                  (0, t.jsx)(n.code, { children: "Col" }),
                  " lets you specify column widths across 6 breakpoint\nsizes (xs, sm, md, lg, xl and xxl). For every breakpoint, you can\nspecify the amount of columns to span, or set the prop to\n",
                  (0, t.jsx)(n.code, { children: "<Col lg={true} />" }),
                  " for auto layout widths.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: h,
              }),
              "\n",
              (0, t.jsx)(n.p, {
                children:
                  "You can also mix and match breakpoints to create different grids\ndepending on the screen size.",
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: f,
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "The ",
                  (0, t.jsx)(n.code, { children: "Col" }),
                  " breakpoint props also have a more complicated\n",
                  (0, t.jsx)(n.code, { children: "object" }),
                  " prop form: ",
                  (0, t.jsx)(n.code, {
                    children: "{span: number, order: number, offset: number}",
                  }),
                  " for\nspecifying offsets and ordering effects.",
                ],
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "You can use the ",
                  (0, t.jsx)(n.code, { children: "order" }),
                  " property to control the ",
                  (0, t.jsx)(n.strong, { children: "visual order" }),
                  " of your content.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: C,
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "The ",
                  (0, t.jsx)(n.code, { children: "order" }),
                  " property also supports ",
                  (0, t.jsx)(n.code, { children: "first" }),
                  " (",
                  (0, t.jsx)(n.code, { children: "order: -1" }),
                  ") and ",
                  (0, t.jsx)(n.code, { children: "last" }),
                  " (",
                  (0, t.jsx)(n.code, { children: "order: $columns+1" }),
                  ").",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: x,
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "For offsetting grid columns you can set an ",
                  (0, t.jsx)(n.code, { children: "offset" }),
                  " value or for a\nmore general layout, use the margin class utilities.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: u,
              }),
              "\n",
              (0, t.jsx)(n.h3, {
                id: "setting-column-widths-in-row",
                children: "Setting column widths in Row",
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "The ",
                  (0, t.jsx)(n.code, { children: "Row" }),
                  " lets you specify column widths across 6 breakpoint\nsizes (xs, sm, md, lg, xl and xxl). For every breakpoint, you can\nspecify the amount of columns that will fit next to each other. You can\nalso specify ",
                  (0, t.jsx)(n.code, { children: "auto" }),
                  " to set the columns to their natural\nwidths.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: d,
              }),
              "\n",
              (0, t.jsxs)(n.p, {
                children: [
                  "Note that ",
                  (0, t.jsx)(n.code, { children: "Row" }),
                  " column widths will override ",
                  (0, t.jsx)(n.code, { children: "Col" }),
                  " widths\nset on lower breakpoints when viewed on larger screens. The\n",
                  (0, t.jsx)(n.code, { children: "<Col xs={6} />" }),
                  " size will be overridden by ",
                  (0, t.jsx)(n.code, { children: "<Row md={4} />" }),
                  "\non medium and larger screens.",
                ],
              }),
              "\n",
              (0, t.jsx)(e, {
                language: "jsx",
                live: !0,
                previewClassName: "grid-example",
                children: c,
              }),
              "\n",
              (0, t.jsx)(n.h2, { id: "api", children: "API" }),
              "\n",
              (0, t.jsx)(n.h3, { id: "container-1", children: "Container" }),
              "\n",
              (0, t.jsx)(w, { name: "Container" }),
              "\n",
              (0, t.jsx)(n.h3, { id: "row", children: "Row" }),
              "\n",
              (0, t.jsx)(w, { name: "Row" }),
              "\n",
              (0, t.jsx)(n.h3, { id: "col", children: "Col" }),
              "\n",
              (0, t.jsx)(w, { name: "Col" }),
            ],
          })
        );
      }
      function y(o = {}) {
        const { wrapper: n } = { ...(0, r.a)(), ...o.components };
        return n
          ? (0, t.jsx)(n, { ...o, children: (0, t.jsx)(v, { ...o }) })
          : v(o);
      }
      function k(o, n) {
        throw new Error(
          "Expected " +
            (n ? "component" : "object") +
            " `" +
            o +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (o, n, e) => {
      e.d(n, { Z: () => a, a: () => i });
      var t = e(67294);
      const r = {},
        l = t.createContext(r);
      function i(o) {
        const n = t.useContext(l);
        return t.useMemo(
          function () {
            return "function" == typeof o ? o(n) : { ...n, ...o };
          },
          [n, o]
        );
      }
      function a(o) {
        let n;
        return (
          (n = o.disableParentContext
            ? "function" == typeof o.components
              ? o.components(r)
              : o.components || r
            : i(o.components)),
          t.createElement(l.Provider, { value: n }, o.children)
        );
      }
    },
  },
]);
