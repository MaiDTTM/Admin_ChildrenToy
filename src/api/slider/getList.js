import axios from 'axios';
import {URL_API} from '../config';

export function getListSlider_API() {
	return axios.get(`${URL_API.local}slider`)
	.then(res => res.data)
	.catch(error => console.log(error));
}
