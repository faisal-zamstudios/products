import { CART_ADD, CART_REMOVE, CART_UPDATE } from './actionType';

export const addCart = (cart) => {
    return {
        type: CART_ADD,
        payload: cart
    }
};

export const removeCart = (id) => {
    return {
        type: CART_REMOVE,
        id
    }
};

export const updateCart = (cart) => {
    return {
        type: CART_UPDATE,
        payload: cart
    }
};
