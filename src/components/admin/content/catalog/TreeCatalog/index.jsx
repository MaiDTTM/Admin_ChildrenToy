import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import {
	Menu,
	Tooltip,
	Popover,
	Row,
	Col,
	Popconfirm,
	Button,
	Modal,
	Form,
	Input,
	Upload,
} from 'antd';
import {
	PlusOutlined,
	ReadOutlined,
	SettingOutlined,
	EditTwoTone,
	DeleteTwoTone,
	QuestionCircleOutlined,
} from '@ant-design/icons';

// style
import '../styles/index.css';
import { BASE_URL_IMAGE } from 'src/api/config';

// const
const heightWindow = (window.innerHeight - window.innerHeight * 0.5).toString() + 'px';
const { Search } = Input;
const layout = {
	labelCol: {
		span: 6,
	},
	wrapperCol: {
		span: 18,
	},
};

const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

function TreeCatalog(props) {
	let match = useRouteMatch();
	// constructor

	const { list, deleteId, post, put } = props;
	const [form] = Form.useForm();
	const [formEdit] = Form.useForm();
	const [formAddItem] = Form.useForm();
	const [linkFile, setLinkFile] = React.useState('');
	const [fileList, setFileList] = React.useState([]);
	const [previewVisible, setPreviewVisible] = React.useState(false);
	const [previewImage, setPreviewImage] = React.useState('');
	const [previewTitle, setPreviewTitle] = React.useState('');
	const [listArray, setListArray] = React.useState(Object.keys(list));
	const [visible, setVisible] = React.useState(false);
	const [visible1, setVisible1] = React.useState(false);
	const [visibleEdit, setVisibleEdit] = React.useState(false);
	const [idPut, setIdPut] = React.useState('');
	const [idAddItem,setIdAddItem] = React.useState('');
	// Note MongLV: để xét giá trị cho form
	// form.setFieldsValue({
	//     name: '',
	//     description: ''
	// });
	React.useMemo(() => {
		setListArray(Object.keys(list));
	}, [list]);

	// func
	const deleteIdCatalog = (id) => {
		deleteId(id);
	};

	const showModal = () => {
		setVisible(true);
	};

	const showModalEdit = (id) => {
		setVisibleEdit(true);
		setIdPut(id);
		formEdit.setFieldsValue({
			name: list[id].name || 'Error',
			description: list[id].description,
		});
	};
  const showModalAdd = (id) =>{
		setVisible1(true);
		setIdAddItem(id);
   console.log('id', id); // MongLV log fix bug
	}
	const onReset = () => {
		form.resetFields();
		formEdit.resetFields();
		setVisible(false);
		setVisibleEdit(false);
		setIdPut('');
	};
  const onResetAddItem =()=> {
		setVisible1(false);
	}
	const onFinish = (values) => {
		post(values);
		onReset();
	};
	const onFinishAddItem = (values)=>{
		console.log('values', values); // MongLV log fix bug

	}
	const onFinishEdit = (values) => {
		put(idPut, values);
		onReset();
	};
	const handleSearch = (value) => {
		const newList = Object.keys(list).filter(
			(item) => list[item].name.toLowerCase().indexOf(value.toLowerCase()) !== -1
		);
		setListArray(newList);
	};

	// JSX
	function TitleAdd() {
		return <div className={'modalAdd'}>THÊM DANH MỤC</div>;
	}
	function TitleAddItem() {
		return <div className={'modalAdd'}>THÊM DANH MỤC</div>;
	}
	function TitleEdit() {
		return <div className={'modalAdd'}>SỬA DANH MỤC</div>;
	}

	const Content = ({ id }) => {
		return (
			<Row justify="space-between">
				<Col flex={1}>
					<PlusOutlined
						className={'addTwoTone'}
						twoToneColor={'cyan'}
						onClick={() => showModalAdd(id)}
					/>
				</Col>
				&nbsp; &nbsp; &nbsp;
				<Col flex={1}>
					<EditTwoTone
						className={'editTwoTone'}
						twoToneColor={'dodgerblue'}
						onClick={() => showModalEdit(id)}
					/>
				</Col>
				&nbsp; &nbsp; &nbsp;
				<Col flex={1}>
					<Popconfirm
						title="Bạn muốn xóa danh mục này？"
						okText="Phải"
						cancelText="Không"
						onConfirm={() => deleteIdCatalog(id)}
						icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
					>
						<DeleteTwoTone className={'deleteTwoTone'} twoToneColor={'red'} />
					</Popconfirm>
				</Col>
			</Row>
		);
	};
	// upload img
	// const onChange = (info) => {
	// 	setFileList(info.fileList);
	// 	switch (info.file.status) {
	// 		case 'uploading':
	// 			break;
	// 		case 'done':
	// 			setLinkFile(info.file.response.fileNameInServer);
	// 			break;
	// 		default:
	// 			// message.error(`${info.file.name}`);
	// 			setLinkFile('');
	// 			break;
	// 	}
	// };
	const linkFileView = linkFile
		? BASE_URL_IMAGE + linkFile
		: 'https://img.icons8.com/cotton/344/image--v1.png';

	const UpFile = {
		name: 'file',
		action: `${BASE_URL_IMAGE}upload`,
		multiple: true,
		// onChange: (info) => onChange(info),
	};
	const handleCancel = () => setPreviewVisible(false);
	return (
		<div
			className={'container-catalog'}
			style={{ marginTop: '20px', marginLeft: '30px' }}
		>
			<Menu
				style={{ width: 256 }}
				defaultSelectedKeys={['Title']}
				defaultOpenKeys={['Title']}
				mode="inline"
			>
				<Menu.Item key="Title" style={{ backgroundColor: '#33c6d6' }}>
					<span className={'menuTitle'}>
						<span>Danh sách danh mục</span>
					</span>
				</Menu.Item>
			</Menu>
			<div style={{ overflow: 'auto', height: heightWindow, width: '256px' }}>
				<Menu
					// onClick={handleClick}
					style={{ width: 256 }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
				>
					{listArray.map((id) => (
						<Menu.Item key={id}>
							<Link to={`${match.url}/${id}`}>
								<Row justify="space-between">
									<Col span={4}>
										<Tooltip
											placement="right"
											title={(list && list[id] && list[id].description) || ''}
										>
											<ReadOutlined />
										</Tooltip>
									</Col>
									<Col span={16}>
										<span>{list && list[id] && list[id].name}</span>
									</Col>
									<Col>
										<Popover
											content={<Content id={id} />}
											placement="right"
											trigger="click"
										>
											<SettingOutlined />
										</Popover>
									</Col>
								</Row>
							</Link>
						</Menu.Item>
					))}
					{listArray.length < 9 && (
						<Row justify={'start'}>
							<Col span={17}>
								<Search
									placeholder="Tìm kiếm"
									style={{ width: '100%' }}
									enterButton
									onSearch={(value) => handleSearch(value)}
								/>
							</Col>
							<Col span={1} style={{ marginLeft: '5px' }}>
								<Button type="primary" onClick={showModal}>
									Thêm
								</Button>
							</Col>
						</Row>
					)}
				</Menu>
			</div>
			{listArray.length >= 9 && (
				<Row justify={'start'}>
					<Col span={14}>
						<Search
							placeholder="Tìm kiếm"
							style={{ width: '100%' }}
							enterButton
							onSearch={(value) => handleSearch(value)}
						/>
					</Col>
					<Col span={1}>
						<Button
							type="primary"
							onClick={showModal}
							// style={{width: }}
						>
							Thêm
						</Button>
					</Col>
				</Row>
			)}
			{/*Modal add*/}
			<Modal title={<TitleAdd />} visible={visible} footer={null} closeIcon={true}>
				<Form {...layout} form={form} onFinish={onFinish}>
					<Form.Item
						name={'name'}
						label="Tên danh mục"
						rules={[
							{
								required: true,
								message: 'Không được để trống tên',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item name={'description'} label="Miêu tả">
						<Input.TextArea />
					</Form.Item>
							<Form.Item name={'icon'} label="Icon :">
								<Upload {...UpFile} listType="picture-card" fileList={fileList}>
									{linkFile.length <= 0 ? (
										<img
											alt="example"
											src={linkFileView}
											style={{ width: 50, height: 50 }}
										/>
									) : null}
								</Upload>
								<Modal
									visible={previewVisible}
									title={previewTitle}
									footer={null}
									onCancel={handleCancel}
								>
									<img alt="example" style={{ width: '100%' }} src={previewImage} />
								</Modal>
							</Form.Item>
							<div style={{marginLeft:120,marginBottom:20}}>
								Dung lượng file tối đa 2 MB
								<br />
								Định dạng:.JPEG, .PNG
							</div>
							<div style={{ color: '#f65353', display: 'none' }} id="chu_y">
								* Click vào ảnh để thay đổi avatar
							</div>
					<Form.Item {...tailLayout}>
						<Row
							style={{
								alignItems: 'center',
							}}
						>
							<Col style={{ paddingRight: '20px' }}>
								<Button type="primary" htmlType="submit">
									Thêm
								</Button>
							</Col>
							<Col style={{ paddingLeft: '20px' }}>
								<Button onClick={onReset}>Đóng</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
			</Modal>
			{/*Modal add item*/}
			<Modal title={<TitleAddItem />} visible={visible1} footer={null} closeIcon={true}>
				<Form {...layout} form={formAddItem} onFinish={onFinishAddItem}>
					<Form.Item
						name={'name'}
						label="Tên danh mục"
						rules={[
							{
								required: true,
								message: 'Không được để trống tên',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item name={'description'} label="Miêu tả">
						<Input.TextArea />
					</Form.Item>
					<Form.Item name={'icon'} label="Icon :">
						<Upload {...UpFile} listType="picture-card" fileList={fileList}>
							{linkFile.length <= 0 ? (
								<img
									alt="example"
									src={linkFileView}
									style={{ width: 50, height: 50 }}
								/>
							) : null}
						</Upload>
						<Modal
							visible={previewVisible}
							title={previewTitle}
							footer={null}
							onCancel={handleCancel}
						>
							<img alt="example" style={{ width: '100%' }} src={previewImage} />
						</Modal>
					</Form.Item>
					<div style={{marginLeft:120,marginBottom:20}}>
						Dung lượng file tối đa 2 MB
						<br />
						Định dạng:.JPEG, .PNG
					</div>
					<div style={{ color: '#f65353', display: 'none' }} id="chu_y">
						* Click vào ảnh để thay đổi avatar
					</div>
					<Form.Item {...tailLayout}>
						<Row
							style={{
								alignItems: 'center',
							}}
						>
							<Col style={{ paddingRight: '20px' }}>
								<Button type="primary" htmlType="submit">
									Thêm
								</Button>
							</Col>
							<Col style={{ paddingLeft: '20px' }}>
								<Button onClick={onResetAddItem}>Đóng</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
			</Modal>
			{/*Modal edit*/}
			<Modal title={<TitleEdit />} visible={visibleEdit} footer={null} closeIcon={true}>
				<Form {...layout} form={formEdit} onFinish={onFinishEdit}>
					<Form.Item
						name={'name'}
						label="Tên danh mục"
						rules={[
							{
								required: true,
								message: 'Không được để trống tên',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item name={'description'} label="Miêu tả">
						<Input.TextArea />
					</Form.Item>
					<div>
						<div>Icon :</div>
						<div>
							<Form.Item name={'icon'}>
								<Upload {...UpFile} listType="picture-card" fileList={fileList}>
									{linkFile.length <= 0 ? (
										<img
											alt="example"
											src={linkFileView}
											style={{ width: 50, height: 50 }}
										/>
									) : null}
								</Upload>
								<Modal
									visible={previewVisible}
									title={previewTitle}
									footer={null}
									onCancel={handleCancel}
								>
									<img alt="example" style={{ width: '100%' }} src={previewImage} />
								</Modal>
							</Form.Item>
							<div>
								Dung lượng file tối đa 2 MB
								<br />
								Định dạng:.JPEG, .PNG
							</div>
							<div style={{ color: '#f65353', display: 'none' }} id="chu_y">
								* Click vào ảnh để thay đổi avatar
							</div>
						</div>
					</div>
					<Form.Item {...tailLayout}>
						<Row
							style={{
								alignItems: 'center',
							}}
						>
							<Col style={{ paddingRight: '20px' }}>
								<Button type="primary" htmlType="submit">
									Lưu
								</Button>
							</Col>
							<Col style={{ paddingLeft: '20px' }}>
								<Button onClick={onReset}>Đóng</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}

TreeCatalog.propTypes = {
	list: PropTypes.object,

	// func
	deleteId: PropTypes.func,
	post: PropTypes.func,
	put: PropTypes.func,
};

TreeCatalog.defaultProps = {
	list: {},
	post: () => null,
	put: () => null,
};

export default TreeCatalog;
