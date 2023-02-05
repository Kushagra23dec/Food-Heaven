import React, { useEffect, useState } from "react";
import { GITHUB_URL } from "../assets/resources";

async function fetchData(setUser,searchName) {
    const res = await fetch( GITHUB_URL+searchName  );

    const data = await res.json();
    setUser(data);
}



const GitHubCard = () => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [searchName, setSearchName] = useState("kushagra23dec");
    useEffect(() => {
        fetchData(setUser,searchName);
    }
        , [searchName]);

    return (user.length === 0) ? null
        : (
            <div className="flex flex-col gap-2 grow items-center justify-center bg-pink-200">
                <input className="border border-black rounded-sm p-1 font-semibold text-xl" value={name} type="text" placeholder="Enter Username"
                    onChange={(e) => { setName(e.target.value) }} />
                <button className="bg-gray-900 p-1 rounded-md font-semibold text-white hover:bg-gray-800"
                onClick={()=>{setSearchName(name)}}>Search</button>
                <div className="w-96 h-96  rounded-md p-4 flex flex-col  items-center shadow-md bg-gray-700">
                    <img src={user.avatar_url} className="w-28 rounded-full" />
                    <h1 className="font-bold text-white text-2xl">{user.name}</h1>
                    <h1 className="font-bold text-white text-2xl">Public Repo: {user.public_repos
                    }</h1>

                </div>

            </div>
        )
}

export default GitHubCard;
