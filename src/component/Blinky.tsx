import React, { useEffect, useState } from "react";

type Props = {
    field: number[][];
    setField: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Blinky: React.FC<Props> = ({
    field,
    setField,
}) => {

    return (
        <div className="blinky"></div>
    )

};

export default Blinky;