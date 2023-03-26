'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge, Box, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <Box w={240}>
      <NavLink label="With icon" icon={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" icon={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        icon={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        icon={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 240
  }, /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "With icon",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconHome2, {
      size: "1rem",
      stroke: 1.5
    })
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "With right section",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconGauge, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    })
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Disabled",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleOff, {
      size: "1rem",
      stroke: 1.5
    }),
    disabled: true
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "With description",
    description: "Additional information",
    icon: /* @__PURE__ */ React__default.createElement(core.Badge, {
      size: "xs",
      variant: "filled",
      color: "red",
      w: 16,
      h: 16,
      p: 0
    }, "3")
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Active subtle",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconActivity, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    }),
    variant: "subtle",
    active: true
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Active light",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconActivity, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    }),
    active: true
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Active filled",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconActivity, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    }),
    variant: "filled",
    active: true
  })));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=NavLink.demo.usage.js.map
