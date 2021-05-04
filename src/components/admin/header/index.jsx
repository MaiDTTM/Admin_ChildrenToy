import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Badge, Avatar, Popover } from 'antd';
import style from './styles.module.css';
import { MailOutlined, NotificationOutlined } from '@ant-design/icons';
const { Search } = Input;
const content = (
	<div>
		<p>
			<a style={{ color: 'black' }}>Thông tin cá nhân </a>
		</p>
		<p>
			<a style={{ color: 'black' }}>Cài đặt</a>
		</p>
		<p>
			<a style={{ color: 'black' }}>Đăng xuất </a>
		</p>
	</div>
);
function HeaderAdmin(props) {
	const { title } = props;
	const onSearch = (value) => console.log(value);
	return (
		<Row className={'header-content'}>
			<Col span={4} style={{ paddingLeft: '10px' }}>
				<h1>{title}</h1>
			</Col>
			<Col span={12} className={style.col_center}>
				<div className={style.input_filter}>
					<Search placeholder="input search text" onSearch={onSearch} enterButton />
				</div>
			</Col>
			<Col span={8}>
				<div className={style.header_logout}>
					<div>
						<Badge count={1}>
							<NotificationOutlined className={style.logo} />
						</Badge>
					</div>
					<div>
						<Badge dot>
							<MailOutlined className={style.logo} />
						</Badge>
					</div>
          <div className={style.account_admin}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginRight:'10px'}}/>
            <Popover content={content}>
              <a style={{fontSize:'18px', color:'black'}}>Đào Thị Thanh Mai</a>
            </Popover>
          </div>
				</div>
			</Col>
		</Row>
	);
}

HeaderAdmin.propTypes = {
	title: PropTypes.string,
};

HeaderAdmin.defaultProps = {
	title: 'Trang Chủ',
};

export default HeaderAdmin;
