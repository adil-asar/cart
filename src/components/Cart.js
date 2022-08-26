import React, { useContext } from 'react'
import './main.css'
import { Scrollbars } from 'react-custom-scrollbars';
import arrow from '../images/arrow.png'
import cart from '../images/cart.png'
import Item from './Item';
// import { products } from './products';
import { global_props } from '../App';

const Cart = () => {

    // const [item, setitem] = useState(products)

const {item,removeall,totalItem,totalAmount} = useContext(global_props)




    return (
        <>
            <header>

                <div className="continue-shopping">
                    <img src={arrow} alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src={cart} alt="cart" />
                    <p> {totalItem} </p>
                </div>

            </header>

            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count"> {totalItem} </span>
                    items in shopping cart
                </p>


                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((curelem) => {
                                    return <Item 
                                    key={curelem.id}
                                    {...curelem}
                                     />
                                })
                            } 
                        </Scrollbars>
                    </div>
                </div>

                <div className="card-total">
                    <h3>
                        Cart Total : {totalAmount} <span>₹</span>
                    </h3>
                    <button>checkout</button>
                    <button 
                    onClick={removeall}
                    className="clear-cart">
            Clear Cart
          </button>
                </div>
            </section>

        </>
    )
}

export default Cart