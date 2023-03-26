import React from 'react';
import { Card, Group, Text, Menu, ActionIcon, rem, Image, SimpleGrid } from '@mantine/core';
import { IconDots, IconFileZip, IconEye, IconTrash } from '@tabler/icons-react';
import { demoBase } from './_demo-base.js';

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
const code = `
import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, rem } from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const images = [
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
];

function Demo() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={rem(14)} />}>Download zip</Menu.Item>
              <Menu.Item icon={<IconEye size={rem(14)} />}>Preview all</Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" color="dimmed" size="sm">
        <Text component="span" inherit color="blue">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
`;
const images = [
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
];
function Demo() {
  return /* @__PURE__ */ React.createElement(Card, {
    withBorder: true,
    shadow: "sm",
    radius: "md"
  }, /* @__PURE__ */ React.createElement(Card.Section, {
    withBorder: true,
    inheritPadding: true,
    py: "xs"
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "apart"
  }, /* @__PURE__ */ React.createElement(Text, {
    weight: 500
  }, "Review pictures"), /* @__PURE__ */ React.createElement(Menu, {
    withinPortal: true,
    position: "bottom-end",
    shadow: "sm"
  }, /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(ActionIcon, null, /* @__PURE__ */ React.createElement(IconDots, {
    size: "1rem"
  }))), /* @__PURE__ */ React.createElement(Menu.Dropdown, null, /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconFileZip, {
      size: rem(14)
    })
  }, "Download zip"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconEye, {
      size: rem(14)
    })
  }, "Preview all"), /* @__PURE__ */ React.createElement(Menu.Item, {
    icon: /* @__PURE__ */ React.createElement(IconTrash, {
      size: rem(14)
    }),
    color: "red"
  }, "Delete all"))))), /* @__PURE__ */ React.createElement(Text, {
    mt: "sm",
    color: "dimmed",
    size: "sm"
  }, /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    inherit: true,
    color: "blue"
  }, "200+ images uploaded"), " ", "since last visit, review them to select which one should be added to your gallery"), /* @__PURE__ */ React.createElement(Card.Section, {
    mt: "sm"
  }, /* @__PURE__ */ React.createElement(Image, {
    src: "https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  })), /* @__PURE__ */ React.createElement(Card.Section, {
    inheritPadding: true,
    mt: "sm",
    pb: "md"
  }, /* @__PURE__ */ React.createElement(SimpleGrid, {
    cols: 3
  }, images.map((image) => /* @__PURE__ */ React.createElement(Image, {
    src: image,
    key: image,
    radius: "sm"
  })))));
}
const section = __spreadProps(__spreadValues({}, demoBase), {
  type: "demo",
  component: Demo,
  code
});

export { section };
//# sourceMappingURL=Card.demo.section.js.map
