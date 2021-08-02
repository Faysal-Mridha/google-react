import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

function SearchFrom({hiddenButton,defaults}) {

    const history = useHistory();
    const [input,setInput] =useState('');

    const SearchGoogle=(e)=>{
        e.preventDefault();
        history.push(`/search/${input}`)
        setInput("")
    }

    return (
        <form>
            <div className="search__input">
                <SearchIcon style={{color:"gray"}} />
                <input defaultValue={defaults && defaults} value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder="Search in Google..." />
                <MicIcon />
            </div>

            {hiddenButton?(
            <div className="input__button" style={{display:"none"}}>
            <Button onClick={SearchGoogle} type="submit" variant="outlined">Google Search</Button>
            <Button onClick={SearchGoogle} type="submit" variant="outlined">I 'm Felling Lucky</Button>
        </div>
            ):(
            <div className="input__button">
            <Button onClick={SearchGoogle} type="submit" variant="outlined">Google Search</Button>
            <Button onClick={SearchGoogle} type="submit" variant="outlined">I 'm Felling Lucky</Button>
        </div>
            )}
        </form>
    )
}

export default SearchFrom
