#!/usr/bin/python3

import os

name_file_support = "./filename_support.txt"
name_file_unsupport = "./filename_unsupport.txt"

with open(name_file_support) as support_file_names:
  print ("Open support names file: " + name_file_support)

  support_lines = support_file_names.readlines()

with open(name_file_unsupport) as unsupport_file_names:
  print ("Open unsupport names file: " + name_file_unsupport + "\n")

  unsupport_lines = unsupport_file_names.readlines()

input_path_parent = "./src/nn/specs"
output_path_parent = "./output"
output_all_jsTest = os.path.join(output_path_parent, "test-CTS.js")

if os.path.exists(output_path_parent):
  cmd = "rm -r " + output_path_parent
  os.system(cmd)

if not os.path.exists(output_path_parent):
  os.makedirs(output_path_parent)

all_jsTest_file = open(output_all_jsTest, "w")
all_jsTest_file.write("describe('CTS', function() {\n")
all_jsTest_file.write("  const assert = chai.assert;\n")
all_jsTest_file.write("  const nn = navigator.ml.getNeuralNetworkContext();\n")
all_jsTest_file.close()

versions = os.listdir(input_path_parent)

for version in versions:
  input_path = os.path.join(input_path_parent, version)

  output_path_support_example = os.path.join(output_path_parent, "support", version, "examples")
  output_path_support_model = os.path.join(output_path_parent, "support", version, "models")
  output_path_support_jsTest = os.path.join(output_path_parent, "support", version, "jsTests")
  output_path_unsupport_example = os.path.join(output_path_parent, "unsupport", version, "examples")
  output_path_unsupport_model = os.path.join(output_path_parent, "unsupport", version, "models")
  output_path_unsupport_jsTest = os.path.join(output_path_parent, "unsupport", version, "jsTests")

  if os.path.isdir(input_path):
    for support_line in support_lines:
      support_line = support_line.strip()

      input_file_support = os.path.join(input_path, support_line)
      output_file_support_example = os.path.join(output_path_support_example, support_line[:-6] + "example.cpp")
      output_file_support_model = os.path.join(output_path_support_model, support_line[:-6] + "model.cpp")
      output_file_support_jsTest = os.path.join(output_path_support_jsTest, support_line[:-6] + "js")

      if os.path.exists(input_file_support):
        if not os.path.exists(output_path_support_example):
          os.makedirs(output_path_support_example)

        if not os.path.exists(output_path_support_model):
          os.makedirs(output_path_support_model)

        if not os.path.exists(output_path_support_jsTest):
          os.makedirs(output_path_support_jsTest)

        cmd = "python3 ./src/test_generator.py " + input_file_support +\
              " -m " + output_file_support_model +\
              " -e " + output_file_support_example +\
              " -js " + output_file_support_jsTest +\
              " -a " + output_all_jsTest
        os.system(cmd)

    for unsupport_line in unsupport_lines:
      unsupport_line = unsupport_line.strip()

      input_file_unsupport = os.path.join(input_path, unsupport_line)
      output_file_unsupport_example = os.path.join(output_path_unsupport_example, unsupport_line[:-6] + "example.cpp")
      output_file_unsupport_model = os.path.join(output_path_unsupport_model, unsupport_line[:-6] + "model.cpp")
      output_file_unsupport_jsTest = os.path.join(output_path_unsupport_jsTest, unsupport_line[:-6] + "js")

      if os.path.exists(input_file_unsupport):
        if not os.path.exists(output_path_unsupport_example):
          os.makedirs(output_path_unsupport_example)

        if not os.path.exists(output_path_unsupport_model):
          os.makedirs(output_path_unsupport_model)

        if not os.path.exists(output_path_unsupport_jsTest):
          os.makedirs(output_path_unsupport_jsTest)

        cmd = "python3 ./src/test_generator.py " + input_file_unsupport +\
              " -m " + output_file_unsupport_model +\
              " -e " + output_file_unsupport_example +\
              " -js " + output_file_unsupport_jsTest
        os.system(cmd)

all_jsTest_file = open(output_all_jsTest, "a+")
all_jsTest_file.write("});\n")
all_jsTest_file.close()
