import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Wrapper } from './_wrapper.js';

const code = `
import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { SpotlightProvider, spotlight, SpotlightAction } from '@mantine/spotlight';

function SpotlightControl() {
  return (
    <Group position="center">
      <Button onClick={spotlight.open}>Open spotlight</Button>
    </Group>
  );
}


function Demo() {
  const [query, setQuery] = useState('');
  const actions: SpotlightAction[] =
    query !== '%%secret%%'
      ? [
          {
            title: 'Reveal secret actions',
            description: 'Click this action to reveal secret actions',
            onTrigger: () => setQuery('%%secret%%'),
            closeOnTrigger: false,
          },
        ]
      : [
          { title: 'Super secret action', keywords: '%%secret%%', onTrigger: () => {} },
          {
            title: 'Rick roll',
            description: 'Do not click',
            keywords: '%%secret%%',
            onTrigger: () => {
              window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            },
          },
        ];

  return (
    <SpotlightProvider
      actions={actions}
      query={query}
      onQueryChange={setQuery}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
}
`;
function Demo() {
  const [query, setQuery] = useState("");
  const actions = query !== "%%secret%%" ? [
    {
      title: "Reveal secret actions",
      description: "Click this action to reveal secret actions",
      onTrigger: () => setQuery("%%secret%%"),
      closeOnTrigger: false
    }
  ] : [
    { title: "Super secret action", keywords: "%%secret%%", onTrigger: () => {
    } },
    {
      title: "Rick roll",
      description: "Do not click",
      keywords: "%%secret%%",
      onTrigger: () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }
    }
  ];
  return /* @__PURE__ */ React.createElement(Wrapper, {
    actions,
    query,
    onQueryChange: setQuery,
    searchIcon: /* @__PURE__ */ React.createElement(IconSearch, {
      size: "1.2rem"
    }),
    searchPlaceholder: "Search...",
    shortcut: "mod + shift + 1",
    nothingFoundMessage: "Nothing found..."
  });
}
const controlledQuery = {
  type: "demo",
  component: Demo,
  code
};

export { controlledQuery };
//# sourceMappingURL=Spotlight.demo.controlledQuery.js.map
