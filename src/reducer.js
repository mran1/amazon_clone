export const initialState = {
    basket:[],
    user:null
}

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET': 
                            let basket = [...state.basket]
                            basket.push(action.item);
                            return {...state,basket};
                            break;
        case 'REMOVE_FROM_BASKET':
            break;
        default: return state;
    }
}

export default reducer;