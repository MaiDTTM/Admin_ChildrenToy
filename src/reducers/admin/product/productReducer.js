// action types
import {PRODUCT} from 'src/action/actionTypes.js';

const Product = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT.GET_LIST_ID_CATALOG:
            return action.product;
        case PRODUCT.GET_LIST:
            console.log('action.product', action.product); // MongLV log fix bug
            return action.product;
        default:
            return state;
    }
};

export default Product;
