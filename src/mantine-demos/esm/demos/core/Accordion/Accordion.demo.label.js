import React from 'react';
import { Accordion, Text, Group, Avatar, Box } from '@mantine/core';
import { charactersList } from './_mockdata.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xEDguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xEDguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return <Accordion chevronPosition="right" variant="contained">{items}</Accordion>;
}
`;
function AccordionLabel({ label: label2, image, description }) {
  return /* @__PURE__ */ React.createElement(Group, {
    noWrap: true
  }, /* @__PURE__ */ React.createElement(Avatar, {
    src: image,
    radius: "xl",
    size: "lg"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, null, label2), /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    color: "dimmed",
    weight: 400
  }, description)));
}
function AccordionDemo(props) {
  const items = charactersList.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, {
    value: item.id,
    key: item.label
  }, /* @__PURE__ */ React.createElement(Accordion.Control, null, /* @__PURE__ */ React.createElement(AccordionLabel, __spreadValues({}, item))), /* @__PURE__ */ React.createElement(Accordion.Panel, null, /* @__PURE__ */ React.createElement(Text, {
    size: "sm"
  }, item.content))));
  return /* @__PURE__ */ React.createElement(Accordion, __spreadValues({
    chevronPosition: "right",
    variant: "contained"
  }, props), items);
}
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 540,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(AccordionDemo, null));
}
const label = {
  type: "demo",
  code,
  component: Demo
};

export { AccordionDemo, label };
//# sourceMappingURL=Accordion.demo.label.js.map
