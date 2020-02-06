🧱 FingerprintJS Pro + Rollup.js example
========================================

A simple example to get started with [FingerprintJS Pro](https://www.npmjs.com/package/@fp-pro/client) and [Rollup.js](https://rollupjs.org/guide/en/).

It will create a single minified JS file that has FingerprintJS Pro bundled in it.

To get started, make sure you have `yarn` installed.
Once you have it installed, follow these steps:



1. Install all dependencies: `yarn install`.
2. Replace the `token` with your FingerprintJS Pro token in `index.js`.
2. Build the bundle: `yarn build`.
3. Start the webserver in the directory: `python3 -m http.server`
   _starting a server requires that you have Python3 installed and available in $PATH_
4. Open your browser and go to `http://localhost:8000`
5. Open browser console and see the response in it.

The code is MIT licensed (see license file).

Copyright (c) 2020 FingerprintJS Pro.