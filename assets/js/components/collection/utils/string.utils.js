function chr4() {
  return Math.random().toString(16).slice(-4);
}
export function createID(prefix) {
  return `${prefix}-${chr4()}${chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
}
export function removeDiacritics(string) {
  if (typeof string !== 'string')
    return string;
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
export function splitByWhitespace(string) {
  if (typeof string !== 'string')
    return string;
  return string.split(/(\s+)/);
}
//# sourceMappingURL=string.utils.js.map
