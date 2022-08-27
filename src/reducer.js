


const Reducer = (state, action) => {

    if (action.type === 'REMOVE') {
        return {
            ...state,
            item: state.item.filter((elem) => elem.id !== action.payload)
        }
    }

    if (action.type === 'REMOVEALL') {
        return { ...state, item: [] }
    }
 
    // increase item 
if (action.type==='INCREASE') {
    const inc_item = state.item.map((elem)=>{
        if (elem.id === action.payload) {
            return{...elem, quantity:elem.quantity + 1}
        }
        return elem
    })
    return{...state,item:inc_item}
}

// decrease item 

if (action.type==='DECREASE') {
    const dec_item = state.item.map((elem)=>{
        if (elem.id === action.payload) {
            return {...elem, quantity:elem.quantity-1}
        }
        return elem
    }).filter((fil)=>fil.quantity!==0)
    return {...state,item:dec_item}
}


 if (action.type === 'total_item_amount') {
    
    let {totalItem} = state.item.reduce((Acum,Val)=> {
        let {quantity} = Val;
        Acum.totalItem += quantity;
        return Acum

    } , {totalItem:0} )

    return {...state,totalItem}
 }



    return state;

}

export default Reducer