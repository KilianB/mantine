import React, { forwardRef } from 'react';
import { Group, Avatar, Text, Autocomplete } from '@mantine/core';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
import { forwardRef } from 'react';
import { Group, Avatar, Text, MantineColor, SelectItemProps, Autocomplete } from '@mantine/core';

const charactersList = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xEDguez',
    description: 'Fascinated with cooking, though has no sense of taste',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    description: 'Not just a sponge',
  },
];

const data = charactersList.map((item) => ({ ...item, value: item.label }));

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
}

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

function Demo() {
  return (
    <Autocomplete
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={AutoCompleteItem}
      data={data}
      filter={(value, item) =>
        item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
`;
const charactersList = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodr\xEDguez",
    description: "Fascinated with cooking, though has no sense of taste"
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    description: "One of the richest people on Earth"
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant"
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    description: "Not just a sponge"
  }
];
const data = charactersList.map((item) => __spreadProps(__spreadValues({}, item), { value: item.label }));
const AutoCompleteItem = forwardRef((_a, ref) => {
  var _b = _a, { description, value, image } = _b, others = __objRest(_b, ["description", "value", "image"]);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    ref
  }, others), /* @__PURE__ */ React.createElement(Group, {
    noWrap: true
  }, /* @__PURE__ */ React.createElement(Avatar, {
    src: image
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, null, value), /* @__PURE__ */ React.createElement(Text, {
    size: "xs",
    color: "dimmed"
  }, description))));
});
function Demo() {
  return /* @__PURE__ */ React.createElement(Autocomplete, {
    maw: 320,
    mx: "auto",
    label: "Choose employee of the month",
    placeholder: "Pick one",
    itemComponent: AutoCompleteItem,
    data,
    filter: (value, item) => item.value.toLowerCase().includes(value.toLowerCase().trim()) || item.description.toLowerCase().includes(value.toLowerCase().trim())
  });
}
const itemComponent = {
  type: "demo",
  code,
  component: Demo
};

export { itemComponent };
//# sourceMappingURL=Autocomplete.demo.itemComponent.js.map
