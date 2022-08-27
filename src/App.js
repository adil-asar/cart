import React from 'react'
import { createContext, useReducer,useEffect } from 'react'
import Cart from './components/Cart'
import './components/main.css'
import { products } from './components/products';
import reducer from './reducer';

const global_props = createContext()

const init_state = {
  item: products,
  totalAmount: 0,
  totalItem: 0

}

const App = () => {



  const [state, dispatch] = useReducer(reducer, init_state)

  const removeItem = (id) => {
    dispatch(
      {
        type: 'REMOVE',
        payload: id
      }
    )
  }

  useEffect(() => {
    dispatch({type:'total_item_amount'})
   
  }, [state.item])

  

  const removeall = () => {
    dispatch({ type: 'REMOVEALL' })

  }

  const increment = (id) => {
    dispatch({type:'INCREASE', payload:id})
  }

  const decrement = (id) => {
    dispatch({type:'DECREASE', payload:id})
  }
 


  return (
    <div>
      <global_props.Provider
        value={
          { ...state, removeItem, removeall, increment, decrement  }
        }>
        <Cart />
      </global_props.Provider>
    </div>
  )
}

export default App
export { global_props }