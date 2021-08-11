
import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_REMOVE } from '../actions/actionType';
 
let lastId = 0;

const reducer = (products = [], action) => {
    switch(action.type) {
        case PRODUCT_ADD:
            return [
                ...products,
                {
                    id : ++lastId,
                    name: action.payload.name,
                    price: action.payload.price
                }
            ]
        case PRODUCT_REMOVE:
            return products.filter(product => product.id !== action.id);
        case PRODUCT_UPDATE:
            const index = products.findIndex(product => product.id === action.payload.id);
            products[index].name = action.payload.name;
            products[index].price = action.payload.price;
            return products;
        default:
            return products;
    }
}

export default reducer;

