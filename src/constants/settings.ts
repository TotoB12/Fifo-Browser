/* Copyright (c) 2021-2022 SnailDOS */

import { ISettings } from '~/interfaces';
import { app } from 'electron';

export const DEFAULT_SEARCH_ENGINES = [
  {
    name: 'DuckDuckGo',
    url: 'https://duckduckgo.com/?q=%s',
    keywordsUrl: 'duckduckgo.com',
    keyword: 'duckduckgo.com',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACT1BMVEUAAAD/gFXfWjbeWTPfWDTeWDTeWDPfYDXfWDPeWTT/bUngWDPfWTPfWDPjWTfeWTTjWzPeWTTeWDPkelzrnojvr53ywLLibEvxuKj77en66OPyvq/urJrrm4XgYj/ws6P88/HvsqHjdFbfYT/jclP65uHywrThaUjmgmf88e/rmoTlfmLxuKnxvK7tpZLibk/mhWruqZf88e7////3187haEfpk3v43NX88u/rmoPgZELywbPgY0H1zsP88/DmgWX43NT87+zgZ0XvsaDoj3bf5e7Gz+D2+PvW3em2wtjks6nwt6fN1eT9+ffgZUP0yr/5+vzv8vehsM3H0OHrnonywLNkfaxRbqL3+ftVcaSKncDxuqvurZuntdB+k7r+/v/eWjPmdinumx3wnxvlcyrojXT//vb/99P/87z2v1r0rRb8ywz90gr6xQ7ha0v//vj+5nP90w/90Qr1shXpgyXeWzP+42X90AvxphnzqRjypxnsjSLhZi/+42T3uRLuq5n//O/2uyL0rxbriSLsjiHwoRr7yg3iaC7niW/icFHiZy7zrBf5whD3uhLumR3jdlf66uXqlH3zxrrYXDTdWTPso4/d8da136bq9uX99fPeXDjcWTSkhzxquEa4dznlf2PB5LRlvEZmvUeHyXNuvlVouUh7qkKohTzmg2ffXjv+/fzG5rpas0ZkvEajiDz54NrQ68dftU1atEZit06npl+ApUKrgjvzx7vp9uV3xFy24Kj4/Pb55N/eWTXdeVfus6H77+v44Nr44Nn54tz76uYtKC1GAAAAEnRSTlMABkeVv9nzGJbxB4L0xy7jLfK6UobZAAACRklEQVQ4y4VT9XsTQRC9aKMEJsnFrb0kTbDSoUWKF5eixa24HO4Eihco7i6Lu7u35Q/jbu/2uLQfH/PTzs7bmdk3bzhOM4PRZLZYrRazyWjgOlqJzQ5en5/n/T4v2G0l7cIOpysQDIUj0VgsGgmHggGX01H03B1PJFOloFppKpkoc+uSdPII6UwWdJbNpAVPZ+29pzyXh67duvfo+ReSz5V71BwOt5CrAOhViYi9BQ1RkRPcSh/OeDovXVRVVfdB7NuvP0PE0nEnLeBK1Mj+gIFIbdBghsgkXHIRWyBJ+xuCqg0dxjpNBmwSf/ZgrewNxxEjR8nx0WPGshSpoN3AGSFE/z8Ox7MUE+oYHyEwciZvmDoTESdNpvEpU6tZirDXxJmnRei5HnH6jJkyYNbsOQwQ8Zk5iz9Kz3MR582nGRZgPSxsWLR4CUDUb+GsfIwClrIOli1fsXLValFc0yBRwVs1wFolvG79BlGyjZs2b5G54rtoJaCSAraK27bv2FnYpdzJJcw+pUlQiNwtNuqGKjfJvgl7KGDvPnF/4cDBQ41Nh9VvMqLgiNLE0ebCseNNJ042M6IkqlMUUKcATukqUKq1YcFpCjijkxUdljzuDPXPUoA8+nPn9eNmgoELePHSZbxy9dr1Gzep6NJlTr3k4BbeJnfu3rv/gJCHRZKTRPtIEi08fvKUkGeEPCfkRZFoFdnXZOHlK0Jev3n77j35UCx7dXFqP376/OUr4rfvP362Wxy2er9aWtvaWlt+d1y9/y/vv9f/DzYRmYvARwKBAAAAAElFTkSuQmCC',
  },
  {
    name: 'Google',
    url: 'https://www.google.com/search?q=%s',
    keywordsUrl: 'http://google.com/complete/search?client=chrome&q=%s',
    keyword: 'google.com',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACDVBMVEUAAAD+/v7+/v79/f39/f39/f39/f39/f3+/v7+/v79/f39/f39/f39/f3+/v7////9/f39/f39/f39/f3+/v7+/v79/f39/f3+/v7+/v79/f39/f3////+/v79/f3////9/f3+/v7+/v79/f39/f39/f3+/v7////9/f3+/v79/f39/f39/f3////9/f3////+/v7////85uT1pZ7wdGrsVUjqRjjqRTfsU0bvcmj1oZr85OL85+XxgXjqRDbqQzXxf3b3urXrSz7rTD/4v7r1p6DyioHuZVn0m5P3tK73ta/0m5TuZlryjob//v7rSj3tXFD5zMj5y8fsWEzzlIz0kG3vbGH+8vL+9fT+9t37uQfxdyD98O7934b7vAX1kxXrSTT3uLP8zUb5riH/+/v7whz801lChfS/1fv7vQf93H2lxfqfwfn80liqyPr8zkfkwi76/fve6v3B1/v934iztSE8qFCw3byox/rn8P7+9t/2vAmGsDM0qFNGsGLs9+/z9/5UkPVgmfaPx4JcuXXw+fL6/P93p/epyPrm9Oo+rFtMsmfC5cza7+BjsahChfH2+f634MJUtm6Nzp+q2rer27iV0qVkvHs1qFQ3oHdBiePD2Pyj2LE1pWA+jsq54cQ+rFw3qVab0rHn9et7xo82qVRnvn7X7t2h169swIJJsWU4qlZGsGNlvX3Y7t5rzgcKAAAAMXRSTlMADlqcy+367Fknn/f2nSUKjfz7iwkm1dIkMuvqMAuKD/UNV5nI+VYMmiOH09AI6CIvZ7+SkQAAAe5JREFUOMtjYIADRiZmFlY2NnYWZg5GBkzAycVtCAc8vHxo0vwCgoYoQEhYBFleVMwQA4hLIOQlpcBCRsYmpmbmFpZW1mCutAxcP1jextbOHgrsHGzAKqBmyILNd3SyRwLOLmBbIO4QALFd7VGBG9gWObD/QO53hAi7e3h6efsAGb5+EL+ALOECOc8fJB0QCHF/UHAIzCvMDAzyoPAJBcmHhcOEI+B+VVBkYAJSkVHR9vamMYZYgBIDM5CMjYuLT0jEJm+ozMACJJPi4uKSU7AqUGFgBZKpQAVpUJF0BMgABRYDG5DMBCrIwlSQDeSq4lOQA1bADrUiF1NBHtgKkCPzgQoKCpHdVgRSUAx2JMibJXFxpWXlyAoqQAoqwd7kAJJV1TW1tXX1CPmGRqB8E4ilxsDIA6Saa4GgpRUm39YOMqADFNTqDAy8QLqzC6Siuwci39vXD5RvnABkagBjk08IyJhYCwaTJk+ZOm36jNqZs9LTZwOF2TRBCUIYpGtOLQqYOw8UCIZakCSvDWLPX4CsYOEikJiOLiRRSkiDeIuXLIXLL1sOEtHThyVrGbAKw84VK1etXrhm7bR1YK6eASJjSIhjRrSOPnLWEpETQpVm09JFy50SzAoIaQUNTSz5W1FJWUVaVVVaRVlNHSEKACBb24XRQm7rAAAAAElFTkSuQmCC',
  },
  {
    name: 'Bing',
    url: 'https://www.bing.com/search?q=%s',
    keywordsUrl: '',
    keyword: 'bing.com',
    icon: 'data:image/png;base64,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',
  },
  {
    name: 'Ecosia',
    url: 'https://www.ecosia.org/search?q=%s',
    keywordsUrl: '',
    keyword: 'ecosia.org',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAylJREFUOI1Nk01sVFUYhp9z7r1zO1NK25ShtkxmSqE0VisWf0KbatkQ0USnEhPiwh+SGgkkLowQ6EKKWGgTNi4ICxtQMNFEMG1iMBqURKNMgtYwtKkUq20tFFoYxjudmc7ce+5xgdZ+2zfPu3m/R7Ds9P44oGOoYg9uoQ2IACaaG1jWMDJwDNNMiCODS4xYgg90gqFP4nk7/a1dyOZWCFffD527MDYMX5+CRecCwtr6X4lYgnEv6ujGLeKNwzjeON/+keTjiTBKCxrLVxBfH+Op2jD68+OIy0NTWKV14sgghu7uBJMPdHXjDrGnj/6fL1NMvc71tM25+QaigRlGnRzvX5tjau4W255/CSPtVIjZa+097U1nhD4Qh0VH03uexO2zdP+imSpGsKTHm2suEK89Q8EvI6dWEJJTmIEXWBs7idnzMixmn5Yo9yjtO/hLC1p/qCCjwqw0XJ4ovcGW8DdkvBqUH8IWPp6Oks0P8fdCAv+ZLvAKb0vcQhvNm/ny+gwNpkQIjRQeu+pPYwnNWKYJV5sAGMJDimrS6S/QjY+DKrZItFrtV0boqBxgQ/Aeed8iaqeIhS4hhKZ5ZRJLuBS1yW+ZjdhGDuVeRVeWAyIi0WitIWQoDj/4Hg+HZpnIV7MnOcBsPgZA0EzRO/4Wxye3c2pyF8l0C4YGwJdI4yZz09glLVhinptuGbZUjOVqmMnHsKXDuZmdjGZrcVSQT+ceQ5mPIu7eBpiWBEouyl+/Y1XVc7wz2o/jBZFoTOFTai6QV2Us+JqQ9JBocn6OhppnYeRHMAOJ+zPm04p3z8rTsw77hq8SswMoLVgXvIMpFFeyayiVLvOuxyt1EQ5tfgS644C5VuJrKK/az4l9vNpUz7FNDzFRcMn6HqPZKq4srEbrAr8XinSti3KorQX94UEwjU+QYvLfV34RDP8jQlWvsbufW8EKvhr/k5FUGuVrNlSUsW19HfW2RA/0IKaTCQi0ir7BZTJ1d4L291LI9PFkp2RTB6yqASnh3h0YuQTffwYloRN47BZHl8n0v87bQShwCwdRbgdaPQBCIEQKI/ATpr0XA0Tv0BLzDxefVnicNn0wAAAAAElFTkSuQmCC',
  },
];

export const DEFAULT_SETTINGS: ISettings = {
  theme: 'wexond-dark',
  darkContents: false,
  shield: true,
  multrin: true,
  animations: true,
  bookmarksBar: true,
  suggestions: true,
  themeAuto: true,
  httpsEnforce: false,
  searchEngines: DEFAULT_SEARCH_ENGINES,
  searchEngine: 0,
  startupBehavior: {
    type: 'empty',
  },
  warnOnQuit: false,
  version: 7,
  downloadsDialog: false,
  downloadsPath: app
    ? app.getPath('downloads')
    : process.type !== 'browser' && process.type !== 'renderer'
      ? require('@electron/remote').app.getPath('downloads')
      : app
        ? app.getPath('downloads')
        : '',
  newtab: {
    news: false,
    weather: false,
  },
  doNotTrack: true,
  ignoreCertificate: false,
  autoplay: true,
  hardwareacceleration: true,
  globalPrivacyControl: true,
  topBarVariant: 'default',
  invisibleTabs: undefined,
  changelog: undefined,
};
