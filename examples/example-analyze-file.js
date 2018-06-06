const File_Analyzer = require("../lib/analyze-file-to-lines.js");

File_Analyzer.init_array();

var filepath = "./tmp/specs/V1_0/mul_relu.mod.py";
var line_array = File_Analyzer.analyzer(filepath);

for (let x in line_array) {
    console.log(line_array[x]);
}
