'use strict'

import {Fragment, Component}    				from 'react'
//import {Link}        							from 'react-router'
import DocumentTitle 							from 'react-document-title'
import Banner 									from '../../components/banner/Banner'

const propTypes = {}

class FaqPage extends Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)
	}

	/**
	 * React function for catching errors  
	 * Error info outputs an error message string and object information
	 * @param {string} Error message string
	 * @param {object} ComponentStack which represents the stack trace back to where the error occured
	 * @return {void}
	**/
	componentDidCatch(errorString, errorInfo) {
		console.error('Error in FaqPage.js Page === ', errorString)
		console.error('FaqPage.js error stack === ', errorInfo)
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
			<DocumentTitle title="FAQ">
				<Fragment>
					<Banner>
						<h1>Frequently Asked Questions</h1>
					</Banner>


					<section className="page faqPageSection">
						<h2>About BIBAAL</h2>
						<p>As a solutions provider, we offer investors a solution for those seeking a great addition to their portfolio.
						Trade Management Program</p>

						<p>BIBAAL is offering participation in a Private Trade Management Program. BIBAAL’s efficient and highly profitable trade management program offers opportunities with exponential growth opportunity.</p>

						<h2>Program</h2>
						<p>BIBAAL is offering participation in its TRP, which is, a 4 tier program with quarterly and yearly investment subscriptions.</p>

						<h2>Why You Should Choose BIBAAL?</h2>
						<ul>
							<li>Our trading solution is composed of our internally developed trading system.</li>
							<li>Our program offers private and business investors a healthy residual revenue stream.</li>
							<li>Affordable investment tiers.</li>
						</ul>

						<h2>Trading Solution Investment Profiles</h2>

						<h3>How long are the participation periods?</h3>
						<p>The participation programs are from 3 months, 6 months and 12 months.</p>

						<h2>How Do I Fund My Investment?</h2>

						<h3>You can pay by:</h3>
						<ul>
							<li>Bank Wire Transfer</li>
							<li>Mobile Payment Services :  Airtel, Tigo, MTN, & Vodaphone</li>
							<li>Credit/Debit Card</li>
							<li>PayPal Payment Service</li>
						</ul>

						<h2>When does my participation end?</h2>
						<p>Whenever you choose to terminate your participation.</p>

						<h2>Will my account be rolled over every month?</h2>
						<p>Yes.  If you do not choose to terminate your participation, your monies on account are rolled over into the next trading period.</p>

						<h2>How Do I receive information on my account?</h2>
						<p>Yes.  You will receive monthly statements that detail your earnings as an investor.</p>

						<h2>How Do I become a Participant?</h2>
						<p>You can request information by completing the following information:</p>
						
					</section>
				</Fragment>
			</DocumentTitle>
		)
	}
}

FaqPage.propTypes = propTypes

export default FaqPage






