# Response Event List <!-- omit in toc -->

Just a simple event list.

Angular version: 9

- [Install](#install)
- [Tests run ✅](#tests-run-)
- [Start the app 🚀](#start-the-app-)
  - [Run on other devices](#run-on-other-devices)
- [Build](#build)
- [Commit convention](#commit-convention)
- [Todo](#todo)
- [Styles](#styles)
- [API](#api)
- [Compatibility](#compatibility)
- [Live demo](#live-demo)

## Install

`npm i`

## Tests run ✅

`npm run test`

## Start the app 🚀

`npm start`

### Run on other devices

`ng serve --host <@IP>`

## Build

`ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Commit convention

*Angular commit convention*: https://github.com/angular/angular/blob/master/CONTRIBUTING.md

## Todo

- Load more / pagination: need API update (limit & offset).
- Testing?
- Using the different image sizes.
- Better mocking system at: `src/app/core/services/events.service.ts`

## Styles

For ease purpose, the global scss styles are centralized into `/src/styles` and imports in `/src/styles.scss`.

## API

`/docs/insomnia`

## Compatibility

- ✅Google Chrome
- ✅Firefox
- ✅Safari Desktop
- ✅Safari Mobile 📱
- ✅Edge 

## Live demo

https://events.thomasvdc.com
