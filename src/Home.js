import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core'
import SearchFrom from './SearchFrom';

function Home() {
    return (
        <div className="home">
            <header>
                <div className="header__left">
                <Link to="/about" exact>About</Link>
                <Link to="/store" exact>Store</Link>
                </div>

                <div className="header-right">
                <Link to="/gmail" exact>Gmail</Link>
                <Link to="/images" exact>Images</Link>
                <AppsIcon />
                <Avatar src="Faysal" alt="Faysal" />
                </div>
            </header>


            <div className="body">
                <img src="/logo.png" alt="" />

                <div className="input__contant">
                <SearchFrom />
                </div>
            </div>
        </div>
    )
}

export default Home
