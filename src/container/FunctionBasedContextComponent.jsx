import React, { useEffect, useContext } from 'react';
import GlobalContext from '../context/globalContext'; 
function FunctionBasedContextComponent(props) {

    const {title, setTitle} = useContext(GlobalContext);

    useEffect(() => {
        setTimeout(() => {
            setTitle('Title updated after 4 Seconds of timeout.')
        }, 4000);
    }, []);

    return <h1>{title}</h1>;
}

export default FunctionBasedContextComponent;