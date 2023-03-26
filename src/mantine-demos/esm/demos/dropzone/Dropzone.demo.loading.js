import React from 'react';
import { BaseDemo } from './_base.js';

const code = `
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(BaseDemo, {
    loading: true
  });
}
const loading = {
  type: "demo",
  component: Demo,
  code
};

export { loading };
//# sourceMappingURL=Dropzone.demo.loading.js.map
