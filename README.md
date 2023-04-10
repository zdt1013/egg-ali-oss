# egg-ali-oss6

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ali-oss6.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ali-oss6
[travis-image]: https://img.shields.io/travis/zdt1013/egg-ali-oss6.svg?style=flat-square
[travis-url]: https://travis-ci.org/zdt1013/egg-ali-oss6
[codecov-image]: https://img.shields.io/codecov/c/github/zdt1013/egg-ali-oss6.svg?style=flat-square
[codecov-url]: https://codecov.io/github/zdt1013/egg-ali-oss6?branch=master
[david-image]: https://img.shields.io/david/zdt1013/egg-ali-oss6.svg?style=flat-square
[david-url]: https://david-dm.org/zdt1013/egg-ali-oss6
[snyk-image]: https://snyk.io/test/npm/egg-ali-oss6/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ali-oss6
[download-image]: https://img.shields.io/npm/dm/egg-ali-oss6.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ali-oss6

<!--
Description here.
-->

## Install

```bash
$ npm i egg-ali-oss6 --save
or
$ pnpm add egg-ali-oss6 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.aliOss = {
  enable: true,
  package: 'egg-ali-oss',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.aliOss = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/zdt1013/egg-ali-oss/issues).

## Thanks
[ali-oss](https://github.com/ali-sdk/ali-oss)

## License

[MIT](LICENSE)
