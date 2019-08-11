module.exports = () => ({
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
});
