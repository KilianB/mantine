import React from 'react';
import { IconSettings, IconMessageCircle, IconPhoto } from '@tabler/icons-react';
import { Tabs, rem } from '@mantine/core';

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
import { Tabs, TabsProps, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: \`\${rem(1)} solid \${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}\`,
          padding: \`\${theme.spacing.xs} \${theme.spacing.md}\`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}

function Demo() {
  return (
    <StyledTabs>
      <Tabs.List>
        <Tabs.Tab value="settings" icon={<IconSettings size="1rem" />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="1rem" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="1rem" />}>
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </StyledTabs>
  );
}
`;
function StyledTabs(props) {
  return /* @__PURE__ */ React.createElement(Tabs, __spreadValues({
    unstyled: true,
    styles: (theme) => ({
      tab: __spreadProps(__spreadValues({}, theme.fn.focusStyles()), {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
        border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[4]}`,
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        cursor: "pointer",
        fontSize: theme.fontSizes.sm,
        display: "flex",
        alignItems: "center",
        "&:disabled": {
          opacity: 0.5,
          cursor: "not-allowed"
        },
        "&:not(:first-of-type)": {
          borderLeft: 0
        },
        "&:first-of-type": {
          borderTopLeftRadius: theme.radius.md,
          borderBottomLeftRadius: theme.radius.md
        },
        "&:last-of-type": {
          borderTopRightRadius: theme.radius.md,
          borderBottomRightRadius: theme.radius.md
        },
        "&[data-active]": {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.white
        }
      }),
      tabIcon: {
        marginRight: theme.spacing.xs,
        display: "flex",
        alignItems: "center"
      },
      tabsList: {
        display: "flex"
      }
    })
  }, props));
}
function Demo() {
  return /* @__PURE__ */ React.createElement(StyledTabs, {
    defaultValue: "settings"
  }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "settings",
    icon: /* @__PURE__ */ React.createElement(IconSettings, {
      size: "1rem"
    })
  }, "Settings"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "messages",
    icon: /* @__PURE__ */ React.createElement(IconMessageCircle, {
      size: "1rem"
    })
  }, "Messages"), /* @__PURE__ */ React.createElement(Tabs.Tab, {
    value: "gallery",
    icon: /* @__PURE__ */ React.createElement(IconPhoto, {
      size: "1rem"
    })
  }, "Gallery")));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

export { stylesApi };
//# sourceMappingURL=Tabs.demo.stylesApi.js.map
