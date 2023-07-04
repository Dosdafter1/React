import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import ThemeContext from '../../contexts/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkMode';
import { Margin } from '@mui/icons-material';
import FavoriteFilmContext from '../../contexts/FavoriteFilmContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Header = () => {
    const {theme, changeTheme} = useContext(ThemeContext);
    const {favoriteFilms} = useContext(FavoriteFilmContext);
    return (
        <header className={theme}>
            
           <NavLink to="/">Home</NavLink>
           <NavLink to="/counter">Counter</NavLink>
           <NavLink to="/users">Users</NavLink>
           <NavLink to="/counters">Counters</NavLink>
           <NavLink to="/films">Films</NavLink>
           <NavLink to="/film-api">FilmsAPI</NavLink>
           <FavoriteIcon />
           <span>{favoriteFilms.length}</span>
            {theme==='dark'?
                <LightModeIcon onClick={changeTheme}/> : 
                <DarkModeOutlinedIcon onClick={changeTheme}/>}
           
        </header>
    );
}

export default Header;
