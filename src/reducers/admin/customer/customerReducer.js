// action types

import { CUSTOMER } from 'src/action/actionTypes';

const Customer = (state = {}, action) => {
	switch (action.type) {
		case CUSTOMER.GET_LIST_ID:
			return action.product;
		case CUSTOMER.GET_LIST:
			console.log('action.payload', action.payload); // MongLV log fix bug
			return action.payload;
		default:
			return state;
	}
};

export default Customer;
