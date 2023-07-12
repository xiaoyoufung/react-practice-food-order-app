import React from 'react';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return(
        <React.Fragment>
            <button className={classes.button} >
                Your Cart
            </button>
        </React.Fragment>
    )
}

export default HeaderCartButton;