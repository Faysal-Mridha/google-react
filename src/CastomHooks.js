import React, { useEffect, useState } from 'react';





function CastomHooks(query) {


const API_KEY = "AIzaSyCFkk34l4NSQg6ZkHWPshSJmEfHwL2IMKw";
const CONTEXT_KEY ="3e687f894175adc38";
    const [data,setData] =useState([]);


    // useEffect(()=>{

        const fetchData = async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`)
            .then((res)=> res.json())
            .then((result)=> {
                setData(result);
            })
            .catch((error)=> console.log(error));
        }

        fetchData();
        // },[query]);

        return { data};

        

}

export default CastomHooks
