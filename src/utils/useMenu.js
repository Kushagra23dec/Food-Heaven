import {useState,useEffect} from "react";
import { MENU_URL } from "../assets/resources";


async function fetchMenu(setMenu, id,setFilteredMenu) {
    const res = await fetch(MENU_URL + id);
    const data = await res.json();
    // console.log(Object.values(data)[1]);
    setMenu(Object.values(data)[1]);
    const filterIdx = Object.values(data)[1];
    const filteredIdx = Object.keys(filterIdx.menu.items).map((dish)=>{return dish});
    setFilteredMenu(filteredIdx);
}

const useMenu = (id,setFilteredMenu)=>{
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetchMenu(setMenu,id,setFilteredMenu);
    },[]);

 
return menu;
}



export default useMenu;