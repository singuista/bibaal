'use strict'

import {Fragment, Component}    				from 'react'
import { Link }        							from 'react-router-dom'
import DocumentTitle 							from 'react-document-title'
import Banner 									from '../../components/banner/Banner'

const propTypes = {}

class ImlPage extends Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)
	}

	toggleAnswer(event) {
		const trgt = event.currentTarget

		trgt.classList.toggle('active')
	}

	/**
	 * React function for catching errors  
	 * Error info outputs an error message string and object information
	 * @param {string} Error message string
	 * @param {object} ComponentStack which represents the stack trace back to where the error occured
	 * @return {void}
	**/
	componentDidCatch(errorString, errorInfo) {
		console.error('Error in ImlPage.js Page === ', errorString)
		console.error('ImlPage.js error stack === ', errorInfo)
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
			<DocumentTitle title="IML">
				<Fragment>
					<Banner>
						<h1>iMarketLive</h1>
					</Banner>

					<nav className="miniNav">
						<Link to="/">Home</Link>
						<Link to="/trading">Trading</Link>
						<Link to="/education">Educational Services</Link>
						<Link to="/business-consulting">Business Consulting</Link>
					</nav>

					<section className="page faqPageSection">
						<h2>iMarketLive</h2>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">I don't know how to trade, how do I learn what to do?</h2>
							<p className="faqNode__answer">
								You are in luck.  You’ve come to the right place. Not knowing how to trade initially is not a bad thing.
								<br />
								<br />
								With iMarketLive’s SwipeTrades and CoinSwipe apps, to start, all you need to know how to do is copy and paste.  The Trade Placements, Signals and Risk Factors are sent directly to your phone from master traders.  This, along with the videos from the IML Academy that you will have access to, you will be able to easily learn to understand and execute trades smoothly.
								<br />
								<br />
								The hope is that, as you earn through Swipetrade and/or CoinSwipe.  That you will also learn how to Trade and make money through trading.  That, you will learn more about trading and invest more time into the educational material that is provided online through the IML platform and become a very successful trader.

							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">How do I Get Started?</h2>
							<p className="faqNode__answer">
								To Get Started, you have to register with iMarketsLive using a current member’s reference link.  In the beginning, most people register as a Customer.  As you realize the benefits of being a member of IML, you can upgrade to any level of membership at a later time.

							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">How much does it cost to begin?</h2>
							<p className="faqNode__answer">
								There are several registration packages. They range from:<br />
								Platinum: $217.19<br />
								Platinum Elite: $250.61<br /><br />
								Monthly subscriptions range from 161.50 to 194.00
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">How do I get a trading account if I want to trade?</h2>
							<p className="faqNode__answer">
								Getting a trading account is easy. Most accounts can be registered and start online. And, our group includes people that can assist you in creating an account.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Who do I give my money to?</h2>
							<p className="faqNode__answer">
								You handle your own money and account.<br /><br />
								Trading:  You fund your own broker account that you will be using to trade.<br /><br />
								Enrollment: You register online through the iMarketsLive website using a reference ID.  The process accepts Visa/MasterCard, Bitcoin, and other forms of payment.

							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">How do I get my money from iMarketsLive? I live in Ghana; will they recognize my account here?</h2>
							<p className="faqNode__answer">
								Yes.  Currently, iMarketsLive operates in over 120 countries.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Can I use my local currency to pay for my account?</h2>
							<p className="faqNode__answer">
								The registration fees and commissions are paid in U.S. Dollars.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Does IML benefit from my trading?</h2>
							<p className="faqNode__answer">
								No.  IML does not financially benefit from your trading.<br /><br />
								The only benefit that IML receives is from your membership and your subscription to their SwipeTrade data and trading applications.  Your success shows that the system works and more can join the revolution.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Will I have local support for this?</h2>
							<p className="faqNode__answer">
								IML has a great online support system that can be accessed 24 hours. In addition to the already strong resources provided by IML, your sponsor and local teams will work together to help new and existing clients to achieve their success in trading.  And, they are right here in your community.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Will I always have access the videos?</h2>
							<p className="faqNode__answer">
								Yes. As long as you have access to the internet you will always be able to watch live trading and recorded instructional videos.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Can I participate without becoming a member?</h2>
							<p className="faqNode__answer">
								No. You must be a member of the IML family to access the platform.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">What is my earning potential?</h2>
							<p className="faqNode__answer">
								IML has provided over 8000 positive PIP (Trade lingo for points) signals this year.  That means that on average, they have provided over 1300 possible positive trade placements each month.<br /><br />
								How much you make depends on how much you managed your time, money and trades.

							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">How soon can I begin to live trade?</h2>
							<p className="faqNode__answer">
								The answer to question lies within you.  If you are serious about your future then learning to positively swipe trade should take you a matter of days to a couple of weeks.

							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">I’m already a Trader, why would I sign up for IML?</h2>
							<p className="faqNode__answer">
								IML provides data by master traders.  As a trader, our most valuable asset is information. IML offers a treasure trove of access to other successful traders, ability to Live Watch Traders trade, forex and cryptocurrency trading signals, and a great community to associate with.  The data that they provide will assist you in making the correct decisions when placing trades.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">I am interested but don’t have time to learn trading, can you trade my money for me?</h2>
							<p className="faqNode__answer">
								No.  iMarketsLive does not trade, earn nor represent your activity on your money.  Although, there are traders that can provide you that service that use the iMarketsLive signal data that offer great returns.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Where can I meet other traders for networking?</h2>
							<p className="faqNode__answer">
								You can meet Traders anywhere.  But, a perfect place to meet and associate with your peers or future peers and associate is right here at IML gatherings.  You’ll be able to discuss and learn from each other at our events.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">Is trading for everyone and what skills do I need to be successful?</h2>
							<p className="faqNode__answer">
								Trading is not for everyone.  But, it could be for you.  All the skills needed to learn how to be a successful trader are patience, confidence, a desire to learn and self-motivation.  The first 2 skills you have to have within you.  IML will help you build the next 2 skills.<br /><br />
								I believe that “YOU” can make it to any level of anything.  That’s because “YOU” have already taken the 1st step to making it to where you want to go.   And, I’ve never seen anybody that is successful take only 1 step.
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">How many steps did it take you to get here?</h2>
							<p className="faqNode__answer">
								 Just 1?
							</p>
						</div>

						<div className="faqNode" onClick={this.toggleAnswer}>
							<h2 className="faqNode__question">If you would like to sign-up, you can join through the following IML Links:</h2>
							<p className="faqNode__answer">
								BIBAAL:  <a href="http://myimarketslive.co/bibaal" target="_blank">http://myimarketslive.co/bibaal</a><br />
								Emmanuel Agyare: <a href="/http://myimarketslive.co/boboli" target="_blank">http://myimarketslive.co/boboli</a><br />
								Tel: +233 (0) 457 2838
							</p>
						</div>

						<p>
							<strong>If you would like to sign-up, you can join through the following IML Links:</strong><br /><br />
							BIBAAL:  <a href="http://myimarketslive.co/bibaal" target="_blank">http://myimarketslive.co/bibaal</a><br />
								Emmanuel Agyare: <a href="/http://myimarketslive.co/boboli" target="_blank">http://myimarketslive.co/boboli</a><br />
								Tel: +233 (0) 457 2838

						</p>

						<p><strong>Thank you so very much for your Time and Energy.</strong></p>
						
					</section>
				</Fragment>
			</DocumentTitle>
		)
	}
}

ImlPage.propTypes = propTypes

export default ImlPage






