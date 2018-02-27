'use strict'

import {Fragment, Component}    				from 'react'
//import {Link}        							from 'react-router'
import DocumentTitle 							from 'react-document-title'
import Banner 									from '../../components/banner/Banner'

const propTypes = {}

class HomePage extends Component {
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
		console.error('Error in HomePage.js Page === ', errorString)
		console.error('HomePage.js error stack === ', errorInfo)
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
			<DocumentTitle title="Home">
				<Fragment>
					<Banner>
						<h1>Welcome to Bibaal</h1>
					</Banner>

					<section className="page homePageSection">
						<h2>Forex Solution Hosting</h2>

						<p>As a FOREX solutions provider, we can offer a hosting solution to those seeking to own their own platform but cannot afford the cost of ownership or is looking for a great addition to their portfolio but do not wish to run such a service.</p>

						<h3>Target Hosting/Serviced Clients</h3>
						<ul>
							<li>Banks</li>
							<li>Micro Finance Firms</li>
							<li>Forex Traders</li>
							<li>Funds</li>
						</ul>

						<h2>Bullion Trade Management</h2>
						<p>BTM is a strong internal application for any firm and an incredible revenue source. This Platform application can be made into a priceless customer offered trade application for customers.</p>

						<p>As a holder of a hard asset, having a Gold Bullion account is unique and original in Ghana as a FOREX Platform. By having a bullion trade account with a large bullion bank in Accra, we can be under contract for 10% Monthly ROI. This option delivers a great annual return for BIBAAL, as illustrated in the BTM sections of the following plans, and eventually to our customer base.</p>

						<p>An Investor or potential buyer looking into our holdings portfolio will be impressed and our business made more attractive by the asset and its hedging and trading ability as outlined in the respective sections of this prospectus.</p>

						<h2>Affiliate Program</h2>
						<p>BIBAAL has a four-tier affiliate revenue payout system. The tiers can be obtained by accumulated monies on account of their clients or by introducing investors at the various platform levels.</p>
					</section>

				</Fragment>
			</DocumentTitle>
		)
	}
}

HomePage.propTypes = propTypes

export default HomePage








