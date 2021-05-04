import axios from 'axios';
import {URL_API} from '../config';

export function getListProduct_API() {
	return axios.get(`${URL_API.local}product`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
// http://localhost:1999/api/admin
