/* eslint-disable react/prop-types */
import products from "../../lib/data.json";
import ProductCard from "./ProductCard";
/**
 * Product Structure * [
 *   {
 *      name:"hey",
 *      image:{
 *          desktop:"",
 *          tablet:"",
 *          mobile:"",
 *          thumbnail:"",
 *      },
 *      category:"",
 *      price:0.00
 *   }
 * ]
 */

function ProductList({addToCart,cart}){
    return products.map((product,index) =>(
        <ProductCard
            cart={cart}
            addToCart={addToCart}
            key={index}
            product={{...product,id:index + 1}}
        />
        )
    )
}
export default function ProductSection({cart,addToCart}){
    return (
        <section>
            <h2>Desserts</h2>
            <div className="product-container">
                <ProductList cart={cart} addToCart={addToCart}/>
            </div>
        </section>
    )
}