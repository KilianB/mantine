import React from 'react';
import { Group, Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const code = `
import { Group, Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    renderDay: (date) => {
      const day = date.getDate();
      return /* @__PURE__ */ React.createElement(Indicator, {
        size: 6,
        color: "red",
        offset: -5,
        disabled: day !== 16
      }, /* @__PURE__ */ React.createElement("div", null, day));
    }
  }));
}
const renderDay = {
  type: "demo",
  component: Demo,
  code
};

export { renderDay };
//# sourceMappingURL=DatePicker.demo.renderDay.js.map
