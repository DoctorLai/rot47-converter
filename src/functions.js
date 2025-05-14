export function rot47(str) {
  return str.replace(/[\x21-\x7E]/g, function (c) {
    return String.fromCharCode(((c.charCodeAt(0) - 33 + 47) % 94) + 33);
  });
}
