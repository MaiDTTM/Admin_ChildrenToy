import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

// component
import TreeCatalog from '../TreeCatalog';
import TableCatalogContainer from '../../products/TableProductContainer';

function CatalogContent(props) {
    let id;
    let match = useRouteMatch();
    let { location } = useHistory();
    const { pathname } = location;
    if (match.url !== pathname) {
        const lengthUrl = match.url.length;
        id = pathname.split('').filter((item, index) => index > lengthUrl).join('');
    }

    const { getList, listCatalog, deleteCatalog, postCatalog, putCatalog } = props;
    const [idCatalog, setIdCatalog] = React.useState(id);
    useEffect(
        () => {
            getList();
        },
        []
    );

    if (idCatalog !== id) {
        setIdCatalog(id);
    }
    return (
        <Row>
            <Col flex={1}>
                <TreeCatalog
                    list={listCatalog}
                    deleteId={deleteCatalog}
                    post={postCatalog}
                    put={putCatalog}
                />
            </Col>
            <Switch>
                <Route
                    to={`${match.url}/:id`}
                    children={
                        <Col flex={6}>
                            <TableCatalogContainer id={idCatalog} type={'Catalog'} />
                        </Col>
                    }
                />
            </Switch>
        </Row>
    );
}

CatalogContent.propTypes = {
    getList: PropTypes.object,
    deleteCatalog: PropTypes.func,
};

CatalogContent.defaultProps = {
    getList: {},
    deleteCatalog: null,
};

export default React.memo(CatalogContent);
