#!/usr/bin/python3

import os
import argparse

def get_args():
  parser = argparse.ArgumentParser()
  parser.add_argument("-c", "--create", help = "create all test file", default = "-")
  parser.add_argument("-t", "--transfer", help = "transfer nn test file", default = "-")
  parser.add_argument("-s", "--supplement", help = "include supplement test file", default = "-")
  parser.add_argument("-p", "--plus", help = "include plus test file", default = "-")

  args = parser.parse_args()

  return (args.create, args.transfer, args.supplement, args.plus)

def del_file(path, flag):
  names = os.listdir(path)

  for name in names:
    file_path = os.path.join(path, name)

    if os.path.isdir(file_path):
      del_file(file_path, True)
    else:
      os.remove(file_path)

  if flag:
    os.remove(path)

# transfer nn test case to js test case
def transfer(ipath, opath, names):
  transfer_file_dict = dict()

  versions = os.listdir(ipath)

  for version in versions:
    input_path = os.path.join(ipath, version)
    output_path = os.path.join(opath, version)

    if os.path.exists(output_path):
      del_file(output_path, False)
    else:
      os.makedirs(output_path)

    if os.path.isdir(input_path):
      for name in names:
        name = name.strip()

        input_file = os.path.join(input_path, name)
        output_file = os.path.join(output_path, name[:-6] + "js")

        if os.path.exists(input_file):
          transfer_file_dict[name[:-6] + "js"] = output_file

          cmd = "python3 ./src/test_generator.py " + input_file +\
                " -js " + output_file
          os.system(cmd)

  return transfer_file_dict

# scan test case directory
def get_file_names(ipath):
  file_names_dict = dict()

  names = os.listdir(ipath)

  for name in names:
    path_or_file = os.path.join(ipath, name)

    if os.path.isfile(path_or_file):
      if name[-3:] == ".js":
        file_names_dict[name] = path_or_file
#        print ("include: " + path_or_file)
    else:
      tmp_dict = get_file_names(path_or_file)
      file_names_dict.update(tmp_dict)

  return file_names_dict

# create all test case file
def create(opath, file_dict, file_list):
  with open(opath, "w") as all_jsTest_file:
    all_jsTest_file.write("describe('CTS', function() {\n")
    all_jsTest_file.write("  const assert = chai.assert;\n")
    all_jsTest_file.write("  const nn = navigator.ml.getNeuralNetworkContext();\n")
    all_jsTest_file.write("\n")

  for (file_num, file_name) in enumerate(file_list):
    with open(file_dict.get(file_name), "r") as file_read:
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
  (args_create, args_transfer, args_supplement, args_plus) = get_args()

  output_path_root = "./output"
  if not os.path.exists(output_path_root):
    os.makedirs(output_path_root)

  output_file_all = os.path.join(output_path_root, args_create)

  file_dict = dict()

  if not args_transfer == "-":
    support_cts_file = "./slice.txt"

    with open(support_cts_file) as cts_file:
      cts_file_names = cts_file.readlines()
      print ("Open support cts file: " + support_cts_file + "\n")

    print ("transfer nn test case to js test case....\n")
    transfer_file_dict = transfer(args_transfer, output_path_root, cts_file_names)
    file_dict.update(transfer_file_dict)

  if not args_supplement == "-":
    print ("scan test supplement directory....\n")
    supplement_file_dict = get_file_names(args_supplement)
    file_dict.update(supplement_file_dict)

  if not args_plus == "-":
    print ("scan test plus directory....\n")
    plus_file_dict = get_file_names(args_plus)
    file_dict.update(plus_file_dict)

  print ("reordering by name....\n")
  file_list = sorted(file_dict.keys())

  if not args_create == "-":
    print ("create all test case file....\n")
    create(output_file_all, file_dict, file_list)

  print ("transfer and create all files are completed")
