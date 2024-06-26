export function formatBytes(bytes) {
  const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
}
export function fileAcceptValidation(file, accept) {
  if (typeof accept === 'string' && accept.length) {
    return (accept
      .replace(/\s/g, '')
      .split(',')
      .filter(accept => {
      return new RegExp(accept.replace('*', '.*')).test(file.type);
    }).length > 0);
  }
  else {
    return true;
  }
}
export function fileSizeValidation(file, maxSize) {
  const fileSize = Math.round(file.size);
  return fileSize <= maxSize;
}
//# sourceMappingURL=file.utils.js.map
