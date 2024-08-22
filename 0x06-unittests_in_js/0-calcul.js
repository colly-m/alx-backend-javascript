function calculateNumber(a, b) {
  const RoundA = Math.round(a);
  const RoundB = Math.round(b);
  return RoundA + RoundB;
}

module.exports = calculateNumber;

