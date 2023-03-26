import React, { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight';
import { IconSearch, IconAlien } from '@tabler/icons-react';
import { actions } from './_actions.js';

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
  const [registered, setRegistered] = useState(false);
  const spotlight = useSpotlight();
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: spotlight.openSpotlight
  }, "Open spotlight"), registered ? /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    color: "red",
    onClick: () => {
      setRegistered(false);
      spotlight.removeActions(["secret-action-1", "secret-action-2"]);
    }
  }, "Remove extra actions") : /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setRegistered(true);
      spotlight.registerActions([
        {
          id: "secret-action-1",
          title: "Secret action",
          description: "It was registered with a button click",
          icon: /* @__PURE__ */ React.createElement(IconAlien, {
            size: "1.2rem"
          }),
          onTrigger: () => console.log("Secret")
        },
        {
          id: "secret-action-2",
          title: "Another secret action",
          description: "You can register multiple actions with just one command",
          icon: /* @__PURE__ */ React.createElement(IconAlien, {
            size: "1.2rem"
          }),
          onTrigger: () => console.log("Secret")
        }
      ]);
    }
  }, "Register extra actions"));
}
function Demo() {
  const [_actions, setActions] = useState(actions);
  return /* @__PURE__ */ React.createElement(SpotlightProvider, {
    actions: _actions,
    onActionsChange: setActions,
    searchIcon: /* @__PURE__ */ React.createElement(IconSearch, {
      size: "1.2rem"
    }),
    shortcut: "mod + shift + C",
    searchPlaceholder: "Search..."
  }, /* @__PURE__ */ React.createElement(SpotlightControls, null));
}
const register = {
  type: "demo",
  component: Demo,
  code
};

export { Demo, register };
//# sourceMappingURL=Spotlight.demo.register.js.map
