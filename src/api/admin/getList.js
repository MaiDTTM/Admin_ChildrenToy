import axios from 'axios';
import {URL_API} from '../config';

export function getListAdmin_API() {
	return axios.get(`${URL_API.local}admin`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
// http://localhost:1999/api/admin
