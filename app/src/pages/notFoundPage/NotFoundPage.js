'use strict'

import {Fragment, Component}    from 'react'
//import {Link} 					from 'react-router'
import DocumentTitle 			from 'react-document-title'

class NotFoundPage extends Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)
	}

	/**
	 * Create new Audio object and configure it's settings
	 * Makes XMLHttpRequest to audio file and plays it
	 * @return {void}
	**/
	constructAudio() {
		let audioContext = window.AudioContext ? new AudioContext() : null
			
		if(audioContext) {
			let oscillator = audioContext.createOscillator(),
				request = new XMLHttpRequest()
	 
			request.open('GET', '/images/Adele-Skyfall-cut.mp3', true)
			request.responseType = 'arraybuffer'
			request.onload = () => {
			    let undecodedAudio = request.response

			    //console.log(request.response);

			    audioContext.decodeAudioData(undecodedAudio, buffer => {
			    	//console.log(buffer)
			    	let sourceBuffer = audioContext.createBufferSource()

			    	sourceBuffer.buffer = buffer
			    	sourceBuffer.connect(audioContext.destination)
			    	sourceBuffer.start(audioContext.currentTime)
			    })
			}
			request.send()

			oscillator.connect(audioContext.destination)

			/*oscillator.start(audioContext.currentTime);
			oscillator.stop(audioContext.currentTime + 1);*/
		} else {
			console.error('Audio errors not supported')
		}

		return
	}
	/**
	 * React function for catching errors  
	 * Error info outputs an error message string and object information
	 * @param {string} Error message string
	 * @param {object} ComponentStack which represents the stack trace back to where the error occured
	 * @return {void}
	**/
	componentDidCatch(errorString, errorInfo) {
		console.error('Error in NotFoundPage.js Page === ', errorString)
		console.error('NotFoundPage.js error stack === ', errorInfo)
	}

	/**
	 * React Component method gets called before the component is removed from the DOM.
	 * This method can be beneficial when needing to perform clean up operations defined in componentDidMount.
	 * @return {void}
	**/
	componentWillMount() {
		this.constructAudio()
	}
	/**
	 * React Component method, as soon as the render method has been executed this function is called.
	 * The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations.
	 * Any DOM interactions should always happen in this phase not inside the render method.
	 * @return {void}
	**/
	componentDidMount() {
		
	}
	/**
	 * React Component method gets called before the component is removed from the DOM.
	 * This method can be beneficial when needing to perform clean up operations defined in componentDidMount.
	 * @return {void}
	**/
	componentWillUnmount() {
		//Garbage collection
		//ex: remove timers, clear intervals, close opened sockets, remove eventListeners, etc
		//Anything in memory that should be cleared
	}

	/*
	 * React Component method gets called only called when the props have changed and when this is not an initial rendering.
	 * componentWillReceiveProps enables to update the state depending on the existing and upcoming props, without triggering another rendering. 
	 * One interesting thing to remember here is that there is no equivalent method for the state as state changes should never trigger any props changes.
	 * @param {object} component props with updated values (nextProps)
	 * @return {void}
	**/
	componentWillReceiveProps(/*nextProps*/) {
		//console.log('Lifecycle: componentWillReceiveProps.nextProps = ' + nextProps)
		/*this.setState({
			// set something
			//nextProps.something
		})*/
	}

	/*
	 * React Component method gets called before the render method and enables to define if a re-rendering is needed or can be skipped. * This method is never called on initial rendering. A boolean value must be returned.
	 * @param {object} component props with updated values (nextProps)
	 * @param {object} component state with updated values (nextState)
	 * @param {object} 
	 * @return {boolean}
	**/
	shouldComponentUpdate(/*nextProps, nextState, nextContext*/) {
		/*console.log('Lifecycle: shouldComponentUpdate')
		console.log(nextProps)
		console.log(nextState)*/
		//ex: return this.props.value !== nextProps.value is it not equal then it's true
		//ex: return this.state.value === nextState.value is it equal then it's true
		return true
	}

	/*
	 * React Component method gets called as soon as the the shouldComponentUpdate returned true. 
	 * Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.
	 * @param {object} component props with updated values (nextProps)
	 * @param {object} component state with updated values (nextState)
	 * @return {void}
	**/
	componentWillUpdate(/*nextProps, nextState*/) {
		/*console.log('Lifecycle: componentWillUpdate')
		console.log(nextProps)
		console.log(nextState)*/
		// perform any preparations for an upcoming update
	}

	/*
	 * React Component method gets called after the render method. 
	 * Similar to the componentDidMount, this method can be used to perform DOM operations after the data has been updated.
	 * @param {object} component props with updated values (prevProps)
	 * @param {object} component state with updated values (prevState)
	 * @param {object} 
	 * @return {void}
	**/
	componentDidUpdate(/* prevProps, prevState, prevContext */) {
		/*console.log('Lifecycle: componentDidUpdate')
		console.log(prevProps)
		console.log(prevState)*/
		// Do something after the component has been updated
	}

	/**
	 * React Component method returns the needed component markup, which can be a single child component or null or false.
	 * All life Cycle functions revolve around when this function is executed, because it's all about the render.
	 * @return {jsx} component markup.
	**/
	render() {
		return(
			<DocumentTitle title="404: Not Found">
				<Fragment>
					<h1>404</h1>
					<p>Page not found</p>
				</Fragment>
			</DocumentTitle>
		)
	}

}

export default NotFoundPage