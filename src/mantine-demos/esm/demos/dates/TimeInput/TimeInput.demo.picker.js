import React, { useRef } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

const code = `
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>();

  return (
    <TimeInput
      label="Click click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  const ref = useRef();
  return /* @__PURE__ */ React.createElement(TimeInput, {
    label: "Click click icon to show browser picker",
    ref,
    rightSection: /* @__PURE__ */ React.createElement(ActionIcon, {
      onClick: () => ref.current.showPicker()
    }, /* @__PURE__ */ React.createElement(IconClock, {
      size: "1rem",
      stroke: 1.5
    })),
    maw: 400,
    mx: "auto"
  });
}
const picker = {
  type: "demo",
  component: Demo,
  code
};

export { picker };
//# sourceMappingURL=TimeInput.demo.picker.js.map
