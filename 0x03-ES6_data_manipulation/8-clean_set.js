export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
