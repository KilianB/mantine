import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
function Demo() {
  return (
    <TransferList
      nothingFound="Nothing found"
      placeholder="No item left"
      {/* ...other props */}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    nothingFound: "Nothing found",
    placeholder: "No item left",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm"
  });
}
const placeholder = {
  type: "demo",
  component: Demo,
  code
};

export { placeholder };
//# sourceMappingURL=TransferList.demo.placeholder.js.map
