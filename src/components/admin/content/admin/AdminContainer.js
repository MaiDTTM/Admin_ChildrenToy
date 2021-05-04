// Redux
import { connect } from 'react-redux';

// components
import AdminView from "./AdminView";

// action type
import {ADMIN} from "src/action/actionTypes";

const mapStateToProps = state => {
  const listAdmin = state.Admin;
  return {
    listAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch({type: ADMIN.CALL_GET_LIST})
  };
};

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);

export default AdminContainer;
