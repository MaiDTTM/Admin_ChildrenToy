// Redux
import { connect } from 'react-redux';

// action
import * as adminAction from 'src/action/adminAction';

// components
import Admin from './index.jsx'

const mapStateToProps = state => {
    const useAdmin = state.UseAdmin;
  return {
      useAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getUseAdmin: (id) => dispatch(adminAction.getAdminIdAction({id})),
      putAdmin: (data) => dispatch(adminAction.callPutAdminAction(data))
  }
};

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);

export default AdminContainer;
