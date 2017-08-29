'use strict'

import React, {Component}         						from 'react'

class AboutSlider extends Component {
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
		return(
			<article id={this.props.id ? this.props.id : ''} className={`aboutGallery ${this.props.class ? this.props.class : ''}`} itemScope="itemscope" itemType="http://schema.org/ImageGallery">
				{/* Slides */}
				<figure className="aboutGallery__slide">
					<picture>
						<source media="all and (orientation: landscape)" srcSet="https://images2.alphacoders.com/153/thumb-1920-153272.jpg" itemProp="image" />
						<source media="all and (orientation: portrait)" srcSet="https://i.pinimg.com/736x/0c/1d/17/0c1d178d50f2020617b2608b6864074d--death-note-cosplay-death-note-anime.jpg" itemProp="image" />

 						<img src="/images/forex-chart.jpg" srcSet="/images/forex-chart.jpg 1000w, /images/forex-chart.jpg 2000w" itemProp="image" alt="MDN" />
					</picture>
					<figcaption className="aboutGallery__caption" itemProp="text description"></figcaption>
				</figure>

				{/* Nav bar */}
				<nav className="aboutGallery__navigation">
					<figure className="aboutGallery__navItem">
						<picture>
							<source media="all and (orientation: landscape)" srcSet="http://dingo.care2.com/pictures/petition_images/petition/188/907194-1490205999-wide.jpg" itemProp="image thumbnailUrl" />
							<source media="all and (orientation: portrait)" srcSet="https://images-na.ssl-images-amazon.com/images/I/517qS8BwPZL._AC_SL230_.jpg" itemProp="image thumbnailUrl" />

		 					<img src="/images/forex-chart.jpg" srcSet="/images/forex-chart.jpg 1000w, /images/forex-chart.jpg 2000w" itemProp="image thumbnailUrl" alt="MDN" />
							<figcaption className="aboutGallery__navName" itemProp="text"></figcaption>
						</picture>
					</figure>
					<figure className="aboutGallery__navItem">
						<picture>
							<source media="all and (orientation: landscape)" srcSet="http://dingo.care2.com/pictures/petition_images/petition/188/907194-1490205999-wide.jpg" itemProp="image thumbnailUrl" />
							<source media="all and (orientation: portrait)" srcSet="https://images-na.ssl-images-amazon.com/images/I/517qS8BwPZL._AC_SL230_.jpg" itemProp="image thumbnailUrl" />

		 					<img src="/images/forex-chart.jpg" srcSet="/images/forex-chart.jpg 1000w, /images/forex-chart.jpg 2000w" itemProp="image thumbnailUrl" alt="MDN" />
							<figcaption className="aboutGallery__navName" itemProp="text"></figcaption>
						</picture>
					</figure>
					<figure className="aboutGallery__navItem">
						<picture>
							<source media="all and (orientation: landscape)" srcSet="http://dingo.care2.com/pictures/petition_images/petition/188/907194-1490205999-wide.jpg" itemProp="image thumbnailUrl" />
							<source media="all and (orientation: portrait)" srcSet="https://images-na.ssl-images-amazon.com/images/I/517qS8BwPZL._AC_SL230_.jpg" itemProp="image thumbnailUrl" />

		 					<img src="/images/forex-chart.jpg" srcSet="/images/forex-chart.jpg 1000w, /images/forex-chart.jpg 2000w" itemProp="image thumbnailUrl" alt="MDN" />
							<figcaption className="aboutGallery__navName" itemProp="text"></figcaption>
						</picture>
					</figure>

				</nav>
			</article>
		)
	}
}

export default AboutSlider






