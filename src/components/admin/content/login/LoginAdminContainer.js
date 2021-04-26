// Redux
import { connect } from 'react-redux';
import LoginAdmin from 'src/components/admin/content/login/LoginAdmin';

// api
import * as adminAction  from 'src/action/adminAction'

// components

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(adminAction.loginAdminAction({data})),
  };
};

const LoginAdminContainer = connect(
  null,
  mapDispatchToProps
)(LoginAdmin);

export default LoginAdminContainer;
