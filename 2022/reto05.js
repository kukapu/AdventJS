function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return Math.max(
        ...giftsCities
          .reduce((x, y) => x.concat(x.map((x) => [y].concat(x))), [[]])
          .filter((x) => x.length <= maxCities)
          .map((x) => x.reduce((a, b) => a + b, 0))
          .filter((x) => x <= maxGifts)
    );
}