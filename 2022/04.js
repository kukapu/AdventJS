function fitsInOneBox(boxes) {
  
    let sortBoxes = boxes.sort((a, b) => {
      if ((a.l > b.l) && (a.w > b.w) && (a.h > b.h)) {
        return 1;
      }
      if ((a.l < b.l) && (a.w < b.w) && (a.h < b.h)) {
        return -1;
      }
      return 0;
    });
  
    return sortBoxes.every((box, index) => {
      if (index === 0) return true;
      const prev = boxes[index - 1]
      return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })
}