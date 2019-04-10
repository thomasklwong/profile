module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '*.{css,scss,html,json,md,yml}': ['prettier --write', 'git add']
};
