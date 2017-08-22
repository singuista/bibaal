'use strict'

import React         				from 'react'
import DocumentTitle 				from 'react-document-title'

const propTypes = {}

class CanvasPage extends React.Component {
	constructor(props) {
		super(props)
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
			<DocumentTitle title="Canvas Examples!">
				<section id="Canvas">
					This is the Canvas!!
				</section>
			</DocumentTitle>
		)
	}
}

CanvasPage.propTypes = propTypes

export default CanvasPage