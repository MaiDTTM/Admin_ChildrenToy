// Redux
import { connect } from 'react-redux';

// components
import EditAdmin from './EditAdmin';

// action
import * as Admin from 'src/action/adminAction';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    update: (data) => dispatch(Admin.callPutAdminAction(data))
  };
};

const EditAdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAdmin);

export default EditAdminContainer;
