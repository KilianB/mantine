import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Col span="content">fit content</Col>
      <Col span={6}>2</Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, {
    span: "content"
  }, "fit content"), /* @__PURE__ */ React.createElement(ColWrapper, {
    span: 6
  }, "2"));
}
const content = {
  type: "demo",
  code,
  component: Demo
};

export { content };
//# sourceMappingURL=Grid.demo.content.js.map
