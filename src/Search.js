import React, { lazy, Suspense, useEffect, useState } from 'react'
import './Search.css'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchFrom from './SearchFrom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchResults from './SearchResults';



function Search() {
    
// const API_KEY = "AIzaSyCFkk34l4NSQg6ZkHWPshSJmEfHwL2IMKw";
const API_KEY ="AIzaSyCxcpPxQqFp-gO_s7m8k0G67MUFUkWmew8";

const CONTEXT_KEY ="3e687f894175adc38";

const {query} = useParams();

// const { data } =CastomHooks(query)
const [result,setResult] =useState(false);

const [data,setData] =useState([]);

useEffect(()=>{
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`)
    .then(res => res.json())
    .then((resposne) => {setData(resposne)})

setTimeout(() => {
    setResult(true);
}, 1000);

},[query])

console.log(data)




    return (
        <div className="searchpage">
            <div className="search__header">
                <Link exact to="/">
                    <img src="/logo.png" />
                </Link>

                <div className="search__headerBody">
                    <SearchFrom hiddenButton defaults={query} />

                    <div className="searchpage__options">
                    <div className="searchpage__optionLeft">
                        <div className="searh__option">
                            <SearchIcon />
                            <Link to="/all" exact>All</Link>
                        </div>

                        <div className="searh__option">
                            <DescriptionIcon />
                            <Link to="/all" exact>News</Link>
                        </div>

                        <div className="searh__option">
                            <ImageIcon />
                            <Link to="/all" exact>Images</Link>
                        </div>

                        <div className="searh__option">
                            <LocalOfferIcon />
                            <Link to="/all" exact>Shopping</Link>
                        </div>

                        <div className="searh__option">
                            <RoomIcon />
                            <Link to="/all" exact>maps</Link>
                        </div>

                        <div className="searh__option">
                            <MoreVertIcon />
                            <Link to="/all" exact>More</Link>
                        </div>
                    </div>

                    <div className="searchpage__optionRight">
                    <div className="searh__option">
                        <Link to="/setting" exact>Settings</Link>
                    </div>

                    <div className="searh__option">
                        <Link to="/tools" exact>Tools</Link>
                    </div>
                    </div>
                </div>

                </div>



            </div>


                {result && (<SearchResults data={data}  query={query}/>)}


        </div>
    )
}

export default Search











// https://developers.google.com/custom-search/v1/using_rest


// https://www.googleapis.com/customsearch/v1?key=AIzaSyCFkk34l4NSQg6ZkHWPshSJmEfHwL2IMKw&cx=3e687f894175adc38&q=reactjs

// const [data,setData] =useState([]);

// console.log(data)


// useEffect(()=>{
//     const fetchData =()=> {
//         fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q="reactjs"`)
//         .then((res)=> res.json())
//         .then((result)=> {
//             console.log(result);
//         })
//     }
// },[]);
