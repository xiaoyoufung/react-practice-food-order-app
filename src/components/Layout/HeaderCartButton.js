import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    return(
        <React.Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <div className={classes.icon}>
                <CartIcon/>
                </div>
                
                <div>Your Cart</div>
                
                <div className={classes.badge}>1</div>
            </button>
        </React.Fragment>
    )
}

export default HeaderCartButton;