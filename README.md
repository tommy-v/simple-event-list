# Response Event List <!-- omit in toc -->

This is a simple Calendar who displays a list of events.

Angular version: 9

- [Install](#install)
- [Run 🚀](#run-%f0%9f%9a%80)
  - [Run on other devices](#run-on-other-devices)
- [Build](#build)
- [Commit convention](#commit-convention)
- [Todo](#todo)
- [Styles](#styles)
- [API](#api)
- [Compatibility](#compatibility)

## Install

`npm i`

## Run 🚀

`npm start`

### Run on other devices

`ng serve --host <@IP>`

## Build

`ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Commit convention

*Angular commit convention*: https://github.com/angular/angular/blob/master/CONTRIBUTING.md

## Todo

- iPhone 5 pixel perfect format.
- Load more / pagination: need API update (limit & offset).
- Testing?
- Using the different image sizes.
- Better mocking system at: `src/app/core/services/calendar.service.ts`

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
