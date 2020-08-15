export const initialState = {
    basket:[],
    user:null
}
export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item)=>{ return item.price + amount }, 0)
}
function reducer(state, action){
    switch(action.type){
        case 'SET_USER': return {...state, user:action.user}
        case 'ADD_TO_BASKET': 
                            let basket = [...state.basket]
                            basket.push(action.item);
                            return {...state,basket};
        case 'REMOVE_FROM_BASKET':
                            let newBasket = [...state.basket]
                            let index = newBasket.findIndex(item => item.id === action.id);
                            newBasket.splice(index, 1);
                            return {...state,basket:newBasket};
        default: return state;
    }
}

export default reducer;