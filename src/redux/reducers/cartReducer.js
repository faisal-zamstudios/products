
import { CART_ADD, CART_UPDATE, CART_REMOVE } from '../actions/actionType';

const reducer = (carts = [], action) => {
    let index = -1;
    switch(action.type) {
        case CART_ADD:
            index = carts.findIndex(cart => cart.id === action.payload.id);
            if(index>=0) {
                return carts.map(cart => {
                    if(cart.id === action.payload.id) {
                        cart.quantity += action.payload.quantity;
                    }
                    return cart;
                });
            } else {
                return [
                    ...carts,
                    {
                        id : action.payload.id,
                        quantity: action.payload.quantity
                    }
                ];
            }
        case CART_REMOVE:
            return carts.filter(cart => cart.id !== action.id);
        case CART_UPDATE:
            index = carts.findIndex(cart => cart.id === action.payload.id);
            carts[index].quantity = action.payload.quantity;
            return carts;
        default:
            return carts;
    }
}

export default reducer;
