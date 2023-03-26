import React from 'react';
import { Group, Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import { Group, Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar
        static
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
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
  }, /* @__PURE__ */ React.createElement(Calendar, {
    static: true,
    renderDay: (date) => {
      const day = date.getDate();
      return /* @__PURE__ */ React.createElement(Indicator, {
        size: 6,
        color: "red",
        offset: -2,
        disabled: day !== 16
      }, /* @__PURE__ */ React.createElement("div", null, day));
    }
  }));
}
const isStatic = {
  type: "demo",
  component: Demo,
  code
};

export { isStatic };
//# sourceMappingURL=Calendar.demo.isStatic.js.map
