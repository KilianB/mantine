import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Group position="center">
      <Calendar
        getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          onClick: () => handleSelect(date),
        })}
      />
    </Group>
  );
}
`;
function Demo() {
  const [selected, setSelected] = useState([]);
  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, "date")));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Calendar, {
    getDayProps: (date) => ({
      selected: selected.some((s) => dayjs(date).isSame(s, "date")),
      onClick: () => handleSelect(date)
    })
  }));
}
const picker = {
  type: "demo",
  component: Demo,
  code
};

export { picker };
//# sourceMappingURL=Calendar.demo.picker.js.map
