import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex flex-wrap grow justify-center mt-8 mx-3 " >

            {Array(8).fill("").map((e, index) => { return <Link key={index}  to={"/carddetail/" + index} > <Card id={index}/> </Link> })}
        </div >
    )
}

export default Body;