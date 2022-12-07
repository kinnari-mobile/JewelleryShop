module.exports = api => {
  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          '@images': './src/assets/images',
          '@hooks': './src/hooks',
          '@icons': './src/components/common/Icon',
          '@theme': './src/assets/theme',
          '@provider': './src/provider',
          '@feature': './src/feature',
          '@routes': './src/routes',
          '@lib': './src/lib',
          '@globals': './src/globals',
          '@components': './src/components',
          '@common': './src/components/common',
          '@api': './src/api',
          '@store': './src/store',
          '@storage': './src/storage'
        },
      },
    ],
  ];

  if (api.env('production')) {
    plugins.push('transform-remove-console');
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins,
    };
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
