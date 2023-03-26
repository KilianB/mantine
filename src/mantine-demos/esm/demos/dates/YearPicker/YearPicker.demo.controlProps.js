import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        getYearControlProps={(date) => {
          if (date.getFullYear() === new Date().getFullYear()) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getFullYear() === new Date().getFullYear() + 1) {
            return { disabled: true };
          }

          return {};
        }}
      />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(YearPicker, {
    value,
    onChange: setValue,
    getYearControlProps: (date) => {
      if (date.getFullYear() === new Date().getFullYear()) {
        return {
          sx: (theme) => ({
            color: theme.fn.primaryColor(),
            fontWeight: 700
          })
        };
      }
      if (date.getFullYear() === new Date().getFullYear() + 1) {
        return { disabled: true };
      }
      return {};
    }
  }));
}
const controlProps = {
  type: "demo",
  component: Demo,
  code
};

export { controlProps };
//# sourceMappingURL=YearPicker.demo.controlProps.js.map
