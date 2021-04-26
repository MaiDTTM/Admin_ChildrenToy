// Redux
import { connect } from 'react-redux';
import LoginAdmin from 'src/components/admin/content/login/LoginAdmin';

// api
import * as adminAction  from 'src/action/adminAction'
import Reload from "src/components/admin/content/login/Reload";

// components

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getUseAdmin: (id) => dispatch(adminAction.getAdminIdAction({id})),
  };
};

const ReloadContainer = connect(
  null,
  mapDispatchToProps
)(Reload);

export default ReloadContainer;
