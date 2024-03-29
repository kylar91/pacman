import { useState } from "react";
import PacMan from "./PacMan";
import Blinky from "./Blinky";
import Pinky from "./Pinky";
import Inky from "./Inky";
import Clyde from "./Clyde";

const Field = () => {
  const initialField = [
    // 0
    [
      4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 4, 4,
    ],
    //1
    [
      4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 4,
    ],
    //2
    [
      4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4,
      4, 1, 4,
    ],
    //3
    [
      4, 2, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4,
      4, 2, 4,
    ],
    //4
    [
      4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4,
      4, 1, 4,
    ],
    //5
    [
      4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 4,
    ],
    //6
    [
      4, 1, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4,
      4, 1, 4,
    ],
    //7
    [
      4, 1, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4,
      4, 1, 4,
    ],
    //8
    [
      4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1,
      1, 1, 4,
    ],
    //9
    [
      4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 1, 4, 4, 4,
      4, 4, 4,
    ],
    //10
    [
      8, 8, 8, 8, 8, 4, 1, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 1, 4, 8, 8,
      8, 8, 8,
    ],
    //11
    [
      8, 8, 8, 8, 8, 4, 1, 4, 4, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 4, 4, 1, 4, 8, 8,
      8, 8, 8,
    ],
    //12
    [
      8, 8, 8, 8, 8, 4, 1, 4, 4, 0, 4, 4, 4, 5, 5, 4, 4, 4, 0, 4, 4, 1, 4, 8, 8,
      8, 8, 8,
    ],
    //13
    [
      4, 4, 4, 4, 4, 4, 1, 4, 4, 0, 4, 4, 4, 5, 5, 4, 4, 4, 0, 4, 4, 1, 4, 4, 4,
      4, 4, 4,
    ],
    //14
    [
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 4, 10, 11, 5, 12, 4, 4, 0, 0, 0, 1, 0, 0, 0,
      0, 0, 0,
    ],
    //15
    [
      4, 4, 4, 4, 4, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 4, 4,
      4, 4, 4,
    ],
    //16
    [
      8, 8, 8, 8, 8, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 8, 8,
      8, 8, 8,
    ],
    //17
    [
      8, 8, 8, 8, 8, 4, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 4, 8, 8,
      8, 8, 8,
    ],
    //18
    [
      8, 8, 8, 8, 8, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 8, 8,
      8, 8, 8,
    ],
    //19
    [
      4, 4, 4, 4, 4, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 4, 4,
      4, 4, 4,
    ],
    //20
    [
      4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 4,
    ],
    //21
    [
      4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4,
      4, 1, 4,
    ],
    //22
    [
      4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4,
      4, 1, 4,
    ],
    //23
    [
      4, 2, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0, 7, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1,
      1, 2, 4,
    ],
    //24
    [
      4, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 1,
      4, 4, 4,
    ],
    [
      4, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 1,
      4, 4, 4,
    ],
    [
      4, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1,
      1, 1, 4,
    ],
    [
      4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 1, 4,
    ],
    [
      4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 1, 4,
    ],
    [
      4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 4,
    ],
    [
      4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 4, 4,
    ],
  ];

  const [field, setField] = useState(initialField);
  const [pacManPosition, setPacManPosition] = useState({ row: 23, col: 14 });
  const [animation, setAnimation] = useState(false)
  const [direction, setDirection] = useState('ArrowLeft')

  return (
    <div className="game">
      {field.map((col: number[], colIndex: number) => (
        <div key={colIndex} className="col">
          {col.map((cell: number, colIndex: number) => {
            if (cell === 1) {
              return (
                <div className={`cell`}>
                  <div key={colIndex} className={`cell-${cell}`}></div>
                </div>
              );
            }
            if (cell === 2) {
              return (
                <div className={`cell`}>
                  <div key={colIndex} className={`cell-${cell}`}></div>
                </div>
              );
            }
            if (cell === 7) {
              return (
                <div className={`cell`}>
                  <PacMan
                    field={field}
                    setField={setField}
                    position={pacManPosition}
                    setPosition={setPacManPosition}
                    direction={direction}
                    setDirection={setDirection}
                    animation={animation}
                    setAnimation={setAnimation}
                  />
                </div>
              );
            }
            if (cell === 13) {
              return (
                <div className={`cell`}>
                  <Blinky
                    field={field}
                    setField={setField}
                  />
                </div>
              );
            }
            if (cell === 10) {
              return (
                <div className={`cell`}>
                  <Inky
                    field={field}
                    setField={setField}
                  />
                </div>
              );
            }
            if (cell === 11) {
              return (
                <div className={`cell`}>
                  <Pinky
                    field={field}
                    setField={setField}
                  />
                </div>
              );
            }
            if (cell === 12) {
              return (
                <div className={`cell`}>
                  <Clyde
                    field={field}
                    setField={setField}
                  />
                </div>
              );
            }
            return <div key={colIndex} className={`cell cell-${cell}`} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Field;
