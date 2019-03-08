describe('CTS Supplement Test', function() {
    const assert = chai.assert;
    const nn = navigator.ml.getNeuralNetworkContext();
  
    it('check result for ATROUS_CONV_2D 1 h3 w2 implicit padding same example-1', async function() {
      let model = await nn.createModel(options);
      let operandIndex = 0;
  
      let op1_value = [-0.869931, 0.644628, -0.918393, 0.153672, 0.868562, -0.358177, -0.134931, -0.247565, 0.22174, -0.259157, -0.284296, -0.538065, 0.765559, 0.41986, -0.556241, 0.658494, 0.214355, -0.850169, -0.252893, -0.478935, 0.530526, -0.0700663, -0.988729, -0.303061, 0.150845, 0.829915, 0.476349, 0.406537, -0.355343, 0.757145, -0.356362, 0.800482, -0.713861, 0.210483, -0.634303, 0.718236, -0.752038, 0.457547, -0.550769, -0.551178, 0.446766, -0.227462, 0.216348, -0.852806, -0.351486, 0.55906, -0.668493, -0.303493, -0.363763, -0.162837, 0.0701012, 0.756097, -0.142269, 0.329724, -0.656317, -0.998086, -0.652949, -0.40316, -0.893682, 0.432744, 0.612362, -0.869588, -0.71327, -0.398092, -0.0423559, 0.436576, -0.925272, 0.176549, 0.822904, 0.096833, -0.296802, -0.427195, 0.031654, -0.254479, 0.244905, 0.0948254, 0.643769, -0.90391, 0.352665, -0.901179, 0.266159, -0.968068, -0.615401, -0.388975, 0.939052, -0.116289, 0.107523, -0.0582711, 0.435172, 0.334675, 0.459711, 0.717436, 0.496627, -0.680175, -0.415066, 0.339848, 0.506004, -0.337808, -0.107218, -0.172496, 0.870638, 0.931872, -0.953884, 0.903042, 0.760078, 0.209727, -0.285384, -0.45514, 0.113194, 0.0756611, 0.0924435, -0.472863, 0.960609, -0.160385, -0.839445, 0.457097, 0.163348, 0.344867, -0.131619, 0.688715, -0.540827, 0.571259, -0.95587, 0.506164, -0.155839, 0.0789621, 0.756772, -0.662069, 0.242908, 0.460821, 0.177872, -0.289839, -0.640603, 0.702598, -0.506406, -0.568262, -0.0713716, 0.413792, 0.159673, -0.305208, 0.133816, -0.160254, 0.787323, -0.753244, 0.600721, 0.263186, -0.162387, 0.477962, -0.702951, -0.731036, -0.939481, -0.524519, 0.934072, -0.511637, -0.503499, 0.106236, -0.323684, 0.534444, -0.843745, 0.364171, 0.0370358, -0.168801, -0.404559, -0.814178, 0.91745, -0.334276, 0.66925, -0.801201, 0.156511, -0.427949, 0.379153, 0.818597, -0.649902, 0.427087, -0.586015, -0.559789, -0.833923, 0.0892409, -0.621251, 0.213826, 0.465509, 0.4704, 0.380261, 0.413067, 0.180822, 0.172866, 0.59614, 0.825575, 0.662916, -0.704381, -0.297631, 0.697778];
      let op3_expect = [1.85284, -0.0393656, -0.127353, 1.43115, -0.302294, -1.0402, 0.655023, -0.587614, 1.72003, 1.55816, 0.667546, 2.23663, 0.0661516, 0.290254, 0.770222, -0.346357, -1.58197, -0.850595, -0.484224, 0.949967, -0.577263, -0.871949, 2.34132, -0.104506, -0.135965, -0.985713, 0.815147, 1.03114, -1.41915, -0.515534, -0.373639, 1.42026, -1.50604, 0.673113, 3.06139, -0.388578, -1.76707, -0.315667, -1.03815, -0.343435, 0.432787, -1.41643, 1.12944, -0.175806, -0.846415, 1.40095, 0.70832, -1.46717, 2.19562, -2.61266, -0.705383, 1.26124, 1.46545, -2.35761, 2.04494, 1.23741, -0.527402, -0.39954, -0.0128623, 1.3644, 0.985755, -0.718118, -0.1008, 1.24327];
  
      let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
      let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 3, 2, 3]};
      let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1]};
      let type3 = {type: nn.INT32};
      let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 1]};
      let type4_length = product(type4.dimensions);
  
      let op1 = operandIndex++;
      model.addOperand(type0);
      let op2 = operandIndex++;
      model.addOperand(type1);
      let bias = operandIndex++;
      model.addOperand(type2);
      let pad = operandIndex++;
      model.addOperand(type3);
      let rate_w = operandIndex++;
      model.addOperand(type3);
      let rate_h = operandIndex++;
      model.addOperand(type3);
      let act = operandIndex++;
      model.addOperand(type3);

      let op3 = operandIndex++;
      model.addOperand(type4);
      
      
      model.setOperandValue(op2, new Float32Array([-0.966213, -0.467474, -0.82203, -0.579455, 0.0278809, -0.79946, -0.684259, 0.563238, 0.37289, 0.738216, 0.386045, -0.917775, 0.184325, -0.270568, 0.82236, 0.0973683, -0.941308, -0.144706]));
      model.setOperandValue(bias, new Float32Array([0]));
      model.setOperandValue(pad, new Int32Array([1]));
      model.setOperandValue(rate_w, new Int32Array([1]));
      model.setOperandValue(rate_h, new Int32Array([1]));
      model.setOperandValue(act, new Int32Array([0]));

      model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
      model.identifyInputsAndOutputs([op1], [op3]);
      await model.finish();
  
      let compilation = await model.createCompilation();
      compilation.setPreference(getPreferenceCode(options.prefer));
      await compilation.finish();
  
      let execution = await compilation.createExecution();
  
      let op1_input = new Float32Array(op1_value);
      execution.setInput(0, op1_input);
  
      let op3_output = new Float32Array(type4_length);
      execution.setOutput(0, op3_output);
  
      await execution.startCompute();
  
      for (let i = 0; i < type4_length; ++i) {
        assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
      }
    });

    it('check result for ATROUS_CONV_2D 1 h3 w2 implicit padding same example-2', async function() {
      let model = await nn.createModel(options);
      let operandIndex = 0;
  
      let op1_value = [-0.295335, -0.00387601, -0.552251, 0.166084, -0.28482, -0.152143, -0.719885, -0.869386, -0.745598, 0.823947, 0.473183, -0.331337, 0.187631, 0.0426571, -0.826897, -0.755085, -0.472453, -0.0233656, 0.0483436, 0.933418, -0.961974, 0.0125783, 0.219742, 0.342604, -0.15166, 0.0934905, 0.783221, 0.129664, 0.838844, -0.271388, 0.924519, 0.342843, 0.274418, 0.350817, 0.841638, -0.543993, -0.00283395, -0.128467, -0.682943, -0.319117, 0.84634, 0.283003, 0.32865, 0.0293755, -0.0335696, 0.591266, -0.0743476, -0.741271, 0.462056, -0.583625, -0.590183, 0.6234, 0.535269, -0.670818, -0.955642, -0.770173, 0.479986, 0.664377, 0.399445, -0.968874, -0.276263, -0.901951, 0.544104, -0.958981, 0.482658, -0.807284, 0.305369, -0.947818, 0.827498, -0.382887, -0.805741, -0.796678, -0.299804, -0.229828, 0.818783, -0.103055, -0.45568, -0.227827, 0.543743, -0.96073, 0.946747, -0.857182, -0.96426, -0.292411, -0.715614, 0.765278, -0.475043, -0.590142, -0.238507, 0.673002, -0.473357, -0.319626, 0.936014, 0.486607, 0.580844, 0.425352, -0.800994, 0.290763, -0.494953, -0.441162, 0.718677, -0.828427, 0.96965, 7.53637e-05, -0.699973, -0.526886, -0.352682, 0.799466, 0.332789, 0.723389, 0.407659, -0.934084, -0.284705, 0.961484, -0.700395, -0.985808, -0.595342, -0.691721, 0.49448, -0.0842649, 0.0390966, 0.298938, -0.128094, -0.97158, 0.86393, 0.270606, -0.468986, -0.256605, 0.47215, -0.273117, -0.590343, -0.826529, -0.725381, -0.194821, -0.259661, -0.0949207, -0.180302, 0.0446834, -0.222133, -0.40393, 0.295772, -0.92949, 0.580079, -0.169856, 0.330311, 0.0173551, -0.635823, 0.475942, 0.907175, 0.242777, -0.512208, 0.362463, 0.0496289, 0.65171, 0.990057, 0.690733, -0.469013, -0.101311, -0.68372, -0.157841, -0.677711, -0.708224, -0.659437, -0.407607, 0.677033, 0.89032, 0.228307, -0.749514, 0.772958, 0.054701, 0.551705, 0.917052, -0.895022, -0.702397, 0.484142, 0.108648, 0.833347, 0.478872, -0.984112, 0.387176, -0.73299, 0.7526, 0.443312, -0.0987856, 0.125415, 0.10876, -0.498108, 0.43209, 0.344609, 0.928941, -0.130732, -0.0569167];
      let op3_expect = [-0.000614278, -1.21221, 0.443861, 0.102117, -2.52714, 1.47489, 0.173474, -0.237577, 1.28735, 1.91315, 2.51734, 0.375841, 0.637563, 2.653, 2.72959, -1.6271, 1.17389, -2.12119, 2.91417, -2.24246, 0.0497045, -0.127107, -0.144473, -0.133762, -0.393284, -2.02346, -0.239178, -0.246508, 1.29277, 1.32963, 0.117521, 1.22372, 0.0665713, 1.09438, -1.31426, 2.52594, -0.969211, 0.515478, -1.60926, -0.838905, 0.135211, 0.786415, -1.14382, -0.739102, -1.01731, 0.281615, 2.36311, 0.891823, 1.93872, -0.150491, 3.45217, 2.28219, 1.18282, -2.25086, 3.05468, 0.166228, 0.434554, -2.57529, -0.958662, -2.23978, 2.66776, 0.542601, 1.76107, -1.08134];
  
      let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
      let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 3, 2, 3]};
      let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1]};
      let type3 = {type: nn.INT32};
      let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 1]};
      let type4_length = product(type4.dimensions);
  
      let op1 = operandIndex++;
      model.addOperand(type0);
      let op2 = operandIndex++;
      model.addOperand(type1);
      let bias = operandIndex++;
      model.addOperand(type2);
      let pad = operandIndex++;
      model.addOperand(type3);
      let rate_w = operandIndex++;
      model.addOperand(type3);
      let rate_h = operandIndex++;
      model.addOperand(type3);
      let act = operandIndex++;
      model.addOperand(type3);

      let op3 = operandIndex++;
      model.addOperand(type4);
      
      
      model.setOperandValue(op2, new Float32Array([-0.966213, -0.467474, -0.82203, -0.579455, 0.0278809, -0.79946, -0.684259, 0.563238, 0.37289, 0.738216, 0.386045, -0.917775, 0.184325, -0.270568, 0.82236, 0.0973683, -0.941308, -0.144706]));
      model.setOperandValue(bias, new Float32Array([0]));
      model.setOperandValue(pad, new Int32Array([1]));
      model.setOperandValue(rate_w, new Int32Array([1]));
      model.setOperandValue(rate_h, new Int32Array([1]));
      model.setOperandValue(act, new Int32Array([0]));

      model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
      model.identifyInputsAndOutputs([op1], [op3]);
      await model.finish();
  
      let compilation = await model.createCompilation();
      compilation.setPreference(getPreferenceCode(options.prefer));
      await compilation.finish();
  
      let execution = await compilation.createExecution();
  
      let op1_input = new Float32Array(op1_value);
      execution.setInput(0, op1_input);
  
      let op3_output = new Float32Array(type4_length);
      execution.setOutput(0, op3_output);
  
      await execution.startCompute();
  
      for (let i = 0; i < type4_length; ++i) {
        assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
      }
    });

    it('check result for ATROUS_CONV_2D 1 h3 w2 implicit padding same example-3', async function() {
      let model = await nn.createModel(options);
      let operandIndex = 0;
  
      let op1_value = [-0.869931, 0.644628, -0.918393, 0.153672, 0.868562, -0.358177, -0.134931, -0.247565, 0.22174, -0.259157, -0.284296, -0.538065, 0.765559, 0.41986, -0.556241, 0.658494, 0.214355, -0.850169, -0.252893, -0.478935, 0.530526, -0.0700663, -0.988729, -0.303061, 0.150845, 0.829915, 0.476349, 0.406537, -0.355343, 0.757145, -0.356362, 0.800482, -0.713861, 0.210483, -0.634303, 0.718236, -0.752038, 0.457547, -0.550769, -0.551178, 0.446766, -0.227462, 0.216348, -0.852806, -0.351486, 0.55906, -0.668493, -0.303493, -0.363763, -0.162837, 0.0701012, 0.756097, -0.142269, 0.329724, -0.656317, -0.998086, -0.652949, -0.40316, -0.893682, 0.432744, 0.612362, -0.869588, -0.71327, -0.398092, -0.0423559, 0.436576, -0.925272, 0.176549, 0.822904, 0.096833, -0.296802, -0.427195, 0.031654, -0.254479, 0.244905, 0.0948254, 0.643769, -0.90391, 0.352665, -0.901179, 0.266159, -0.968068, -0.615401, -0.388975, 0.939052, -0.116289, 0.107523, -0.0582711, 0.435172, 0.334675, 0.459711, 0.717436, 0.496627, -0.680175, -0.415066, 0.339848, 0.506004, -0.337808, -0.107218, -0.172496, 0.870638, 0.931872, -0.953884, 0.903042, 0.760078, 0.209727, -0.285384, -0.45514, 0.113194, 0.0756611, 0.0924435, -0.472863, 0.960609, -0.160385, -0.839445, 0.457097, 0.163348, 0.344867, -0.131619, 0.688715, -0.540827, 0.571259, -0.95587, 0.506164, -0.155839, 0.0789621, 0.756772, -0.662069, 0.242908, 0.460821, 0.177872, -0.289839, -0.640603, 0.702598, -0.506406, -0.568262, -0.0713716, 0.413792, 0.159673, -0.305208, 0.133816, -0.160254, 0.787323, -0.753244, 0.600721, 0.263186, -0.162387, 0.477962, -0.702951, -0.731036, -0.939481, -0.524519, 0.934072, -0.511637, -0.503499, 0.106236, -0.323684, 0.534444, -0.843745, 0.364171, 0.0370358, -0.168801, -0.404559, -0.814178, 0.91745, -0.334276, 0.66925, -0.801201, 0.156511, -0.427949, 0.379153, 0.818597, -0.649902, 0.427087, -0.586015, -0.559789, -0.833923, 0.0892409, -0.621251, 0.213826, 0.465509, 0.4704, 0.380261, 0.413067, 0.180822, 0.172866, 0.59614, 0.825575, 0.662916, -0.704381, -0.297631, 0.697778];
      let op3_expect = [0.93729883, 1.2219346, 1.63162, 1.8668158, 1.6269842, -1.9670266, -0.15441051, 0.5595218, -0.99790573, 2.3631613, -1.3033884, 1.2685156, -1.054666, 0.31054103, 1.3991811, -0.46040928, -0.5490349, 0.14452362, -0.3481132, 0.62236893, -0.83281666, -3.7738001, 0.5568896, 0.9274717, 0.48187765, -0.9098393, -2.0777307, 1.213712, -0.24457066, 0.14877218, -0.5466188, 0.9753277, -0.53815746, -0.21209812, 0.43179023, 3.625693, 0.18136086, -0.61304003, 0.0709098, 1.9279834, 1.5563309, 0.9073066, 2.7159054, -2.4034908, 0.37647444, -1.606053, 1.3484854, -0.9874026, 0.13162848, -2.3492568, -2.4371247, 1.1747775, 1.2780867, -1.0992509, -0.15879333, 0.62347984, -0.39933106, 0.2999848, -1.6485932, 0.12523836, -0.4088197, 0.7373756, -0.43234983, 0.1826737];
  
      let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
      let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 3, 2, 3]};
      let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1]};
      let type3 = {type: nn.INT32};
      let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 1]};
      let type4_length = product(type4.dimensions);
  
      let op1 = operandIndex++;
      model.addOperand(type0);
      let op2 = operandIndex++;
      model.addOperand(type1);
      let bias = operandIndex++;
      model.addOperand(type2);
      let pad = operandIndex++;
      model.addOperand(type3);
      let rate_w = operandIndex++;
      model.addOperand(type3);
      let rate_h = operandIndex++;
      model.addOperand(type3);
      let act = operandIndex++;
      model.addOperand(type3);

      let op3 = operandIndex++;
      model.addOperand(type4);
      
      
      model.setOperandValue(op2, new Float32Array([-0.966213, -0.467474, -0.82203, -0.579455, 0.0278809, -0.79946, -0.684259, 0.563238, 0.37289, 0.738216, 0.386045, -0.917775, 0.184325, -0.270568, 0.82236, 0.0973683, -0.941308, -0.144706]));
      model.setOperandValue(bias, new Float32Array([0]));
      model.setOperandValue(pad, new Int32Array([1]));
      model.setOperandValue(rate_w, new Int32Array([2]));
      model.setOperandValue(rate_h, new Int32Array([2]));
      model.setOperandValue(act, new Int32Array([0]));

      model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
      model.identifyInputsAndOutputs([op1], [op3]);
      await model.finish();
  
      let compilation = await model.createCompilation();
      compilation.setPreference(getPreferenceCode(options.prefer));
      await compilation.finish();
  
      let execution = await compilation.createExecution();
  
      let op1_input = new Float32Array(op1_value);
      execution.setInput(0, op1_input);
  
      let op3_output = new Float32Array(type4_length);
      execution.setOutput(0, op3_output);
  
      await execution.startCompute();
  
      for (let i = 0; i < type4_length; ++i) {
        assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
      }
    });

    it('check result for ATROUS_CONV_2D 1 h3 w2 implicit padding same example-4', async function() {
      let model = await nn.createModel(options);
      let operandIndex = 0;
  
      let op1_value = [-0.295335, -0.00387601, -0.552251, 0.166084, -0.28482, -0.152143, -0.719885, -0.869386, -0.745598, 0.823947, 0.473183, -0.331337, 0.187631, 0.0426571, -0.826897, -0.755085, -0.472453, -0.0233656, 0.0483436, 0.933418, -0.961974, 0.0125783, 0.219742, 0.342604, -0.15166, 0.0934905, 0.783221, 0.129664, 0.838844, -0.271388, 0.924519, 0.342843, 0.274418, 0.350817, 0.841638, -0.543993, -0.00283395, -0.128467, -0.682943, -0.319117, 0.84634, 0.283003, 0.32865, 0.0293755, -0.0335696, 0.591266, -0.0743476, -0.741271, 0.462056, -0.583625, -0.590183, 0.6234, 0.535269, -0.670818, -0.955642, -0.770173, 0.479986, 0.664377, 0.399445, -0.968874, -0.276263, -0.901951, 0.544104, -0.958981, 0.482658, -0.807284, 0.305369, -0.947818, 0.827498, -0.382887, -0.805741, -0.796678, -0.299804, -0.229828, 0.818783, -0.103055, -0.45568, -0.227827, 0.543743, -0.96073, 0.946747, -0.857182, -0.96426, -0.292411, -0.715614, 0.765278, -0.475043, -0.590142, -0.238507, 0.673002, -0.473357, -0.319626, 0.936014, 0.486607, 0.580844, 0.425352, -0.800994, 0.290763, -0.494953, -0.441162, 0.718677, -0.828427, 0.96965, 7.53637e-05, -0.699973, -0.526886, -0.352682, 0.799466, 0.332789, 0.723389, 0.407659, -0.934084, -0.284705, 0.961484, -0.700395, -0.985808, -0.595342, -0.691721, 0.49448, -0.0842649, 0.0390966, 0.298938, -0.128094, -0.97158, 0.86393, 0.270606, -0.468986, -0.256605, 0.47215, -0.273117, -0.590343, -0.826529, -0.725381, -0.194821, -0.259661, -0.0949207, -0.180302, 0.0446834, -0.222133, -0.40393, 0.295772, -0.92949, 0.580079, -0.169856, 0.330311, 0.0173551, -0.635823, 0.475942, 0.907175, 0.242777, -0.512208, 0.362463, 0.0496289, 0.65171, 0.990057, 0.690733, -0.469013, -0.101311, -0.68372, -0.157841, -0.677711, -0.708224, -0.659437, -0.407607, 0.677033, 0.89032, 0.228307, -0.749514, 0.772958, 0.054701, 0.551705, 0.917052, -0.895022, -0.702397, 0.484142, 0.108648, 0.833347, 0.478872, -0.984112, 0.387176, -0.73299, 0.7526, 0.443312, -0.0987856, 0.125415, 0.10876, -0.498108, 0.43209, 0.344609, 0.928941, -0.130732, -0.0569167];
      let op3_expect = [-0.19379666, 0.13141191, 0.01153314, 1.8091118, -2.3524547, 2.3089457, -0.11324078, 1.127184, 1.1204935, 2.5120242, 2.149157, 0.6553576, -0.20535097, -0.6506086, 1.8369594, 0.54811543, 0.7003816, -1.0158687, 0.26498342, 0.5115767, 0.02016348, 1.3763173, 1.6339865, -0.47847784, -0.82466245, -1.7953774, -0.58860576, -0.5705055, -1.930277, -0.10564268, 0.09756953, 0.5007975, 0.05934131, 1.4807024, -1.6880066, -0.18793303, 1.1057533, -1.0429065, 2.347888, -0.28468987, 0.63049823, -1.7537897, 3.535353, -0.15747231, 1.2116436, -0.53958964, -0.5445896, -0.05320372, 1.4167088, 0.30553037, 0.93280673, -0.04479983, 0.42253172, -1.397118, 1.622694, 2.101064, 1.3468413, -0.8429366, -0.6602505, 0.1906923, 0.3716293, 1.4599676, 1.6961491, 0.8730268];
  
      let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
      let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 3, 2, 3]};
      let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [1]};
      let type3 = {type: nn.INT32};
      let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 1]};
      let type4_length = product(type4.dimensions);
  
      let op1 = operandIndex++;
      model.addOperand(type0);
      let op2 = operandIndex++;
      model.addOperand(type1);
      let bias = operandIndex++;
      model.addOperand(type2);
      let pad = operandIndex++;
      model.addOperand(type3);
      let rate_w = operandIndex++;
      model.addOperand(type3);
      let rate_h = operandIndex++;
      model.addOperand(type3);
      let act = operandIndex++;
      model.addOperand(type3);

      let op3 = operandIndex++;
      model.addOperand(type4);
      
      
      model.setOperandValue(op2, new Float32Array([-0.966213, -0.467474, -0.82203, -0.579455, 0.0278809, -0.79946, -0.684259, 0.563238, 0.37289, 0.738216, 0.386045, -0.917775, 0.184325, -0.270568, 0.82236, 0.0973683, -0.941308, -0.144706]));
      model.setOperandValue(bias, new Float32Array([0]));
      model.setOperandValue(pad, new Int32Array([1]));
      model.setOperandValue(rate_w, new Int32Array([2]));
      model.setOperandValue(rate_h, new Int32Array([2]));
      model.setOperandValue(act, new Int32Array([0]));

      model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
      model.identifyInputsAndOutputs([op1], [op3]);
      await model.finish();
  
      let compilation = await model.createCompilation();
      compilation.setPreference(getPreferenceCode(options.prefer));
      await compilation.finish();
  
      let execution = await compilation.createExecution();
  
      let op1_input = new Float32Array(op1_value);
      execution.setInput(0, op1_input);
  
      let op3_output = new Float32Array(type4_length);
      execution.setOutput(0, op3_output);
  
      await execution.startCompute();
  
      for (let i = 0; i < type4_length; ++i) {
        assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
      }
    });
  });
  