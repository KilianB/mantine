import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { defaultItems } from './_Item.js';

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(SimpleGrid, {
    cols: 4,
    spacing: "lg",
    id: "grid-breakpoints",
    breakpoints: [
      { maxWidth: "62rem", cols: 3, spacing: "md" },
      { maxWidth: "48rem", cols: 2, spacing: "sm" },
      { maxWidth: "36rem", cols: 1, spacing: "sm" }
    ]
  }, defaultItems);
}
const breakpoints = {
  type: "demo",
  component: Demo,
  code
};

export { breakpoints };
//# sourceMappingURL=SimpleGrid.demo.breakpoints.js.map
