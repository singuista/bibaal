'user_strict'

import React 						from 'React'
import DocumentTitle 				from 'react-document-title'
import Emitter 						from 'emitter-js'

const emitter = new Emitter()

class FlexboxPage extends React.Component {
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
	componentWillUnmount() {

	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		return(
			<DocumentTitle title="Flexbox Page">
				<section className="FlexboxPage">
					<div className="flex flex__flexContainer">
						<div className="flex__child">Node 1</div>
						<div className="flex__child">Node 2</div>
						<div className="flex__child">Node 3</div>
						<div className="flex__child">Node 4</div>
						<div className="flex__child">Node 5</div>
					</div>



					<div className="flexV flexV__flexContainer">
						<div className="flexV__child"><p>Node 1</p></div>
						<div className="flexV__child"><p>Node 2</p></div>
						<div className="flexV__child"><p>Node 3</p></div>
						<div className="flexV__child"><p>Node 4</p></div>
						<div className="flexV__child"><p>Node 5</p></div>
						<div className="flexV__child"><p>Node 6</p></div>
					</div>
				</section>
			</DocumentTitle>
		)
	}
}

export default FlexboxPage








