'use strict'

import React         						from 'react'
import {Link}        						from 'react-router'
import DocumentTitle 						from 'react-document-title'
import Modal 								from 'react-modal'
import Panel 								from '../../components/panel/Panel'
import EmailForm							from '../../components/emailForm/EmailForm'
import AboutGallery 						from '../../components/aboutSlider/AboutSlider'
import slidesData 							from '../../metaData/aboutGalleryData'

const propTypes = {}
let root

class HomePage extends React.Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)

		this.state = {
			showIntroModal: false,
			showStrategyModal: false,
			showPartnerModal: false
		}

		root = this
	}

	toggleIntroModal() {
		let { showIntroModal } = root.state

		showIntroModal = showIntroModal ? false : true

		root.setState({showIntroModal: showIntroModal})
	}

	toggleStrategyModal() {
		let { showStrategyModal } = root.state

		showStrategyModal = showStrategyModal ? false : true

		root.setState({showStrategyModal: showStrategyModal})
	}

	togglePartnerModal() {
		let { showPartnerModal } = root.state

		showPartnerModal = showPartnerModal ? false : true

		root.setState({showPartnerModal: showPartnerModal})
	}



	lockBody() {

	}

	unlockBody() {

	}

	openEmail() {
		window.open('mailto:inquiry@bibaal.com?subject=Website%20inquiry&body=Please%20Enter%20your%20message')
	}	

	/**
	 * React Component method that is called before the render method is executed. 
	 * It is important to note that setting the state in this phase will not trigger a re-rendering.
	 * @return {void}
	**/
	componentWillMount() {
		//console.log('About to mount App')
		console.log(slidesData)
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
					<Modal
						isOpen={this.state.showIntroModal}
						onRequestClose={root.toggleIntroModal}
						contentLabel="intoModal"
					>
						<h3>Autonomous FOREX Trading (Robot)</h3>
						<p>The strategy that the algorithm our internally developed software performs is made up of set of criteria determined by a technical analysis. Technical analysis involves the use of past or historical data in the form of graphs to predict the trend of a currency pair.</p>

						<p>Our software which we refer to as robot functions by scanning the market for profitable currency trades using a set of programmed patterns that is believed to be repetitive in nature.</p>

						<h3>Binary FOREX Trading</h3>
						<p>A binary option is a higher risk and extremely profitable FOREX application. This form of forex allows Trade Programmers to predict on whether the price of an asset will go up or down in the future. </p>

						<p>An example: The stock price of Facebook, the EUR/USD exchange rate, or the price of oil. The time span can be as little as 60 seconds, making it possible to trade hundreds of times per day.</p>
					</Modal>

					<Modal
						isOpen={this.state.showStrategyModal}
						onRequestClose={root.toggleStrategyModal}
						contentLabel="intoModal"
					>
						<h3>Business Strategy</h3>
						<p>Our objective is to offer services for all levels of investors, as well as, financial institutions.  We seek to provide world class accountability, data center design and management and trade competence to attract and maintain all levels of clients.</p>

						<p>We provide a competitive edge over other competitors.  The competitive edge is executed through professionals with the mindset to live the mantra of “Your future, our Passion."</p>

					</Modal>

					<Modal
						isOpen={this.state.showPartnerModal}
						onRequestClose={root.togglePartnerModal}
						contentLabel="intoModal"
					>
						<h3>Partnerships</h3>
						<p>Furthermore, the financial strategy of Bridge Investment emphasizes reinvestment of income for expansion, developing corporate and personal growth, as well as, to stimulate growth throughout the life of the investment.  Due to the enormous growth potential in the market, return estimates and performance supports both our investor and client expectations.  The trading platforms created are high profit margin businesses with lower risk and overhead.</p>

						<p>Bridge Investment Brokerage and Advisory Ltd (BIBBAL) has formed a partnership with Magnate Forex Ltd, a Ghana companies to form Bridge Forex Hosting Solutions Ltd.  Our combined goal is to provide a better Forex platform for those looking to have their funds traded for a higher return option than the traditional investment strategies.</p>

					</Modal>

					<Panel id="Intro">
						<div className="panel__areaWrap">
							<div className="contentSpace top">
								<h1 itemProp="headline">Forex Hosting Solution and Bullion Trade Management</h1>
							</div>
							<div className="contentSpace bottom">
								<p>As a FOREX solutions provider, we offer a hosting solutions to those seeking to own their own platform but cannot afford the cost of ownership or is looking for a great addition to their portfolio but do not wish to run such a service. Our solution is based upon a combined platform of FOREX and Bullion Trade Management.</p>

								<button className="panel__cta main hvr-sweep-to-right" onClick={root.toggleIntroModal}>Read More</button>
							</div>
						</div>
					</Panel>

					<Panel id="BusinessStrategy">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Business Strategy</h2>
								<p>As a FOREX solutions provider, we offer a hosting solutions to those seeking to own their own platform but cannot afford the cost of ownership or is looking for a great addition to their portfolio but do not wish to run such a service. Our solution is based upon a combined platform of FOREX and Bullion Trade Management.</p>

								<button className="panel__cta main hvr-sweep-to-right" onClick={root.toggleStrategyModal}>Read More</button>
							</div>
						</div>
					</Panel>

					<Panel id="Partnerships">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Partnerships</h2>
								<p>The establishment in Accra, Ghana as the Premium FX Trade Management Firm. Taking advantage of experiences in Trade Floor Data Services, Financial Management and Brokering sectors, BIBBAL creates effcient and highly profitable online trade solutions.</p>
								<button className="panel__cta main hvr-sweep-to-right" onClick={root.togglePartnerModal}>Read More</button>
							</div>
						</div>
					</Panel>

					<Panel id="CompetitiveEdge">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Competitive Edge</h2>
								<p>Bridge FX’s Implementation and strategies are driven by professionals that bring high drive. This drive ensures our competitive edge of the unique combination of platform applications and returns of our various trade applications.</p>

								<p>Our high returns places us ahead of our competitors. Our in-depth knowledge in the African market does the magic. We are experienced in Trading Floor Data Support, Financial Management, Business Structuring, and Trading.</p>
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

					{/*<Panel id="AboutUs" itemType="http://schema.org/Organization">
						<div className="panel__areaWrap">
							<AboutGallery
								id="BiabaalAbout"
								class="aboutSliderOveride"
								sliderInfo={slidesData}
							/>
						</div>
					</Panel>*/}

					<Panel id="ContactForm">
						<div className="panel__areaWrap">
							<div className="contentSpace bottom">
								<h2 itemProp="headline">Contact US</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in vulputate nibh. Nulla vitae rhoncus eros. Nulla pharetra scelerisque nisi, at auctor quam varius suscipit. Nunc feugiat turpis elementum quam suscipit ultrices. Proin non cursus ex, vitae fermentum sem. Sed at nulla urna. Phasellus enim diam, ornare vel arcu sed, malesuada viverra massa. Fusce ultricies finibus nunc, eget sodales ex pharetra at. Maecenas pulvinar sed tortor sit amet dapibus. Etiam quis congue nibh.</p>

								<button className="panel__cta main hvr-sweep-to-right" onClick={root.openEmail}>Contact Us</button>
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