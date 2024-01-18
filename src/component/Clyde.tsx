import React, { useEffect, useState } from "react";

type Props = {
    field: number[][];
    setField: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Clyde: React.FC<Props> = ({
    field,
    setField,
}) => {

    return (
        <div className="clyde"></div>
    )

};

export default Clyde;