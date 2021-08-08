const dotPathToObjecRef = (obj, path) =>
  path.split('.').reduce((o, i) => {
    if (o === undefined) return undefined;
    return o[i];
  }, obj);

module.exports = dotPathToObjecRef;
