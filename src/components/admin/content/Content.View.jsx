import React, { useEffect } from "react";
// import {Row, Col, Card} from 'antd';
import PropTypes from "prop-types";

// components
// import EditableTable from "./table/Table.View.jsx";
import AdminContainer from "./admin/AdminContainer";
import TableSliderContainer from './slider/Table/TableSliderContainer';
import TabAdminContainer from './admin/Tab/TabAdminContainer';
import CatalogContentContainer from './catalog/Content/CatalogContentContainer';
import TableProductContainer from 'src/components/admin/content/products/TableProductContainer';

// util
import {KEY_MENU} from 'src/components/util/keyMenu';
import ContentHome from "src/components/admin/content/home/ContentHome/ContentHome";
import TableTransaction from 'src/components/admin/content/transaction/Table/TableTransaction';
import TableCustomer from 'src/components/admin/content/customer/Table/TableCustomer';

// const
let CheckRender;
function ContentAdmin(props) {
  const { title, list } = props;

  useEffect(() => {}, [title]);

  switch (title) {
    case  KEY_MENU.TRANSACTION:
      CheckRender=<TableTransaction />
      break;
    case KEY_MENU.SLIDER:
      CheckRender = <TableSliderContainer list={list} />;
      break;
    case KEY_MENU.ADMIN:
      CheckRender = <TabAdminContainer list={list} />;
      break;
    case KEY_MENU.CATALOG:
      CheckRender = <CatalogContentContainer />;
      break;
    case  KEY_MENU.CUSTOMER:
      CheckRender=<TableCustomer />
      break;
    case KEY_MENU.PRODUCT:
      CheckRender = <TableProductContainer />;
      break;
    default:
      CheckRender = <ContentHome/>;
      break;
  }
  return <div className={"content"}>{CheckRender}</div>;
}

ContentAdmin.propTypes = {
  title: PropTypes.string,
  list: PropTypes.object,
};

export default React.memo(ContentAdmin);
