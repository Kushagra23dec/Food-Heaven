import  {createContext} from "react";

const UserContext = createContext({
    DarkTheme:"bg-grey-500",
    LightTheme:"bg-white",
});


export default UserContext;