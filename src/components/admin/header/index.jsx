import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';

// import {BarsOutlined} from "@ant-design/icons";

function HeaderAdmin(props) {
    const {title} = props;
    return (
        <Row className={'header-content'}>
            <Col span={6} style={{paddingLeft: '10px'}}><h1>{title}</h1></Col>
        </Row>
    );
}

HeaderAdmin.propTypes = {
    title: PropTypes.string,
};

HeaderAdmin.defaultProps = {
    title: 'Trang Chủ'
}

export default HeaderAdmin;
