import React from 'react';
import { Group, Rating } from '@mantine/core';

const code = `
import { Rating, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Rating value={3.5} fractions={2} readOnly />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Rating, {
    value: 3.5,
    fractions: 2,
    readOnly: true
  }));
}
const readOnly = {
  type: "demo",
  component: Demo,
  code
};

export { readOnly };
//# sourceMappingURL=Rating.demo.readOnly.js.map
