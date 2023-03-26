'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var spotlight = require('@mantine/spotlight');
var iconsReact = require('@tabler/icons-react');
var _actions = require('./_actions.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import { IconAlien, IconSearch } from '@tabler/icons-react';

function SpotlightControls() {
  const [registered, setRegistered] = useState(false);

  return (
    <Group position="center">
      <Button onClick={spotlight.open}>Open spotlight</Button>
      {registered ? (
        <Button
          variant="outline"
          color="red"
          onClick={() => {
            setRegistered(false);
            spotlight.removeActions(['secret-action-1', 'secret-action-2']);
          }}
        >
          Remove extra actions
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => {
            setRegistered(true);
            spotlight.registerActions([
              {
                id: 'secret-action-1',
                title: 'Secret action',
                description: 'It was registered with a button click',
                icon: <IconAlien size="1.2rem" />,
                onTrigger: () => console.log('Secret'),
              },
              {
                id: 'secret-action-2',
                title: 'Another secret action',
                description: 'You can register multiple actions with just one command',
                icon: <IconAlien size="1.2rem" />,
                onTrigger: () => console.log('Secret'),
              },
            ]);
          }}
        >
          Register extra actions
        </Button>
      )}
    </Group>
  );
}

export function Demo() {
  // It is required to store actions in state for register/remove functions to work
  const [actions, setActions] = useState([/* ... see in previous demos */]);

  return (
    <SpotlightProvider
      actions={actions}
      onActionsChange={setActions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + C"
    >
      <SpotlightControls />
    </SpotlightProvider>
  );
}

`;
function SpotlightControls() {
  const [registered, setRegistered] = React.useState(false);
  const spotlight$1 = spotlight.useSpotlight();
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: spotlight$1.openSpotlight
  }, "Open spotlight"), registered ? /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    color: "red",
    onClick: () => {
      setRegistered(false);
      spotlight$1.removeActions(["secret-action-1", "secret-action-2"]);
    }
  }, "Remove extra actions") : /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline",
    onClick: () => {
      setRegistered(true);
      spotlight$1.registerActions([
        {
          id: "secret-action-1",
          title: "Secret action",
          description: "It was registered with a button click",
          icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconAlien, {
            size: "1.2rem"
          }),
          onTrigger: () => console.log("Secret")
        },
        {
          id: "secret-action-2",
          title: "Another secret action",
          description: "You can register multiple actions with just one command",
          icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconAlien, {
            size: "1.2rem"
          }),
          onTrigger: () => console.log("Secret")
        }
      ]);
    }
  }, "Register extra actions"));
}
function Demo() {
  const [_actions$1, setActions] = React.useState(_actions.actions);
  return /* @__PURE__ */ React__default.createElement(spotlight.SpotlightProvider, {
    actions: _actions$1,
    onActionsChange: setActions,
    searchIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, {
      size: "1.2rem"
    }),
    shortcut: "mod + shift + C",
    searchPlaceholder: "Search..."
  }, /* @__PURE__ */ React__default.createElement(SpotlightControls, null));
}
const register = {
  type: "demo",
  component: Demo,
  code
};

exports.Demo = Demo;
exports.register = register;
//# sourceMappingURL=Spotlight.demo.register.js.map
