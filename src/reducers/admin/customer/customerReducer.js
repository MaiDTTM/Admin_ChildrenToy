// action types

import { CUSTOMER } from 'src/action/actionTypes';

const Customer = (state = {}, action) => {
	switch (action.type) {
		case CUSTOMER.GET_LIST_ID:
			return action.product;
		case CUSTOMER.GET_LIST:
			return action.payload;
		case CUSTOMER.POST:
			return action.payload.data;
		case CUSTOMER.DELETE:
			const id = action.payload;
			const filterAll = Object.values(state);
			const newState = filterAll.filter((item) => item._id !== id);
			return newState;
		default:
			return state;
	}
};

export default Customer;
