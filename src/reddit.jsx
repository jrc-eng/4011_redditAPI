import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


const Reddit = () =>{

    const [numCalls, setNumCalls] = useState(-1);

    const [posts, setPosts] = useState([]);



    useEffect(() => {

        setNumCalls(numCalls + 1);
    }, [])

    return(

        <div>
            {numCalls}
        </div>


    )




}


export default Reddit