# nnTestTransfer
Transfer [nn](https://android.googlesource.com/platform/frameworks/ml) test case to [webml](https://github.com/intel/webml-polyfill) test case

## Prerequisites
* Need `python3`

## Start

### create `cts-all.js` into `./output`, this file include nn and plus test case

```sh
$ npm start
```

### transfer nn test cases and create `nn-all.js` into `./output`

```sh
$ npm run nn
```

### scan supplement directory and create `supplement-all.js` into `./output`

```sh
$ npm run supplement
```

### scan plus directory and create `plus-all.js` into `./output`

```sh
$ npm run plus
```

### get more information for command line

```sh
$ npm run info
```
