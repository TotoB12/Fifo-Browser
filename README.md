<div align="center">
  <a href="https://totob12.com"><img src="https://github.com/TotoB12/TotoB12-Browser/blob/main/static/icons/icon.png" width="256"></a>  
</div>
<div align="center">  
  <h1>TotoB12 Browser</h1>

  [![Build CI](https://github.com/TotoB12/TotoB12-Browser/actions/workflows/build.yml/badge.svg)](https://github.com/totob12/TotoB12-Browser/actions/workflows/build.yml)

TotoB12 is a modern web browser, built on top of modern web technologies such as `Electron` and `React` that is mean't to be secure. This browser is meant for office work, gaming, research and is a secure private browser. TotoB12 aims to be cross platform.

# Features

- **AntiAd** - Browse the web without any ads and don't let websites to track you. Thanks to the 'AntiAd' (TotoB12 Service) powered by [Cliqz](https://github.com/cliqz-oss/adblocker), websites can load even 8 times faster!
- **Chromium without Google services and low resources usage** - Since TotoB12 uses Electron under the hood which is based on only several and the most important Chromium components, it's not bloated with redundant Google tracking services and others.
- **Fast and fluent UI** - The animations are really smooth and their timings are perfectly balanced.
- **Highly customizable new tab page** - Customize almost an every aspect of the new tab page!
- **Customizable browser UI** - Choose whether TotoB12 should have compact or normal UI.
- **Tab groups** - Easily group tabs, so it's hard to get lost.
- **Scrollable tabs** - Scroll between your tabs.
- **Support Chrome extensions** - From version < 1.2.0 80% of chrome extenions are compatible and work with TotoB12.

## Other basic features

- Downloads popup with currently downloaded items
- History manager
- Simple menu
- Perfect Incognito Mode!
- Bookmarks bar & manager
- Settings
- Find in page
- Dark and light theme
- Omnibox with autocomplete algorithm similar to Chromium
- State of the art tab system
- Newest code
- Optimization
- Extensions
- Updates
- Security Security SECURITY!

# Downloads
- [Stable Versions](https://github.com/TotoB12/TotoB12-Browser/releases)

# Development

## Running (Development)

Before running TotoB12, please ensure you have **latest** [`Node.js`](https://nodejs.org/en/) and [`YARN`] installed on your machine. 
NPM is not **not** supported with the TotoB12 Project. You **need** to use the latest v2/v3 release of Yarn.

### Windows

Make sure you have build tools installed. You can install them by running this command as **administrator**:

```bash
$ npm i -g windows-build-tools
```

Yarn:
You need to ensure you have the latest version of YARN. (Yarn Berry)
```bash
$ yarn install # Install node modules
$ yarn build # Compile TotoB12 code and rebuild modules.
$ yarn dev # Run TotoB12 in development mode
```

NPM: No longer supported

### More commands

```bash
$ yarn compile-win32 # Package TotoB12 for Windows
$ yarn compile-linux # Package TotoB12 for Linux
$ yarn compile-darwin # Package TotoB12 for macOS
$ yarn lint # Runs linter
$ yarn lint-fix # Runs linter and automatically applies fixes
$ yarn copyright # Generates auto headers for copyright.
```

More commands can be found in [`package.json`](package.json).

## Running (Without Development Mode (Stable))

Before running TotoB12, please ensure you have **latest** [`Node.js`](https://nodejs.org/en/) and [`YARN`] installed on your machine. You can use NPM but it IS NOT recommended.

### Windows

Make sure you have build tools installed. You can install them by running this command as **administrator**:

```bash
$ npm i -g windows-build-tools
```

Yarn:
```bash
$ yarn install # Install node modules
$ yarn build # Compile TotoB12 code and rebuild modules.
$ yarn start # Run TotoB12 in development mode
```

NPM: Not recommended
```bash
$ npm install --save --legacy-peer-deps # Install needed depedencies. If you can, please, use yarn install.
$ npm run build # Compile TotoB12 code and rebuild modules.
$ npm run start # Run TotoB12 in development mode
```

# Documentation

Guides and the API reference are located in [`docs`](docs) directory.

</div>
