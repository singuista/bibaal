'use strict'

import {Fragment, Component}    				from 'react'
//import {Link}        							from 'react-router'
import DocumentTitle 							from 'react-document-title'
import Banner 									from '../../components/banner/Banner'

const propTypes = {}

class AboutPage extends Component {
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
		console.error('Error in AboutPage.js Page === ', errorString)
		console.error('AboutPage.js error stack === ', errorInfo)
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
			<DocumentTitle title="About Us">
				<Fragment>
					<Banner>
						<h1>About Us</h1>
					</Banner>
					
					<section className="page aboutPageSection">

						<h2>Welcome to BIBAAL</h2>
						<p>We are extremely excited that you have taken the time to consider BIBAAL as you Trading Program Solutions Provider.</p>

						<p>We would also like to take a moment to thank you for allowing us an opportunity to work with you.  We promise that we will deliver efficient, competent and profitable solutions to you and provide an earnings platform unparalleled in the industry.</p>

						<p>BIBAAL is a Ghana company with an international outlook.  We seek to serve the Ghana Investor as well as the International Investor.  Our vision is to become a Global Online force for providing investors with a platform that tenders to their investment ability and not just the Status Quo.  Our Programs are designed to incorporate the Private, Corporate and Group investor on multiple tiers.</p>

						<p>We have built and developed relationships over a 10 year period and are looking forward to offering the benefits of these relationships to you our future investor.  Thus allowing you to take part and benefit from over $4 Trillion Dollars traded every day in the world of forex, metals and commodities.</p>

						<p>BIBAAL as a company views our investors and clients as the utmost important aspects of our business. Without YOU, there is no US!  We promise to dedicate our team of efficient, insightful, prudent analysists and advisors to provide you our investor with the most current, modern and safest solutions with the highest earning potentials and minimum risks.</p>

						<p>Our team works for you.  We want our investors and clients to enjoy a fruitful relationship with us.  We monitor your trade from beginning to end and ensure that your expectations are met 100%.  It is in our absolute interest for you to be successful and profitable.  We want you to let us work for you so that you may enjoy your profitable secondary income.</p>

						<p>Any time if you have any queries, complaints or requirement, feel free to contact us at any time via </p>

						<p>Welcome again to the BIBAAL Family.</p>

						<p>Thank You.</p>

						<p>Sincerely Yours,</p>
						<p>Michael Van-Yaadar (MD, BIBAAL)</p>
						<br />
						<br />

						<h2>Our Philosophy</h2>

						<h3>Mission</h3>
						<p>Our mission is to provide investors and clients with, efficient, dependable and high quality brokerage services using the latest technologies. We aim to become a global leader in the field of Trade Management Solutions providing.</p>

						<h3>Vision</h3>
						<p>Our vision is to become the Premier Global Online Trade Management Firm for Private and institutional investors based on long term professional relationships and best of industry client services.</p>

						<h3>Social Action</h3>
						<p>As members of the community, we look forward to building our various communities through outreach and educational development.  As our business grows and our teams expand, we are planning to educate the youth through seminars and distant learning, as well as, other programs.</p>

						<h3>Our Principles</h3>
						<ul>
							<li>Hard Work: Give what you expect! Our Investors and Clients want 100% and we give 100%!</li>
							<li>Integrity:  Never say what not be true. Trust is our ABSOLUTE Benchmark!</li>
							<li>Transparency: There is no part of our operation that is illegal or questionable.. Our clients have the benefit of understanding their project from beginning to end.</li>
						</ul>

						<h3>BIBAAL Team</h3>
						<p>The BIBAAL team is composed of highly driven, experienced and professional individuals.  Their passion for their work is unbridled.  This passion delivers great results to the end user.  Our strength lies in understanding who you are and what you want and need from your investment.  We look forward to our follow up contact.</p>

						<p>Let us get it done for you!</p>
					</section>

				</Fragment>
			</DocumentTitle>
		)
	}
}

AboutPage.propTypes = propTypes

export default AboutPage






