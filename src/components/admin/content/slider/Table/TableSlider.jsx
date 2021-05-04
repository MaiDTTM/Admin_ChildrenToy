import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Button, Input, Row, Col, Image, Popconfirm, Select, Spin, Badge, Avatar, Popover } from 'antd';
import {
    EditTwoTone,
    DeleteTwoTone,
    QuestionCircleOutlined,
    NotificationOutlined,
    MailOutlined,
} from '@ant-design/icons';

// component
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

// util
import {URL_API} from "src/api/config";
import style from 'src/components/admin/header/styles.module.css';

// const
const {Search} = Input;
const {Option} = Select;
const heightWindow =
    (window.innerHeight - window.innerHeight * 0.25).toString() + "px";

const TYPE_TEXT = {
    NAME: 'name',
    LINK: 'link',
    EDIT: 'EDIT',
    ADD: 'ADD'
};

const styleCol = {
    fontWeight: "bold",
    paddingLeft: "5px",
};

const styleRow = {
    padding: "10px",
};
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

function TableSlider(props) {
    const {list, deleteSlider, postSlider, putSlider} = props;
    const [listArray, setListArray] = useState(Object.keys(list));
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [title, setTitle] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        setListArray(Object.keys(list))
    }, [list]);

    const showModalCancel = (type, itemData = {}, id) => {
        if (type === "ADD") {
            setTitle('Thêm Slider');
            setData({});
            setVisible2(true);
        } else {
            setTitle(`Edit Slider: ${itemData['name']}`);
            itemData['id'] = id;
            const newData = {...itemData};
            setData(newData);
            setVisible(true);
        }
    };

    const cancelModal = () => {
        setVisible(false);
        setVisible2(false);
        setData({});
    };

    const handleOk = () => {
        if (title === 'Thêm Slider') {
            const newData = {...data};
            postSlider(newData);
            setVisible2(false);
        } else {
            // CODE
            const newData = {...data};
            putSlider(newData['id'], newData);
            setVisible(false);
        }
        setTitle('');
        setData({});
    };

    const onDelete = (id) => {
        deleteSlider(id);
        delete list[id];
        setListArray(Object.keys({...list}));
    };

    const children = [];
    children.push(
        <Option key={'0'}>{'Không hiễn thị'}</Option>
    );
    for (let i = 1; i <= 5; i++) {
        const iString = (i.toString()) ? i.toString() : 'Không hiễn thị';
        children.push(
            <Option key={i.toString()}>{iString}</Option>
        );
    }

    function handleSearch(value) {
        console.log(value);
        const newList = Object.keys(list).filter((item) => (list[item].name.toLowerCase().indexOf(value.toLowerCase()) !== -1));
        setListArray([...newList]);
    }

    function handleText(value, type) {
        if(type === TYPE_TEXT.ADD) {
            postSlider({...value});
        }
        else putSlider(data['id'], value);
    }
    return (
        <div>
            {/*<video width="320" height="240" autoPlay controls>*/}
            {/*    <source src={URL_API.local+'file/[WCCF8]-Em-Biết-Mà---HIEUTHUHAI-ft-KNG.mp4'} type={'video/mp4'} />*/}
            {/*</video>*/}
            <div style={{marginBottom:'10px',display:'flex',justifyContent:'flex-end'}}>
                <Button type="primary" onClick={() => showModalCancel('ADD')} style={{backgroundColor:'#e75c1d',border:'#e75c1d'}}>
                    Thêm slider
                </Button>
            </div>
            {/*<Row style={{paddingBottom: "5px"}}>*/}
                {/*<Col span={12} className={style.col_center}>*/}
                {/*    <div className={style.input_filter}>*/}
                {/*        <Search placeholder="input search text" onSearch={(value) => handleSearch(value)} enterButton />*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col span={8}>*/}
                {/*    <div className={style.header_logout}>*/}
                {/*        <div>*/}
                {/*            <Badge count={1}>*/}
                {/*                <NotificationOutlined className={style.logo} />*/}
                {/*            </Badge>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <Badge dot>*/}
                {/*                <MailOutlined className={style.logo} />*/}
                {/*            </Badge>*/}
                {/*        </div>*/}
                {/*        <div className={style.account_admin}>*/}
                {/*            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginRight:'10px'}}/>*/}
                {/*            <Popover content={content}>*/}
                {/*                <a style={{fontSize:'18px', color:'black'}}>Đào Thị Thanh Mai</a>*/}
                {/*            </Popover>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            {/*</Row>*/}

            {/* Table: Slider */}
            <Row className={"table-header"}>
                <Col className={"table-row"} span={4}>
                    Tên slider
                </Col>
                <Col className={"table-row"} span={5}>
                    Hình ảnh
                </Col>
                <Col className={"table-row"} span={10}>
                    Liên kết
                </Col>
                <Col className={"table-row"} span={2}>
                    Vị trí
                </Col>
                <Col className={"table-row"} span={3}>
                    Hành động
                </Col>
            </Row>
            <div style={{overflow: 'auto', height: heightWindow, width: 'auto' }}>
                {listArray.length > 0
                    ? listArray.map((item, index) => (
                        <Row className={"table-tr"} key={index}>
                            <Col className={"table-row"} span={4}>
                                {list[item].name}
                            </Col>
                            <Col className={"table-row"} span={5}>
                                <Image width={200} height={67.06} src={URL_API.local+'file/'+list[item].image_link}/>
                            </Col>
                            <Col className={"table-row"} span={10}>
                                {URL_API.local+'file/'+list[item].image_link}
                            </Col>
                            <Col className={"table-row"} span={2}>
                                {list[item].index}
                            </Col>
                            <Col className={"table-row"} span={3}>
                                <Row>
                                    <Col flex={1}>
                                        <EditTwoTone className={"icon-slider"}
                                                     onClick={() => showModalCancel('EDIT', list[item], item)}/>
                                    </Col>
                                    <Col flex={1}>
                                        <Popconfirm
                                            title="Bạn muốn xóa slider này？"
                                            okText="Yes"
                                            cancelText="No"
                                            onConfirm={() => onDelete(item)}
                                            icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                                        >
                                            <DeleteTwoTone
                                                className={"icon-slider"}
                                                twoToneColor={"red"}
                                            />
                                        </Popconfirm>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))
                    : (<Spin size="large" style={{textAlign: 'center', paddingLeft: '50%', paddingTop: '100px'}}/>)}
            </div>
            <ModalAdd
                visible={visible2}
                handleOk={handleOk}
                cancelModal={cancelModal}
                title={title}
                styleRow={styleRow}
                styleCol={styleCol}
                handleText={handleText}
                children={children}
                TYPE_TEXT={TYPE_TEXT}
            />
            <ModalEdit
                data={data}
                visible={visible}
                handleOk={handleOk}
                cancelModal={cancelModal}
                title={title}
                styleRow={styleRow}
                styleCol={styleCol}
                handleText={handleText}
                children={children}
                TYPE_TEXT={TYPE_TEXT}
            />
        </div>
    );
}

TableSlider.propTypes = {
    list: PropTypes.object,
    deleteSlider: PropTypes.func,
    postSlider: PropTypes.func,
    putSlider: PropTypes.func,
};

TableSlider.defaultProps = {
    list: {},
    deleteSlider: () => null,
    postSlider: () => null,
    putSlider: () => null,
};

export default React.memo(TableSlider);
