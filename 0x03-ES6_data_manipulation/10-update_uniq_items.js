export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedMap = new Map();

  map.forEach((val, key) => {
    if (val === 1) {
      updatedMap.set(key, 100);
    } else {
      updatedMap.set(key, val);
    }
  });
  return updatedMap;
}
