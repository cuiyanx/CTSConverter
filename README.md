# CTSConverter
Transfer [nn (tag: android-cts-10.0_r2)](https://android.googlesource.com/platform/frameworks/ml/+/refs/tags/android-cts-10.0_r2) test case to [webml](https://github.com/intel/webml-polyfill) test case

## Prerequisites
* Need `python3`

## Start

Transfer nn test case into `./output/cts`

```shell
$ npm start
```

## Update or create combine test files

Update or create `./output/cts-all.js` and `./test_supplement/cts_supplement-all.js` files.
`./output/cts-all.js` includes test cases in `./output/cts` directory and its sub directory and `./V1_0_plus` directory, `./test_supplement/cts_supplement-all.js` includes test cases in `./test_supplement` directory.

```shell
$ npm run combine
```

## Get more information for command line

```shell
$ npm run info
```

```shell
-h, --help            show this help message and exit
-o, --output          [option] '-o [output all-file in relative directory]', create all test file
-t, --transfer        [option] '-t [transfer relative directory]', transfer nn test file
-c, --cts             [option] '-c [cts relative directory]', include cts test file
-s, --supplement      [option] '-s [supplement relative directory]', include supplement test file
-p, --plus            [option] '-p [plus relative directory]', include plus test file
```

## Example

1. Transfer nn test cases from `./src/nn/specs` and output into `./output/cts`.

```shell
$ python3 ./src/main.py -t ./src/nn/specs
```

2. Create all test cases file as `./test_supplement/cts_supplement-all.js` from `./test_supplement`.

```shell
$ python3 ./src/main.py -s ./test_supplement -o ./test_supplement/cts_supplement-all.js
```

3. Create all test cases file as `./output/cts-all.js` from `./output/cts` and `./V1_0_plus`.

```shell
$ python3 ./src/main.py -c ./output/cts -p ./V1_0_plus -o ./output/cts-all.js
```
