## Install
```
$ npm install -g webpack
$ npm install -g webpack-dev-server
$ npm install -g electron
$ npm install -g electron-packager
$ npm install -g typescript
````

## Build
```
$ npm run build  // Use webpack to build a production version of the JS bundle
$ npm run package // Use electron-packager to build production versions of your electron app for all platforms
```

## Wine
To build a production version of your electron app for all platforms, you will need Wine in your PATH, for OSX you can
install wine via homebrew in a few easy steps.

```
$ brew update
$ brew cask install xquartz
$ brew install wine
```

## Run
```
$ npm run watch // Use this to complie your code for electron
$ npm start // Use this to start your electron app
$ npm run serve // Use this to run a dev server on port 8080 and develop for the browser
```
