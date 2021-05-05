import {
	Button,
	Table,
	Modal,
	Form,
	Input,
	Upload,
	Select,
	DatePicker,
	Popconfirm,
	message,
	Checkbox,
	Switch,
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
	CopyOutlined,
	DeleteOutlined,
	EditOutlined,
	PlusOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getListCustomer_API } from 'src/api/customer/getList';
import { customerAdd, customerDelete, customerGet } from 'src/action/customerAction';
import { URL_API } from 'src/api/config';
import getBase64 from 'src/components/util/getBase64';
import { AddCustomer } from 'src/api/customer/post';
import { deleteCustomer } from 'src/api/customer/delete';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { editCustomer } from 'src/api/customer/edit';
// import PropTypes from 'prop-types';

// const
const layout = {
	labelCol: {
		span: 5,
	},
	wrapperCol: {
		span: 19,
	},
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
const { Option } = Select;
function TableCustomer() {
	const [form1] = Form.useForm();
	const [form2] = Form.useForm();
	const dispatch = useDispatch();
	const Customer = useSelector((state) => state['Customer']);
	const [visibleCopy, setVisibleCopy] = useState(false);
	const [columnsTable, setColumnsTable] = React.useState([]);
	const [status, setStatus] = useState(true);
	const [keyEdit, setKeyEdit] = React.useState('');
	const [previewVisible, setPreviewVisible] = useState(false);
	const [modal1Visible, setModal1Visible] = React.useState(false);
	const [modal2Visible, setModal2Visible] = React.useState(false);
	const [fileListImg, setFileListImg] = useState([]);
	const [fileList, setFileList] = useState([]);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const handleDelete = async (key) => {
		const result = await deleteCustomer(key);
		if (result.message === 'SUCCESS') {
			dispatch(customerDelete(key));
			return message.success(result.message);
		} else {
			alert('Loi !');
		}
	};
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
			title: 'Trạng thái',
			dataIndex: 'status',
		},
		{
			title: 'Action',
			dataIndex: '',
			key: 'x',
			render: (record) => {
				return (
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<Button onClick={() => handleEdit(true, record._id)}>
							<EditOutlined />
						</Button>
						<Popconfirm
							title="Sure to delete?"
							onConfirm={() => handleDelete(record._id)}
						>
							<Button>
								<DeleteOutlined />
							</Button>
						</Popconfirm>
					</div>
				);
			},
		},
	];

	// useEffect
	useEffect(async () => {
		const data = await getListCustomer_API();
		dispatch(customerGet(data));
	}, []);
	useEffect(() => {
		const arr = Object.values(Customer);
		setColumnsTable(arr);
	}, [Customer]);
	//const
	const ModalVisible = (modal2Visible) => {
		setModal2Visible(modal2Visible);
	};
	const handleEdit = (modal1Visible, key) => {
		setKeyEdit(key);
		setModal1Visible(modal1Visible);
	};
	const showModalImage = () => setPreviewVisible(!previewVisible);
	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		showModalImage();
		setPreviewImage(file.url || file.preview);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
	};
	const handleChange = async ({ fileList }) => {
		let arrayImg = [];
		if (fileList.length > 0) {
			fileList.map((item) => {
				item.response && arrayImg.push(`${item.response.fileNameInServer}`);
				item.url && arrayImg.push(`${item.url.slice(31)}`);
			});
			setFileListImg(arrayImg);
			setFileList(fileList);
		}
	};
	const onReset = () => {
		form1.resetFields(); // Reset lại các dữ liệu của form
	};
	const onResetEdit = () => {
		form2.resetFields(); // Reset lại các dữ liệu của form
	};
	const onGenderChange = (value) => {
		switch (value) {
			case 'male':
				form1.setFieldsValue({ note: 'Hi, man!' });
				return;
			case 'female':
				form1.setFieldsValue({ note: 'Hi, lady!' });
				return;
			case 'other':
				form1.setFieldsValue({ note: 'Hi there!' });
		}
	};
	const onFinish = async (values) => {
		values.image = fileListImg;
		await AddCustomer(values);
		onReset();
	};
	const onFinishEdit = async (values) => {
		const edit = await editCustomer(keyEdit, values);
		console.log('keyEdit', keyEdit); // MongLV log fix bug
		console.log('values', values); // MongLV log fix bug
		console.log('edit', edit); // MongLV log fix bug
	};
	const PassDefault = '12345@2021';
	const handleResetPass = () => {
		form2.setFieldsValue({
			password: PassDefault,
		});
		setVisibleCopy(!visibleCopy);
		message.success('Đã Reset');
	};
	const handleSwitch = (checked) => {
		console.log('checked', checked); // MongLV log fix bug
		form2.setFieldsValue({
			status: checked,
		});
	};
	//func
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ margin: '10px 0', display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					type="primary"
					style={{ backgroundColor: '#ec5223', border: '#d7552d' }}
					onClick={() => ModalVisible(true)}
				>
					Thêm khách hàng
				</Button>
				{/*Modal them*/}
				<Modal
					title="Vertically centered modal dialog"
					centered
					visible={modal2Visible}
					footer={null}
					onCancel={() => setModal2Visible(false)}
				>
					<Form {...layout} form={form1} name="nest-messages" onFinish={onFinish}>
						<Form.Item
							name={'name'}
							label="Tên KH : "
							rules={[
								{
									required: true,
									message: 'Tên khách hàng là bắt buộc!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]}>
							<Input />
						</Form.Item>
						<Form.Item
							name={'phone'}
							label="Phone"
							rules={[
								{
									required: true,
									message: 'Số điện thoại là bắt buộc!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
							<Select placeholder="Chọn !" onChange={onGenderChange} allowClear>
								<Option value="1">Nam</Option>
								<Option value="2">Nữ </Option>
								<Option value="3">Khác</Option>
							</Select>
						</Form.Item>
						<Form.Item label="DatePicker" name={'date_of_birth'}>
							<DatePicker />
						</Form.Item>
						<Form.Item
							name={'password'}
							label="Password"
							rules={[
								{
									required: true,
									message: 'Pass là bắt buộc!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item name={'address'} label="Địa chỉ :">
							<Input.TextArea />
						</Form.Item>
						<Form.Item name={'image'} label={'Ảnh:'}>
							<Upload
								action={`${URL_API.local}file/upload`}
								listType={'picture-card'}
								onPreview={handlePreview}
								fileList={fileList}
								onChange={handleChange}
							>
								{fileListImg.length >= 8 ? null : (
									<div>
										<PlusOutlined />
										<div style={{ marginTop: 8 }}>Upload</div>
									</div>
								)}
							</Upload>
						</Form.Item>
						<Form.Item name="status" label="Status" rules={[{ required: true }]}>
							<Select placeholder="Chọn !" onChange={onGenderChange} allowClear>
								<Option value="HD">Hoạt động </Option>
								<Option value="Tat">Khóa tài khoản</Option>
							</Select>
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
							<Button type="primary" htmlType="submit" style={{ marginRight: '50px' }}>
								Add
							</Button>
							<Button onClick={onReset} htmlType="button" style={{ paddingLeft: '10px' }}>
								Reset
							</Button>
						</Form.Item>
					</Form>
				</Modal>
				{/*modal edit*/}
				<Modal
					title={
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							CẬP NHẬT TÀI KHOẢN
						</div>
					}
					centered
					style={{ top: 20 }}
					visible={modal1Visible}
					footer={null}
					onCancel={() => setModal1Visible(false)}
				>
					<Form
						{...layout}
						form={form2}
						name="basic"
						initialValues={{ remember: true }}
						onFinish={onFinishEdit}
					>
						<Form.Item name="status" label="Tắt/Bật User" style={{ marginLeft: '10px' }}>
							<Switch defaultChecked={status} onChange={handleSwitch} />
						</Form.Item>
						<Form.Item label="Password" name="password">
							<Popconfirm
								title="Bạn muốn reset lại mật khẩu ?"
								okText="Yes"
								cancelText="No"
								onConfirm={handleResetPass}
							>
								<Button type={'danger'}>Reset</Button>
							</Popconfirm>{' '}
							{visibleCopy && (
								<CopyToClipboard text={PassDefault}>
									<Button
										type={'default'}
										onClick={() => message.success('Copy thành công')}
									>
										{PassDefault} <CopyOutlined />
									</Button>
								</CopyToClipboard>
							)}
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
							<Button type="primary" htmlType="submit" style={{ marginRight: '50px' }}>
								Cập nhật
							</Button>
							<Button
								onClick={() => setModal1Visible(false)}
								htmlType="button"
								style={{ paddingLeft: '10px' }}
							>
								Đóng
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</div>
			<Table
				columns={columns}
				dataSource={columnsTable}
				onChange={onChange}
				style={{ marginTop: '20px' }}
			/>
		</div>
	);
}

TableCustomer.propTypes = {};

TableCustomer.defaultProps = {};

export default TableCustomer;
