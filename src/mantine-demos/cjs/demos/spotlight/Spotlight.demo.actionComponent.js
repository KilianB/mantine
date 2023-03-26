'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _wrapper = require('./_wrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
import { createStyles, UnstyledButton, Group, Text, Image, Center, Badge, rem } from '@mantine/core';
import { SpotlightProvider, SpotlightAction, SpotlightActionProps } from '@mantine/spotlight';

const actions: SpotlightAction[] = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    title: 'Bender Bending Rodr\xEDguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    new: true,
    onTrigger: () => {},
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    title: 'Carol Miller',
    description: 'One of the richest people on Earth',
    new: false,
    onTrigger: () => {},
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    title: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    new: false,
    onTrigger: () => {},
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    title: 'Spongebob Squarepants',
    description: 'Not just a sponge',
    new: false,
    onTrigger: () => {},
  },
];

const useStyles = createStyles((theme) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: \`\${rem(10)} \${rem(12)}\`,
    borderRadius: theme.radius.sm,
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    }),

    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },
  },
}));

function CustomAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  ...others
}: SpotlightActionProps) {
  const { classes } = useStyles(null, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton
      className={classes.action}
      data-hovered={hovered || undefined}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Group noWrap>
        {action.image && (
          <Center>
            <Image src={action.image} alt={action.title} width={50} height={50} />
          </Center>
        )}

        <div style={{ flex: 1 }}>
          <Text>{action.title}</Text>

          {action.description && (
            <Text color="dimmed" size="xs">
              {action.description}
            </Text>
          )}
        </div>

        {action.new && <Badge>new</Badge>}
      </Group>
    </UnstyledButton>
  );
}

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      actionComponent={CustomAction}
      searchPlaceholder="Search..."
      shortcut="mod + shift + I"
    >
      <App />
    </SpotlightProvider>
  );
}
`;
const actions = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    title: "Bender Bending Rodr\xEDguez",
    description: "Fascinated with cooking, though has no sense of taste",
    new: true,
    onTrigger: () => {
    }
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    title: "Carol Miller",
    description: "One of the richest people on Earth",
    new: false,
    onTrigger: () => {
    }
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    title: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
    new: false,
    onTrigger: () => {
    }
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    title: "Spongebob Squarepants",
    description: "Not just a sponge",
    new: false,
    onTrigger: () => {
    }
  }
];
const useStyles = core.createStyles((theme) => ({
  action: __spreadProps(__spreadValues({
    position: "relative",
    display: "block",
    width: "100%",
    padding: `${core.rem(10)} ${core.rem(12)}`,
    borderRadius: theme.radius.sm
  }, theme.fn.hover({
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
  })), {
    "&[data-hovered]": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }
  })
}));
function CustomAction(_a) {
  var _b = _a, {
    action,
    styles,
    classNames,
    hovered,
    onTrigger
  } = _b, others = __objRest(_b, [
    "action",
    "styles",
    "classNames",
    "hovered",
    "onTrigger"
  ]);
  const { classes } = useStyles(null, { styles, classNames, name: "Spotlight" });
  return /* @__PURE__ */ React__default.createElement(core.UnstyledButton, __spreadValues({
    className: classes.action,
    "data-hovered": hovered || void 0,
    tabIndex: -1,
    onMouseDown: (event) => event.preventDefault(),
    onClick: onTrigger
  }, others), /* @__PURE__ */ React__default.createElement(core.Group, {
    noWrap: true
  }, action.image && /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: action.image,
    alt: action.title,
    width: 50,
    height: 50
  })), /* @__PURE__ */ React__default.createElement("div", {
    style: { flex: 1 }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, action.title), action.description && /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "xs"
  }, action.description)), action.new && /* @__PURE__ */ React__default.createElement(core.Badge, null, "new")));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_wrapper.Wrapper, {
    actions,
    actionComponent: CustomAction,
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + I",
    buttonLabel: "Open spotlight"
  });
}
const actionComponent = {
  type: "demo",
  component: Demo,
  code
};

exports.actionComponent = actionComponent;
//# sourceMappingURL=Spotlight.demo.actionComponent.js.map
