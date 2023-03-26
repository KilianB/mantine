'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var carousel = require('@mantine/carousel');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Modal, Group, rem } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      </Group>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla} maw={300}>
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
  const [opened, setOpened] = React.useState(false);
  const [embla, setEmbla] = React.useState(null);
  carousel.useAnimationOffsetEffect(embla, TRANSITION_DURATION);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open modal with carousel")), /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    size: 300,
    padding: 0,
    transitionProps: { duration: TRANSITION_DURATION },
    withCloseButton: false,
    onClose: () => setOpened(false)
  }, /* @__PURE__ */ React__default.createElement(carousel.Carousel, {
    loop: true,
    getEmblaApi: setEmbla,
    maw: 300
  }, /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, null, /* @__PURE__ */ React__default.createElement("img", {
    src: "https://cataas.com/cat",
    alt: "Cat",
    style: { width: core.rem(300), height: core.rem(200), objectFit: "cover" }
  })), /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, null, /* @__PURE__ */ React__default.createElement("img", {
    src: "https://cataas.com/cat/cute",
    alt: "Cat",
    style: { width: core.rem(300), height: core.rem(200), objectFit: "cover" }
  })), /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, null, /* @__PURE__ */ React__default.createElement("img", {
    src: "https://cataas.com/cat/angry",
    alt: "Cat",
    style: { width: core.rem(300), height: core.rem(200), objectFit: "cover" }
  })))));
}
const animationOffset = {
  type: "demo",
  component: Demo,
  code
};

exports.animationOffset = animationOffset;
//# sourceMappingURL=Carousel.demo.animationOffset.js.map
