import { CART_ADD, CART_REMOVE, CART_UPDATE, CART_BY_ID } from './actionType';

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

export const getCartByID = (id) => {
    return {
        type: CART_BY_ID,
        id
    }
};
