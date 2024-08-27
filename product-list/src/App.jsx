import { useState } from 'react'
import './App.css'
import CartSection from './components/cart/section'
import ProductSection from './components/Products/section'

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

// const numbers1 = [1,2,3,4,6,7,8,9,10,11,12,]
// const newNumbers = [...numbers1,13,14,15,16,17,18,]

// const OddExists = numbers1.some((number) => number % 2 !== 0)

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product)=>{
    setCart((snapShot)=>{
      const productInCart = snapShot.some((item)=>item.id === product.id)
      if(productInCart) return snapShot;
      return [...snapShot,product]
    })
  }

  return (
    <main className="main-grid">
       <div>
         <ProductSection addToCart={addToCart} cart={cart}/>
       </div>
       <div>
          <CartSection cart={cart}/>
       </div>
    </main>
  )
}

export default App
