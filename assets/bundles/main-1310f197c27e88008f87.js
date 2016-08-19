/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import React, { Component } from 'react';
	import Container from './Container';
	import ReactDOM from 'react-dom';

	export default class SortableSimple extends Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          'b',
	          null,
	          React.createElement(
	            'a',
	            { href: 'https://github.com/gaearon/react-dnd/tree/master/examples/04%20Sortable/Simple' },
	            'Browse the Source'
	          )
	        )
	      ),
	      React.createElement(
	        'p',
	        null,
	        'It is easy to implement a sortable interface with React DnD. Just make the same component both a drag source and a drop target, and reorder the data in the ',
	        React.createElement(
	          'code',
	          null,
	          'hover'
	        ),
	        ' handler.'
	      ),
	      React.createElement(Container, null)
	    );
	  }
	}

	ReactDOM.render(React.createElement(SortableSimple, null), document.getElementById('container'));

/***/ }
/******/ ]);