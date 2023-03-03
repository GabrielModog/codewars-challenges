String.prototype.camelCase = function () {
  return this.replace(/\s(.)/g, (s) => s.toUpperCase())
    .replace(/\s/g, "")
    .replace(/^(.)/g, (s) => s.toUpperCase());
};
