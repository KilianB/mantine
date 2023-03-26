import React from 'react';
import { Group, Box, NavLink, Badge } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconCircleOff, IconActivity } from '@tabler/icons-react';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Box, {
    w: 240
  }, /* @__PURE__ */ React.createElement(NavLink, {
    label: "With icon",
    icon: /* @__PURE__ */ React.createElement(IconHome2, {
      size: "1rem",
      stroke: 1.5
    })
  }), /* @__PURE__ */ React.createElement(NavLink, {
    label: "With right section",
    icon: /* @__PURE__ */ React.createElement(IconGauge, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React.createElement(IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    })
  }), /* @__PURE__ */ React.createElement(NavLink, {
    label: "Disabled",
    icon: /* @__PURE__ */ React.createElement(IconCircleOff, {
      size: "1rem",
      stroke: 1.5
    }),
    disabled: true
  }), /* @__PURE__ */ React.createElement(NavLink, {
    label: "With description",
    description: "Additional information",
    icon: /* @__PURE__ */ React.createElement(Badge, {
      size: "xs",
      variant: "filled",
      color: "red",
      w: 16,
      h: 16,
      p: 0
    }, "3")
  }), /* @__PURE__ */ React.createElement(NavLink, {
    label: "Active subtle",
    icon: /* @__PURE__ */ React.createElement(IconActivity, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React.createElement(IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    }),
    variant: "subtle",
    active: true
  }), /* @__PURE__ */ React.createElement(NavLink, {
    label: "Active light",
    icon: /* @__PURE__ */ React.createElement(IconActivity, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React.createElement(IconChevronRight, {
      size: "0.8rem",
      stroke: 1.5
    }),
    active: true
  }), /* @__PURE__ */ React.createElement(NavLink, {
    label: "Active filled",
    icon: /* @__PURE__ */ React.createElement(IconActivity, {
      size: "1rem",
      stroke: 1.5
    }),
    rightSection: /* @__PURE__ */ React.createElement(IconChevronRight, {
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

export { usage };
//# sourceMappingURL=NavLink.demo.usage.js.map
