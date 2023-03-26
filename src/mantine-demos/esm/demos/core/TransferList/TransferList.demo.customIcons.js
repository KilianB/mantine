import React from 'react';
import { IconFileMinus, IconFilePlus, IconFolderMinus, IconFolderPlus } from '@tabler/icons-react';
import { Wrapper } from './_wrapper.js';

const code = `
import {
  IconFilePlus,
  IconFolderPlus,
  IconFileMinus,
  IconFolderMinus,
} from '@tabler/icons-react';
import { TransferList } from '@mantine/core';

function Demo() {
  return (
    <TransferList
      transferIcon={({ reversed }) => (reversed ? <IconFileMinus /> : <IconFilePlus />)}
      transferAllIcon={({ reversed }) => (reversed ? <IconFolderMinus /> : <IconFolderPlus />)}
      {/* ...other props */}
    />
  )
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here",
    titles: ["Frameworks", "Libraries"],
    breakpoint: "sm",
    transferIcon: ({ reversed }) => reversed ? /* @__PURE__ */ React.createElement(IconFileMinus, null) : /* @__PURE__ */ React.createElement(IconFilePlus, null),
    transferAllIcon: ({ reversed }) => reversed ? /* @__PURE__ */ React.createElement(IconFolderMinus, null) : /* @__PURE__ */ React.createElement(IconFolderPlus, null)
  });
}
const customIcons = {
  type: "demo",
  component: Demo,
  code
};

export { customIcons };
//# sourceMappingURL=TransferList.demo.customIcons.js.map
