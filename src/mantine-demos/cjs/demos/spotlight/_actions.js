'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const actions = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconHome, {
      size: "1.2rem"
    })
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconDashboard, {
      size: "1.2rem"
    })
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconFileText, {
      size: "1.2rem"
    })
  }
];

exports.actions = actions;
//# sourceMappingURL=_actions.js.map
