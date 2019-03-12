# nnTestTransfer
Transfer [nn](https://android.googlesource.com/platform/frameworks/ml) test case to [webml](https://github.com/intel/webml-polyfill) test case

## Prerequisites
* Need `python3`

## Start

### transfer CTS test cases and create `cts-all.js` into `./output`

```sh
$ npm start
```

### scan test supplement directory and create `supplement-all.js` into `./output`

```sh
$ npm run supplement
```

### scan test plus directory and create `plus-all.js` into `./output`

```sh
$ npm run plus
```
