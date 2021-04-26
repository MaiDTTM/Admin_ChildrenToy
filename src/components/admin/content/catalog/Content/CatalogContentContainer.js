// Redux
import { connect } from 'react-redux';

// components
import CatalogContent from './CatalogContent';

// action type
import {CATALOG} from 'src/action/actionTypes';
import * as action from 'src/action/catalogAction';

const mapStateToProps = state => {
  return {
    listCatalog: state.Catalog,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch({type: CATALOG.CALL_GET_LIST}),
    deleteCatalog: (id) => dispatch(action.deleteCatalog(id)),
    postCatalog: (data) => dispatch(action.postCatalog({data})),
    putCatalog: (id, data) => dispatch(action.putCatalog({id, data}))
  };
};

const CatalogContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContent);

export default CatalogContentContainer;

