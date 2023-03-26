'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Box maw={340} mx="auto">
      <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              withAsterisk
              label="Your password"
              placeholder="Your password"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}
`;
function PasswordRequirement({ meets, label }) {
  return /* @__PURE__ */ React__default.createElement(core.Text, {
    color: meets ? "teal" : "red",
    sx: { display: "flex", alignItems: "center" },
    mt: 7,
    size: "sm"
  }, meets ? /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
    size: "0.9rem"
  }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconX, {
    size: "0.9rem"
  }), " ", /* @__PURE__ */ React__default.createElement(core.Box, {
    ml: 10
  }, label));
}
const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
];
function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;
  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });
  return Math.max(100 - 100 / (requirements.length + 1) * multiplier, 10);
}
function Demo() {
  const [popoverOpened, setPopoverOpened] = React.useState(false);
  const [value, setValue] = React.useState("");
  const checks = requirements.map((requirement, index) => /* @__PURE__ */ React__default.createElement(PasswordRequirement, {
    key: index,
    label: requirement.label,
    meets: requirement.re.test(value)
  }));
  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 340,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Popover, {
    opened: popoverOpened,
    position: "bottom",
    width: "target",
    transitionProps: { transition: "pop" }
  }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement("div", {
    onFocusCapture: () => setPopoverOpened(true),
    onBlurCapture: () => setPopoverOpened(false)
  }, /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
    withAsterisk: true,
    label: "Your password",
    placeholder: "Your password",
    value,
    onChange: (event) => setValue(event.currentTarget.value)
  }))), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Progress, {
    color,
    value: strength,
    size: 5,
    mb: "xs"
  }), /* @__PURE__ */ React__default.createElement(PasswordRequirement, {
    label: "Includes at least 6 characters",
    meets: value.length > 5
  }), checks)));
}
const strengthMeter = {
  type: "demo",
  code,
  demoProps: { toggle: true },
  component: Demo
};

exports.strengthMeter = strengthMeter;
//# sourceMappingURL=PasswordInput.demo.strengthMeter.js.map
