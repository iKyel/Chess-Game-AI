var config = {
  position: 'start',
  draggable: true,
  dropOffBoard: 'trash',
  pieceTheme: function(piece) {
    // Thay đổi đường dẫn của hình ảnh tương ứng với các quân cờ
    return './Lib/img/chesspieces/wikipedia/' + piece + '.png';
  },
  
}

var myBoard = Chessboard('myBoard', config);


