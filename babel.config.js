const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    ['babel-preset-gatsby'],
    [
      '@emotion/babel-preset-css-prop',
      { sourceMap: isProduction, autoLabel: isProduction }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'macros'
  ]
};
