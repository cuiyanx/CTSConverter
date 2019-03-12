describe('CTS', function() {
  const assert = chai.assert;
  const nn = navigator.ml.getNeuralNetworkContext();

  it('check result for Conv 3 h3 w2 valid relu1 example-1', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op2_value = [-0.869931, 0.644628, -0.918393, 0.153672, 0.868562, -0.358177, -0.134931, -0.247565, 0.22174, -0.259157, -0.284296, -0.538065, 0.765559, 0.41986, -0.556241, 0.658494, 0.214355, -0.850169, -0.252893, -0.478935, 0.530526, -0.0700663, -0.988729, -0.303061, 0.150845, 0.829915, 0.476349, 0.406537, -0.355343, 0.757145, -0.356362, 0.800482, -0.713861, 0.210483, -0.634303, 0.718236, -0.752038, 0.457547, -0.550769, -0.551178, 0.446766, -0.227462, 0.216348, -0.852806, -0.351486, 0.55906, -0.668493, -0.303493, -0.363763, -0.162837, 0.0701012, 0.756097, -0.142269, 0.329724, -0.656317, -0.998086, -0.652949, -0.40316, -0.893682, 0.432744, 0.612362, -0.869588, -0.71327, -0.398092, -0.0423559, 0.436576, -0.925272, 0.176549, 0.822904, 0.096833, -0.296802, -0.427195, 0.031654, -0.254479, 0.244905, 0.0948254, 0.643769, -0.90391, 0.352665, -0.901179, 0.266159, -0.968068, -0.615401, -0.388975, 0.939052, -0.116289, 0.107523, -0.0582711, 0.435172, 0.334675, 0.459711, 0.717436, 0.496627, -0.680175, -0.415066, 0.339848, 0.506004, -0.337808, -0.107218, -0.172496, 0.870638, 0.931872, -0.953884, 0.903042, 0.760078, 0.209727, -0.285384, -0.45514, 0.113194, 0.0756611, 0.0924435, -0.472863, 0.960609, -0.160385, -0.839445, 0.457097, 0.163348, 0.344867, -0.131619, 0.688715, -0.540827, 0.571259, -0.95587, 0.506164, -0.155839, 0.0789621, 0.756772, -0.662069, 0.242908, 0.460821, 0.177872, -0.289839, -0.640603, 0.702598, -0.506406, -0.568262, -0.0713716, 0.413792, 0.159673, -0.305208, 0.133816, -0.160254, 0.787323, -0.753244, 0.600721, 0.263186, -0.162387, 0.477962, -0.702951, -0.731036, -0.939481, -0.524519, 0.934072, -0.511637, -0.503499, 0.106236, -0.323684, 0.534444, -0.843745, 0.364171, 0.0370358, -0.168801, -0.404559, -0.814178, 0.91745, -0.334276, 0.66925, -0.801201, 0.156511, -0.427949, 0.379153, 0.818597, -0.649902, 0.427087, -0.586015, -0.559789, -0.833923, 0.0892409, -0.621251, 0.213826, 0.465509, 0.4704, 0.380261, 0.413067, 0.180822, 0.172866, 0.59614, 0.825575, 0.662916, -0.704381, -0.297631, 0.697778];
    let op3_expect = [-0.18684181571006775, -1.0, 1, -0.38500910997390747, 1, -1.0, -1.0, 1, 0.0019998699426651, 0.35952228307724, 1, 0.4340077340602875, -0.2829456627368927, 1, -1.0, 0.08478426933288574, -0.3520932197570801, -1.0, 0.149246484041214, 0.9203515648841858, -1.0, 0.48479676246643066, -1.0, -0.6842987537384033, -1.0, 0.103178471326828, -0.3070422112941742, 1, 1, -1.0, -1.0, -1.0, 1, 0.5121424198150635, 0.771379828453064, 0.3998796045780182, -0.05330920219421387, 0.2908637523651123, 0.9556341171264648, 1, 1, -1.0, 1, 0.2371273934841156, -0.21329569816589355, -0.6199413537979126, 0.49794262647628784, -1.0, 1, -0.12733519077301025, 0.11142027378082275, 1, 1, -0.4796430468559265, 1, -1.0, 1, 0.5482984185218811, -1.0, 1, -0.9933549165725708, 0.12823820114135742, 1, -0.6291260719299316, -0.9492306113243103, 1, -1.0, 0.005895234644412994, -0.18785199522972107, -1.0, 0.3961202800273895, 1, 1, 0.4342212378978729, 0.2744647264480591, -0.5624373555183411, -0.9148713946342468, 0.5391290187835693, -0.928685188293457, 0.8349528312683105, 0.844179630279541, -0.5660524368286133, -0.9573425054550171, 0.9333363175392151, -0.4146660566329956, -0.45282137393951416, -0.7060068845748901, -1.0, -0.726575493812561, -0.09793782234191895, -0.4786680042743683, 1, -0.6392877697944641, 1, -0.1799047887325287, 1, -0.3171188235282898, -0.675386369228363, 1, -1.0, 0.6972557306289673, -0.292255163192749, 1, 0.7178011536598206, 0.8624786138534546, -0.4818926155567169, -0.1355654001235962, -1.0, 0.2478451132774353, 1, -1.0, -0.5196743607521057, 0.25444814562797546, 0.4152834415435791, -1.0, 0.5079120993614197, 0.9799261093139648, -0.1843043863773346, -0.000951879657804966, -0.7343472838401794, -0.19668442010879517, -0.71324223279953, 0.5949735641479492, 0.08450579643249512, 1, 0.3850197494029999];

    let type0 = {type: nn.INT32};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 6, 7, 3]};
    let type2_length = product(type2.dimensions);
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1_length = product(type1.dimensions);
    let type3 = {type: nn.TENSOR_FLOAT32, dimensions: [3, 3, 2, 3]};
    let type3_length = product(type3.dimensions);
    let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type4_length = product(type4.dimensions);

    let b4 = operandIndex++;
    model.addOperand(type0);
    let b5 = operandIndex++;
    model.addOperand(type0);
    let b6 = operandIndex++;
    model.addOperand(type0);
    let b7 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let op3 = operandIndex++;
    model.addOperand(type2);
    let op0 = operandIndex++;
    model.addOperand(type3);
    let op1 = operandIndex++;
    model.addOperand(type4);

    model.setOperandValue(b4, new Int32Array([2]));
    model.setOperandValue(b5, new Int32Array([1]));
    model.setOperandValue(b6, new Int32Array([1]));
    model.setOperandValue(b7, new Int32Array([2]));
    model.setOperandValue(op0, new Float32Array([-0.966213, -0.579455, -0.684259, 0.738216, 0.184325, 0.0973683, -0.176863, -0.23936, -0.000233404, 0.055546, -0.232658, -0.316404, -0.012904, 0.320705, -0.326657, -0.919674, 0.868081, -0.824608, -0.467474, 0.0278809, 0.563238, 0.386045, -0.270568, -0.941308, -0.779227, -0.261492, -0.774804, -0.79665, 0.22473, -0.414312, 0.685897, -0.327792, 0.77395, -0.714578, -0.972365, 0.0696099, -0.82203, -0.79946, 0.37289, -0.917775, 0.82236, -0.144706, -0.167188, 0.268062, 0.702641, -0.412223, 0.755759, 0.721547, -0.43637, -0.274905, -0.269165, 0.16102, 0.819857, -0.312008]));
    model.setOperandValue(op1, new Float32Array([0, 0, 0]));
    model.addOperation(nn.CONV_2D, [op2, op0, op1, b4, b5, b6, b7], [op3]);

    model.identifyInputsAndOutputs([op2], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op2_input = new Float32Array(op2_value);
    execution.setInput(0, op2_input);

    let op3_output = new Float32Array(type2_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type2_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });

  it('check result for Conv 3 h3 w2 valid relu1 example-2', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op2_value = [-0.295335, -0.00387601, -0.552251, 0.166084, -0.28482, -0.152143, -0.719885, -0.869386, -0.745598, 0.823947, 0.473183, -0.331337, 0.187631, 0.0426571, -0.826897, -0.755085, -0.472453, -0.0233656, 0.0483436, 0.933418, -0.961974, 0.0125783, 0.219742, 0.342604, -0.15166, 0.0934905, 0.783221, 0.129664, 0.838844, -0.271388, 0.924519, 0.342843, 0.274418, 0.350817, 0.841638, -0.543993, -0.00283395, -0.128467, -0.682943, -0.319117, 0.84634, 0.283003, 0.32865, 0.0293755, -0.0335696, 0.591266, -0.0743476, -0.741271, 0.462056, -0.583625, -0.590183, 0.6234, 0.535269, -0.670818, -0.955642, -0.770173, 0.479986, 0.664377, 0.399445, -0.968874, -0.276263, -0.901951, 0.544104, -0.958981, 0.482658, -0.807284, 0.305369, -0.947818, 0.827498, -0.382887, -0.805741, -0.796678, -0.299804, -0.229828, 0.818783, -0.103055, -0.45568, -0.227827, 0.543743, -0.96073, 0.946747, -0.857182, -0.96426, -0.292411, -0.715614, 0.765278, -0.475043, -0.590142, -0.238507, 0.673002, -0.473357, -0.319626, 0.936014, 0.486607, 0.580844, 0.425352, -0.800994, 0.290763, -0.494953, -0.441162, 0.718677, -0.828427, 0.96965, 7.53637e-05, -0.699973, -0.526886, -0.352682, 0.799466, 0.332789, 0.723389, 0.407659, -0.934084, -0.284705, 0.961484, -0.700395, -0.985808, -0.595342, -0.691721, 0.49448, -0.0842649, 0.0390966, 0.298938, -0.128094, -0.97158, 0.86393, 0.270606, -0.468986, -0.256605, 0.47215, -0.273117, -0.590343, -0.826529, -0.725381, -0.194821, -0.259661, -0.0949207, -0.180302, 0.0446834, -0.222133, -0.40393, 0.295772, -0.92949, 0.580079, -0.169856, 0.330311, 0.0173551, -0.635823, 0.475942, 0.907175, 0.242777, -0.512208, 0.362463, 0.0496289, 0.65171, 0.990057, 0.690733, -0.469013, -0.101311, -0.68372, -0.157841, -0.677711, -0.708224, -0.659437, -0.407607, 0.677033, 0.89032, 0.228307, -0.749514, 0.772958, 0.054701, 0.551705, 0.917052, -0.895022, -0.702397, 0.484142, 0.108648, 0.833347, 0.478872, -0.984112, 0.387176, -0.73299, 0.7526, 0.443312, -0.0987856, 0.125415, 0.10876, -0.498108, 0.43209, 0.344609, 0.928941, -0.130732, -0.0569167];
    let op3_expect = [1, -1.0, 1, -0.797245979309082, 0.8027355074882507, -0.9971092939376831, 1, -1.0, 1, -1.0, 1, -1.0, 0.9434586763381958, 0.8852099180221558, 0.9879440069198608, -0.3458765745162964, -0.11470787972211838, 1, 0.10474669933319092, 0.8283235430717468, -1.0, -0.4894140064716339, 1, -0.37825751304626465, -1.0, 0.6130228042602539, -1.0, -0.7467844486236572, 1, -1.0, 0.7742787599563599, -0.6139175891876221, -0.6500136852264404, 1, -0.17792066931724548, 0.8918159008026123, -1.0, 1, -1.0, -0.06626316905021667, 0.21880649030208588, -1.0, 1, -1.0, 1, -0.9803696274757385, -1.0, -0.9558582305908203, 1, 1, 0.3114399313926697, -0.5943747162818909, 0.32574737071990967, -0.9525647759437561, -0.6134487390518188, 1, 1, 1, 1, -0.44965147972106934, 0.1187642440199852, -0.19954605400562286, 1, 1, 1, 0.8823201656341553, 1, -0.3215709328651428, -1.0, -1.0, 1, 0.4617673456668854, 1, -0.15892662107944489, 1, -0.43737542629241943, -1.0, 1, 0.08118566870689392, 0.9120546579360962, 0.45217660069465637, 1, 1, 1, 0.6098240613937378, -0.11105062812566757, 1, 1, 1, -0.7083628177642822, -0.5089921355247498, -1.0, -0.7572473287582397, 1, 1, -0.17299658060073853, -1.0, -0.35563600063323975, -0.33767005801200867, -0.5887532830238342, 1, 1, 0.8847578167915344, -0.07121114432811737, 1, -1.0, 0.1145193800330162, 0.5435560345649719, -1.0, -0.2674429714679718, 1, -1.0, 1, 0.5312090516090393, 0.9498996734619141, -0.23144158720970154, 1, 1, 0.895930826663971, -0.7530838847160339, 0.5452516674995422, 0.7469027638435364, 0.012994423508644104, -0.7903979420661926, -1.0, 1];

    let type0 = {type: nn.INT32};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 6, 7, 3]};
    let type2_length = product(type2.dimensions);
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1_length = product(type1.dimensions);
    let type3 = {type: nn.TENSOR_FLOAT32, dimensions: [3, 3, 2, 3]};
    let type3_length = product(type3.dimensions);
    let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type4_length = product(type4.dimensions);

    let b4 = operandIndex++;
    model.addOperand(type0);
    let b5 = operandIndex++;
    model.addOperand(type0);
    let b6 = operandIndex++;
    model.addOperand(type0);
    let b7 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let op3 = operandIndex++;
    model.addOperand(type2);
    let op0 = operandIndex++;
    model.addOperand(type3);
    let op1 = operandIndex++;
    model.addOperand(type4);

    model.setOperandValue(b4, new Int32Array([2]));
    model.setOperandValue(b5, new Int32Array([1]));
    model.setOperandValue(b6, new Int32Array([1]));
    model.setOperandValue(b7, new Int32Array([2]));
    model.setOperandValue(op0, new Float32Array([-0.966213, -0.579455, -0.684259, 0.738216, 0.184325, 0.0973683, -0.176863, -0.23936, -0.000233404, 0.055546, -0.232658, -0.316404, -0.012904, 0.320705, -0.326657, -0.919674, 0.868081, -0.824608, -0.467474, 0.0278809, 0.563238, 0.386045, -0.270568, -0.941308, -0.779227, -0.261492, -0.774804, -0.79665, 0.22473, -0.414312, 0.685897, -0.327792, 0.77395, -0.714578, -0.972365, 0.0696099, -0.82203, -0.79946, 0.37289, -0.917775, 0.82236, -0.144706, -0.167188, 0.268062, 0.702641, -0.412223, 0.755759, 0.721547, -0.43637, -0.274905, -0.269165, 0.16102, 0.819857, -0.312008]));
    model.setOperandValue(op1, new Float32Array([0, 0, 0]));
    model.addOperation(nn.CONV_2D, [op2, op0, op1, b4, b5, b6, b7], [op3]);

    model.identifyInputsAndOutputs([op2], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op2_input = new Float32Array(op2_value);
    execution.setInput(0, op2_input);

    let op3_output = new Float32Array(type2_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type2_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });
});
