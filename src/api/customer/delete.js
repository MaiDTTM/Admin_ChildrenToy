import axios from 'axios';
import { URL_API } from 'src/api/config';
import { message } from 'antd';

export function deleteCustomer(id) {
		return axios.delete(`${URL_API.local}user/${id}`)
			.then(res => res.data)
			.catch(err=>console.log('err', err));
}
