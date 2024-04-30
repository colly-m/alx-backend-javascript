export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length))
    .join('-');
}
