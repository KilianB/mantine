import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={2} orderSm={1} orderLg={3}>2</Grid.Col>
      <Grid.Col span={3} order={3} orderSm={1} orderLg={2}>3</Grid.Col>
      <Grid.Col span={3} order={1} orderSm={3} orderLg={1}>1</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 3,
    order: 2,
    orderSm: 1,
    orderLg: 3
  }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 3,
    order: 3,
    orderSm: 1,
    orderLg: 2
  }, "3"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 3,
    order: 1,
    orderSm: 3,
    orderLg: 1
  }, "1"));
}
const order = {
  type: "demo",
  code,
  component: Demo
};

export { order };
//# sourceMappingURL=Grid.demo.order.js.map
