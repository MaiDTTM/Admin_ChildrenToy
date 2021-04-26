import axios from 'axios';
import {URL_API} from '../config';

export function getAdminID(id) {
	return axios.get(`${URL_API.local}admin/${id}`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
// http://localhost:1999/api/admin
