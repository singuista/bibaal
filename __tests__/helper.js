'use strict';
import { jsdom } from 'jsdom';

//Add Window and Document objects to the vitural browser
const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});


//globally define sandbox
beforeEach(function() {
	global.sandbox = sinon.sandbox.create();
});

afterEach(function() {
	global.sandbox.restore();
});