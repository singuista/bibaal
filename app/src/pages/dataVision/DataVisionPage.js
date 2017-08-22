'use strict';

import React         	from 'react';
import DocumentTitle 	from 'react-document-title';

const propTypes = {};

class DataVisionPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	shouldComponentUpdate() {
		return false
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<DocumentTitle title="Data Vision">
				<section id="data-vision-page">
					This is the DataVision!!
				</section>
			</DocumentTitle>
		);
	}
}

DataVisionPage.propTypes = propTypes;

export default DataVisionPage;