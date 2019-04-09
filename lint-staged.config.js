module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '*.{md,html}': ['prettier --write', 'git add']
};
