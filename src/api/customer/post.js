import axios from 'axios';
import { URL_API } from 'src/api/config';

export function AddCustomer(data) {
	return axios
		.post(`${URL_API.local}user`,data)
		.then((res) => console.log('res.data', res))
		.catch((err) => console.log(err));
}
