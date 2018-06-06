const fs = require("fs");
const rl = require("readline");
const childProcess = require("child_process");

var filenameArray_mod = new Array();
var filenameArray_example = new Array();
var filenameArray_model = new Array();

var fileArray_mod = new Array();
var fileArray_example = new Array();
var fileArray_model = new Array();

var filePath_mod = "./src/nn/runtime/test/specs/V1_0/";
var filePath_example = "./src/nn/runtime/test/generated/examples/";
var filePath_model = "./src/nn/runtime/test/generated/models/";

var filePath_tmp_mod = "./tmp/specs/V1_0/";
var filePath_tmp_example = "./tmp/generated/examples/";
var filePath_tmp_model = "./tmp/generated/models/";

var filePath_generated = "./src/nn/runtime/test/TestGenerated.cpp";
var filePath_tmp_generated = "./tmp/TestGenerated.cpp";

var filePath_generator = "./src/nn/tools/test_generator/test_generator.py";
var filePath_tmp_generator = "./tmp/test_generator.py";

if (!fs.existsSync("./tmp/")) {
    fs.mkdirSync("./tmp/");
}

if (!fs.existsSync("./tmp/specs/")) {
    fs.mkdirSync("./tmp/specs/");
}

if (!fs.existsSync("./tmp/specs/V1_0/")) {
    fs.mkdirSync("./tmp/specs/V1_0/");
}

if (!fs.existsSync("./tmp/generated/")) {
    fs.mkdirSync("./tmp/generated/");
}

if (!fs.existsSync("./tmp/generated/examples/")) {
    fs.mkdirSync("./tmp/generated/examples/");
}

if (!fs.existsSync("./tmp/generated/models/")) {
    fs.mkdirSync("./tmp/generated/models/");
}

if (!fs.existsSync("./output/")) {
    fs.mkdirSync("./output/");
}

if (!fs.existsSync("./output/specs/")) {
    fs.mkdirSync("./output/specs/");
}

if (!fs.existsSync("./output/specs/V1_0/")) {
    fs.mkdirSync("./output/specs/V1_0/");
}

if (!fs.existsSync(filePath_tmp_generated)) {
    let command = "cp " + filePath_generated + " " + filePath_tmp_generated;
    childProcess.execSync(
        command,
        {stdio: [process.stdin, process.stdout, "pipe"]}
    );
}

if (!fs.existsSync(filePath_tmp_generator)) {
    let command = "cp " + filePath_generator + " " + filePath_tmp_generator;
    childProcess.execSync(
        command,
        {stdio: [process.stdin, process.stdout, "pipe"]}
    );
}

var filename_txt = "./filename.txt";
var readStream = fs.createReadStream(filename_txt);
const readline = rl.createInterface({input: readStream});

readline.on("line", function(line) {
    filenameArray_mod.push(line);

    line = line.slice(0, -6);
    let filename_example = line + "example.cpp";
    filenameArray_example.push(filename_example);

    let filename_model = line + "model.cpp";
    filenameArray_model.push(filename_model);
});

readline.on("close", function() {
    fileArray_mod = fs.readdirSync(filePath_mod);
    fileArray_mod.forEach(function(filename) {
        for (let x in filenameArray_mod) {
            if (filename == filenameArray_mod[x]) {
                let name_cp = filePath_mod + filename;
                let name_tmp = filePath_tmp_mod + filename;
                if (!fs.existsSync(name_tmp)) {
                    let command = "cp " + name_cp + " " + name_tmp;
                    childProcess.execSync(
                        command,
                        {stdio: [process.stdin, process.stdout, "pipe"]}
                    );
                }
            }
        }
    });

    fileArray_example = fs.readdirSync(filePath_example);
    fileArray_example.forEach(function(filename) {
        for (let x in filenameArray_example) {
            if (filename == filenameArray_example[x]) {
                let name_cp = filePath_example + filename;
                let name_tmp = filePath_tmp_example + filename;
                if (!fs.existsSync(name_tmp)) {
                    let command = "cp " + name_cp + " " + name_tmp;
                    childProcess.execSync(
                        command,
                        {stdio: [process.stdin, process.stdout, "pipe"]}
                    );
                }
            }
        }
    });

    fileArray_model = fs.readdirSync(filePath_model);
    fileArray_model.forEach(function(filename) {
        for (let x in filenameArray_model) {
            if (filename == filenameArray_model[x]) {
                let name_cp = filePath_model + filename;
                let name_tmp = filePath_tmp_model + filename;
                if (!fs.existsSync(name_tmp)) {
                    let command = "cp " + name_cp + " " + name_tmp;
                    childProcess.execSync(
                        command,
                        {stdio: [process.stdin, process.stdout, "pipe"]}
                    );
                }
            }
        }
    });

    
});
