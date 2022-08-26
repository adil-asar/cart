import React,{useContext} from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { global_props } from '../App'

const Item = ({id,img,title,description,price,quantity}) => {


    const {removeItem,increment,decrement} = useContext(global_props)

    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="product" />
                </div>
                <div className="title">
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <div className="add-minus-quantity">
                    <AiOutlineMinus
                    onClick={()=>decrement(id)}
                     className="fas fa-minus minus"
                      />
                    <input type="text" placeholder={quantity} disabled />
                    <AiOutlinePlus
                   onClick={()=>increment(id)}
                     className="fas fa-plus add"
                      />
                </div>
                <div className="price">
                    <h3> {price}₹</h3>
                </div>
                <div className="remove-item">
                    <AiFillDelete
                        className="fas fa-trash-alt remove"
                        onClick={()=>removeItem(id)}
                    />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Item