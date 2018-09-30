'use strict'

import {Fragment, Component}    				from 'react'
//import {Link}        							from 'react-router'
import DocumentTitle 							from 'react-document-title'
import axios 									from 'axios'
import Banner 									from '../../components/banner/Banner'
import Helpers 									from '../../utils/Helpers/'


const propTypes = {}
let root

const instance = axios.create({
	baseURL: 'http://bibaal.com',
	headers: {
		'Contant-Type': 'text/plain; charset=utf-8'
	}
})

class ContactPage extends Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)

		root = this

		this.state = {
			emailSent: false
		}
	}

	sendForm(event) {
		event.preventDefault()

		const fname 		= root.emailForm.querySelector('input[name="fName"]').value.length > 0 ? root.emailForm.querySelector('input[name="fName"]').value : false
		const subject 		= root.subjectField.value ? root.subjectField.value : 'New Bibaal Inquiery' 
		const lName 		= root.emailForm.querySelector('input[name="lName"]').value.length > 0 ? root.emailForm.querySelector('input[name="lName"]').value : false
		const fullName 		= `${fname ? fname : ''} ${lName ? lName : ''} `
		const address 		= root.emailForm.querySelector('input[name="address"]').value.length > 0 ? `${root.emailForm.querySelector('input[name="address"]').value} ` : ''
		const city 			= root.emailForm.querySelector('input[name="city"]').value.length > 0 ? `${root.emailForm.querySelector('input[name="city"]').value} ` : ''
		const country 		= root.emailForm.querySelector('input[name="country"]').value.length > 0 ? `${root.emailForm.querySelector('input[name="country"]').value} ` : ''
		const telephone 	= root.emailForm.querySelector('input[name="telephone"]').value.length > 0 ? `${root.emailForm.querySelector('input[name="telephone"]').value }` : ''
		const email 		= root.emailForm.querySelector('input[name="email"]').value.length > 0 ? `${root.emailForm.querySelector('input[name="email"]').value}` : ''
		const language 		= root.emailForm.querySelector('input[name="language"]').value.length > 0 ? `${root.emailForm.querySelector('input[name="language"]').value} ` : ''
		const message 		= `${fullName} (${email}) is making an inquiery with the following details :\n${address}\n${city}\n${country}\n${telephone}\n${language}`

		const body = {
			name: fullName,
			subject: subject,		
			email: email,
			message: message
		}

		const postStr = Helpers.serializeObj(body)

		//console.log('postStr === ', postStr)

		//return

		instance.post('/email.php', postStr).then(res => {
			root.setState({emailSent: true})
		}).catch(err => {
			console.error('error message === ', err)
		}) 
	}

	/**
	 * React function for catching errors  
	 * Error info outputs an error message string and object information
	 * @param {string} Error message string
	 * @param {object} ComponentStack which represents the stack trace back to where the error occured
	 * @return {void}
	**/
	componentDidCatch(errorString, errorInfo) {
		console.error('Error in ContactPage.js Page === ', errorString)
		console.error('ContactPage.js error stack === ', errorInfo)
	}

	/**
	 * React Component method that is called before the render method is executed. 
	 * It is important to note that setting the state in this phase will not trigger a re-rendering.
	 * @return {void}
	**/
	componentWillMount() {
		//console.log('About to mount App')
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
		return (
			<DocumentTitle title="Contact Us">
				<Fragment>
					<Banner>
						<h1>Contact Us</h1>
					</Banner>

					<section className="page contactPageSection">
						<h2>You can request information by completing the following information:</h2>

						{!this.state.emailSent ?  <form ref={emailForm => {root.emailForm = emailForm} }>
							<select ref={subjectField => {this.subjectField = subjectField}}>
								<option defaultValue value="">-- Choose Subject --</option>
								<option value="General Info">General Info</option>
								<option value="Forex Training">Forex Training</option>
								<option value="Forex Consultation">Forex Consultation</option>
								<option value="Crypto Currency Consultation">Crypto Currency Consultation</option>
								<option value="IMarketsLive Group Info">IMarketsLive Group Info</option>
							</select>
							<input type="text" placeholder="First Name" name="fName" />
							<input type="text" placeholder="Last Name" name="lName" />
							<input type="text" placeholder="Address" name="address" />
							<input type="text" placeholder="City" name="city" />
							<input type="text" placeholder="State / Providence" name="state" />
							<input type="text" placeholder="Country" name="country" />
							<input type="text" placeholder="Telephone" name="telephone" />
							<input type="text" placeholder="Email" name="email" />
							<input type="text" placeholder="Language" name="language" />

							<button onClick={this.sendForm} className="formSubmit">Submit</button>
						</form>

						:  <div>
								Thank you inquiring into BIBAAL's services.
								<br />
								A member of the BIBAAL team will contact you shortly.
							</div>}

					</section>
				</Fragment>
			</DocumentTitle>
		)
	}
}

ContactPage.propTypes = propTypes

export default ContactPage






