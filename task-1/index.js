function matrix (size) {
  var arr = new Array ();
  for (var x=0; x<size; x++){
    arr [x] = new Array ();
    for (var y=0; y<size; y++) {
      arr [x] [y] = null;
    }
  }

  return arr;
}

function turnRight (currentDirection) {
  switch (currentDirection[0] + ',' + currentDirection[1]) {
    case '0,1':
      return [1,0];
    case '1,0':
      return [0, -1];
    case '0,-1':
      return [-1,0];
    default:
      return [0,1];
  }
}

/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  var result = matrix(n)

  var x=0, y=-1;
  var direction = [0,1];
  for (var i=1; i<=Math.pow(n, 2); i++) {
    x+= direction [0];
    y+= direction [1];
    if (!(x in result) || !(y in result[x]) || result [x] [y] !== null) {
      x-= direction [0];
      y-= direction [1];
      direction = turnRight (direction);
      x+= direction [0];
      y+= direction [1];
    }
    result [x] [y] = i
  }
  return result;
}

export default fillSpiralMatrix;