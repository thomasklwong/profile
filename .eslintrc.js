module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react'
  ],

  plugins: ['react-hooks'],

  globals: {
    graphql: true,
    __PATH_PREFIX__: true
  },

  parserOptions: {
    ecmaVersion: new Date().getFullYear(),
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    'no-console': 0,

    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/export': 2,
    'import/no-deprecated': 2,
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/extensions': 2,
    'import/order': 2,
    'import/newline-after-import': 2,
    'import/no-unassigned-import': 2,
    'import/no-amd': 2,
    'import/no-webpack-loader-syntax': 2,

    'react/default-props-match-prop-types': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-danger': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-typos': 2,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
    'react/jsx-key': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': 2,

    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2
  }
};
