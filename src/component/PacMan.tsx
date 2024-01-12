import { useEffect, useState } from "react";

type Props = {
  level: [];
};

const PacMan: React.FC<Props> = ({ level }) => {
  const [position, setPosition] = useState({ row: 23, col: 13 });

  const isValidMove = (row: number, col: number) => {
    if (level[row][col] !== 4) {
      return true;
    }
    return false;
  };

  const move = (row: number, col: number) => {
    const newRow = position.row + row;
    const newCol = position.col + col;

    if (isValidMove(newRow, newCol)) {
      setPosition({ row: newRow, col: newCol });
    }
  };

  const handlePress = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        move(-1, 0);
        break;
      case "ArrowDown":
        move(1, 0);
        break;
      case "ArrowLeft":
        move(0, -1);
        break;
      case "ArrowRight":
        move(0, 1);
        break;
    }
  };

  useEffect(() => window.addEventListener("keydown", handlePress as any), []);

  return (
    <>
      <div className="pacman"> O </div>
    </>
  );
};

export default PacMan;
