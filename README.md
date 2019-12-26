# CTSConverter
Transfer [nn (tag: android-cts-10.0_r2)](https://android.googlesource.com/platform/frameworks/ml/+/refs/tags/android-cts-10.0_r2) test case to [webml](https://github.com/intel/webml-polyfill) test case

## Prerequisites
* Need `python3`

## Start

### create `cts-all.js` into `./output`, this file include nn and plus test case

```shell
$ npm start
```

### get more information for command line

```shell
$ npm run info
```

```shell
-h, --help            show this help message and exit
-a, --all             [option] '-a [file directory]', create all test file
-t, --transfer        [option] '-t [transfer directory]', transfer nn test file
-c, --cts             [option] '-c [cts directory]', include cts test file
-s, --supplement      [option] '-s [supplement directory]', include supplement test file
-p, --plus            [option] '-p [plus directory]', include plus test file
```

## Example

1. Transfer nn test cases from `./src/nn/specs` and output into `./output/cts`.

```shell
$ python3 ./src/main.py -t ./src/nn/specs
```

2. Create all test case file as `cts_supplement-all.js` from `./test_supplement`.

```shell
$ python3 ./src/main.py -s ./test_supplement -a ./output/cts_supplement-all.js
```

3. Transfer nn test cases from `./src/nn/specs` and create all test case file as `cts-all.js` that include cts and plus test case.

```shell
$ python3 ./src/main.py -t ./src/nn/specs -c ./output/cts -p ./V1_0_plus -a ./output/cts-all.js
```

4. Create all test case file as `all-cts-supplement-plus.js` that include cts and supplement and plus test case.

```shell
$ python3 ./src/main.py -c ./output/cts -s ./test_supplement -p ./V1_0_plus -a ./output/all-cts-supplement-plus.js
```
