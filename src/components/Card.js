import React from "react";

const Card = ({id}) => {
    return (
        <div className="shadow-lg bg-purple-300 my-2 mx-2 w-48 h-48 rounded-md">
            <h1 className="font-bold ">{id}</h1>

        </div>
    )
}

export default Card;