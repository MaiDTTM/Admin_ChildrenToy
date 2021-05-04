import axios from 'axios';
import {URL_API} from '../config';

export function getListCart() {
	return axios.get(`${URL_API.local}cart`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
