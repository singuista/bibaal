'use strict'

import React         	from 'react'
import DocumentTitle 	from 'react-document-title'
import Emitter 			from 'emitter-js'

const 	propTypes = {},
		emitter = new Emitter()

class AnimationPage extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		emitter.on('test', (param) => {
			console.log('This is a = ', param)
		})
	}
	componentDidMount() {
		emitter.emit('test', {
			name: 'star lord',
			thisIs: false,
			another1: 'DJ Khalid'
		})
	}

	shouldComponentUpdate() {
		return false
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<DocumentTitle title="CSS Animations!!">
				<section id="Animation" className="row text-center"  itemScope="itemscope" itemType="http://schema.org/VisualArtwork">
					<h1>This is a small example of CSS Animations!</h1>
					<div id="sky" className="target animate">
						<div id="cloud" className="target animate">
							<div className="cloud cloud-1"></div>
							<div className="cloud cloud-2"></div>
							<div className="cloud cloud-3"></div>
						</div>

						<div id="sun" className="target animate"></div>

						<div id="moon" className="target animate">
							<div className="moon"></div>
							<div className="moon moon-2"></div>
						</div>

						<div id="ground" className="target animate"></div>
					</div>
				</section>
			</DocumentTitle>
		)
	}
}

AnimationPage.propTypes = propTypes

export default AnimationPage





