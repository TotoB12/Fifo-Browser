/* Copyright (c) 2021-2022 SnailDOS */

import {
  lightTheme,
  darkTheme,
  amoledTheme,
  blueTheme,
  lavTheme,
} from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'wexond-light') return lightTheme;
  else if (name === 'wexond-dark') return darkTheme;
  else if (name === 'totob12-blue') return blueTheme;
  else if (name === 'totob12-lavender') return lavTheme;
  else if (name === 'totob12-amoled') return amoledTheme;
  return darkTheme;
};
