import { DeleteIcon } from "../../icons/delete-icon";

/* eslint-disable react/prop-types */
export default function CartCard({product}){
    return (
        <div className="cart-card">
            <div>
                <p className="name">{product.name}</p>
                <div className="price-details">
                    <p className="quantity">1x</p>
                    <p className="price">@ ${product.price.toFixed(2)}</p>
                    <p className="total-price">${(product.price * 1).toFixed(2)}</p>
                </div>
            </div>
            <button className="remove-cart-btn">
                <DeleteIcon/>
            </button>
        </div>
    )
}