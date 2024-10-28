// import { useState, useEffect } from "react";

import Tile from "./Tile";
import Strike from "./Strike";

// import Field from "./Field";
// import checkWinner from "../utils/checkWinner";

// const Board = () => {
//   const [boardArray, setBoardArray] = useState(Array(9).fill(null));
//   const [isCurrentPlayerX, setIsCurrentPlayerX] = useState(true);

//   const fieldClick = (index) => {
//     setBoardArray((previousBoardArray) => {
//       let newBoardArray = [...previousBoardArray];

//       if (previousBoardArray[index] === null) {
//         newBoardArray[index] = isCurrentPlayerX ? "X" : "O";
//         setIsCurrentPlayerX(!isCurrentPlayerX);
//       }

//       return newBoardArray;
//     });
//   };

//   useEffect(() => {
//     const winner = checkWinner(boardArray);

//     if (winner !== null) {
//       alert(`Winner is ${winner}`);
//     }
//   }, [boardArray]);

//   return (
//     <>
//       {boardArray.map((_, index) => (
//         <Field
//           key={index}
//           clickFieldHandler={fieldClick}
//           index={index}
//           element={boardArray[index]}
//         />
//       ))}
//     </>
//   );
// };

// export default Board;

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
export default Board;
