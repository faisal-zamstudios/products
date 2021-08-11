
import { CART_ADD, CART_UPDATE, CART_REMOVE, CART_BY_ID } from '../actions/actionType';

const reducer = (carts = [], action) => {
    let index = -1;
    switch(action.type) {
        case CART_ADD:
            index = carts.findIndex(cart => cart.id === action.payload.id);
            if(index>=0) {
                carts[index].quantity += action.payload.quantity;
                return carts;
            } else {
                return [
                    ...carts,
                    {
                        id : action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
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
        case CART_BY_ID:
            index = carts.findIndex(cart => cart.id === action.id);
            return carts[index];
        default:
            return carts;
    }
}

export default reducer;
