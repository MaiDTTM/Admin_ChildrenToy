'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function postAdmin(data) {
    try {
        return axios.post(`${URL_API.local}admin`, data)
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
