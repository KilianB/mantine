import React from 'react';
import { rem, Slider } from '@mantine/core';
import styled from '@emotion/styled';

const code = `
import { Slider } from '@mantine/core';
import styled from '@emotion/styled';

const StyledSlider = styled(Slider)\`
  & .mantine-Slider-bar {
    background-color: pink;
  }

  & .mantine-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${rem(24)};
    height: ${rem(24)};
  }
\`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}
`;
const StyledSlider = styled(Slider)`
  & .mantine-Slider-bar {
    background-color: pink;
  }

  & .mantine-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${rem(24)};
    height: ${rem(24)};
  }
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(StyledSlider, {
    defaultValue: 40
  });
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

export { stylesApi };
//# sourceMappingURL=Styled.demo.stylesApi.js.map
