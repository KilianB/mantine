import React, { useState } from 'react';
import { Group, Button, Modal, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const code = `
import { useState } from 'react';
import { Button, Modal, Group, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open carousel with broken offset</Button>
      </Group>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`;
function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open carousel with broken offset")), /* @__PURE__ */ React.createElement(Modal, {
    opened,
    size: 300,
    padding: 0,
    transitionProps: { duration: TRANSITION_DURATION },
    withCloseButton: false,
    onClose: () => setOpened(false)
  }, /* @__PURE__ */ React.createElement(Carousel, {
    loop: true,
    maw: 300
  }, /* @__PURE__ */ React.createElement(Carousel.Slide, null, /* @__PURE__ */ React.createElement("img", {
    src: "https://cataas.com/cat",
    alt: "",
    style: { width: rem(300), height: rem(200), objectFit: "cover" }
  })), /* @__PURE__ */ React.createElement(Carousel.Slide, null, /* @__PURE__ */ React.createElement("img", {
    src: "https://cataas.com/cat/cute",
    alt: "",
    style: { width: rem(300), height: rem(200), objectFit: "cover" }
  })), /* @__PURE__ */ React.createElement(Carousel.Slide, null, /* @__PURE__ */ React.createElement("img", {
    src: "https://cataas.com/cat/angry",
    alt: "",
    style: { width: rem(300), height: rem(200), objectFit: "cover" }
  })))));
}
const brokenAnimation = {
  type: "demo",
  component: Demo,
  code
};

export { brokenAnimation };
//# sourceMappingURL=Carousel.demo.brokenAnimation.js.map
