import axios from 'axios';
import { URL_API } from 'src/api/config';
import { message } from 'antd';

export function editCustomer(id, data) {
	try {
		return axios.put(`${URL_API.local}user/admin/${id}`, data)
			.then(res =>res.data)
			.catch(error => message.error(error));
	} catch (e) {
		message.error(e);
	}
}
