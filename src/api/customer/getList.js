import axios from 'axios';
import { URL_API } from 'src/api/config';

export function getListCustomer_API() {
	return axios.get(`${URL_API.local}user`)
		.then(res => res.data)
		.catch(error => console.log(error));
}
