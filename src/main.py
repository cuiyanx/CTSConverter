#!/usr/bin/python3

import os
import sys

name_file = "./filename.txt"

with open(name_file) as file_names:
  print "Open names file: " + name_file

  lines = file_names.readlines()

input_path_parent = "./src/nn/specs/"
output_path_parent = "./output/"

versions = os.listdir(input_path_parent)

for version in versions:
  input_path = input_path_parent + version + "/"
  output_path = output_path_parent + version + "/"

  if os.path.isdir(input_path):
    for line in lines:
      line = line.strip()

      input_file = input_path + line
      output_path_example = output_path + "examples/"
      output_path_model = output_path + "models/"
      output_file_example = output_path_example + line[:-6] + "example.cpp"
      output_file_model = output_path_model + line[:-6] + "model.cpp"

      if os.path.exists(input_file):
        if not os.path.exists(output_path):
          os.makedirs(output_path)

        if not os.path.exists(output_path_example):
          os.makedirs(output_path_example)

        if not os.path.exists(output_path_model):
          os.makedirs(output_path_model)

        cmd = "python3 ./src/test_generator.py -m " + output_file_model + " -e " + output_file_example + " " + input_file
        os.system(cmd);
