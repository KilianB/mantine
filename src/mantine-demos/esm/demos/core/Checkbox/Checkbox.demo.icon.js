import React from 'react';
import { IconRadioactive, IconBiohazard } from '@tabler/icons-react';
import { Checkbox } from '@mantine/core';

const code = `
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, className }) =>
  indeterminate ? <IconRadioactive className={className} /> : <IconBiohazard className={className} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;
const CheckboxIcon = ({
  indeterminate,
  className
}) => indeterminate ? /* @__PURE__ */ React.createElement(IconRadioactive, {
  className
}) : /* @__PURE__ */ React.createElement(IconBiohazard, {
  className
});
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Checkbox, {
    icon: CheckboxIcon,
    label: "Custom icon",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    icon: CheckboxIcon,
    label: "Custom icon: indeterminate",
    indeterminate: true,
    mt: "sm"
  }));
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=Checkbox.demo.icon.js.map
