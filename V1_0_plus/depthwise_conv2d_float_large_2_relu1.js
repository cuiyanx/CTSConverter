describe('CTS', function() {
  const assert = chai.assert;
  const nn = navigator.ml.getNeuralNetworkContext();

  it('check result for Depthwise conv2d float large relu1 example/2', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op1_value = [10, 21, 100, 0, 10, 22, 200, 0, 10, 23, 300, 0, 10, 24, 400, 0];
    let op4_expect = [1, 1, 1, 1];

    let type2 = {type: nn.INT32};
    let type3 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 1, 1, 4]};
    let type3_length = product(type3.dimensions);
    let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 2, 2, 4]};
    let type0_length = product(type0.dimensions);
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [4]};
    let type1_length = product(type1.dimensions);

    let op1 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type0);
    let op3 = operandIndex++;
    model.addOperand(type1);
    let pad0 = operandIndex++;
    model.addOperand(type2);
    let act = operandIndex++;
    model.addOperand(type2);
    let stride = operandIndex++;
    model.addOperand(type2);
    let channelMultiplier = operandIndex++;
    model.addOperand(type2);
    let op4 = operandIndex++;
    model.addOperand(type3);

    model.setOperandValue(op2, new Float32Array([0.25, 0, 10, 100, 0.25, 1, 20, 100, 0.25, 0, 30, 100, 0.25, 1, 40, 100]));
    model.setOperandValue(op3, new Float32Array([600000, 700000, 800000, 900000]));
    model.setOperandValue(pad0, new Int32Array([0]));
    model.setOperandValue(act, new Int32Array([2]));
    model.setOperandValue(stride, new Int32Array([1]));
    model.setOperandValue(channelMultiplier, new Int32Array([1]));
    model.addOperation(nn.DEPTHWISE_CONV_2D, [op1, op2, op3, pad0, pad0, pad0, pad0, stride, stride, channelMultiplier, act], [op4]);

    model.identifyInputsAndOutputs([op1], [op4]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op1_input = new Float32Array(op1_value);
    execution.setInput(0, op1_input);

    let op4_output = new Float32Array(type3_length);
    execution.setOutput(0, op4_output);

    await execution.startCompute();

    for (let i = 0; i < type3_length; ++i) {
      assert.isTrue(almostEqualCTS(op4_output[i], op4_expect[i]));
    }
  });
});
