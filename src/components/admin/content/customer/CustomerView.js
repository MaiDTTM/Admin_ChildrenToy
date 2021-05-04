import React from 'react';
import HeaderAdmin from 'src/components/admin/header';
import ContentAdmin from 'src/components/admin/content/Content.View';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
const { Header, Content } = Layout;
function CustomerView(props) {
	const { titleHeader } = props;
    return(
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					<HeaderAdmin title={titleHeader} />
				</Header>
				<Content style={{ margin: "0 16px" }}>
					<ContentAdmin
						title={titleHeader}
					/>
				</Content>
			</Layout>
    );
}

CustomerView.propTypes = {
	titleHeader: PropTypes.string,
};

CustomerView.defaultProps = {
	titleHeader: 'Error',
};

export default CustomerView;
