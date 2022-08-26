


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

    if (action.type === 'INCREASE') {
        const updateincrease = state.item.map((elem) => {
            if (elem.id === action.payload) {
                return { ...elem,
                     quantity: elem.quantity + 1 
                    };
            }
            return elem
        })
        return { ...state, item: updateincrease }
    }

    if (action.type === 'DECREASE') {
        const updatedecrease = state.item.map((elem) => {
            if (elem.id === action.payload) {
                return { ...elem, quantity: elem.quantity - 1};
                //  if (elem.quantity>1) {
                //     return {...elem,quantity:elem.quantity-1};
                //  }
            }
            return elem
        }).filter((elem) => elem.quantity !== 0)
        return { ...state, item: updatedecrease }
    }

    if (action.type === 'total_item') {
        let { totalItem,totalAmount } = state.item.reduce((accum, curVal) => {
            let { quantity,price } = curVal;
            let updatetotalamount = price*quantity
            accum.totalItem += quantity;
            accum.totalAmount +=updatetotalamount
            return accum;
        }, {
            totalItem: 0,
            totalAmount : 0
        })
        return { ...state, totalItem,totalAmount }
    }



    return state;

}

export default Reducer