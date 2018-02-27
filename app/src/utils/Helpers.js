'use strict'

/**
 * General utility functions
**/
const Helpers = {
	/**
	 * Get the closest matching element up the DOM tree.
	 * @param {DOM Element} Starting DOMelement
	 * @param {string} Selector to match against
	 * @return {DOM element|null} Returns null if no match found else returns DOM element
	 */
	getClosest(elem, selector) {

	    // Element.matches() polyfill
	    if (!Element.prototype.matches) {
	        Element.prototype.matches =
	            Element.prototype.matchesSelector ||
	            Element.prototype.mozMatchesSelector ||
	            Element.prototype.msMatchesSelector ||
	            Element.prototype.oMatchesSelector ||
	            Element.prototype.webkitMatchesSelector ||
	            function(s) {
	                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                    i = matches.length;
	                while (--i >= 0 && matches.item(i) !== this) {}
	                return i > -1;
	            }
	    }

	    // Get closest match
	    for (; elem && elem !== document; elem = elem.parentNode) {
	        if (elem.matches( selector )) return elem
	    }

	    return null
	},
	/**
	 * Event Delegation v2
	 * @param {function} Selector of element to execute event on
	 * @param {function} Callback for the event
	 * @return {function} apply 
	 *
	 * TODO: Support for multiple selectors and output for Container
	 *
	 * Useage example:
	 * element.addEventsListener('click', Helpers.delegate('selector', callbackFunction));
	**/
	delegate(criteria, listener) {
		//(Modernize to play nice with react)
		return function(event) {
			//IE Polyfill for Element.prototype.matches 
			if (!Element.prototype.matches) {
				Element.prototype.matches = Element.prototype.msMatchesSelector
			}

			if (!event.target.matches(criteria)) return

			listener.apply(this, arguments)
		}


		/**
		 * Event Delegation v1 that added a 'delegateTarget' param to the event object
		 * @param {function} function that returns target element
		 * ex: selectorFilter(elem) {return elem.classList && elem.classList.contains('{className}')}
		 * @param {function} function that processes the event (callback)
		 * ex: listener(event) { //Callback function}
		 * @return {event}
		 *
		 * Useage example:
		 * element.addEventsListener('click', Helpers.delegate(function(elem){return elem && elem.classList.contains('selector')}, callbackFunction));
		**\
		return function(e) {
			var el = e.target;

			do {
				if (!criteria(el)) continue;
				e.delegateTarget = el;
				listener.apply(this, arguments);
				return;
			} while( (el = el.parentNode) );
		}*/
	},
	/**
	 * Take a string Array and list out the values
	 * @param {array} array of strings
	 * @return {string}
	**/
	listOutArray(arr) {
		let str = '';

		arr.forEach(function(item) {
			if(str.length === 0) {
				str = `${item}\n`
			} else {
				str += `${item}\n`
			} 
		})

		return str
	},
	/**
	 * Turns post object into a string
	 * @param {object} 
	 * @return Void
	**/
	serializeObj(obj) {
		let strBody = ''

		for (var key in obj) {
		    if (strBody != '') {
		        strBody += '&';
		    }
		    strBody += key + '=' + encodeURIComponent(obj[key]);
		}

		return strBody
	}
}

export const IsType = {
	/**
	 * Returns if a value is a string
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aString(value) {
		return typeof value === 'string' || value instanceof String
	},
	/**
	 * Returns if a value is really a number
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aNumber(value) {
		return typeof value === 'number' && isFinite(value)
	},
	/**
	 * Returns if a value is an array
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	anArray(value) {
		if(!Array.prototype.isArray(value)) {
			Array.prototype.isArray(value)
		} else {
			return value && typeof value === 'object' && value.constructor === Array
		}
	},
	/**
	 * Returns if a value is an function
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aFunction() {
		return typeof value === 'function'
	},

	/**
	 * Returns if a value is an object
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	anObject() {
		return value && typeof value === 'object' && value.constructor === Object
	},

	/**
	 * Returns if a value is an null
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	itNull() {
		return value === null
	},
	/**
	 * Returns if a value is an undefined
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	itUndefined() {
		return typeof value === 'undefined'
	},

	/**
	 * Returns if a value is an boolean
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aBoolean() {
		return typeof value === 'boolean'
	},

	/**
	 * Returns if a value is an regexp
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aRegExp() {
		return value && typeof value === 'object' && value.constructor === RegExp
	},

	/**
	 * Returns if a value is an error object
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	anError() {
		return value instanceof Error && typeof value.message !== 'undefined'
	},

	/**
	 * Returns if a value is a date
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aDate() {
		return value instanceof Date
	},

	/**
	 * Returns if a value is a symbol
	 * @param {any} value to evaluate 
	 * @return {boolean}
	**/
	aSymbol(value) {
		return typeof value === 'symbol'
	}
}

/**
 * Set of Helper Regex only utility functions
**/
export const RegExHelpers = {
	/**
	 * Validate email
	 * @param {string} email address to evaluate
	 * @return {bool} whether or not it matchs the regex criteria
	**/
	validateEmail(email) {
		var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regEx.test(email)
	},
	/**
	 * Validates if string only has letters, numbers, or spaces
	 * @param {string} string to evaluate 
	 * @return {bool} whether or not it matchs the regex criteria
	**/
	validateCleanChars(str) {
		var regEx = /^(?:[A-Za-z]+)(?:[A-Za-z0-9 _]*)$/
		return regEx.test(str)
	}
}

/**
 * Device Specific utility functions
**/
export const DeviceHelpers = {
	/**
	 * Gets the dimensions of the viewport
	 * @return {object} dimensions of the viewport
	**/
	getVpSize() {
		const clientW 			= document.documentElement.clientWidth
		const clientH 			= document.documentElement.clientHeight
		let windowDimensions 	= new Object()

		windowDimensions = {
			w: clientW,
			h: clientH
		}

		return windowDimensions
	},
	/**
	 * Checks if the viewport is a mobile
	 * @return {bool} whether or not width of the viewport is mobile size
	**/
	isMobile() {
		const viewportW = this.getVpSize().w
		const isMobileSize = viewportW < 768 ? true : false

		return isMobileSize
	},
	/**
	 * Checks the viewport is desktop size
	 * @return {bool} whether or not width of the viewport is desktop size
	**/
	isDesktop() {
		const viewportW = this.getVpSize().w
		const isDesktop = viewportW > 767 ? true : false

		return isDesktop
	}
}

export default Helpers






















