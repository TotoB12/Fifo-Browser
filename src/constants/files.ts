/* Copyright (c) 2021-2022 SnailDOS */

import { DEFAULT_SETTINGS } from './settings';

export const DIRECTORIES = ['adblock', 'extensions', 'storage'];

export const WEBUI_PROTOCOL = 'totob12';

export const ERROR_PROTOCOL = 'totob12-error';

export const NETWORK_ERROR_HOST = 'network-error';

export const WEBUI_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4444/'
    : `${WEBUI_PROTOCOL}://`;

export const WEBUI_URL_SUFFIX = WEBUI_BASE_URL.startsWith('http')
  ? '.html'
  : '';

export const FILES = {
  'settings.json': DEFAULT_SETTINGS,
  'window-data.json': {},
};
