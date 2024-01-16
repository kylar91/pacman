import React, { useEffect } from "react";

type Props = {
  field: number[][];
  setField: React.Dispatch<React.SetStateAction<number[][]>>;
  position: { row: number; col: number };
  setPosition: React.Dispatch<
    React.SetStateAction<{
      row: number;
      col: number;
    }>
  >;
};

const PacMan: React.FC<Props> = ({
  field,
  setField,
  setPosition,
  position,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();

    // Calcola la nuova posizione in base alla direzione della freccia premuta
    let newRow = position.row;
    let newCol = position.col;

    switch (e.key) {
      case "ArrowUp":
        newRow = Math.max(0, newRow - 1);
        break;
      case "ArrowDown":
        newRow = Math.min(field.length - 1, newRow + 1);
        break;
      case "ArrowLeft":
        newCol = Math.max(0, newCol - 1);
        break;
      case "ArrowRight":
        newCol = Math.min(field[0].length - 1, newCol + 1);
        break;
      default:
        return;
    }

    // Verifica se la nuova posizione è valida (cella vuota)
    if (field[newRow][newCol] !== 4) {
      handlePacManMove(newRow, newCol);
    }
  };

  const handlePacManMove = (row: number, col: number) => {
    // Crea una copia della matrice field per garantire l'immutabilità dello stato
    const newField = [...field];

    // Imposta la vecchia posizione di PacMan a 0
    newField[position.row][position.col] = 0;

    // Imposta la nuova posizione di PacMan a 7
    newField[row][col] = 7;

    // Aggiorna lo stato con la nuova matrice field e la nuova posizione di PacMan
    setField(newField);
    setPosition({ row: row, col: col });
  };

  useEffect(() => {
    // Aggiungi un listener per i tasti freccia quando la componente viene montata
    window.addEventListener("keydown", handleKeyDown as never);

    // Pulisci il listener quando la componente viene smontata
    return () => {
      window.removeEventListener("keydown", handleKeyDown as never);
    };
  }, [position]);

  return <div className="pacman"></div>;
};

export default PacMan;
