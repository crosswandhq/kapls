module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src/app',
            'assets': './assets',
            palette: './src/palette',
          },
        },
      ],
    ],
  };
};
