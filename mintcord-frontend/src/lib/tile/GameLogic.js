export const isValidTiles = (tileArray, startX, startY) => {
  let newTileArray = tileArray.map((tileRow) => {
    return tileRow.slice();
  });
  let stack = [[startX, startY]];
  
  while (stack.length > 0) {
    let [x, y] = stack.pop();

    while (true) {
      if (y>=1 && newTileArray[y-1][x] === 1) {
        y -= 1;
      }
      else break;
    }

    let reachLeft = false, reachRight = false;

    while (y < newTileArray.length && newTileArray[y][x] === 1) {
      newTileArray[y][x] = 2;
      if (x > 0) {
        if (newTileArray[y][x-1] === 1) {
          if (!reachLeft) {
            stack.push([x-1, y]);
            reachLeft = true;
          }
        }
        else if (reachLeft) {
          reachLeft = false;
        }
      }
      if (x < newTileArray[y].length-1) {
        if (newTileArray[y][x+1] === 1) {
          if (!reachRight) {
            stack.push([x+1, y]);
            reachRight = true;
          }
        }
        else if (reachRight) {
          reachRight = false;
        }
      }

      y++;
    }
  }

  for (let i=0; i<newTileArray.length; i++) {
    for (let j=0; j<newTileArray[i].length; j++) {
      if (newTileArray[i][j] === 1) return false;
    }
  }

  return true;
}

const hasZeroTop = (arr) => {
  for (const v of arr[0])
    if (v) return false;
  return true;
}
const hasZeroBottom = (arr) => {
  for (const v of arr[arr.length-1])
    if (v) return false;
  return true;
}
const hasZeroLeft = (arr) => {
  for (const subarr of arr)
    if (subarr[0]) return false;
  return true;
}
const hasZeroRight = (arr) => {
  for (const subarr of arr)
    if (subarr[subarr.length-1]) return false;
  return true;
}
export const grindTiles = (tileArray) => {
  
  while (tileArray.length > 0) {
    if (hasZeroTop(tileArray)) tileArray.shift();
    else if (hasZeroBottom(tileArray)) tileArray.pop();
    else break;
  }

  while (tileArray.length > 0 && tileArray[0].length > 0) {
    if (hasZeroLeft(tileArray)) 
      tileArray.map(array => array.shift());
    else if (hasZeroRight(tileArray))
      tileArray.map(array => array.pop());
    else break;
  }

  return tileArray; 
}

export const isCorrect = (tileArray, answerArray) => {

  if (tileArray.length !== answerArray.length || 
    tileArray[0].length !== answerArray[0].length)
    return false;

  for (let i=0; i<answerArray.length; i++) {
    for (let j=0; j<answerArray[i].length; j++) {
      if (answerArray[i][j] !== tileArray[i][j]) {
        return false;
      } 
    }
  }

  return true;
}