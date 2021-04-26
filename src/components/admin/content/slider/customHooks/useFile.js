import React, {useState} from 'react';
import {post} from "axios";
import {URL_API} from "../../../../../api/config";
// import PropTypes from 'prop-types';

function useFile() {
    const [file, setFile] = useState({});
    const [linkFile, setLinkFile] = useState('');
    const postFile = async (data) => {
        const formData = new FormData();
        formData.append("file", data);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        await post(`${URL_API.local}file/upload`, formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer);
            let filePath = res.data.fileNameInServer;
            // if (filePath) {
            //     filePath = filePath.split('\\')[1]
            // }
            setLinkFile(filePath);
        });
    };
    return({file, setFile, linkFile, setLinkFile, postFile});
}

useFile.propTypes = {};

useFile.defaultProps = {};

export default useFile;
