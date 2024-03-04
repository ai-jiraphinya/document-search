"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [8089],
  {
    91749: (e, n, a) => {
      a.r(n),
        a.d(n, {
          assets: () => C,
          contentTitle: () => m,
          default: () => I,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => h,
        });
      var o = a(85893),
        l = a(11151);
      const t =
          "import { useState } from 'react';\nimport Carousel from 'react-bootstrap/Carousel';\nimport ExampleCarouselImage from 'components/ExampleCarouselImage';\n\nfunction ControlledCarousel() {\n  const [index, setIndex] = useState(0);\n\n  const handleSelect = (selectedIndex) => {\n    setIndex(selectedIndex);\n  };\n\n  return (\n    <Carousel activeIndex={index} onSelect={handleSelect}>\n      <Carousel.Item>\n        <ExampleCarouselImage text=\"First slide\" />\n        <Carousel.Caption>\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text=\"Second slide\" />\n        <Carousel.Caption>\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text=\"Third slide\" />\n        <Carousel.Caption>\n          <h3>Third slide label</h3>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n          </p>\n        </Carousel.Caption>\n      </Carousel.Item>\n    </Carousel>\n  );\n}\n\nexport default ControlledCarousel;\n",
        s =
          'import Carousel from \'react-bootstrap/Carousel\';\nimport ExampleCarouselImage from \'components/ExampleCarouselImage\';\n\nfunction UncontrolledExample() {\n  return (\n    <Carousel>\n      <Carousel.Item>\n        <ExampleCarouselImage text="First slide" />\n        <Carousel.Caption>\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Second slide" />\n        <Carousel.Caption>\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Third slide" />\n        <Carousel.Caption>\n          <h3>Third slide label</h3>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n          </p>\n        </Carousel.Caption>\n      </Carousel.Item>\n    </Carousel>\n  );\n}\n\nexport default UncontrolledExample;\n',
        r =
          'import Carousel from \'react-bootstrap/Carousel\';\nimport ExampleCarouselImage from \'components/ExampleCarouselImage\';\n\nfunction CarouselFadeExample() {\n  return (\n    <Carousel fade>\n      <Carousel.Item>\n        <ExampleCarouselImage text="First slide" />\n        <Carousel.Caption>\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Second slide" />\n        <Carousel.Caption>\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Third slide" />\n        <Carousel.Caption>\n          <h3>Third slide label</h3>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n          </p>\n        </Carousel.Caption>\n      </Carousel.Item>\n    </Carousel>\n  );\n}\n\nexport default CarouselFadeExample;\n',
        i =
          'import Carousel from \'react-bootstrap/Carousel\';\nimport ExampleCarouselImage from \'components/ExampleCarouselImage\';\n\nfunction IndividualIntervalsExample() {\n  return (\n    <Carousel>\n      <Carousel.Item interval={1000}>\n        <ExampleCarouselImage text="First slide" />\n        <Carousel.Caption>\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item interval={500}>\n        <ExampleCarouselImage text="Second slide" />\n        <Carousel.Caption>\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Third slide" />\n        <Carousel.Caption>\n          <h3>Third slide label</h3>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n          </p>\n        </Carousel.Caption>\n      </Carousel.Item>\n    </Carousel>\n  );\n}\n\nexport default IndividualIntervalsExample;\n',
        u =
          'import Carousel from \'react-bootstrap/Carousel\';\n\nfunction DarkVariantExample() {\n  return (\n    <Carousel data-bs-theme="dark">\n      <Carousel.Item>\n        <img\n          className="d-block w-100"\n          src="holder.js/800x400?text=First slide&bg=f5f5f5"\n          alt="First slide"\n        />\n        <Carousel.Caption>\n          <h5>First slide label</h5>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <img\n          className="d-block w-100"\n          src="holder.js/800x400?text=Second slide&bg=eee"\n          alt="Second slide"\n        />\n        <Carousel.Caption>\n          <h5>Second slide label</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <img\n          className="d-block w-100"\n          src="holder.js/800x400?text=Third slide&bg=e5e5e5"\n          alt="Third slide"\n        />\n        <Carousel.Caption>\n          <h5>Third slide label</h5>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n          </p>\n        </Carousel.Caption>\n      </Carousel.Item>\n    </Carousel>\n  );\n}\n\nexport default DarkVariantExample;\n',
        d =
          'import Carousel from \'react-bootstrap/Carousel\';\nimport ExampleCarouselImage from \'components/ExampleCarouselImage\';\n\nfunction NoTransitionExample() {\n  return (\n    <Carousel slide={false}>\n      <Carousel.Item>\n        <ExampleCarouselImage text="First slide" />\n        <Carousel.Caption>\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Second slide" />\n        <Carousel.Caption>\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </Carousel.Caption>\n      </Carousel.Item>\n      <Carousel.Item>\n        <ExampleCarouselImage text="Third slide" />\n        <Carousel.Caption>\n          <h3>Third slide label</h3>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n          </p>\n        </Carousel.Caption>\n      </Carousel.Item>\n    </Carousel>\n  );\n}\n\nexport default NoTransitionExample;\n',
        c = {
          title: "Carousels",
          description:
            "A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel.",
        },
        m = void 0,
        p = {
          id: "components/carousel",
          title: "Carousels",
          description:
            "A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel.",
          source: "@site/docs/components/carousel.mdx",
          sourceDirName: "components",
          slug: "/components/carousel",
          permalink: "/docs/components/carousel",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Carousels",
            description:
              "A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel.",
          },
          sidebar: "sidebar",
          previous: { title: "Cards", permalink: "/docs/components/cards" },
          next: {
            title: "Close Button",
            permalink: "/docs/components/close-button",
          },
        },
        C = {},
        h = [
          { value: "Example", id: "example", level: 2 },
          { value: "Controlled", id: "controlled", level: 2 },
          { value: "Crossfade", id: "crossfade", level: 2 },
          {
            value: "No transition animation",
            id: "no-transition-animation",
            level: 2,
          },
          {
            value: "Individual Item Intervals",
            id: "individual-item-intervals",
            level: 2,
          },
          { value: "Dark variant", id: "dark-variant", level: 2 },
          { value: "API", id: "api", level: 2 },
          { value: "Carousel", id: "carousel", level: 3 },
          { value: "CarouselItem", id: "carouselitem", level: 3 },
          { value: "CarouselCaption", id: "carouselcaption", level: 3 },
        ];
      function x(e) {
        const n = {
            admonition: "admonition",
            code: "code",
            em: "em",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, l.a)(),
            ...e.components,
          },
          { CodeBlock: a, PropsTable: c } = n;
        return (
          a || v("CodeBlock", !0),
          c || v("PropsTable", !0),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(n.h2, { id: "example", children: "Example" }),
              "\n",
              (0, o.jsx)(n.p, {
                children:
                  "Carousels don\u2019t automatically normalize slide dimensions. As such, you\nmay need to use additional utilities or custom styles to appropriately\nsize content. While carousels support previous/next controls and\nindicators, they\u2019re not explicitly required. Add and customize as you\nsee fit.",
              }),
              "\n",
              (0, o.jsx)(a, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, o.jsx)(n.h2, { id: "controlled", children: "Controlled" }),
              "\n",
              (0, o.jsxs)(n.p, {
                children: [
                  "You can also ",
                  (0, o.jsx)(n.em, { children: "control" }),
                  " the Carousel state, via the\n",
                  (0, o.jsx)(n.code, { children: "activeIndex" }),
                  " prop and ",
                  (0, o.jsx)(n.code, { children: "onSelect" }),
                  " handler.",
                ],
              }),
              "\n",
              (0, o.jsx)(a, { language: "jsx", live: !0, children: t }),
              "\n",
              (0, o.jsx)(n.h2, { id: "crossfade", children: "Crossfade" }),
              "\n",
              (0, o.jsxs)(n.p, {
                children: [
                  "Add the ",
                  (0, o.jsx)(n.code, { children: "fade" }),
                  " prop to your carousel to animate slides with a fade transition instead of a slide.",
                ],
              }),
              "\n",
              (0, o.jsx)(a, { language: "jsx", live: !0, children: r }),
              "\n",
              (0, o.jsx)(n.h2, {
                id: "no-transition-animation",
                children: "No transition animation",
              }),
              "\n",
              (0, o.jsxs)(n.p, {
                children: [
                  "Set the ",
                  (0, o.jsx)(n.code, { children: "slide" }),
                  " prop to false to disable the transition animation between slides.",
                ],
              }),
              "\n",
              (0, o.jsx)(a, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, o.jsx)(n.h2, {
                id: "individual-item-intervals",
                children: "Individual Item Intervals",
              }),
              "\n",
              (0, o.jsxs)(n.p, {
                children: [
                  "You can specify individual intervals for each carousel item via the ",
                  (0, o.jsx)(n.code, { children: "interval" }),
                  "\nprop.",
                ],
              }),
              "\n",
              (0, o.jsx)(a, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, o.jsx)(n.h2, {
                id: "dark-variant",
                children: "Dark variant",
              }),
              "\n",
              (0, o.jsxs)(n.p, {
                children: [
                  "Add ",
                  (0, o.jsx)(n.code, { children: 'variant="dark"' }),
                  " to the ",
                  (0, o.jsx)(n.code, { children: "Carousel" }),
                  " for darker controls, indicators, and captions.",
                ],
              }),
              "\n",
              (0, o.jsx)(n.admonition, {
                title: "Heads up!",
                type: "caution",
                children: (0, o.jsxs)(n.p, {
                  children: [
                    "Dark variants for components were deprecated in Bootstrap v5.3.0 with the introduction\nof color modes. Instead of adding ",
                    (0, o.jsx)(n.code, { children: 'variant="dark"' }),
                    ", set ",
                    (0, o.jsx)(n.code, { children: 'data-bs-theme="dark"' }),
                    " on the root\nelement, a parent wrapper, or the component itself.",
                  ],
                }),
              }),
              "\n",
              (0, o.jsx)(a, { language: "jsx", live: !0, children: u }),
              "\n",
              (0, o.jsx)(n.h2, { id: "api", children: "API" }),
              "\n",
              (0, o.jsx)(n.h3, { id: "carousel", children: "Carousel" }),
              "\n",
              (0, o.jsx)(c, { name: "Carousel" }),
              "\n",
              (0, o.jsx)(n.h3, {
                id: "carouselitem",
                children: "CarouselItem",
              }),
              "\n",
              (0, o.jsx)(c, { name: "CarouselItem" }),
              "\n",
              (0, o.jsx)(n.h3, {
                id: "carouselcaption",
                children: "CarouselCaption",
              }),
              "\n",
              (0, o.jsx)(c, { name: "CarouselCaption" }),
            ],
          })
        );
      }
      function I(e = {}) {
        const { wrapper: n } = { ...(0, l.a)(), ...e.components };
        return n
          ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) })
          : x(e);
      }
      function v(e, n) {
        throw new Error(
          "Expected " +
            (n ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, n, a) => {
      a.d(n, { Z: () => r, a: () => s });
      var o = a(67294);
      const l = {},
        t = o.createContext(l);
      function s(e) {
        const n = o.useContext(t);
        return o.useMemo(
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
              ? e.components(l)
              : e.components || l
            : s(e.components)),
          o.createElement(t.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
