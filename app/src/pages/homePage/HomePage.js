'use strict'

import React         						from 'react'
import {Link}        						from 'react-router'
import DocumentTitle 						from 'react-document-title'
import Panel 								from '../../components/panel/Panel'

const propTypes = {}

class HomePage extends React.Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)
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
		//ex: remove timers, clear intervals, remove eventListeners.
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
	 * @return {boolean}
	**/
	shouldComponentUpdate(/*nextProps, nextState*/) {
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
	 * @return {void}
	**/
	componentDidUpdate(/*prevProps, prevState*/) {
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
			<DocumentTitle title="Bibal">
				<div>
					<Panel id="Intro">
						<div className="panel__areaWrap">
							<div className="contentSpace top">
								<h1 itemProp="headline">Forex Hosting Solution and Bullion Trade Management</h1>
							</div>
							<div className="contentSpace bottom">
								<p>As a FOREX solutions provider, we offer a hosting solutions to those seeking to own their own platform but cannot afford the cost of ownership or is looking for a great addition to their portfolio but do not wish to run such a service. Our solution is based upon a combined platform of FOREX and Bullion Trade Management.</p>

								<button>Read More</button>
							</div>
						</div>
					</Panel>

					<Panel id="BusinessStrategy">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Business Strategy</h2>
								<p>As a FOREX solutions provider, we offer a hosting solutions to those seeking to own their own platform but cannot afford the cost of ownership or is looking for a great addition to their portfolio but do not wish to run such a service. Our solution is based upon a combined platform of FOREX and Bullion Trade Management.</p>
							</div>
						</div>
					</Panel>

					<Panel id="Partnerships">
						<div className="panel__areaWrap">
							<div className="contentSpace top">
								<h2 itemProp="headline">Partnerships</h2>
								<p>The establishment in Accra, Ghana as the Premium FX Trade Management Firm. Taking advantage of experiences in Trade Floor Data Services, Financial Management and Brokering sectors, BIBBAL creates effcient and highly profitable online trade solutions.</p>
							</div>
						</div>
					</Panel>

					<Panel id="CompetitiveEdge">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Competitive Edge</h2>
								<p>Bridge FX’s Implementation and strategies are driven by professionals that bring high drive. This drive ensures our competitive edge of the unique combination of platform applications and returns of our various trade applications.</p>
							</div>
						</div>
					</Panel>

					<Panel id="BullionTradeManagement">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Bullion Trade Management</h2>
								<p>This Platform application is a priceless trade application offered to customers. As a holder of a hard asset, having a Gold Bullion account is unique and original for a FOREX Platform.  By having a bullion trade account delivers a great annual return for through the BTM to our customer base.</p>
							</div>
						</div>
					</Panel>

					<Panel id="AboutUs" itemType="http://schema.org/Organization">
						<div className="panel__areaWrap">
							<div className="contentSpace top">
								<h2 itemProp="headline">About Us</h2>
							</div>
						</div>
					</Panel>
				</div>
				{/*<section className="home-page">
					This is the home page!!<br />
					<Link to="/animations">Animation Page</Link><br />
					<Link to="/data-vision">Data Vision Page</Link><br />
					<Link to="/flexbox">Flexbox Page</Link>
				</section>*/}
			</DocumentTitle>
		)
	}
}

HomePage.propTypes = propTypes

export default HomePage