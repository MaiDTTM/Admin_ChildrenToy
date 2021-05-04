import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './style.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getListCustomer_API } from 'src/api/customer/getList';
import { getListCustomer } from 'src/action/customerAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { URL_API } from 'src/api/config';
import baseAPI from 'src/axios/baseAPI';
// import PropTypes from 'prop-types';
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	},
];
function TableCustomer() {
	const dispatch = useDispatch();
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			filters: [
				{
					text: 'Joe',
					value: 'Joe',
				},
				{
					text: 'Jim',
					value: 'Jim',
				},
				{
					text: 'Submenu',
					value: 'Submenu',
					children: [
						{
							text: 'Green',
							value: 'Green',
						},
						{
							text: 'Black',
							value: 'Black',
						},
					],
				},
			],
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Email',
			dataIndex: 'email',
			filters: [],
			onFilter: (value, record) => record.email.indexOf(value) === 0,
			sorter: (a, b) => a.email.length - b.email.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			filters: [
				{
					text: 'Nam',
					value: 'nam',
				},
				{
					text: 'Nữ',
					value: 'nu',
				},
				{
					text: 'Khác',
					value: 'khac',
				},
				{
					text: 'Submenu',
					value: 'Submenu',
					children: [
						{
							text: 'Green',
							value: 'Green',
						},
						{
							text: 'Black',
							value: 'Black',
						},
					],
				},
			],
			onFilter: (value, record) => record.gender.indexOf(value) === 0,
			sorter: (a, b) => a.gender.length - b.gender.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Ngày sinh',
			dataIndex: 'date_of_birth',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			filters: [],
			filterMultiple: false,
			onFilter: (value, record) => record.address.indexOf(value) === 0,
			sorter: (a, b) => a.address.length - b.address.length,
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Ảnh đại diện',
			dataIndex: 'image',
		},
		{
			title: 'Action',
			dataIndex: '',
			key: 'x',
			render: () => (
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<Button>
						<EditOutlined />
					</Button>
					<Button>
						<DeleteOutlined />
					</Button>
				</div>
			),
		},
	];
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ margin: '10px 0', display: 'flex', justifyContent: 'flex-end' }}>
				<Button type="primary" style={{ backgroundColor: '#ec5223', border: '#d7552d' }}>
					Thêm khách hàng
				</Button>
			</div>
			<Table
				columns={columns}
				dataSource={data}
				onChange={onChange}
				style={{ marginTop: '20px' }}
			/>
		</div>
	);
}

TableCustomer.propTypes = {};

TableCustomer.defaultProps = {};

export default TableCustomer;
