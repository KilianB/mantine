import React from 'react';
import { Group, Button } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';

function SpotlightControl({ buttonLabel }) {
  const spotlight = useSpotlight();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: spotlight.openSpotlight
  }, buttonLabel || "Open spotlight"));
}

export { SpotlightControl };
//# sourceMappingURL=_control.js.map
