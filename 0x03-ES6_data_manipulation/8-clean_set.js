export default function cleanSet(set, startString) {
  let outcome = '';
  if (!startString || !startString.length) return outcome;
  for (const elem of set) {
    if (elem && elem.startWith(startString)) {
      outcome += `${elem.slice(startString.length)}-`;
    }
  }
  return outcome.slice(0, outcome.length - 1);
}
