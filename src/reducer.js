export const initialState = {
    basket:[{
        id:"122",
        title:"Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Mode) by Apple",
        price:1000,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Rm99TpS9L._SX679_.jpg"
    }],
    user:null
}
export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item)=>{ return item.price + amount }, 0)
}
function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET': 
                            let basket = [...state.basket]
                            basket.push(action.item);
                            return {...state,basket};
                            break;
        case 'REMOVE_FROM_BASKET':
                            let newBasket = [...state.basket]
                            let index = newBasket.findIndex(item => item.id === action.id);
                            newBasket.splice(index, 1);
                            return {...state,basket:newBasket};
                            break;
        default: return state;
    }
}

export default reducer;