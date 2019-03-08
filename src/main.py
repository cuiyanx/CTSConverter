#!/usr/bin/python3

import os
import argparse

def get_args():
  parser = argparse.ArgumentParser()
  parser.add_argument(
      "-c", "--create", help="create test file", default="all")

  args = parser.parse_args()

  return args.create

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

if __name__ == "__main__":
  args_create = get_args()

  output_path_root = "./output"
  output_file_all = os.path.join(output_path_root, "cts-all.js")

  file_dict = dict()

  if not os.path.exists(output_path_root):
    os.makedirs(output_path_root)

  if args_create == "all" or args_create == "cts":
    support_cts_file = "./filename_support.txt"

    with open(support_cts_file) as cts_file:
      cts_file_names = cts_file.readlines()
      print ("Open support cts file: " + support_cts_file + "\n")

    cts_input_path = "./src/nn/specs"
    versions = os.listdir(cts_input_path)

    print ("transfer nn test case to js test case....\n")
    transfer_file_dict = transfer(versions, cts_input_path, output_path_root, cts_file_names)
  else:
    transfer_file_dict = dict()

  if args_create == "all" or args_create == "supplement":
    supplement_input_path = "./test_supplement"

    print ("scan test supplement directory....\n")
    supplement_file_dict = get_supplement_file_names(supplement_input_path, dict())
  else:
    supplement_file_dict = dict()

  print ("reordering by name....\n")
  file_dict.update(transfer_file_dict)
  file_dict.update(supplement_file_dict)
  file_list = sorted(file_dict.keys())
  '''
  for file_name in file_list:
    print ("name: " + file_name)
    print ("path: " + file_dict.get(file_name) + "\n")
  '''
  print ("create cts-all test case file....\n")
  create(output_file_all, file_dict, file_list)

  if args_create == "all":
    print ("transfer and create all files are completed")
  elif args_create == "cts":
    print ("transfer and create cts files are completed")
  elif args_create == "supplement":
    print ("create supplement filse are completed")

