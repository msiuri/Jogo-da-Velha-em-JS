import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const styles = {
  width: "200px",
  margin: "20px",
};
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    //se o usuario clicar num campo ocupado ou o jogo acabou, retorne:
    if (winner || boardCopy[i]) return;
    // coloca um X ou um O no campo clicado
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const jumpTo = () => {};
  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
