'use strict'

import React, {Component}         						from 'react'
import PropTypes 										from 'prop-types'

const propTypes = {
	id: PropTypes.string,
	class: PropTypes.string,
	sliderInfo: PropTypes.oneOfType([
		PropTypes.array, 
		PropTypes.object
	])
}
let root,
	slideIndex = 0,
	slideContainer,
	slideContainerW,
	slidesArr

class AboutSlider extends Component {
	/**
	 * Constructor
	 * @param {object} react properties (Default)
	 * @return {void}
	**/
	constructor(props) {
		super(props)
		root = this
	}

	/**
	 * Takes in slides data and seperates out the slides and associated thumbnails
	 * @param {object} entire data structre of slides
	 * @return {object} jsx output for slides and thumbnail navigation
	**/
	parseModal(m) {
		//console.log('info === ', m)
		let slideArr 		= new Array(),
			thumbnailArr 	= new Array(),
			sl,
			tn

		m.map(function(item) {
			console.log('item === ', item)
			slideArr.push(item.slide)
			thumbnailArr.push(item.thumbnail)
		})

		sl = root.generateSlides(slideArr)
		tn = root.generateThumbNails(thumbnailArr)

		return {s:sl, t:tn }
	}

	/**
	 * Takes all slide data and parses it into jsx
	 * @param {array} object data for slides
	 * @return {array} jsx of each slide
	**/
	generateSlides(s) {
		let slides = s.map(function(slide, i) {
			const 	caption 		= slide.caption ? slide.caption : '',
					classOverride 	= slide.classOverride ? slide.classOverride : '',
					imgData 		= slide.fallbackImg,
					figKeyVal 		= `srcKey-${i + (Math.random() * 100)}`,
					scrSet 			= slide.srcSet.map((set, j) => {

						const keyVal = `srcKey-${j+ (Math.random() * 100)}`
						return(
							<source key={keyVal} media={set.media} srcSet={set.src} itemProp="image" />
						)
					})
			
			return (
				<figure key={figKeyVal} className={`aboutGallery__slide ${classOverride}`} data-slideIndex={i}>
					<picture>
						{scrSet}
						<img src={imgData.src} itemProp="image" alt={imgData.alt ? imgData.alt : ''} />
					</picture>
					<figcaption className="aboutGallery__caption" itemProp="text description">{caption}</figcaption>
				</figure>
			)
		})

		return slides
	}

	/**
	 * Takes all thumbnail nav data and parses it into jsx
	 * @param {array} object data for thumbnails
	 * @return {array}
	**/
	generateThumbNails(t) {
		let thumbNails = t.map(function(tn, i) {
			const 	name 			= tn.name ? tn.name : '',
					classOverride 	= tn.classOverride ? tn.classOverride : '',
					imgData 		= tn.fallbackImg,
					figKeyVal 		= `srcKey-${i + (Math.random() * 100)}`,
					scrSet 			= tn.srcSet.map((set, j) => {

						const keyVal = `srcKey-${j+ (Math.random() * 100)}`
						return(
							<source key={keyVal} media={set.media} srcSet={set.src} itemProp="image" />
						)
					})
			
			return (
				<figure key={figKeyVal} className={`aboutGallery__navItem ${classOverride}`} data-navIndex={i}>
					<div className="hightlight"></div>
					<picture>
						{scrSet}

	 					<img src={imgData.src} alt={imgData.alt ? imgData.alt : ''} itemProp="image thumbnailUrl" />
						<figcaption className="navName" itemProp="text">{name}</figcaption>
					</picture>
				</figure>
			)
		})

		return thumbNails
	}

	/**
	 * Initiate Navigation controls
	 * return {void}
	**/
	initNav() {
		const navContainer 	= root.tnNav

		//Delegate controls
		navContainer.addEventListener('click', root.delegate((elem) => {
			//select element to delegate
			return elem.classList && elem.classList.contains('aboutGallery__navItem')
		}, root.navButtonClick))

		return
	}

	/**
	 * Initiate Navigation controls
	 * @param {event} event object data
	 * return {void}
	**/
	navButtonClick(event) {
		let trgt 		= event.delegateTarget

		slideIndex = parseInt(trgt.getAttribute('data-navIndex'))

		root.goToSlide()	
	}

	/**
	 * Go to the slide number
	 * return {void}
	**/
	goToSlide() {
		let currentSlide 	= document.querySelector(`[data-slideIndex='${slideIndex}']`),
			slideW 			= currentSlide.offsetWidth

		slideContainer.style.transform = `translateX(-${slideIndex * slideW}px) translateZ(0)`

		return
	}

	/**
	 * Event Delegation
	 * @param {function} function that returns target element
	 * ex: selectorFilter(elem) {return elem.classList && elem.classList.contains('{className}')}
	 * @param {function} function that processes the event (callback)
	 * ex: listener(event) { const tgt = event.delegatedTarget //Callback function}
	 * @return {function}
	 *
	 * Useage example:
	 * element.addEventsListener('click', Helpers.delegate(criteria, listener))
	*/
	delegate(criteria, listener) {
		return function(e) {
			var el = e.target

			do {
				if (!criteria(el)) continue
				e.delegateTarget = el
				listener.apply(this, arguments)
				return;
			} while( (el = el.parentNode) )
		}
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
		slideContainer 	= root.slCon
		slideContainerW = slideContainer.offsetWidth

		window.addEventListener('resize', root.goToSlide)

		root.initNav()
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
	 * React Component method gets called before the render method and enables to define if a re-rendering is needed or can be skipped. 
	 * This method is never called on initial rendering. A boolean value must be returned.
	 * @param {object} component props with updated values (nextProps)
	 * @param {object} component state with updated values (nextState)
	 * @return {boolean}
	**/
	shouldComponentUpdate(/*nextProps, nextState*/) {
		/*console.log('Lifecycle: shouldComponentUpdate')
		console.log('nextProps === ', nextProps)
		console.log('nextState === ',nextState)*/
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
		const 	propsId 	= this.props.id ? this.props.id : '',
				propsClass	= this.props.class ? this.props.class : '',
				sliderInfo 	= this.props.sliderInfo && typeof this.props.sliderInfo === 'object' ? this.props.sliderInfo : false,
				output 		= root.parseModal(sliderInfo)

		if(sliderInfo) {
			return(
				<article id={propsId} className={`aboutGallery ${propsClass}`} itemScope="itemscope" itemType="http://schema.org/ImageGallery">
					{/* Slides */}
					<div className="aboutGallery__slidesContainer" ref={(slCon) => {root.slCon = slCon}}>
						{output.s}
					</div>

					{/* Nav bar */}
					<nav className="aboutGallery__navigation" ref={(tnNav) => {root.tnNav = tnNav}}>
						{output.t}
					</nav>
				</article>
			)
		} else {
			return(<div>No slide information provided</div>)
		}
		
	}
}

AboutSlider.propTypes = propTypes

export default AboutSlider






