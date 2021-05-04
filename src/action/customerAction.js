import { CUSTOMER } from 'src/action/actionTypes';

const customerGet = (data) => {
	return {
		type: CUSTOMER.GET_LIST,
		payload: data,
	};
};
const customerDelete = (id) => {
	return {
		type: CUSTOMER.DELETE,
		payload: id,
	};
};
const customerAdd = (data) => {
	return {
		type: CUSTOMER.POST,
		payload: data,
	};
};
const customerEdit = (data) => {
	return {
		type: CUSTOMER.PUT,
		payload: data,
	};
};
export { customerGet, customerDelete, customerAdd, customerEdit };
