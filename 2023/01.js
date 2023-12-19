function findFirstRepeated(gifts) {
  const numberOfGifts = {};
  const positionsRepited = [];

  gifts.map((gif) => {
    if (numberOfGifts[gif] === undefined) numberOfGifts[gif] = 1;
    else numberOfGifts[gif] += 1;
  });

  for (const key in numberOfGifts) {
    if (numberOfGifts[key] >= 2) {
      const lastPositionRepited = gifts.lastIndexOf(Number(key));
      positionsRepited.push(lastPositionRepited);
    }
  }

  if (positionsRepited.length > 0) return gifts[Math.min(...positionsRepited)];

  return -1;
}

//----------------------------------------------

function findFirstRepeated(gifts) {
  const viwed = new Set();

  for (const gift of gifts) {
    if (viwed.has(gift)) {
      return gift;
    }
      viwed.add(gift);
  }

  return -1;
}