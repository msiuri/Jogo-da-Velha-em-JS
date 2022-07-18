export function calculateWinner(squares) {
  //lista as posições que vencem o jogo
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //uma interação para verificar se a combinação deu certo
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  //retorna null em caso de não dar match
  return null;
}
//seta os valores default
const squares = [null, null, null, "X", "X", "O", null, null, null];

console.log(calculateWinner(squares));
