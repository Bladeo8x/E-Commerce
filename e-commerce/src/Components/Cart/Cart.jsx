import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    if(totalQuantity === 0) {
        return (
            <div>
                <h1>Cart Empty</h1>
                <Link to='/' className="Option">Products</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Empty Cart</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;