import React from 'react';
import { Text, Code, Loader, MantineProvider } from '@mantine/core';

function Demo() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, null, "Loader: ", /* @__PURE__ */ React.createElement(Code, null, "oval")), /* @__PURE__ */ React.createElement(Loader, null), /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { loader: "bars" }
  }, /* @__PURE__ */ React.createElement(Text, {
    mt: "lg"
  }, "Loader: ", /* @__PURE__ */ React.createElement(Code, null, "bars")), /* @__PURE__ */ React.createElement(Loader, null)), /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { loader: "dots" }
  }, /* @__PURE__ */ React.createElement(Text, {
    mt: "lg"
  }, "Loader: ", /* @__PURE__ */ React.createElement(Code, null, "dots")), /* @__PURE__ */ React.createElement(Loader, null)));
}
const loader = {
  type: "demo",
  component: Demo
};

export { loader };
//# sourceMappingURL=Theme.demo.loader.js.map
