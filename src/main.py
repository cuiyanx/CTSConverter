#!/usr/bin/python3

import os

# transfer nn test case to js test case
def transfer(versions, ipath, opath, names):
  transfer_file_dict = dict()

  for version in versions:
    input_path = os.path.join(ipath, version)
    output_path = os.path.join(opath, version)

    if os.path.exists(output_path):
      cmd = "rm -r " + output_path
      os.system(cmd)

    if not os.path.exists(output_path):
      os.makedirs(output_path)

    if os.path.isdir(input_path):
      for name in names:
        name = name.strip()

        input_file = os.path.join(input_path, name)
        output_file = os.path.join(output_path, name[:-6] + "js")

        transfer_file_dict[name[:-6] + "js"] = output_path

        if os.path.exists(input_file):
          cmd = "python3 ./src/test_generator.py " + input_file +\
                " -js " + output_file
          os.system(cmd)

  return transfer_file_dict

def get_supplement_file_names(ipath, supplement_file_dict):
  names = os.listdir(ipath)

  for name in names:
    path_or_file = os.path.join(ipath, name)

    if os.path.isfile(path_or_file):
      supplement_file_dict[name] = ipath

    if os.path.isdir(path_or_file):
      get_supplement_file_names(path_or_file, supplement_file_dict)

  return supplement_file_dict

# create cts-all test case file include transfer-test-cases and supplement-test-cases
def create(opath, file_dict, file_list):
  with open(opath, "w") as all_jsTest_file:
    all_jsTest_file.write("describe('CTS', function() {\n")
    all_jsTest_file.write("  const assert = chai.assert;\n")
    all_jsTest_file.write("  const nn = navigator.ml.getNeuralNetworkContext();\n")
    all_jsTest_file.write("\n")

  for (file_num, file_name) in enumerate(file_list):
    with open(os.path.join(file_dict.get(file_name), file_name), "r") as file_read:
      file_text = file_read.readlines()

      for (line_num, line_text) in enumerate(file_text):
        if line_num in range(4, len(file_text) - 1):
          with open(opath, "a+") as all_jsTest_file:
            all_jsTest_file.write(line_text)

      if file_num in range(len(file_list) - 1):
        with open(opath, "a+") as all_jsTest_file:
          all_jsTest_file.write("\n")

  with open(opath, "a+") as all_jsTest_file:
    all_jsTest_file.write("});\n")

if __name__ == '__main__':
  support_names_file = "./filename_support.txt"

  with open(support_names_file) as file_names:
    name_lines = file_names.readlines()
    print ("Open support names file: " + support_names_file + "\n")

  input_path_root = "./src/nn/specs"
  input_path_supplement = "./test_supplement"
  output_path_root = "./output"
  output_file_all = os.path.join(output_path_root, "cts-all.js")

  if not os.path.exists(output_path_root):
    os.makedirs(output_path_root)

  versions = os.listdir(input_path_root)

  print ("transfer nn test case to js test case....\n")
  transfer_file_dict = transfer(versions, input_path_root, output_path_root, name_lines)

  print ("scan test supplement directory....\n")
  supplement_file_dict = get_supplement_file_names(input_path_supplement, dict())

  print ("reordering by name....\n")
  file_dict = dict()
  file_dict.update(transfer_file_dict)
  file_dict.update(supplement_file_dict)
  file_list = sorted(file_dict.keys())

  for file_name in file_list:
    print ("name: " + file_name + " -- path: " + file_dict.get(file_name))

  print ("\ncreate cts-all test case file....\n")
  create(output_file_all, file_dict, file_list)

  print ("transfer and create are completed")
