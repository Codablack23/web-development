import CartCard from "./CartCard"
import EmptyCart from "./EmptyCart"

/* eslint-disable react/prop-types */
function CartList({cartItems}){
    return cartItems.map((product,index) =>(
        <CartCard
            key={index}
            product={{...product,id:index + 1}}
        />
        )
    )
}

export default function CartSection({cart}){
    if(cart.length > 0){
        return (
            <section className="cart-container">
                <h4 className="cart-title">Your Cart ({cart.length})</h4>
                <CartList cartItems={cart}/>
            </section>
        )
    }
    return (
        <section className="cart-container">
            <h4 className="cart-title">Your Cart ({cart.length})</h4>
            <EmptyCart/>
        </section>
    )
}