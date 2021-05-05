'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function postProduct(data) {
    console.log(data);
    try {
        return axios.post(`${URL_API.local}product`, data)
            .then(res => res.data).then((result) => {
                console.log(result);
                if (result.message === 'SUCCESS') {
                    message.success('Thêm thành công')
                } else {
                    message.error('Lỗi truyền');
                }
            })
            .catch(error => message.error('Lỗi: '+ error));
    } catch (e) {
        message.error(e);
    }
}
