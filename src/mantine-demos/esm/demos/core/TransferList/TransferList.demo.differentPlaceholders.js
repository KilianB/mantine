import React from 'react';
import { Wrapper } from './_wrapper.js';

const code = `
function Demo() {
  return (
    <TransferList
      searchPlaceholder={['Search item to add...', 'Search item to remove...']}
      nothingFound={['Cannot find item to add', 'Cannot find item to remove']}
      placeholder={['No item left to add', 'No item left ro remove']}
      {/* ...other props */}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: ["Search item to add...", "Search item to remove..."],
    nothingFound: ["Cannot find item to add", "Cannot find item to remove"],
    placeholder: ["No item left to add", "No item left ro remove"],
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm"
  });
}
const differentPlaceholders = {
  type: "demo",
  component: Demo,
  code
};

export { differentPlaceholders };
//# sourceMappingURL=TransferList.demo.differentPlaceholders.js.map
