import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import Modal from '../UI/Modal';

const Cart = props => {

    const cartItems = (
        <ul className={classes['cart-items']} >
            {[{id: 'c1', name: 'Sushi', amount: 2, price: 13.56}].map((item) => (
            <CartItem 
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
            />
            ))}

        </ul>
    )
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>72.49</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;