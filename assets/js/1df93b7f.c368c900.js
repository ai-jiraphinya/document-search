"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [3237],
  {
    11572: (e, t, s) => {
      s.d(t, { Z: () => o });
      var n = s(67294),
        r = s(85893);
      const o = (e) => {
        const t = (0, n.useRef)();
        return (0, r.jsx)("div", { ref: t, ...e });
      };
    },
    49129: (e, t, s) => {
      s.d(t, { Z: () => r });
      var n = s(28084);
      function r() {
        return (0, n.eZ)("bootstrap-metadata-plugin");
      }
    },
    78391: (e, t, s) => {
      s.r(t), s.d(t, { default: () => f });
      s(67294);
      var n = s(90512),
        r = s(33692),
        o = s(52263),
        i = s(68632);
      const a = { features: "features_t9lD" };
      var c = s(85893);
      const l = [
        {
          title: "Rebuilt with React",
          description: (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("p", {
                children:
                  "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.",
              }),
              (0, c.jsx)("p", {
                children:
                  "As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.",
              }),
            ],
          }),
        },
        {
          title: "Bootstrap at its core",
          description: (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("p", {
                children:
                  "Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.",
              }),
              (0, c.jsx)("p", {
                children:
                  "By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.",
              }),
            ],
          }),
        },
        {
          title: "Accessible by default",
          description: (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("p", {
                children:
                  "The React component model gives us more control over form and function of each component.",
              }),
              (0, c.jsx)("p", {
                children:
                  "Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.",
              }),
            ],
          }),
        },
      ];
      function d(e) {
        let { title: t, description: s } = e;
        return (0, c.jsx)("div", {
          className: (0, n.Z)("col col--4"),
          children: (0, c.jsxs)("div", {
            className: "padding-horiz--md",
            children: [
              (0, c.jsx)("h3", { children: t }),
              (0, c.jsx)("div", { children: s }),
            ],
          }),
        });
      }
      function h() {
        return (0, c.jsx)("section", {
          className: a.features,
          children: (0, c.jsx)("div", {
            className: "container",
            children: (0, c.jsx)("div", {
              className: "row",
              children: l.map((e, t) => (0, c.jsx)(d, { ...e }, t)),
            }),
          }),
        });
      }
      var u = s(11572),
        p = s(49129);
      const m = {
        heroBanner: "heroBanner_qdFl",
        buttons: "buttons_AeoN",
        carbonads: "carbonads_sLMe",
      };
      function b() {
        const { siteConfig: e } = (0, o.Z)(),
          { rbVersion: t } = (0, p.Z)();
        return (0, c.jsx)("header", {
          className: (0, n.Z)("hero", m.heroBanner),
          children: (0, c.jsxs)("div", {
            className: "container",
            children: [
              (0, c.jsx)("h1", { className: "hero__title", children: e.title }),
              (0, c.jsx)("p", {
                className: "hero__subtitle",
                children: e.tagline,
              }),
              (0, c.jsxs)("div", {
                className: m.buttons,
                children: [
                  (0, c.jsx)(r.Z, {
                    className: "button button--primary button--lg",
                    to: "/docs/getting-started/introduction",
                    children: "Get started",
                  }),
                  (0, c.jsx)(r.Z, {
                    className: "button button--primary button--lg",
                    to: "/docs/components/accordion",
                    children: "Components",
                  }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: "my-2",
                children: ["Current version: ", t],
              }),
              (0, c.jsx)("div", {
                className: m.carbonads,
                children: (0, c.jsx)(u.Z, {}),
              }),
            ],
          }),
        });
      }
      function f() {
        const { siteConfig: e } = (0, o.Z)();
        return (0, c.jsxs)(i.Z, {
          title: e.title,
          description: " React By Mint Jiraphinya.",
          children: [
            (0, c.jsx)(b, {}),
            (0, c.jsx)("main", { children: (0, c.jsx)(h, {}) }),
          ],
        });
      }
    },
  },
]);
