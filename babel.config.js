// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache.forever();
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {},
        },
      ],
    ],
  };
};
