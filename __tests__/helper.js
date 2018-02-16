'use strict'

import { JSDOM } 		 from 'jsdom'

//Add Window and Document objects to the vitural browser
const dom = new JSDOM('<!doctype html><html><body></body></html>')

global.window = dom.window
global.document = dom.window.document


Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key]
	}
})


//globally define sandbox
beforeEach(function() {
	global.sandbox = sinon.sandbox.create()
})

afterEach(function() {
	global.sandbox.restore()
})