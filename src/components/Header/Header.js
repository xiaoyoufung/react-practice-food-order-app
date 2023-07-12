import React from 'react';
import classes from './Header.module.css';
import mainImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return(
        <React.Fragment>
            <img className={classes['main-image']} src={mainImg} alt="main-img" />
            
            <div className={classes.header}>
                <h2>React Meals</h2>
                <HeaderCartButton />
            </div>
        
        </React.Fragment>
    )
}

export default Header;