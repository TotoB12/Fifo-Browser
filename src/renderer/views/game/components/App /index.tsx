
/* Copyright (c) 2021-2022 TotoB12 */

import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';

export const App = observer(() => {
  return (
    <ThemeProvider theme={{ ...store.theme }}>
      <StyledApp
        visible={store.visible}
        onMouseEnter={() => store.stopHideTimer()}
        onMouseLeave={() => store.resetHideTimer()}
      >
        <iframe
          src="https://totob12.com/dino"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          width="100%"
          height="100%"
          scrolling="auto"
        />
      </StyledApp>
    </ThemeProvider>
  );
});
