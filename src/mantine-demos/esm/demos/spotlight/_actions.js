import React from 'react';
import { IconHome, IconDashboard, IconFileText } from '@tabler/icons-react';

const actions = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: /* @__PURE__ */ React.createElement(IconHome, {
      size: "1.2rem"
    })
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: /* @__PURE__ */ React.createElement(IconDashboard, {
      size: "1.2rem"
    })
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: /* @__PURE__ */ React.createElement(IconFileText, {
      size: "1.2rem"
    })
  }
];

export { actions };
//# sourceMappingURL=_actions.js.map
