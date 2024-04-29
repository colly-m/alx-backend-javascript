export default function createInt8TypeArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buff = new ArrayBuffer(length);
  const view = new Int8Array(buff);
  view[position] = value;

  return buff;
}
