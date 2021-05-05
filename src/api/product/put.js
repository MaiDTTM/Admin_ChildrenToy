'use strict';

import axios from "axios";
import {URL_API} from "../config";
import {message} from "antd";

export function putProduct(id, data) {
    try {
        return axios.put(`${URL_API.local}product/${id}`, data)
            .then(res => res.data).then((result) => {
                if (result.message === 'SUCCESS') {
                    message.success('Cập nhật thành công')
                } else {
                    message.error('Lỗi rồi !');
                }
            })
            .catch(error => message.error(error));
    } catch (e) {
        message.error(e);
    }
}
