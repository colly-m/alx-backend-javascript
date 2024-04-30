export default function createInt8TypeArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buff = new ArrayBuffer(length);
  const newbuf = new DataView(buff, 0, length);
  const ary = new Int8Array(buff);
  ary[position] = value;
  return newbuf;
}
