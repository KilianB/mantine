import React from 'react';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Text, Affix, rem, Transition, Button } from '@mantine/core';

const code = `
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, {
    align: "center"
  }, "Affix is located at the bottom of the screen, scroll to see it"), /* @__PURE__ */ React.createElement(Affix, {
    position: { bottom: rem(20), right: rem(20) }
  }, /* @__PURE__ */ React.createElement(Transition, {
    transition: "slide-up",
    mounted: scroll.y > 0
  }, (transitionStyles) => /* @__PURE__ */ React.createElement(Button, {
    leftIcon: /* @__PURE__ */ React.createElement(IconArrowUp, {
      size: "1rem"
    }),
    style: transitionStyles,
    onClick: () => scrollTo({ y: 0 })
  }, "Scroll to top"))));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Affix.demo.usage.js.map
