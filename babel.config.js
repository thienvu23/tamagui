process.env.TAMAGUI_TARGET = 'native';
module.exports = {
  plugins: ['transform-inline-environment-variables'],
  presets: ['module:metro-react-native-babel-preset'],
};
