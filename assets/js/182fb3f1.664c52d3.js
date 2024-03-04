"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [6787],
  {
    33200: (e, a, n) => {
      n.r(a),
        n.d(a, {
          assets: () => w,
          contentTitle: () => B,
          default: () => G,
          frontMatter: () => k,
          metadata: () => L,
          toc: () => I,
        });
      var r = n(85893),
        t = n(11151);
      const d =
          "import Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\n\nfunction BasicExample() {\n  return (\n    <Card style={{ width: '18rem' }}>\n      <Card.Img variant=\"top\" src=\"holder.js/100px180\" />\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the\n          bulk of the card's content.\n        </Card.Text>\n        <Button variant=\"primary\">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default BasicExample;\n",
        o =
          "import Card from 'react-bootstrap/Card';\n\nfunction BgColorExample() {\n  return (\n    <>\n      {[\n        'Primary',\n        'Secondary',\n        'Success',\n        'Danger',\n        'Warning',\n        'Info',\n        'Light',\n        'Dark',\n      ].map((variant) => (\n        <Card\n          bg={variant.toLowerCase()}\n          key={variant}\n          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}\n          style={{ width: '18rem' }}\n          className=\"mb-2\"\n        >\n          <Card.Header>Header</Card.Header>\n          <Card.Body>\n            <Card.Title>{variant} Card Title </Card.Title>\n            <Card.Text>\n              Some quick example text to build on the card title and make up the\n              bulk of the card's content.\n            </Card.Text>\n          </Card.Body>\n        </Card>\n      ))}\n    </>\n  );\n}\n\nexport default BgColorExample;\n",
        i =
          "import Card from 'react-bootstrap/Card';\n\nfunction BodyOnlyExample() {\n  return (\n    <Card>\n      <Card.Body>This is some text within a card body.</Card.Body>\n    </Card>\n  );\n}\n\nexport default BodyOnlyExample;\n",
        l =
          "import Card from 'react-bootstrap/Card';\n\nfunction BodyShorthandExample() {\n  return <Card body>This is some text within a card body.</Card>;\n}\n\nexport default BodyShorthandExample;\n",
        s =
          "import Card from 'react-bootstrap/Card';\n\nfunction BorderExample() {\n  return (\n    <>\n      <Card border=\"primary\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Primary Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"secondary\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Secondary Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"success\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Success Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"danger\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Danger Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"warning\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Warning Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"info\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Info Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"dark\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Dark Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"light\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Light Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n    </>\n  );\n}\n\nexport default BorderExample;\n",
        c =
          "import Card from 'react-bootstrap/Card';\nimport Col from 'react-bootstrap/Col';\nimport Row from 'react-bootstrap/Row';\n\nfunction GridExample() {\n  return (\n    <Row xs={1} md={2} className=\"g-4\">\n      {Array.from({ length: 4 }).map((_, idx) => (\n        <Col key={idx}>\n          <Card>\n            <Card.Img variant=\"top\" src=\"holder.js/100px160\" />\n            <Card.Body>\n              <Card.Title>Card title</Card.Title>\n              <Card.Text>\n                This is a longer card with supporting text below as a natural\n                lead-in to additional content. This content is a little bit\n                longer.\n              </Card.Text>\n            </Card.Body>\n          </Card>\n        </Col>\n      ))}\n    </Row>\n  );\n}\n\nexport default GridExample;\n",
        C =
          'import Card from \'react-bootstrap/Card\';\nimport CardGroup from \'react-bootstrap/CardGroup\';\n\nfunction GroupExample() {\n  return (\n    <CardGroup>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px160" />\n        <Card.Body>\n          <Card.Title>Card title</Card.Title>\n          <Card.Text>\n            This is a wider card with supporting text below as a natural lead-in\n            to additional content. This content is a little bit longer.\n          </Card.Text>\n        </Card.Body>\n        <Card.Footer>\n          <small className="text-muted">Last updated 3 mins ago</small>\n        </Card.Footer>\n      </Card>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px160" />\n        <Card.Body>\n          <Card.Title>Card title</Card.Title>\n          <Card.Text>\n            This card has supporting text below as a natural lead-in to\n            additional content.{\' \'}\n          </Card.Text>\n        </Card.Body>\n        <Card.Footer>\n          <small className="text-muted">Last updated 3 mins ago</small>\n        </Card.Footer>\n      </Card>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px160" />\n        <Card.Body>\n          <Card.Title>Card title</Card.Title>\n          <Card.Text>\n            This is a wider card with supporting text below as a natural lead-in\n            to additional content. This card has even longer content than the\n            first to show that equal height action.\n          </Card.Text>\n        </Card.Body>\n        <Card.Footer>\n          <small className="text-muted">Last updated 3 mins ago</small>\n        </Card.Footer>\n      </Card>\n    </CardGroup>\n  );\n}\n\nexport default GroupExample;\n',
        u =
          'import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\n\nfunction HeaderAndFooterExample() {\n  return (\n    <Card className="text-center">\n      <Card.Header>Featured</Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant="primary">Go somewhere</Button>\n      </Card.Body>\n      <Card.Footer className="text-muted">2 days ago</Card.Footer>\n    </Card>\n  );\n}\n\nexport default HeaderAndFooterExample;\n',
        p =
          'import Card from \'react-bootstrap/Card\';\n\nfunction ImageAndTextExample() {\n  return (\n    <>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px180" />\n        <Card.Body>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card\'s content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n      <Card>\n        <Card.Body>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card\'s content.\n          </Card.Text>\n        </Card.Body>\n        <Card.Img variant="bottom" src="holder.js/100px180" />\n      </Card>\n    </>\n  );\n}\n\nexport default ImageAndTextExample;\n',
        m =
          'import Card from \'react-bootstrap/Card\';\n\nfunction ImgOverlayExample() {\n  return (\n    <Card className="bg-dark text-white">\n      <Card.Img src="holder.js/100px270" alt="Card image" />\n      <Card.ImgOverlay>\n        <Card.Title>Card title</Card.Title>\n        <Card.Text>\n          This is a wider card with supporting text below as a natural lead-in\n          to additional content. This content is a little bit longer.\n        </Card.Text>\n        <Card.Text>Last updated 3 mins ago</Card.Text>\n      </Card.ImgOverlay>\n    </Card>\n  );\n}\n\nexport default ImgOverlayExample;\n',
        x =
          'import Card from \'react-bootstrap/Card\';\nimport ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction KitchenSinkExample() {\n  return (\n    <Card style={{ width: \'18rem\' }}>\n      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the\n          bulk of the card\'s content.\n        </Card.Text>\n      </Card.Body>\n      <ListGroup className="list-group-flush">\n        <ListGroup.Item>Cras justo odio</ListGroup.Item>\n        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n      </ListGroup>\n      <Card.Body>\n        <Card.Link href="#">Card Link</Card.Link>\n        <Card.Link href="#">Another Link</Card.Link>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default KitchenSinkExample;\n',
        h =
          "import Card from 'react-bootstrap/Card';\nimport ListGroup from 'react-bootstrap/ListGroup';\n\nfunction ListGroupExample() {\n  return (\n    <Card style={{ width: '18rem' }}>\n      <ListGroup variant=\"flush\">\n        <ListGroup.Item>Cras justo odio</ListGroup.Item>\n        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n      </ListGroup>\n    </Card>\n  );\n}\n\nexport default ListGroupExample;\n",
        v =
          "import Card from 'react-bootstrap/Card';\nimport ListGroup from 'react-bootstrap/ListGroup';\n\nfunction ListGroupWithHeaderExample() {\n  return (\n    <Card style={{ width: '18rem' }}>\n      <Card.Header>Featured</Card.Header>\n      <ListGroup variant=\"flush\">\n        <ListGroup.Item>Cras justo odio</ListGroup.Item>\n        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n      </ListGroup>\n    </Card>\n  );\n}\n\nexport default ListGroupWithHeaderExample;\n",
        b =
          'import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\nimport Nav from \'react-bootstrap/Nav\';\n\nfunction NavPillsExample() {\n  return (\n    <Card>\n      <Card.Header>\n        <Nav variant="pills" defaultActiveKey="#first">\n          <Nav.Item>\n            <Nav.Link href="#first">Active</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#link">Link</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#disabled" disabled>\n              Disabled\n            </Nav.Link>\n          </Nav.Item>\n        </Nav>\n      </Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant="primary">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default NavPillsExample;\n',
        g =
          'import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\nimport Nav from \'react-bootstrap/Nav\';\n\nfunction NavTabsExample() {\n  return (\n    <Card>\n      <Card.Header>\n        <Nav variant="tabs" defaultActiveKey="#first">\n          <Nav.Item>\n            <Nav.Link href="#first">Active</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#link">Link</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#disabled" disabled>\n              Disabled\n            </Nav.Link>\n          </Nav.Item>\n        </Nav>\n      </Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant="primary">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default NavTabsExample;\n',
        y =
          'import Card from \'react-bootstrap/Card\';\n\nfunction TextExample() {\n  return (\n    <Card style={{ width: \'18rem\' }}>\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the\n          bulk of the card\'s content.\n        </Card.Text>\n        <Card.Link href="#">Card Link</Card.Link>\n        <Card.Link href="#">Another Link</Card.Link>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default TextExample;\n',
        f =
          "import Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\n\nfunction WithHeaderExample() {\n  return (\n    <Card>\n      <Card.Header>Featured</Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant=\"primary\">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default WithHeaderExample;\n",
        T =
          "import Card from 'react-bootstrap/Card';\n\nfunction WithHeaderAndQuoteExample() {\n  return (\n    <Card>\n      <Card.Header>Quote</Card.Header>\n      <Card.Body>\n        <blockquote className=\"blockquote mb-0\">\n          <p>\n            {' '}\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\n            posuere erat a ante.{' '}\n          </p>\n          <footer className=\"blockquote-footer\">\n            Someone famous in <cite title=\"Source Title\">Source Title</cite>\n          </footer>\n        </blockquote>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default WithHeaderAndQuoteExample;\n",
        j =
          "import Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\n\nfunction WithHeaderStyledExample() {\n  return (\n    <Card>\n      <Card.Header as=\"h5\">Featured</Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant=\"primary\">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default WithHeaderStyledExample;\n",
        k = {
          title: "Cards",
          description:
            "Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options.",
        },
        B = void 0,
        L = {
          id: "components/cards",
          title: "Cards",
          description:
            "Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options.",
          source: "@site/docs/components/cards.mdx",
          sourceDirName: "components",
          slug: "/components/cards",
          permalink: "/docs/components/cards",
          draft: !1,
          unlisted: !1,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Cards",
            description:
              "Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options.",
          },
          sidebar: "sidebar",
          previous: { title: "Buttons", permalink: "/docs/components/buttons" },
          next: { title: "Carousels", permalink: "/docs/components/carousel" },
        },
        w = {},
        I = [
          { value: "Basic Example", id: "basic-example", level: 2 },
          { value: "Content types", id: "content-types", level: 2 },
          { value: "Body", id: "body", level: 3 },
          {
            value: "Title, text, and links",
            id: "title-text-and-links",
            level: 3,
          },
          { value: "List Groups", id: "list-groups", level: 3 },
          { value: "Kitchen Sink", id: "kitchen-sink", level: 3 },
          { value: "Header and Footer", id: "header-and-footer", level: 3 },
          { value: "Images", id: "images", level: 2 },
          { value: "Image caps", id: "image-caps", level: 3 },
          { value: "Image Overlays", id: "image-overlays", level: 3 },
          { value: "Navigation", id: "navigation", level: 2 },
          { value: "Card Styles", id: "card-styles", level: 2 },
          { value: "Background Color", id: "background-color", level: 3 },
          { value: "Border Color", id: "border-color", level: 3 },
          { value: "Card layout", id: "card-layout", level: 2 },
          { value: "Card Groups", id: "card-groups", level: 3 },
          { value: "Grid cards", id: "grid-cards", level: 3 },
          { value: "API", id: "api", level: 2 },
          { value: "Card", id: "card", level: 3 },
          { value: "CardBody", id: "cardbody", level: 3 },
          { value: "CardFooter", id: "cardfooter", level: 3 },
          { value: "CardHeader", id: "cardheader", level: 3 },
          { value: "CardImg", id: "cardimg", level: 3 },
          { value: "CardImgOverlay", id: "cardimgoverlay", level: 3 },
          { value: "CardLink", id: "cardlink", level: 3 },
          { value: "CardSubtitle", id: "cardsubtitle", level: 3 },
          { value: "CardText", id: "cardtext", level: 3 },
          { value: "CardTitle", id: "cardtitle", level: 3 },
          { value: "CardGroup", id: "cardgroup", level: 3 },
        ];
      function H(e) {
        const a = {
            a: "a",
            code: "code",
            h2: "h2",
            h3: "h3",
            p: "p",
            ...(0, t.a)(),
            ...e.components,
          },
          { CodeBlock: n, PropsTable: k } = a;
        return (
          n || N("CodeBlock", !0),
          k || N("PropsTable", !0),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a.h2, {
                id: "basic-example",
                children: "Basic Example",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: d }),
              "\n",
              (0, r.jsx)(a.h2, {
                id: "content-types",
                children: "Content types",
              }),
              "\n",
              (0, r.jsx)(a.h3, { id: "body", children: "Body" }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "Use ",
                  (0, r.jsx)(a.code, { children: "<Card.Body>" }),
                  " to pad content inside a ",
                  (0, r.jsx)(a.code, { children: "<Card>" }),
                  ".",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: i }),
              "\n",
              (0, r.jsx)(a.p, {
                children:
                  "Alternatively, you can use this shorthand version for Cards with body\nonly, and no other children",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: l }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "title-text-and-links",
                children: "Title, text, and links",
              }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "Using ",
                  (0, r.jsx)(a.code, { children: "<Card.Title>" }),
                  ", ",
                  (0, r.jsx)(a.code, { children: "<Card.Subtitle>" }),
                  ", and\n",
                  (0, r.jsx)(a.code, { children: "<Card.Text>" }),
                  " inside the ",
                  (0, r.jsx)(a.code, { children: "<Card.Body>" }),
                  " will line them up nicely.\n",
                  (0, r.jsx)(a.code, { children: "<Card.Link>" }),
                  "s are used to line up links next to each other.",
                ],
              }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  (0, r.jsx)(a.code, { children: "<Card.Text>" }),
                  " outputs ",
                  (0, r.jsx)(a.code, { children: "<p>" }),
                  " tags around the content, so you can\nuse multiple ",
                  (0, r.jsx)(a.code, { children: "<Card.Text>" }),
                  "s to create separate paragraphs.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: y }),
              "\n",
              (0, r.jsx)(a.h3, { id: "list-groups", children: "List Groups" }),
              "\n",
              (0, r.jsx)(a.p, {
                children:
                  "Create lists of content in a card with a flush list group.",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: h }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: v }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "kitchen-sink",
                children: "Kitchen Sink",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: x }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "header-and-footer",
                children: "Header and Footer",
              }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "You may add a header by adding a ",
                  (0, r.jsx)(a.code, { children: "<Card.Header>" }),
                  " component.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: f }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "A ",
                  (0, r.jsx)(a.code, { children: "<CardHeader>" }),
                  " can be styled by passing a heading element\nthrough the ",
                  (0, r.jsx)(a.code, { children: "<as>" }),
                  " prop",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: j }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: T }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: u }),
              "\n",
              (0, r.jsx)(a.h2, { id: "images", children: "Images" }),
              "\n",
              (0, r.jsx)(a.p, {
                children:
                  "Cards include a few options for working with images. Choose from\nappending \u201cimage caps\u201d at either end of a card, overlaying images with\ncard content, or simply embedding the image in a card.",
              }),
              "\n",
              (0, r.jsx)(a.h3, { id: "image-caps", children: "Image caps" }),
              "\n",
              (0, r.jsx)(a.p, {
                children:
                  "Similar to headers and footers, cards can include top and bottom \u201cimage\ncaps\u201d\u2014images at the top or bottom of a card.",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: p }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "image-overlays",
                children: "Image Overlays",
              }),
              "\n",
              (0, r.jsx)(a.p, {
                children:
                  "Turn an image into a card background and overlay your card\u2019s text.\nDepending on the image, you may or may not need additional styles or\nutilities.",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: m }),
              "\n",
              (0, r.jsx)(a.h2, { id: "navigation", children: "Navigation" }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "Add some navigation to a card\u2019s header (or block) with React Bootstrap\u2019s\n",
                  (0, r.jsx)(a.a, { href: "navs", children: "Nav" }),
                  " components.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: g }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: b }),
              "\n",
              (0, r.jsx)(a.h2, { id: "card-styles", children: "Card Styles" }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "background-color",
                children: "Background Color",
              }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "You can change a card's appearance by changing their ",
                  (0, r.jsx)(a.code, { children: "<bg>" }),
                  ", and ",
                  (0, r.jsx)(a.code, { children: "<text>" }),
                  " props.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: o }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "border-color",
                children: "Border Color",
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: s }),
              "\n",
              (0, r.jsx)(a.h2, { id: "card-layout", children: "Card layout" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "card-groups", children: "Card Groups" }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: C }),
              "\n",
              (0, r.jsx)(a.h3, { id: "grid-cards", children: "Grid cards" }),
              "\n",
              (0, r.jsxs)(a.p, {
                children: [
                  "Use ",
                  (0, r.jsx)(a.code, { children: "Row" }),
                  "'s ",
                  (0, r.jsx)(a.a, {
                    href: "../layout/grid#setting-column-widths-in-row",
                    children: "grid column",
                  }),
                  " props to control how many cards to show per row.",
                ],
              }),
              "\n",
              (0, r.jsx)(n, { language: "jsx", live: !0, children: c }),
              "\n",
              (0, r.jsx)(a.h2, { id: "api", children: "API" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "card", children: "Card" }),
              "\n",
              (0, r.jsx)(k, { name: "Card" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardbody", children: "CardBody" }),
              "\n",
              (0, r.jsx)(k, { name: "CardBody" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardfooter", children: "CardFooter" }),
              "\n",
              (0, r.jsx)(k, { name: "CardFooter" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardheader", children: "CardHeader" }),
              "\n",
              (0, r.jsx)(k, { name: "CardHeader" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardimg", children: "CardImg" }),
              "\n",
              (0, r.jsx)(k, { name: "CardImg" }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "cardimgoverlay",
                children: "CardImgOverlay",
              }),
              "\n",
              (0, r.jsx)(k, { name: "CardImgOverlay" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardlink", children: "CardLink" }),
              "\n",
              (0, r.jsx)(k, { name: "CardLink" }),
              "\n",
              (0, r.jsx)(a.h3, {
                id: "cardsubtitle",
                children: "CardSubtitle",
              }),
              "\n",
              (0, r.jsx)(k, { name: "CardSubtitle" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardtext", children: "CardText" }),
              "\n",
              (0, r.jsx)(k, { name: "CardText" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardtitle", children: "CardTitle" }),
              "\n",
              (0, r.jsx)(k, { name: "CardTitle" }),
              "\n",
              (0, r.jsx)(a.h3, { id: "cardgroup", children: "CardGroup" }),
              "\n",
              (0, r.jsx)(k, { name: "CardGroup" }),
            ],
          })
        );
      }
      function G(e = {}) {
        const { wrapper: a } = { ...(0, t.a)(), ...e.components };
        return a
          ? (0, r.jsx)(a, { ...e, children: (0, r.jsx)(H, { ...e }) })
          : H(e);
      }
      function N(e, a) {
        throw new Error(
          "Expected " +
            (a ? "component" : "object") +
            " `" +
            e +
            "` to be defined: you likely forgot to import, pass, or provide it."
        );
      }
    },
    11151: (e, a, n) => {
      n.d(a, { Z: () => i, a: () => o });
      var r = n(67294);
      const t = {},
        d = r.createContext(t);
      function o(e) {
        const a = r.useContext(d);
        return r.useMemo(
          function () {
            return "function" == typeof e ? e(a) : { ...a, ...e };
          },
          [a, e]
        );
      }
      function i(e) {
        let a;
        return (
          (a = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          r.createElement(d.Provider, { value: a }, e.children)
        );
      }
    },
  },
]);
