import { useState } from "react";
import GlobalContext from "./globalContext";

const GlobalState = (props)=>{

    const [title, setTitle] = useState('This from Context')
    //api
    

    return(
        <GlobalContext.Provider value={{title, setTitle}}>{props.children}</GlobalContext.Provider>
    );
}

export default GlobalState