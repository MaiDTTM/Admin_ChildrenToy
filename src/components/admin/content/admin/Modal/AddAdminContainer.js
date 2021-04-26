// Redux
import { connect } from 'react-redux';

// components
import AddAdmin from './AddAdmin';

// action
import * as Admin from 'src/action/adminAction';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        post: (data) => dispatch(Admin.callPostAdminAction(data))
    };
};

const AddAdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAdmin);

export default AddAdminContainer;
