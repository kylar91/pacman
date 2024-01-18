import React, { useEffect, useState } from "react";

type Props = {
    field: number[][];
    setField: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Pinky: React.FC<Props> = ({
    field,
    setField,
}) => {

    return (
        <div className="pinky"></div>
    )

};

export default Pinky;