import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
<TransferList transferAllMatchingFilter />
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    transferAllMatchingFilter: true
  });
}
const transferAllMatchingFilter = {
  type: "demo",
  component: Demo,
  code
};

export { transferAllMatchingFilter };
//# sourceMappingURL=TransferList.demo.transferAllMatchingFilter.js.map
