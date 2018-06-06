const fs = require("fs");
const rl = require("readline");

class File_Analyzer {
    constructor() {
        this.new_line_array = new Array();
        this.symbol_array = ["(", ")", "[", "]", "{", "}", ",", ":", '"'];
        this.brackets_array = new Array();
    }

    init_array() {
        this.new_line_array = [];
        this.brackets_array = [];
    }

    // return: line array
    read_file_as_line(filepath) {
        if (!fs.existsSync(filepath)) {
            let string = "No such file: " + filepath;
            throw new Error(string);
        }

        let file_content = fs.readFileSync(filepath, {encoding: "utf-8"});
        let line_array_content = file_content.split("\n");

        return line_array_content;
    }

    // return: line array
    select_useful_line(line_array) {
        for (let x in line_array) {
            if (line_array[x] == "") {
                line_array.splice(x, 1);
                this.select_useful_line(line_array);
                break;
            }

            let str_array = line_array[x].split(/\s+/);
            if (str_array[0] == "#") {
                line_array.splice(x, 1);
                this.select_useful_line(line_array);
                break;
            }
        }

        return line_array;
    }

    // return: string array
    line_to_string_array(line) {
        return line.split(/\s+/);
    }

    // return: string array
    select_useful_string(string_array) {
        for (let x in string_array) {
            if (string_array[x] == "") {
                string_array.splice(x, 1);
                this.select_useful_string(string_array);
                break;
            }

            if (string_array[x] == "#") {
                let residual = string_array.length - x;
                string_array.splice(x, residual);
                break;
            }
        }

        return string_array;
    }

    // return: line
    combine_string_to_line(string_array) {
        let line = "";
        for (let x in string_array) {
            if (x == 0) {
                line = string_array[x];
            } else {
                line = line + " " + string_array[x];
            }
        }

        return line;
    }

    // return: string array
    separate_symbol(line) {
        for (let x in this.symbol_array) {
            line = line.split(this.symbol_array[x]).join(" " + this.symbol_array[x] + " ");
        }

        let string_array = this.line_to_string_array(line);
        let string_array_select = this.select_useful_string(string_array);
        let new_line = this.combine_string_to_line(string_array_select);

        return new_line;
    }

    // return: line array
    to_logical_line() {
        let start_number = null;
        let end_number = null;

        for (let x in this.new_line_array) {
            let string_array = this.line_to_string_array(this.new_line_array[x]);

            for (let y in string_array) {
                switch(string_array[y]) {
                    case "(":
                    this.brackets_array.push("(");
                    break;
                    case "[":
                    this.brackets_array.push("[");
                    break;
                    case "{":
                    this.brackets_array.push("{");
                    break;
                    case ")":
                    if (this.brackets_array[this.brackets_array.length - 1] == "(") {
                        this.brackets_array.splice(this.brackets_array.length - 1, 1);
                    }
                    break;
                    case "]":
                    if (this.brackets_array[this.brackets_array.length - 1] == "[") {
                        this.brackets_array.splice(this.brackets_array.length - 1, 1);
                    }
                    break;
                    case "}":
                    if (this.brackets_array[this.brackets_array.length - 1] == "{") {
                        this.brackets_array.splice(this.brackets_array.length - 1, 1);
                    }
                    break;
                }
            }

            if (this.brackets_array.length == 0) {
                if (start_number != null && end_number == null) {
                    end_number = parseInt(x);

                    for (let k = start_number + 1; k <= end_number; k++) {
                        this.new_line_array[start_number] = this.new_line_array[start_number] + " " + this.new_line_array[k];
                        delete this.new_line_array[k];
                    }

                    start_number = null;
                    end_number = null;
                }
            } else {
                if (start_number == null) {
                    start_number = parseInt(x);
                }
            }
        }

        for (let i = 0; i < this.new_line_array.length; i++) {
             if (typeof this.new_line_array[i] == "undefined") {
                 this.new_line_array.splice(i, 1);
                 i--;
             }
        }

        return this.new_line_array;
    }

    // return: line array
    analyzer(filepath) {
        let line_array = this.read_file_as_line(filepath);
        let line_array_select = this.select_useful_line(line_array);

        for (let x in line_array_select) {
            let string_array = this.line_to_string_array(line_array_select[x]);
            let string_array_select = this.select_useful_string(string_array);

            let new_line = this.combine_string_to_line(string_array_select);
            new_line = this.separate_symbol(new_line);

            this.new_line_array.push(new_line);
        }

        this.to_logical_line();

        return this.new_line_array;
    }
}

module.exports = new File_Analyzer();
