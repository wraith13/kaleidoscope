# Kaleidoscope Web Screen Saver

🌐 live site: https://wraith13.github.io/kaleidoscope/

## Introduction

Kaleidoscope Web Screen Saver is a web-based screen saver that displays kaleidoscope animations. Users can customize patterns and colors to create simple yet visually engaging animations. It works on various devices, including PCs, smartphones, and tablets, and supports fullscreen mode.

By increasing the number of layers, users can create even more beautiful and intricate visuals. However, please note that higher layer counts may also increase the computational load, which could affect performance on less powerful devices.

This software can be hosted and shared using GitHub Pages, making it easy to use for personal enjoyment or demonstrations.

## Feature

- Kaleidoscope Animation with customizable patterns and colors
- Color spaces: sRGB, Display P3, Rec. 2020
- Patterns (powered by [flounder.style.js](https://github.com/wraith13/flounder.style.js)): Lines, Spots, Multi
- Colorings: Monochrome, Primary Colors, Phi Colors (powered by [phi-colors](https://github.com/wraith13/phi-colors))
- Adjustable Layers: 1 - 97
- Cycle Span: 1s - 1h
- Fullscreen Support
- Multi-language Support: English, Japanese
- Device Compatibility: PCs, Smartphones, Tablets
- Keyboard Shortcuts Support for easier operation

## How to build

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm (Node Package Manager)

### Steps

1. Install dependencies:
   ```sh
   npm install
   ```
2. Build the project:
   ```sh
   npm run-script "build all"
   ```

## Files

|path|description|
|---|---|
|[`./build.json`](./build.json)|Build settings|
|[`./index.html`](./index.html)|Generated file for GitHub Pages deployment|
|[`./index.html.template`](./index.html.template)|HTML template|
|[`./resource/*.json`](./resource/)|JSON files for configuration or data|
|[`./style/*.scss`](./style/)|Style source files|
|[`./script/*.ts`](./script/)|Script source files|
|[`./image/*.*`](./image/)|Image files used in the project|

## Powered by

- [build.js](https://github.com/wraith13/build.js)
- [evil-commonjs](https://github.com/wraith13/evil-commonjs)
- [evil-timer.js](https://github.com/wraith13/evil-timer.js)
- [flounder.style.js](https://github.com/wraith13/flounder.style.js)
- [phi-colors](https://github.com/wraith13/phi-colors)

## License

[Boost Software License](./LICENSE_1_0.txt)
