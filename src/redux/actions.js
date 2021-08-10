
import { PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_UPDATE } from './actionType';

export const addProduct = (product) => {
    return {
        type: PRODUCT_ADD,
        payload: product
    }
};

export const removeProduct = (id) => {
    return {
        type: PRODUCT_REMOVE,
        id
    }
};

export const updateProduct = (product) => {
    return {
        type: PRODUCT_UPDATE,
        payload: product
    }
};
