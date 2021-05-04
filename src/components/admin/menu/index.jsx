import React from "react";
import PropTypes from "prop-types";

// styles
import {Menu} from "antd";
import '../styles/index.css';
import {
    BarsOutlined,
    HomeOutlined,
    TeamOutlined,
    SettingOutlined,
    ShoppingOutlined,
    PictureOutlined,
    FileDoneOutlined,
    LogoutOutlined, TransactionOutlined, UsergroupAddOutlined,
} from '@ant-design/icons';
import {Route, Link, useRouteMatch} from "react-router-dom";

// util
import {KEY_MENU} from "src/components/util/keyMenu";

// const
const {SubMenu} = Menu;

function LogoAdmin() {
    return (
        <div className={"logo"}>
            <img
                src='https://iweb.tatthanh.com.vn/pic/3/blog/images/mau-logo-dep(46).jpg'
                alt="LOGO"
                style={{width: 50, height: 40}}
            />
            <div style={{color:'#fff',marginLeft:'10px',marginTop:'20px'}}>Công ty GCB</div>
        </div>
    );
}

function MenuAmin(props) {
    const {collapsed, setTitleHeader, onShowDrawer} = props;
    const match = useRouteMatch();
    function handleClick(event) {
        setTitleHeader(event.key);
    }

    return (
        <Route>
            <Menu
                theme="dark"
                defaultSelectedKeys={[KEY_MENU.HOME]}
                mode="inline"
                onClick={handleClick}
            >
                {!collapsed && <LogoAdmin/>}
                <Menu.Item key={KEY_MENU.HOME} icon={<HomeOutlined/>}>
                    <Link to={`${match.url}/home`}> Trang Chủ</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.CATALOG} icon={<BarsOutlined/>}>
                    <Link to={`${match.url}/catalog`}>Danh mục</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.PRODUCT} icon={<ShoppingOutlined/>}>
                    <Link to={`${match.url}/product`}>
                        Sản phẩm
                    </Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.TRANSACTION} icon={<TransactionOutlined />}>
                    <Link to={`${match.url}/transaction`}>Đơn hàng</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.SLIDER} icon={<PictureOutlined/>}>
                    <Link to={`${match.url}/slider`}>Slider</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.CUSTOMER} icon={<UsergroupAddOutlined />}>
                    <Link to={`${match.url}/customer`}>Khách hàng</Link>
                </Menu.Item>
                <Menu.Item key={KEY_MENU.ADMIN} icon={<TeamOutlined/>}>
                    <Link to={`${match.url}/admin`}>Nhân viên</Link>
                </Menu.Item>
                <Menu.Item icon={<SettingOutlined/>} key={KEY_MENU.SETTING_USER} onClick={() => onShowDrawer()}>Cài đặt tài khoản</Menu.Item>
                <Menu.Item icon={<LogoutOutlined />} key={KEY_MENU.LOGOUT}>Đăng Xuất</Menu.Item>
            </Menu>
        </Route>
    );
}

MenuAmin.propTypes = {
    collapsed: PropTypes.bool,
    setTitleHeader: PropTypes.func,
    onShowDrawer: PropTypes.func,
};

MenuAmin.defaultProps = {
    collapsed: false,
    setTitleHeader: () => null,
};

export default React.memo(MenuAmin);
