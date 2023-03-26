import React from 'react';
import { Pagination } from '@mantine/core';

const code = `
import { Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
          },
        },
      })}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Pagination, {
    total: 10,
    position: "center",
    styles: (theme) => ({
      control: {
        "&[data-active]": {
          backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" })
        }
      }
    })
  });
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

export { stylesApi };
//# sourceMappingURL=Pagination.demo.stylesApi.js.map
