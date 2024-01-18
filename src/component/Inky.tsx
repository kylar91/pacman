import React, { useEffect, useState } from "react";

type Props = {
    field: number[][];
    setField: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Inky: React.FC<Props> = ({
    field,
    setField,
}) => {

    return (
        <div className="inky"></div>
    )

};

export default Inky;