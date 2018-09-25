/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./page_block/block */ "./blocks/src/page_block/block.js");

__webpack_require__(/*! ./editor_block/block */ "./blocks/src/editor_block/block.js");

/***/ }),

/***/ "./blocks/src/editor_block/block.js":
/*!******************************************!*\
  !*** ./blocks/src/editor_block/block.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/editor_block/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/editor_block/editor.scss");

var _reactFlatpickr = __webpack_require__(/*! react-flatpickr */ "./node_modules/react-flatpickr/build/index.js");

var _reactFlatpickr2 = _interopRequireDefault(_reactFlatpickr);

var _reactResponsiveEmbed = __webpack_require__(/*! react-responsive-embed */ "./node_modules/react-responsive-embed/lib/index.js");

var _reactResponsiveEmbed2 = _interopRequireDefault(_reactResponsiveEmbed);

var _utils = __webpack_require__(/*! ./../utils */ "./blocks/src/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { VLRichText } from './components/VLRichText';

var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText;

// import { EventSelect } from './components/EventSelect';
// import { EventPreview } from './components/EventPreview';
// import 'flatpickr/dist/themes/material_green.min.css'


/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var _wp = wp,
    apiRequest = _wp.apiRequest;
var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('tdy-se/editor', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Tredny Event Editor'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Tredny Event Editor'), __('Calendar')],
	attributes: {
		tdy_se_start_date: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_start_date'
		},
		tdy_se_end_date: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_end_date'
		},
		tdy_se_location: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_location'
		},
		tdy_se_main_title: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_main_title'
		},
		tdy_se_main_description: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_main_description'
		},
		tdy_se_sub_title: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_sub_title'
		},
		tdy_se_sub_description: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_sub_description'
		},
		tdy_se_third_description: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_third_description'
		},
		tdy_se_photo_url: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_photo_url'
		},
		tdy_se_photo_alt: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_photo_alt'
		},
		tdy_se_photo_id: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_photo_id'
		},
		tdy_se_youtube_url: {
			type: 'string',
			source: 'meta',
			meta: 'tdy_se_youtube_url'
		}

	},

	/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
 */
	edit: function edit(props) {
		// Creates a <p class='wp-block-cgb-main'></p>.

		var _props$attributes = props.attributes,
		    tdy_se_start_date = _props$attributes.tdy_se_start_date,
		    tdy_se_end_date = _props$attributes.tdy_se_end_date,
		    tdy_se_location = _props$attributes.tdy_se_location,
		    tdy_se_main_title = _props$attributes.tdy_se_main_title,
		    tdy_se_main_description = _props$attributes.tdy_se_main_description,
		    tdy_se_sub_title = _props$attributes.tdy_se_sub_title,
		    tdy_se_sub_description = _props$attributes.tdy_se_sub_description,
		    tdy_se_third_description = _props$attributes.tdy_se_third_description,
		    tdy_se_photo_url = _props$attributes.tdy_se_photo_url,
		    tdy_se_photo_alt = _props$attributes.tdy_se_photo_alt,
		    tdy_se_photo_id = _props$attributes.tdy_se_photo_id,
		    tdy_se_youtube_url = _props$attributes.tdy_se_youtube_url,
		    setAttributes = props.setAttributes;


		var getImageButton = function getImageButton(openEvent) {
			if (tdy_se_photo_url) {
				return wp.element.createElement('img', { src: tdy_se_photo_url, onClick: openEvent, className: 'image' });
			} else {
				return wp.element.createElement(
					'div',
					{ className: 'button-container' },
					wp.element.createElement(
						Button,
						{ onClick: openEvent, className: 'button button-large' },
						'Pick an image'
					)
				);
			}
		};

		var onMediaSelect = function onMediaSelect(media) {
			setAttributes({
				tdy_se_photo_alt: media.alt,
				tdy_se_photo_url: media.url
			});
		};

		//Not dry but can't seem to find a solution, no retrievable events fired?
		var handleMainDescriptionChange = function handleMainDescriptionChange(content) {
			setAttributes({
				// tdy_se_main_description: JSON.stringify(content)
				tdy_se_main_description: content[0]
			});
		};

		var handleSubDescriptionChange = function handleSubDescriptionChange(content) {
			setAttributes({
				// tdy_se_main_description: JSON.stringify(content)
				tdy_se_sub_description: content[0]
			});
		};

		// 
		return (
			// dateFormat: 'DD, d MM, yy',
			// altFormat: "yymmdd",
			wp.element.createElement(
				'div',
				{ className: props.className },
				wp.element.createElement(
					'h2',
					null,
					' Event Details '
				),
				wp.element.createElement(MediaUpload, { onSelect: onMediaSelect, type: 'image', value: tdy_se_photo_id, render: function render(_ref) {
						var open = _ref.open;
						return getImageButton(open);
					} }),
				wp.element.createElement(PlainText, { onChange: function onChange(content) {
						return setAttributes({
							tdy_se_main_title: content
						});
					}, value: tdy_se_main_title, placeholder: 'Primary title for the event...', className: 'heading' }),
				wp.element.createElement(RichText, { label: 'Text', help: 'Enter some text', value: tdy_se_main_description, placeholder: 'Primary description about the event...', onChange: handleMainDescriptionChange }),
				wp.element.createElement(RichText, { label: 'Text', help: 'Enter some text', value: tdy_se_sub_description, placeholder: 'Sencondary description about the event...', onChange: handleSubDescriptionChange }),
				wp.element.createElement(PlainText, { onChange: function onChange(content) {
						return setAttributes({
							tdy_se_sub_title: content
						});
					}, value: tdy_se_sub_title, placeholder: 'Sencondary title for the event...' })
			)
		);
	},

	// <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' ratio='16:9' />


	/**
 * The save function defines the way in which the different attributes should be combined
 * into the final markup, which is then serialized by Gutenberg into post_content.
 *
 * The "save" property must be specified and must be a valid function.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
 */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    pastOrUpcoming = _props$attributes2.pastOrUpcoming,
		    howManyEvents = _props$attributes2.howManyEvents,
		    setAttributes = props.setAttributes;

		return null;
	}
});

/***/ }),

/***/ "./blocks/src/editor_block/editor.scss":
/*!*********************************************!*\
  !*** ./blocks/src/editor_block/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/editor_block/style.scss":
/*!********************************************!*\
  !*** ./blocks/src/editor_block/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/page_block/block.js":
/*!****************************************!*\
  !*** ./blocks/src/page_block/block.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/page_block/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/page_block/editor.scss");

var _EventSelect = __webpack_require__(/*! ./components/EventSelect */ "./blocks/src/page_block/components/EventSelect.js");

var _EventPreview = __webpack_require__(/*! ./components/EventPreview */ "./blocks/src/page_block/components/EventPreview.js");

/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var _wp = wp,
    apiRequest = _wp.apiRequest;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('tdy-se/page', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Tredny Event'), // Block title.
	icon: 'calendar-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Tredny Event'), __('Calendar')],
	attributes: {
		// past <,  upcoming >=
		pastOrUpcoming: {},
		howManyEvents: {}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		// Creates a <p class='wp-block-cgb-main'></p>.

		var _props$attributes = props.attributes,
		    pastOrUpcoming = _props$attributes.pastOrUpcoming,
		    howManyEvents = _props$attributes.howManyEvents,
		    setAttributes = props.setAttributes;


		var updateAttributes = function updateAttributes(attributeOjbect) {
			setAttributes(attributeOjbect);
		};

		// 
		return wp.element.createElement(
			'div',
			{ className: props.className },
			wp.element.createElement(
				'h2',
				null,
				' Events '
			),
			wp.element.createElement(_EventSelect.EventSelect, { updateAttributes: updateAttributes, pastOrUpcoming: pastOrUpcoming, howManyEvents: howManyEvents }),
			pastOrUpcoming && howManyEvents ? wp.element.createElement(_EventPreview.EventPreview, { pastOrUpcoming: pastOrUpcoming, howManyEvents: howManyEvents }) : wp.element.createElement(
				'div',
				null,
				' Preview to be shown once event output options have been selected '
			)
		);
	},

	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    pastOrUpcoming = _props$attributes2.pastOrUpcoming,
		    howManyEvents = _props$attributes2.howManyEvents,
		    setAttributes = props.setAttributes;

		return null;
	}
});

/***/ }),

/***/ "./blocks/src/page_block/components/EventOutput.js":
/*!*********************************************************!*\
  !*** ./blocks/src/page_block/components/EventOutput.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EventOutput = exports.EventOutput = function EventOutput(props) {
  return wp.element.createElement(
    "div",
    { "class": "photo link" },
    wp.element.createElement("img", { "class": "mimage", src: props.photoSrc }),
    wp.element.createElement("a", { "class": "fa fa-search" })
  );
};

/***/ }),

/***/ "./blocks/src/page_block/components/EventPreview.js":
/*!**********************************************************!*\
  !*** ./blocks/src/page_block/components/EventPreview.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EventPreview = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(/*! ../utils/api */ "./blocks/src/page_block/utils/api.js");

var api = _interopRequireWildcard(_api);

var _EventOutput = __webpack_require__(/*! ./EventOutput */ "./blocks/src/page_block/components/EventOutput.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

var EventPreview = exports.EventPreview = function (_Component) {
	_inherits(EventPreview, _Component);

	function EventPreview(props) {
		_classCallCheck(this, EventPreview);

		var _this = _possibleConstructorReturn(this, (EventPreview.__proto__ || Object.getPrototypeOf(EventPreview)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			title: '',
			description: '',
			location: '',
			date: '',
			photo: ''
		};

		_this.getEvent = _this.getEvent.bind(_this);
		_this.setStatus = _this.setStatus.bind(_this);

		return _this;
	}

	_createClass(EventPreview, [{
		key: 'getEvent',
		value: function getEvent() {
			if (this.state.pastOrUpcoming && this.state.howManyEvents) {

				var args = {
					pastOrUpcoming: this.state.pastOrUpcoming,
					howManyEvents: this.state.howManyEvents
				};

				api.getEventWithArgs(args).then(function (response) {
					console.log('getEvent response', response);
				});
			}
		}
	}, {
		key: 'setStatus',
		value: function setStatus(newProps) {
			var _this2 = this;

			var props = newProps ? newProps : this.props;

			console.log('setStatus props', props);

			if (props.pastOrUpcoming && props.howManyEvents) {

				this.setState({
					pastOrUpcoming: props.pastOrUpcoming,
					howManyEvents: props.howManyEvents
				}, function () {
					_this2.getEvent();
				});
			} else {
				console.log('props', props);
				if (props.pastOrUpcoming) {
					this.setState({
						pastOrUpcoming: props.pastOrUpcoming
					}, function () {});
				}
				if (props.howManyEvents) {
					this.setState({
						howManyEvents: props.howManyEvents
					}, function () {});
				}
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('mount rpors');
			this.setStatus();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			console.log('received rpors');
			this.setStatus(newProps);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'render',
		value: function render() {
			return wp.element.createElement('div', { className: 'EventPreview tdy_photo_album tdy_photo_gallery' });
		}
	}]);

	return EventPreview;
}(Component);

/***/ }),

/***/ "./blocks/src/page_block/components/EventSelect.js":
/*!*********************************************************!*\
  !*** ./blocks/src/page_block/components/EventSelect.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

// const inputs = ['pastOrUpcoming', 'howManyEvents']

var EventSelect = exports.EventSelect = function (_Component) {
	_inherits(EventSelect, _Component);

	function EventSelect(props) {
		_classCallCheck(this, EventSelect);

		var _this = _possibleConstructorReturn(this, (EventSelect.__proto__ || Object.getPrototypeOf(EventSelect)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			pastOrUpcoming: '>=',
			howManyEvents: '5'
		};

		_this.handleInputChange = _this.handleInputChange.bind(_this);

		return _this;
	}

	_createClass(EventSelect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.pastOrUpcoming) {
				this.setState({
					pastOrUpcoming: this.props.pastOrUpcoming
				}, function () {});
			}
			if (this.props.howManyEvents) {
				this.setState({
					howManyEvents: this.props.howManyEvents
				}, function () {});
			}
		}

		// If input cahnges, change the state that has the same name as input, then update attributes

	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var _this2 = this;

			var name = event.target.name;
			this.setState(_defineProperty({}, event.target.name, event.target.value), function () {
				switch (name) {
					case 'pastOrUpcoming':
						_this2.props.updateAttributes({
							pastOrUpcoming: _this2.state.pastOrUpcoming
						});
					case 'howManyEvents':
						console.log('howManyEvents');
						_this2.props.updateAttributes({
							howManyEvents: _this2.state.howManyEvents
						});

				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return wp.element.createElement(
				'div',
				{ className: 'EventSelect' },
				wp.element.createElement(
					'div',
					null,
					wp.element.createElement(
						'strong',
						null,
						' Upcoming or past events'
					)
				),
				wp.element.createElement(
					'select',
					{ name: 'pastOrUpcoming', value: this.state.pastOrUpcoming, onChange: this.handleInputChange },
					wp.element.createElement(
						'option',
						{ value: '>=' },
						'Upcoming Events'
					),
					wp.element.createElement(
						'option',
						{ value: '<' },
						'Past Events'
					)
				),
				wp.element.createElement(
					'div',
					null,
					wp.element.createElement(
						'strong',
						null,
						' Number of events to show'
					)
				),
				wp.element.createElement('input', { name: 'howManyEvents', type: 'number', min: '1', max: '10', 'default': '5', value: this.state.howManyEvents, onChange: this.handleInputChange })
			);
		}
	}]);

	return EventSelect;
}(Component);

/***/ }),

/***/ "./blocks/src/page_block/editor.scss":
/*!*******************************************!*\
  !*** ./blocks/src/page_block/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/page_block/style.scss":
/*!******************************************!*\
  !*** ./blocks/src/page_block/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/page_block/utils/api.js":
/*!********************************************!*\
  !*** ./blocks/src/page_block/utils/api.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getEventWithArgs = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEventWithArgs = exports.getEventWithArgs = function getEventWithArgs(args) {
	var pastOrUpcoming = args.pastOrUpcoming,
	    howManyEvents = args.howManyEvents;


	var call = '/wp-json/tdy_events/v1/events';

	if (howManyEvents) {
		call += '?howManyEvents=' + howManyEvents;
		if (pastOrUpcoming) {
			call += '&pastOrUpcoming=' + pastOrUpcoming;
		}
	} else {
		if (pastOrUpcoming) {
			call += '?pastOrUpcoming=' + pastOrUpcoming;
		}
	}

	console.log('call', call);

	return _axios2.default.get(call);
};

/***/ }),

/***/ "./blocks/src/utils.js":
/*!*****************************!*\
  !*** ./blocks/src/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var tryParseJson = exports.tryParseJson = function tryParseJson(string) {
	try {
		return JSON.parse(string);
	} catch (e) {
		return string;
	}
};

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var pad = function pad(number) {
      return ("0" + number).slice(-2);
    };
    var int = function int(bool) {
      return bool === true ? 1 : 0;
    };
    function debounce(func, wait, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      var timeout;
      return function () {
        var context = this,
            args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = window.setTimeout(function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    }
    var arrayify = function arrayify(obj) {
      return obj instanceof Array ? obj : [obj];
    };

    var do_nothing = function do_nothing() {
      return undefined;
    };

    var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
      return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    };
    var revFormat = {
      D: do_nothing,
      F: function F(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
      },
      G: function G(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      H: function H(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      J: function J(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      K: function K(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
      },
      M: function M(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
      },
      S: function S(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      U: function U(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1000);
      },
      W: function W(dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      },
      Y: function Y(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
      },
      Z: function Z(_, ISODate) {
        return new Date(ISODate);
      },
      d: function d(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      h: function h(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      i: function i(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
      },
      j: function j(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      l: do_nothing,
      m: function m(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      n: function n(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      s: function s(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      w: do_nothing,
      y: function y(dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
      }
    };
    var tokenRegex = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})"
    };
    var formats = {
      Z: function Z(date) {
        return date.toISOString();
      },
      D: function D(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
      },
      F: function F(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
      },
      G: function G(date, locale, options) {
        return pad(formats.h(date, locale, options));
      },
      H: function H(date) {
        return pad(date.getHours());
      },
      J: function J(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
      },
      K: function K(date, locale) {
        return locale.amPM[int(date.getHours() > 11)];
      },
      M: function M(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
      },
      S: function S(date) {
        return pad(date.getSeconds());
      },
      U: function U(date) {
        return date.getTime() / 1000;
      },
      W: function W(date, _, options) {
        return options.getWeek(date);
      },
      Y: function Y(date) {
        return date.getFullYear();
      },
      d: function d(date) {
        return pad(date.getDate());
      },
      h: function h(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
      },
      i: function i(date) {
        return pad(date.getMinutes());
      },
      j: function j(date) {
        return date.getDate();
      },
      l: function l(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
      },
      m: function m(date) {
        return pad(date.getMonth() + 1);
      },
      n: function n(date) {
        return date.getMonth() + 1;
      },
      s: function s(date) {
        return date.getSeconds();
      },
      w: function w(date) {
        return date.getDay();
      },
      y: function y(date) {
        return String(date.getFullYear()).substring(2);
      }
    };

    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";

        switch (s % 10) {
          case 1:
            return "st";

          case 2:
            return "nd";

          case 3:
            return "rd";

          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year"
    };

    var createDateFormatter = function createDateFormatter(_ref) {
      var _ref$config = _ref.config,
          config = _ref$config === void 0 ? defaults : _ref$config,
          _ref$l10n = _ref.l10n,
          l10n = _ref$l10n === void 0 ? english : _ref$l10n;
      return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;

        if (config.formatDate !== undefined) {
          return config.formatDate(dateObj, frmt, locale);
        }

        return frmt.split("").map(function (c, i, arr) {
          return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
      };
    };
    var createDateParser = function createDateParser(_ref2) {
      var _ref2$config = _ref2.config,
          config = _ref2$config === void 0 ? defaults : _ref2$config,
          _ref2$l10n = _ref2.l10n,
          l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
      return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date) return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
          var format = givenFormat || (config || defaults).dateFormat;
          var datestr = String(date).trim();

          if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
          } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
            parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
            var matched,
                ops = [];

            for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
              var token = format[i];
              var isBackSlash = token === "\\";
              var escaped = format[i - 1] === "\\" || isBackSlash;

              if (tokenRegex[token] && !escaped) {
                regexStr += tokenRegex[token];
                var match = new RegExp(regexStr).exec(date);

                if (match && (matched = true)) {
                  ops[token !== "Y" ? "push" : "unshift"]({
                    fn: revFormat[token],
                    val: match[++matchIndex]
                  });
                }
              } else if (!isBackSlash) regexStr += ".";

              ops.forEach(function (_ref3) {
                var fn = _ref3.fn,
                    val = _ref3.val;
                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
              });
            }

            parsedDate = matched ? parsedDate : undefined;
          }
        }

        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
          config.errorHandler(new Error("Invalid date provided: " + date_orig));
          return undefined;
        }

        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
      };
    };
    function compareDates(date1, date2, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      if (timeless !== false) {
        return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
      }

      return date1.getTime() - date2.getTime();
    }
    var getWeek = function getWeek(givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      var week1 = new Date(date.getFullYear(), 0, 4);
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    };
    var isBetween = function isBetween(ts, ts1, ts2) {
      return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
      DAY: 86400000
    };

    var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
    var defaults = {
      _disable: [],
      _enable: [],
      allowInput: false,
      altFormat: "F j, Y",
      altInput: false,
      altInputClass: "form-control input",
      animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
      ariaDateFormat: "F j, Y",
      clickOpens: true,
      closeOnSelect: true,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: false,
      enable: [],
      enableSeconds: false,
      enableTime: false,
      errorHandler: function errorHandler(err) {
        return typeof console !== "undefined" && console.warn(err);
      },
      getWeek: getWeek,
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: false,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: false,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: undefined,
      prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: false,
      showMonths: 1,
      static: false,
      time_24hr: false,
      weekNumbers: false,
      wrap: false
    };

    function toggleClass(elem, className, bool) {
      if (bool === true) return elem.classList.add(className);
      elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
      var e = window.document.createElement(tag);
      className = className || "";
      content = content || "";
      e.className = className;
      if (content !== undefined) e.textContent = content;
      return e;
    }
    function clearNode(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
    function findParent(node, condition) {
      if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
      return undefined;
    }
    function createNumberInput(inputClassName, opts) {
      var wrapper = createElement("div", "numInputWrapper"),
          numInput = createElement("input", "numInput " + inputClassName),
          arrowUp = createElement("span", "arrowUp"),
          arrowDown = createElement("span", "arrowDown");
      numInput.type = "text";
      numInput.pattern = "\\d*";
      if (opts !== undefined) for (var key in opts) {
        numInput.setAttribute(key, opts[key]);
      }
      wrapper.appendChild(numInput);
      wrapper.appendChild(arrowUp);
      wrapper.appendChild(arrowDown);
      return wrapper;
    }

    if (typeof Object.assign !== "function") {
      Object.assign = function (target) {
        if (!target) {
          throw TypeError("Cannot convert undefined or null to object");
        }

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _loop = function _loop() {
          var source = args[_i];

          if (source) {
            Object.keys(source).forEach(function (key) {
              return target[key] = source[key];
            });
          }
        };

        for (var _i = 0; _i < args.length; _i++) {
          _loop();
        }

        return target;
      };
    }

    var DEBOUNCED_CHANGE_MS = 300;

    function FlatpickrInstance(element, instanceConfig) {
      var self = {
        config: Object.assign({}, flatpickr.defaultConfig),
        l10n: english
      };
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
      self._handlers = [];
      self._bind = bind;
      self._setHoursFromDate = setHoursFromDate;
      self._positionCalendar = positionCalendar;
      self.changeMonth = changeMonth;
      self.changeYear = changeYear;
      self.clear = clear;
      self.close = close;
      self._createElement = createElement;
      self.destroy = destroy;
      self.isEnabled = isEnabled;
      self.jumpToDate = jumpToDate;
      self.open = open;
      self.redraw = redraw;
      self.set = set;
      self.setDate = setDate;
      self.toggle = toggle;

      function setupHelperFunctions() {
        self.utils = {
          getDaysInMonth: function getDaysInMonth(month, yr) {
            if (month === void 0) {
              month = self.currentMonth;
            }

            if (yr === void 0) {
              yr = self.currentYear;
            }

            if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
            return self.l10n.daysInMonth[month];
          }
        };
      }

      function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();

        if (self.selectedDates.length || self.config.noCalendar) {
          if (self.config.enableTime) {
            setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
          }

          updateValue(false);
        }

        setCalendarWidth();
        self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (!self.isMobile && isSafari) {
          positionCalendar();
        }

        triggerEvent("onReady");
      }

      function bindToInstance(fn) {
        return fn.bind(self);
      }

      function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
          window.requestAnimationFrame(function () {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";

            if (self.daysContainer !== undefined) {
              var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
              self.daysContainer.style.width = daysWidth + "px";
              self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
              self.calendarContainer.style.removeProperty("visibility");
              self.calendarContainer.style.removeProperty("display");
            }
          });
        }
      }

      function updateTime(e) {
        if (self.selectedDates.length === 0) return;

        if (e !== undefined && e.type !== "blur") {
          timeWrapper(e);
        }

        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();

        if (self._input.value !== prevValue) {
          self._debouncedChange();
        }
      }

      function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
      }

      function military2ampm(hour) {
        switch (hour % 24) {
          case 0:
          case 12:
            return 12;

          default:
            return hour % 12;
        }
      }

      function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
            minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
            seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

        if (self.amPM !== undefined) {
          hours = ampm2military(hours, self.amPM.textContent);
        }

        var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

        if (limitMaxHours) {
          var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
        }

        if (limitMinHours) {
          var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
          if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
        }

        setHours(hours, minutes, seconds);
      }

      function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }

      function setDefaultHours() {
        var hours = self.config.defaultHour;
        var minutes = self.config.defaultMinute;
        var seconds = self.config.defaultSeconds;

        if (self.config.minDate !== undefined) {
          var min_hr = self.config.minDate.getHours();
          var min_minutes = self.config.minDate.getMinutes();
          hours = Math.max(hours, min_hr);
          if (hours === min_hr) minutes = Math.max(min_minutes, minutes);
          if (hours === min_hr && minutes === min_minutes) seconds = self.config.minDate.getSeconds();
        }

        if (self.config.maxDate !== undefined) {
          var max_hr = self.config.maxDate.getHours();
          var max_minutes = self.config.maxDate.getMinutes();
          hours = Math.min(hours, max_hr);
          if (hours === max_hr) minutes = Math.min(max_minutes, minutes);
          if (hours === max_hr && minutes === max_minutes) seconds = self.config.maxDate.getSeconds();
        }

        setHours(hours, minutes, seconds);
      }

      function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
          self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }

        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
      }

      function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);

        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
          changeYear(year);
        }
      }

      function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach(function (ev) {
          return bind(element, ev, handler, options);
        });
        if (element instanceof Array) return element.forEach(function (el) {
          return bind(el, event, handler, options);
        });
        element.addEventListener(event, handler, options);

        self._handlers.push({
          element: element,
          event: event,
          handler: handler,
          options: options
        });
      }

      function onClick(handler) {
        return function (evt) {
          evt.which === 1 && handler(evt);
        };
      }

      function triggerChange() {
        triggerEvent("onChange");
      }

      function bindEvents() {
        if (self.config.wrap) {
          ["open", "close", "toggle", "clear"].forEach(function (evt) {
            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
              return bind(el, "click", self[evt]);
            });
          });
        }

        if (self.isMobile) {
          setupMobile();
          return;
        }

        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
          if (self.config.mode === "range") onMouseOver(e.target);
        });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static) bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "click", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
        bind(window.document, "focus", documentClick, {
          capture: true
        });

        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "mousedown", onClick(self.open));
        }

        if (self.daysContainer !== undefined) {
          bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
          bind(self.monthNav, ["keyup", "increment"], onYearInput);
          bind(self.daysContainer, "mousedown", onClick(selectDate));
        }

        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
          var selText = function selText(e) {
            return e.target.select();
          };

          bind(self.timeContainer, ["increment"], updateTime);
          bind(self.timeContainer, "blur", updateTime, {
            capture: true
          });
          bind(self.timeContainer, "mousedown", onClick(timeIncrement));
          bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
          if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
            return self.secondElement && self.secondElement.select();
          });

          if (self.amPM !== undefined) {
            bind(self.amPM, "mousedown", onClick(function (e) {
              updateTime(e);
              triggerChange();
            }));
          }
        }
      }

      function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

        try {
          if (jumpTo !== undefined) {
            self.currentYear = jumpTo.getFullYear();
            self.currentMonth = jumpTo.getMonth();
          }
        } catch (e) {
          e.message = "Invalid date supplied: " + jumpTo;
          self.config.errorHandler(e);
        }

        self.redraw();
      }

      function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
      }

      function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
      }

      function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;

        if (!self.config.noCalendar) {
          fragment.appendChild(buildMonthNav());
          self.innerContainer = createElement("div", "flatpickr-innerContainer");

          if (self.config.weekNumbers) {
            var _buildWeeks = buildWeeks(),
                weekWrapper = _buildWeeks.weekWrapper,
                weekNumbers = _buildWeeks.weekNumbers;

            self.innerContainer.appendChild(weekWrapper);
            self.weekNumbers = weekNumbers;
            self.weekWrapper = weekWrapper;
          }

          self.rContainer = createElement("div", "flatpickr-rContainer");
          self.rContainer.appendChild(buildWeekdays());

          if (!self.daysContainer) {
            self.daysContainer = createElement("div", "flatpickr-days");
            self.daysContainer.tabIndex = -1;
          }

          buildDays();
          self.rContainer.appendChild(self.daysContainer);
          self.innerContainer.appendChild(self.rContainer);
          fragment.appendChild(self.innerContainer);
        }

        if (self.config.enableTime) {
          fragment.appendChild(buildTime());
        }

        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

        if (self.config.inline || self.config.static) {
          self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

          if (self.config.inline) {
            if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
          }

          if (self.config.static) {
            var wrapper = createElement("div", "flatpickr-wrapper");
            if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
            wrapper.appendChild(self.element);
            if (self.altInput) wrapper.appendChild(self.altInput);
            wrapper.appendChild(self.calendarContainer);
          }
        }

        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
      }

      function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true),
            dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

        if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
          self.todayDateElem = dayElement;
          dayElement.classList.add("today");
          dayElement.setAttribute("aria-current", "date");
        }

        if (dateIsEnabled) {
          dayElement.tabIndex = -1;

          if (isDateSelected(date)) {
            dayElement.classList.add("selected");
            self.selectedDateElem = dayElement;

            if (self.config.mode === "range") {
              toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
              toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
              if (className === "nextMonthDay") dayElement.classList.add("inRange");
            }
          }
        } else {
          dayElement.classList.add("disabled");
        }

        if (self.config.mode === "range") {
          if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }

        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
          self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }

        triggerEvent("onDayCreate", dayElement);
        return dayElement;
      }

      function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
      }

      function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;

        for (var m = startMonth; m != endMonth; m += delta) {
          var month = self.daysContainer.children[m];
          var startIndex = delta > 0 ? 0 : month.children.length - 1;
          var endIndex = delta > 0 ? month.children.length : -1;

          for (var i = startIndex; i != endIndex; i += delta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
          }
        }

        return undefined;
      }

      function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;

        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
          var month = self.daysContainer.children[m];
          var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
          var numMonthDays = month.children.length;

          for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
          }
        }

        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
      }

      function focusOnDay(current, offset) {
        var dayFocused = isInView(document.activeElement || document.body);
        var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) return self._input.focus();
        if (!dayFocused) return focusOnDayElem(startElem);
        getNextAvailableDay(startElem, offset);
      }

      function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(month),
            days = window.document.createDocumentFragment(),
            isMultiMonth = self.config.showMonths > 1,
            prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
            nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth,
            dayIndex = 0;

        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
          days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }

        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
          days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }

        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
          days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }

        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
      }

      function buildDays() {
        if (self.daysContainer === undefined) {
          return;
        }

        clearNode(self.daysContainer);
        if (self.weekNumbers) clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();

        for (var i = 0; i < self.config.showMonths; i++) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }

        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;

        if (self.config.mode === "range" && self.selectedDates.length === 1) {
          onMouseOver();
        }
      }

      function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement = createElement("span", "cur-month");
        var yearInput = createNumberInput("cur-year", {
          tabindex: "-1"
        });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());

        if (self.config.maxDate) {
          yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
          yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }

        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
          container: container,
          yearElement: yearElement,
          monthElement: monthElement
        };
      }

      function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);

        for (var m = self.config.showMonths; m--;) {
          var month = buildMonth();
          self.yearElements.push(month.yearElement);
          self.monthElements.push(month.monthElement);
          self.monthNav.appendChild(month.container);
        }

        self.monthNav.appendChild(self.nextMonthNav);
      }

      function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
          get: function get() {
            return self.__hidePrevMonthArrow;
          },
          set: function set(bool) {
            if (self.__hidePrevMonthArrow !== bool) {
              toggleClass(self.prevMonthNav, "disabled", bool);
              self.__hidePrevMonthArrow = bool;
            }
          }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
          get: function get() {
            return self.__hideNextMonthArrow;
          },
          set: function set(bool) {
            if (self.__hideNextMonthArrow !== bool) {
              toggleClass(self.nextMonthNav, "disabled", bool);
              self.__hideNextMonthArrow = bool;
            }
          }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
      }

      function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
        self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
        self.minuteElement.setAttribute("data-min", "0");
        self.minuteElement.setAttribute("data-max", "59");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

        if (self.config.enableSeconds) {
          self.timeContainer.classList.add("hasSeconds");
          var secondInput = createNumberInput("flatpickr-second");
          self.secondElement = secondInput.getElementsByTagName("input")[0];
          self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
          self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
          self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
          self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
          self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
          self.timeContainer.appendChild(secondInput);
        }

        if (!self.config.time_24hr) {
          self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
          self.amPM.title = self.l10n.toggleTitle;
          self.amPM.tabIndex = -1;
          self.timeContainer.appendChild(self.amPM);
        }

        return self.timeContainer;
      }

      function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

        for (var i = self.config.showMonths; i--;) {
          var container = createElement("div", "flatpickr-weekdaycontainer");
          self.weekdayContainer.appendChild(container);
        }

        updateWeekdays();
        return self.weekdayContainer;
      }

      function updateWeekdays() {
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.concat();

        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
          weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }

        for (var i = self.config.showMonths; i--;) {
          self.weekdayContainer.children[i].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
        }
      }

      function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
          weekWrapper: weekWrapper,
          weekNumbers: weekNumbers
        };
      }

      function changeMonth(value, is_offset) {
        if (is_offset === void 0) {
          is_offset = true;
        }

        var delta = is_offset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;

        if (self.currentMonth < 0 || self.currentMonth > 11) {
          self.currentYear += self.currentMonth > 11 ? 1 : -1;
          self.currentMonth = (self.currentMonth + 12) % 12;
          triggerEvent("onYearChange");
        }

        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
      }

      function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) {
          triggerChangeEvent = true;
        }

        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;

        if (self.config.enableTime === true) {
          setDefaultHours();
        }

        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
      }

      function close() {
        self.isOpen = false;

        if (!self.isMobile) {
          self.calendarContainer.classList.remove("open");

          self._input.classList.remove("active");
        }

        triggerEvent("onClose");
      }

      function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");

        for (var i = self._handlers.length; i--;) {
          var h = self._handlers[i];
          h.element.removeEventListener(h.event, h.handler, h.options);
        }

        self._handlers = [];

        if (self.mobileInput) {
          if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
          self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
          if (self.config.static && self.calendarContainer.parentNode) {
            var wrapper = self.calendarContainer.parentNode;
            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

            if (wrapper.parentNode) {
              while (wrapper.firstChild) {
                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
              }

              wrapper.parentNode.removeChild(wrapper);
            }
          } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }

        if (self.altInput) {
          self.input.type = "text";
          if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
          delete self.altInput;
        }

        if (self.input) {
          self.input.type = self.input._type;
          self.input.classList.remove("flatpickr-input");
          self.input.removeAttribute("readonly");
          self.input.value = "";
        }

        ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
          try {
            delete self[k];
          } catch (_) {}
        });
      }

      function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
        return self.calendarContainer.contains(elem);
      }

      function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
          var isCalendarElement = isCalendarElem(e.target);
          var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
          var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
          var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
            return elem.contains(e.target);
          });

          if (lostFocus && isIgnored) {
            self.close();

            if (self.config.mode === "range" && self.selectedDates.length === 1) {
              self.clear(false);
              self.redraw();
            }
          }
        }
      }

      function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        var newYearNum = newYear,
            isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;

        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
          self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
          self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }

        if (isNewYear) {
          self.redraw();
          triggerEvent("onYearChange");
        }
      }

      function isEnabled(date, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }

        var dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        var bool = self.config.enable.length > 0,
            array = bool ? self.config.enable : self.config.disable;

        for (var i = 0, d; i < array.length; i++) {
          d = array[i];
          if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
            var parsed = self.parseDate(d, undefined, true);
            return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
          } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }

        return !bool;
      }

      function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
        return false;
      }

      function onKeyDown(e) {
        var isInput = e.target === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;

        if (e.keyCode === 13 && isInput) {
          if (allowInput) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            return e.target.blur();
          } else self.open();
        } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
          var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

          switch (e.keyCode) {
            case 13:
              if (isTimeObj) updateTime();else selectDate(e);
              break;

            case 27:
              e.preventDefault();
              focusAndClose();
              break;

            case 8:
            case 46:
              if (isInput && !self.config.allowInput) {
                e.preventDefault();
                self.clear();
              }

              break;

            case 37:
            case 39:
              if (!isTimeObj) {
                e.preventDefault();

                if (self.daysContainer !== undefined && (allowInput === false || isInView(document.activeElement))) {
                  var _delta = e.keyCode === 39 ? 1 : -1;

                  if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                    changeMonth(_delta);
                    focusOnDay(getFirstAvailableDay(1), 0);
                  }
                }
              } else if (self.hourElement) self.hourElement.focus();

              break;

            case 38:
            case 40:
              e.preventDefault();
              var delta = e.keyCode === 40 ? 1 : -1;

              if (self.daysContainer && e.target.$i !== undefined) {
                if (e.ctrlKey) {
                  changeYear(self.currentYear - delta);
                  focusOnDay(getFirstAvailableDay(1), 0);
                } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
              } else if (self.config.enableTime) {
                if (!isTimeObj && self.hourElement) self.hourElement.focus();
                updateTime(e);

                self._debouncedChange();
              }

              break;

            case 9:
              if (!isTimeObj) {
                self.element.focus();
                break;
              }

              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];

                if (target !== undefined) {
                  e.preventDefault();
                  target.focus();
                } else {
                  self.element.focus();
                }
              }

              break;

            default:
              break;
          }
        }

        if (self.amPM !== undefined && e.target === self.amPM) {
          switch (e.key) {
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[0];
              setHoursFromInputs();
              updateValue();
              break;

            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[1];
              setHoursFromInputs();
              updateValue();
              break;
          }
        }

        triggerEvent("onKeyDown", e);
      }

      function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled"))) return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
            initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
            rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
            rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()),
            lastDate = self.daysContainer.lastChild.lastChild.dateObj.getTime();
        var containsDisabled = false;
        var minRange = 0,
            maxRange = 0;

        for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
          if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
          }
        }

        for (var m = 0; m < self.config.showMonths; m++) {
          var month = self.daysContainer.children[m];
          var prevMonth = self.daysContainer.children[m - 1];

          var _loop = function _loop(i, l) {
            var dayElem = month.children[i],
                date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

            if (outOfRange) {
              dayElem.classList.add("notAllowed");
              ["inRange", "startRange", "endRange"].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              return "continue";
            } else if (containsDisabled && !outOfRange) return "continue";

            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
              dayElem.classList.remove(c);
            });

            if (elem !== undefined) {
              elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

              if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
              }
            }
          };

          for (var i = 0, l = month.children.length; i < l; i++) {
            var _ret = _loop(i, l);

            if (_ret === "continue") continue;
          }
        }
      }

      function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
      }

      function open(e, positionElement) {
        if (positionElement === void 0) {
          positionElement = self._positionElement;
        }

        if (self.isMobile === true) {
          if (e) {
            e.preventDefault();
            e.target && e.target.blur();
          }

          if (self.mobileInput !== undefined) {
            self.mobileInput.focus();
            self.mobileInput.click();
          }

          triggerEvent("onOpen");
          return;
        }

        if (self._input.disabled || self.config.inline) return;
        var wasOpen = self.isOpen;
        self.isOpen = true;

        if (!wasOpen) {
          self.calendarContainer.classList.add("open");

          self._input.classList.add("active");

          triggerEvent("onOpen");
          positionCalendar(positionElement);
        }

        if (self.config.enableTime === true && self.config.noCalendar === true) {
          if (self.selectedDates.length === 0) {
            self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), false);
            setDefaultHours();
            updateValue();
          }

          if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
            setTimeout(function () {
              return self.hourElement.select();
            }, 50);
          }
        }
      }

      function minMaxDateSetter(type) {
        return function (date) {
          var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
          var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

          if (dateObj !== undefined) {
            self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
          }

          if (self.selectedDates) {
            self.selectedDates = self.selectedDates.filter(function (d) {
              return isEnabled(d);
            });
            if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
            updateValue();
          }

          if (self.daysContainer) {
            redraw();
            if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
            self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
          }
        };
      }

      function parseConfig() {
        var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
        var userConfig = Object.assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
          get: function get() {
            return self.config._enable;
          },
          set: function set(dates) {
            self.config._enable = parseDateRules(dates);
          }
        });
        Object.defineProperty(self.config, "disable", {
          get: function get() {
            return self.config._disable;
          },
          set: function set(dates) {
            self.config._disable = parseDateRules(dates);
          }
        });
        var timeMode = userConfig.mode === "time";

        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
          formats$$1.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }

        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
          formats$$1.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }

        Object.defineProperty(self.config, "minDate", {
          get: function get() {
            return self.config._minDate;
          },
          set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
          get: function get() {
            return self.config._maxDate;
          },
          set: minMaxDateSetter("max")
        });

        var minMaxTimeSetter = function minMaxTimeSetter(type) {
          return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
          };
        };

        Object.defineProperty(self.config, "minTime", {
          get: function get() {
            return self.config._minTime;
          },
          set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
          get: function get() {
            return self.config._maxTime;
          },
          set: minMaxTimeSetter("max")
        });

        if (userConfig.mode === "time") {
          self.config.noCalendar = true;
          self.config.enableTime = true;
        }

        Object.assign(self.config, formats$$1, userConfig);

        for (var i = 0; i < boolOpts.length; i++) {
          self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        }

        HOOKS.filter(function (hook) {
          return self.config[hook] !== undefined;
        }).forEach(function (hook) {
          self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        for (var _i = 0; _i < self.config.plugins.length; _i++) {
          var pluginConf = self.config.plugins[_i](self) || {};

          for (var key in pluginConf) {
            if (HOOKS.indexOf(key) > -1) {
              self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
            } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
          }
        }

        triggerEvent("onParseConfig");
      }

      function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = Object.assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({
          config: self.config,
          l10n: self.l10n
        });
      }

      function positionCalendar(customPositionElement) {
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
          return acc + child.offsetHeight;
        }, 0),
            calendarWidth = self.calendarContainer.offsetWidth,
            configPos = self.config.position.split(" "),
            configPosVertical = configPos[0],
            configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
            inputBounds = positionElement.getBoundingClientRect(),
            distanceFromBottom = window.innerHeight - inputBounds.bottom,
            showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = top + "px";

        if (!rightMost) {
          self.calendarContainer.style.left = left + "px";
          self.calendarContainer.style.right = "auto";
        } else {
          self.calendarContainer.style.left = "auto";
          self.calendarContainer.style.right = right + "px";
        }
      }

      function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        updateNavigationCurrentMonth();
        buildDays();
      }

      function focusAndClose() {
        self._input.focus();

        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
          setTimeout(self.close, 0);
        } else {
          self.close();
        }
      }

      function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();

        var isSelectable = function isSelectable(day) {
          return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
        };

        var t = findParent(e.target, isSelectable);
        if (t === undefined) return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
          var selectedIndex = isDateSelected(selectedDate);
          if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
          if (self.selectedDates.length === 2) self.clear(false);
          self.selectedDates.push(selectedDate);
          if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
          });
        }
        setHoursFromInputs();

        if (shouldChangeMonth) {
          var isNewYear = self.currentYear !== selectedDate.getFullYear();
          self.currentYear = selectedDate.getFullYear();
          self.currentMonth = selectedDate.getMonth();
          if (isNewYear) triggerEvent("onYearChange");
          triggerEvent("onMonthChange");
        }

        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (self.config.enableTime) setTimeout(function () {
          return self.showTimeInput = true;
        }, 50);
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else self.selectedDateElem && self.selectedDateElem.focus();
        if (self.hourElement !== undefined) setTimeout(function () {
          return self.hourElement !== undefined && self.hourElement.select();
        }, 451);

        if (self.config.closeOnSelect) {
          var single = self.config.mode === "single" && !self.config.enableTime;
          var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

          if (single || range) {
            focusAndClose();
          }
        }

        triggerChange();
      }

      var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
      };

      function set(option, value) {
        if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
          self.config[option] = value;
          if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
            return x();
          });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
        }
        self.redraw();
        jumpToDate();
        updateValue(false);
      }

      function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array) dates = inputDate.map(function (d) {
          return self.parseDate(d, format);
        });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
          switch (self.config.mode) {
            case "single":
            case "time":
              dates = [self.parseDate(inputDate, format)];
              break;

            case "multiple":
              dates = inputDate.split(self.config.conjunction).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            case "range":
              dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            default:
              break;
          }
        } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = dates.filter(function (d) {
          return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }

      function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) {
          triggerChange = false;
        }

        if (format === void 0) {
          format = self.config.dateFormat;
        }

        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
      }

      function parseDateRules(arr) {
        return arr.slice().map(function (rule) {
          if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
            return self.parseDate(rule, undefined, true);
          } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
            from: self.parseDate(rule.from, undefined),
            to: self.parseDate(rule.to, undefined)
          };

          return rule;
        }).filter(function (x) {
          return x;
        });
      }

      function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
          get: function get() {
            return self._showTimeInput;
          },
          set: function set(bool) {
            self._showTimeInput = bool;
            if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
            self.isOpen && positionCalendar();
          }
        });
      }

      function setupInputs() {
        self.input = self.config.wrap ? element.querySelector("[data-input]") : element;

        if (!self.input) {
          self.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }

        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;

        if (self.config.altInput) {
          self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
          self._input = self.altInput;
          self.altInput.placeholder = self.input.placeholder;
          self.altInput.disabled = self.input.disabled;
          self.altInput.required = self.input.required;
          self.altInput.tabIndex = self.input.tabIndex;
          self.altInput.type = "text";
          self.input.setAttribute("type", "hidden");
          if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }

        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
      }

      function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

        if (self.selectedDates.length > 0) {
          self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }

        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";

        try {
          if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {}

        bind(self.mobileInput, "change", function (e) {
          self.setDate(e.target.value, false, self.mobileFormatStr);
          triggerEvent("onChange");
          triggerEvent("onClose");
        });
      }

      function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
      }

      function triggerEvent(event, data) {
        if (self.config === undefined) return;
        var hooks = self.config[event];

        if (hooks !== undefined && hooks.length > 0) {
          for (var i = 0; hooks[i] && i < hooks.length; i++) {
            hooks[i](self.selectedDates, self.input.value, self, data);
          }
        }

        if (event === "onChange") {
          self.input.dispatchEvent(createEvent("change"));
          self.input.dispatchEvent(createEvent("input"));
        }
      }

      function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
      }

      function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
          if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
        }

        return false;
      }

      function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
      }

      function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach(function (yearElement, i) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
          yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
      }

      function getDateStr(format) {
        return self.selectedDates.map(function (dObj) {
          return self.formatDate(dObj, format);
        }).filter(function (d, i, arr) {
          return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
      }

      function updateValue(triggerChange) {
        if (triggerChange === void 0) {
          triggerChange = true;
        }

        if (self.selectedDates.length === 0) return self.clear(triggerChange);

        if (self.mobileInput !== undefined && self.mobileFormatStr) {
          self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        }

        self.input.value = getDateStr(self.config.dateFormat);

        if (self.altInput !== undefined) {
          self.altInput.value = getDateStr(self.config.altFormat);
        }

        if (triggerChange !== false) triggerEvent("onValueUpdate");
      }

      function onMonthNavClick(e) {
        e.preventDefault();
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);

        if (isPrevMonth || isNextMonth) {
          changeMonth(isPrevMonth ? -1 : 1);
        } else if (self.yearElements.indexOf(e.target) >= 0) {
          e.target.select();
        } else if (e.target.classList.contains("arrowUp")) {
          self.changeYear(self.currentYear + 1);
        } else if (e.target.classList.contains("arrowDown")) {
          self.changeYear(self.currentYear - 1);
        }
      }

      function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown",
            input = e.target;

        if (self.amPM !== undefined && e.target === self.amPM) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        var min = parseFloat(input.getAttribute("data-min")),
            max = parseFloat(input.getAttribute("data-max")),
            step = parseFloat(input.getAttribute("data-step")),
            curValue = parseInt(input.value, 10),
            delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;

        if (typeof input.value !== "undefined" && input.value.length === 2) {
          var isHourElem = input === self.hourElement,
              isMinuteElem = input === self.minuteElement;

          if (newValue < min) {
            newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
            if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
          } else if (newValue > max) {
            newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
            if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
          }

          if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
            self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
          }

          input.value = pad(newValue);
        }
      }

      init();
      return self;
    }

    function _flatpickr(nodeList, config) {
      var nodes = Array.prototype.slice.call(nodeList);
      var instances = [];

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        try {
          if (node.getAttribute("data-fp-omit") !== null) continue;

          if (node._flatpickr !== undefined) {
            node._flatpickr.destroy();

            node._flatpickr = undefined;
          }

          node._flatpickr = FlatpickrInstance(node, config || {});
          instances.push(node._flatpickr);
        } catch (e) {
          console.error(e);
        }
      }

      return instances.length === 1 ? instances[0] : instances;
    }

    if (typeof HTMLElement !== "undefined") {
      HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
      };

      HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
      };
    }

    var flatpickr = function flatpickr(selector, config) {
      if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
      return _flatpickr([selector], config);
    };

    flatpickr.defaultConfig = defaults;
    flatpickr.l10ns = {
      en: Object.assign({}, english),
      default: Object.assign({}, english)
    };

    flatpickr.localize = function (l10n) {
      flatpickr.l10ns.default = Object.assign({}, flatpickr.l10ns.default, l10n);
    };

    flatpickr.setDefaults = function (config) {
      flatpickr.defaultConfig = Object.assign({}, flatpickr.defaultConfig, config);
    };

    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;

    if (typeof jQuery !== "undefined") {
      jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
      };
    }

    Date.prototype.fp_incr = function (days) {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };

    if (typeof window !== "undefined") {
      window.flatpickr = flatpickr;
    }

    return flatpickr;

})));


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-flatpickr/build/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-flatpickr/build/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _flatpickr = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");

var _flatpickr2 = _interopRequireDefault(_flatpickr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hooks = ['onChange', 'onOpen', 'onClose', 'onMonthChange', 'onYearChange', 'onReady', 'onValueUpdate', 'onDayCreate'];

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    _classCallCheck(this, DateTimePicker);

    return _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).apply(this, arguments));
  }

  _createClass(DateTimePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _this2 = this;

      var options = props.options;

      var prevOptions = this.props.options;

      // Add prop hooks to options
      hooks.forEach(function (hook) {
        if (props.hasOwnProperty(hook)) {
          options[hook] = props[hook];
        }
        // Add prev ones too so we can compare against them later
        if (_this2.props.hasOwnProperty(hook)) {
          prevOptions[hook] = _this2.props[hook];
        }
      });

      var optionsKeys = Object.getOwnPropertyNames(options);

      for (var index = optionsKeys.length - 1; index >= 0; index--) {
        var key = optionsKeys[index];
        var value = options[key];

        if (value !== prevOptions[key]) {
          // Hook handlers must be set as an array
          if (hooks.indexOf(key) !== -1 && !Array.isArray(value)) {
            value = [value];
          }

          this.flatpickr.set(key, value);
        }
      }

      if (props.hasOwnProperty('value') && props.value !== this.props.value) {
        this.flatpickr.setDate(props.value, false);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var options = _extends({
        onClose: function onClose() {
          _this3.node.blur && _this3.node.blur();
        }
      }, this.props.options);

      // Add prop hooks to options
      hooks.forEach(function (hook) {
        if (_this3.props[hook]) {
          options[hook] = _this3.props[hook];
        }
      });

      this.flatpickr = new _flatpickr2.default(this.node, options);

      if (this.props.hasOwnProperty('value')) {
        this.flatpickr.setDate(this.props.value, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.flatpickr.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          options = _props.options,
          defaultValue = _props.defaultValue,
          value = _props.value,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['options', 'defaultValue', 'value', 'children']);

      // Don't pass hooks to dom node


      hooks.forEach(function (hook) {
        delete props[hook];
      });

      return options.wrap ? _react2.default.createElement(
        'div',
        _extends({}, props, { ref: function ref(node) {
            _this4.node = node;
          } }),
        children
      ) : _react2.default.createElement('input', _extends({}, props, { defaultValue: defaultValue,
        ref: function ref(node) {
          _this4.node = node;
        } }));
    }
  }]);

  return DateTimePicker;
}(_react.Component);

DateTimePicker.propTypes = {
  defaultValue: _propTypes2.default.string,
  options: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onMonthChange: _propTypes2.default.func,
  onYearChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onValueUpdate: _propTypes2.default.func,
  onDayCreate: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.number]),
  children: _propTypes2.default.node
};
DateTimePicker.defaultProps = {
  options: {}
};
exports.default = DateTimePicker;

/***/ }),

/***/ "./node_modules/react-responsive-embed/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-responsive-embed/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var div = React.createElement.bind(React, 'div');
var iframe = React.createElement.bind(React, 'iframe');

var divStyle = {
  position: 'relative',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%'
};

var iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'

  /*
   *  Turn `16:9` into `9 / 16` into `56.25%`
   *  Turn `4:3` into `3 / 4` into `75%`
   */
};var ratioToPercent = function ratioToPercent(ratio) {
  var _ratio$split$map = ratio.split(':').map(function (num) {
    return Number(num);
  }),
      _ratio$split$map2 = _slicedToArray(_ratio$split$map, 2),
      w = _ratio$split$map2[0],
      h = _ratio$split$map2[1];

  return h / w * 100 + '%';
};

/*
 *  Usage: <ResponsiveEmbed src='ace youtube video' ratio='4:3' />
 */
var ResponsiveEmbed = function ResponsiveEmbed(props) {
  var paddingBottom = ratioToPercent(props.ratio);
  var style = Object.assign({}, divStyle, { paddingBottom: paddingBottom });
  var iframeProps = Object.assign({ frameBorder: 0 }, props, { style: iframeStyle });
  delete iframeProps.ratio;
  return div({ style: style }, iframe(iframeProps));
};

ResponsiveEmbed.defaultProps = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  ratio: '16:9'
};

ResponsiveEmbed.propTypes = {
  src: PropTypes.string,
  ratio: function ratio(props, propName, componentName) {
    if (!/\d+:\d+/.test(props[propName])) {
      return new Error('Invalid ratio supplied to ResponsiveEmbed. Expected a string like "16:9" or any 2 numbers seperated by a colon');
    }
  }
};

module.exports = ResponsiveEmbed;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3JfYmxvY2svYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3JfYmxvY2svZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3JfYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3BhZ2VfYmxvY2svYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9wYWdlX2Jsb2NrL2NvbXBvbmVudHMvRXZlbnRPdXRwdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9wYWdlX2Jsb2NrL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvcGFnZV9ibG9jay9jb21wb25lbnRzL0V2ZW50U2VsZWN0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvcGFnZV9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3BhZ2VfYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3BhZ2VfYmxvY2svdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsYXRwaWNrci9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1lbWJlZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJ1dGlscyIsIndwIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIl9fIiwiaTE4biIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJhcGlSZXF1ZXN0IiwiQnV0dG9uIiwiY29tcG9uZW50cyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJhdHRyaWJ1dGVzIiwidGR5X3NlX3N0YXJ0X2RhdGUiLCJ0eXBlIiwic291cmNlIiwibWV0YSIsInRkeV9zZV9lbmRfZGF0ZSIsInRkeV9zZV9sb2NhdGlvbiIsInRkeV9zZV9tYWluX3RpdGxlIiwidGR5X3NlX21haW5fZGVzY3JpcHRpb24iLCJ0ZHlfc2Vfc3ViX3RpdGxlIiwidGR5X3NlX3N1Yl9kZXNjcmlwdGlvbiIsInRkeV9zZV90aGlyZF9kZXNjcmlwdGlvbiIsInRkeV9zZV9waG90b191cmwiLCJ0ZHlfc2VfcGhvdG9fYWx0IiwidGR5X3NlX3Bob3RvX2lkIiwidGR5X3NlX3lvdXR1YmVfdXJsIiwiZWRpdCIsInByb3BzIiwic2V0QXR0cmlidXRlcyIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50Iiwib25NZWRpYVNlbGVjdCIsIm1lZGlhIiwiYWx0IiwidXJsIiwiaGFuZGxlTWFpbkRlc2NyaXB0aW9uQ2hhbmdlIiwiY29udGVudCIsImhhbmRsZVN1YkRlc2NyaXB0aW9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwib3BlbiIsInNhdmUiLCJwYXN0T3JVcGNvbWluZyIsImhvd01hbnlFdmVudHMiLCJ1cGRhdGVBdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2piZWN0IiwiRXZlbnRPdXRwdXQiLCJwaG90b1NyYyIsImFwaSIsIkNvbXBvbmVudCIsImVsZW1lbnQiLCJFdmVudFByZXZpZXciLCJhcmd1bWVudHMiLCJzdGF0ZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJkYXRlIiwicGhvdG8iLCJnZXRFdmVudCIsImJpbmQiLCJzZXRTdGF0dXMiLCJhcmdzIiwiZ2V0RXZlbnRXaXRoQXJncyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiRXZlbnRTZWxlY3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiY2FsbCIsImF4aW9zIiwiZ2V0IiwidHJ5UGFyc2VKc29uIiwic3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBLHNGOzs7Ozs7Ozs7Ozs7OztBQ1NBOztBQUNBOztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsSzs7Ozs7O0FBQ1o7O2lCQUUyQ0MsR0FBR0MsTTtJQUF2Q0MsVyxjQUFBQSxXO0lBQWFDLFMsY0FBQUEsUztJQUFXQyxRLGNBQUFBLFE7O0FBUi9CO0FBQ0E7QUFDQTs7O0FBYkE7Ozs7Ozs7QUFPQTs7SUFhT0MsRSxHQUFNTCxHQUFHTSxJ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O0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVB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bEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0EsYUFDQTtBQUNBLENBQUMscUJBQXFCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FB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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdKQUFnSjtBQUNoSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsZUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCxlQUFlO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0Msb0VBQW9FO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRUEsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBOztBQUVBLDBDQUEwQyxxRkFBcUY7QUFDL0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1R0FBdUc7O0FBRXZHLDRDQUE0QyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkNBQTJDLEtBQUs7QUFDaEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxpSEFBaUg7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ3JLQTs7QUFFQSxrQ0FBa0MsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUVycEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsYUFBYSwrQkFBK0I7QUFDMUUsbUNBQW1DLGlCQUFpQixVQUFVLHFCQUFxQjtBQUNuRjtBQUNBLGNBQWMsZUFBZTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQy9EQSx1QiIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL3BhZ2VfYmxvY2svYmxvY2snO1xuaW1wb3J0ICcuL2VkaXRvcl9ibG9jay9ibG9jayc7IiwiXG5cbi8qKlxuICogQkxPQ0s6IG1haW5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vLyBpbXBvcnQgeyBFdmVudFNlbGVjdCB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudFNlbGVjdCc7XG4vLyBpbXBvcnQgeyBFdmVudFByZXZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3Jztcbi8vIGltcG9ydCAnZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLm1pbi5jc3MnXG5pbXBvcnQgRmxhdHBpY2tyIGZyb20gJ3JlYWN0LWZsYXRwaWNrcic7XG5pbXBvcnQgUmVzcG9uc2l2ZUVtYmVkIGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtZW1iZWQnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi8uLi91dGlscydcbi8vIGltcG9ydCB7IFZMUmljaFRleHQgfSBmcm9tICcuL2NvbXBvbmVudHMvVkxSaWNoVGV4dCc7XG5cbmNvbnN0IHtNZWRpYVVwbG9hZCwgUGxhaW5UZXh0LCBSaWNoVGV4dH0gPSB3cC5lZGl0b3I7XG5jb25zdCB7X199ID0gd3AuaTE4bjsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5jb25zdCB7cmVnaXN0ZXJCbG9ja1R5cGUsIEluc3BlY3RvckNvbnRyb2xzfSA9IHdwLmJsb2NrczsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcbmNvbnN0IHthcGlSZXF1ZXN0fSA9IHdwO1xuY29uc3Qge0J1dHRvbiwgLypUZXh0Q29udHJvbCwgVGV4dGFyZWFDb250cm9sKi8gfSA9IHdwLmNvbXBvbmVudHM7XG5cblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3RkeS1zZS9lZGl0b3InLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1RyZWRueSBFdmVudCBFZGl0b3InKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdtZW51JywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCdUcmVkbnkgRXZlbnQgRWRpdG9yJyksXG5cdFx0X18oJ0NhbGVuZGFyJyksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0ZHlfc2Vfc3RhcnRfZGF0ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdG1ldGE6ICd0ZHlfc2Vfc3RhcnRfZGF0ZSdcblx0XHR9LFxuXHRcdHRkeV9zZV9lbmRfZGF0ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdG1ldGE6ICd0ZHlfc2VfZW5kX2RhdGUnXG5cdFx0fSxcblx0XHR0ZHlfc2VfbG9jYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAndGR5X3NlX2xvY2F0aW9uJ1xuXHRcdH0sXG5cdFx0dGR5X3NlX21haW5fdGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAndGR5X3NlX21haW5fdGl0bGUnXG5cdFx0fSxcblx0XHR0ZHlfc2VfbWFpbl9kZXNjcmlwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdG1ldGE6ICd0ZHlfc2VfbWFpbl9kZXNjcmlwdGlvbidcblx0XHR9LFxuXHRcdHRkeV9zZV9zdWJfdGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAndGR5X3NlX3N1Yl90aXRsZSdcblx0XHR9LFxuXHRcdHRkeV9zZV9zdWJfZGVzY3JpcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAndGR5X3NlX3N1Yl9kZXNjcmlwdGlvbidcblx0XHR9LFxuXHRcdHRkeV9zZV90aGlyZF9kZXNjcmlwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdG1ldGE6ICd0ZHlfc2VfdGhpcmRfZGVzY3JpcHRpb24nXG5cdFx0fSxcblx0XHR0ZHlfc2VfcGhvdG9fdXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ21ldGEnLFxuXHRcdFx0bWV0YTogJ3RkeV9zZV9waG90b191cmwnXG5cdFx0fSxcblx0XHR0ZHlfc2VfcGhvdG9fYWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ21ldGEnLFxuXHRcdFx0bWV0YTogJ3RkeV9zZV9waG90b19hbHQnXG5cdFx0fSxcblx0XHR0ZHlfc2VfcGhvdG9faWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAndGR5X3NlX3Bob3RvX2lkJ1xuXHRcdH0sXG5cdFx0dGR5X3NlX3lvdXR1YmVfdXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ21ldGEnLFxuXHRcdFx0bWV0YTogJ3RkeV9zZV95b3V0dWJlX3VybCdcblx0XHR9LFxuXG5cblx0fSxcblxuXHQvKipcblx0KiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuXHQqXG5cdCogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0KlxuXHQqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0Ki9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1tYWluJz48L3A+LlxuXG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHt0ZHlfc2Vfc3RhcnRfZGF0ZSwgdGR5X3NlX2VuZF9kYXRlLCB0ZHlfc2VfbG9jYXRpb24sIHRkeV9zZV9tYWluX3RpdGxlLCB0ZHlfc2VfbWFpbl9kZXNjcmlwdGlvbiwgdGR5X3NlX3N1Yl90aXRsZSwgdGR5X3NlX3N1Yl9kZXNjcmlwdGlvbiwgdGR5X3NlX3RoaXJkX2Rlc2NyaXB0aW9uLCB0ZHlfc2VfcGhvdG9fdXJsLCB0ZHlfc2VfcGhvdG9fYWx0LCB0ZHlfc2VfcGhvdG9faWQsIHRkeV9zZV95b3V0dWJlX3VybH0sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblxuXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZiAodGR5X3NlX3Bob3RvX3VybCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgc3JjPXsgdGR5X3NlX3Bob3RvX3VybCB9IG9uQ2xpY2s9eyBvcGVuRXZlbnQgfSBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgb3BlbkV2ZW50IH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiPlxuICAgICAgICAgUGljayBhbiBpbWFnZVxuICAgICAgIDwvQnV0dG9uPlxuICAgICA8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBvbk1lZGlhU2VsZWN0ID0gKG1lZGlhKSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dGR5X3NlX3Bob3RvX2FsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHR0ZHlfc2VfcGhvdG9fdXJsOiBtZWRpYS51cmxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vTm90IGRyeSBidXQgY2FuJ3Qgc2VlbSB0byBmaW5kIGEgc29sdXRpb24sIG5vIHJldHJpZXZhYmxlIGV2ZW50cyBmaXJlZD9cblx0XHRjb25zdCBoYW5kbGVNYWluRGVzY3JpcHRpb25DaGFuZ2UgPSAoY29udGVudCkgPT4ge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdC8vIHRkeV9zZV9tYWluX2Rlc2NyaXB0aW9uOiBKU09OLnN0cmluZ2lmeShjb250ZW50KVxuXHRcdFx0XHR0ZHlfc2VfbWFpbl9kZXNjcmlwdGlvbjogY29udGVudFswXVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRjb25zdCBoYW5kbGVTdWJEZXNjcmlwdGlvbkNoYW5nZSA9IChjb250ZW50KSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0Ly8gdGR5X3NlX21haW5fZGVzY3JpcHRpb246IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpXG5cdFx0XHRcdHRkeV9zZV9zdWJfZGVzY3JpcHRpb246IGNvbnRlbnRbMF1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0Ly8gXG5cdFx0cmV0dXJuIChcblx0XHRcdC8vIGRhdGVGb3JtYXQ6ICdERCwgZCBNTSwgeXknLFxuXHRcdFx0Ly8gYWx0Rm9ybWF0OiBcInl5bW1kZFwiLFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyBwcm9wcy5jbGFzc05hbWUgfT5cbiAgICAgPGgyPiBFdmVudCBEZXRhaWxzIDwvaDI+XG4gICAgIDxNZWRpYVVwbG9hZCBvblNlbGVjdD17IG9uTWVkaWFTZWxlY3QgfSB0eXBlPVwiaW1hZ2VcIiB2YWx1ZT17IHRkeV9zZV9waG90b19pZCB9IHJlbmRlcj17ICh7b3Blbn0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH0gLz5cbiAgICAgPFBsYWluVGV4dCBvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRkeV9zZV9tYWluX3RpdGxlOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IHZhbHVlPXsgdGR5X3NlX21haW5fdGl0bGUgfSBwbGFjZWhvbGRlcj1cIlByaW1hcnkgdGl0bGUgZm9yIHRoZSBldmVudC4uLlwiIGNsYXNzTmFtZT1cImhlYWRpbmdcIiAvPlxuICAgICA8UmljaFRleHQgbGFiZWw9XCJUZXh0XCIgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiIHZhbHVlPXsgdGR5X3NlX21haW5fZGVzY3JpcHRpb24gfSBwbGFjZWhvbGRlcj1cIlByaW1hcnkgZGVzY3JpcHRpb24gYWJvdXQgdGhlIGV2ZW50Li4uXCIgb25DaGFuZ2U9eyBoYW5kbGVNYWluRGVzY3JpcHRpb25DaGFuZ2UgfSAvPlxuICAgICA8UmljaFRleHQgbGFiZWw9XCJUZXh0XCIgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiIHZhbHVlPXsgdGR5X3NlX3N1Yl9kZXNjcmlwdGlvbiB9IHBsYWNlaG9sZGVyPVwiU2VuY29uZGFyeSBkZXNjcmlwdGlvbiBhYm91dCB0aGUgZXZlbnQuLi5cIiBvbkNoYW5nZT17IGhhbmRsZVN1YkRlc2NyaXB0aW9uQ2hhbmdlIH0gLz5cbiAgICAgPFBsYWluVGV4dCBvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRkeV9zZV9zdWJfdGl0bGU6IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gdmFsdWU9eyB0ZHlfc2Vfc3ViX3RpdGxlIH0gcGxhY2Vob2xkZXI9XCJTZW5jb25kYXJ5IHRpdGxlIGZvciB0aGUgZXZlbnQuLi5cIiAvPlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9LFxuXG5cblxuXHQvLyA8UmVzcG9uc2l2ZUVtYmVkIHNyYz0naHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMnlxejl6Z29DLVUnIHJhdGlvPScxNjo5JyAvPlxuXG5cblxuXHQvKipcblx0KiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cblx0KlxuXHQqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQqXG5cdCogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7cGFzdE9yVXBjb21pbmcsIGhvd01hbnlFdmVudHN9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXHRcdHJldHVybiBudWxsO1xuXHR9LFxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLyoqXG4gKiBCTE9DSzogbWFpblxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7IEV2ZW50U2VsZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0V2ZW50U2VsZWN0JztcbmltcG9ydCB7IEV2ZW50UHJldmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudFByZXZpZXcnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5jb25zdCB7cmVnaXN0ZXJCbG9ja1R5cGUsIEluc3BlY3RvckNvbnRyb2xzfSA9IHdwLmJsb2NrczsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcbmNvbnN0IHthcGlSZXF1ZXN0fSA9IHdwO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgndGR5LXNlL3BhZ2UnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1RyZWRueSBFdmVudCcpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2NhbGVuZGFyLWFsdCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtcblx0XHRfXygnVHJlZG55IEV2ZW50JyksXG5cdFx0X18oJ0NhbGVuZGFyJyksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHQvLyBwYXN0IDwsICB1cGNvbWluZyA+PVxuXHRcdHBhc3RPclVwY29taW5nOiB7XG5cdFx0fSxcblx0XHRob3dNYW55RXZlbnRzOiB7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1tYWluJz48L3A+LlxuXG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHtwYXN0T3JVcGNvbWluZywgaG93TWFueUV2ZW50c30sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRsZXQgdXBkYXRlQXR0cmlidXRlcyA9IChhdHRyaWJ1dGVPamJlY3QpID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlT2piZWN0KTtcblx0XHR9XG5cblx0XHQvLyBcblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHByb3BzLmNsYXNzTmFtZSB9PlxuICAgICA8aDI+IEV2ZW50cyA8L2gyPlxuICAgICA8RXZlbnRTZWxlY3QgdXBkYXRlQXR0cmlidXRlcz17IHVwZGF0ZUF0dHJpYnV0ZXMgfSBwYXN0T3JVcGNvbWluZz17IHBhc3RPclVwY29taW5nIH0gaG93TWFueUV2ZW50cz17IGhvd01hbnlFdmVudHMgfSAvPlxuICAgICB7IChwYXN0T3JVcGNvbWluZyAmJiBob3dNYW55RXZlbnRzKSA/IChcbiAgICAgICA8RXZlbnRQcmV2aWV3IHBhc3RPclVwY29taW5nPXsgcGFzdE9yVXBjb21pbmcgfSBob3dNYW55RXZlbnRzPXsgaG93TWFueUV2ZW50cyB9IC8+XG4gICAgICAgKSA6IChcbiAgICAgICA8ZGl2PiBQcmV2aWV3IHRvIGJlIHNob3duIG9uY2UgZXZlbnQgb3V0cHV0IG9wdGlvbnMgaGF2ZSBiZWVuIHNlbGVjdGVkIDwvZGl2PlxuICAgICAgICkgfVxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9LFxuXG5cblxuXG5cblx0LyoqXG5cdCAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG5cdCAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cblx0ICpcblx0ICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHtwYXN0T3JVcGNvbWluZywgaG93TWFueUV2ZW50c30sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBFdmVudE91dHB1dCA9IHByb3BzID0+IHtcblx0cmV0dXJuIChcblxuXHRcdDxkaXYgY2xhc3M9XCJwaG90byBsaW5rXCI+XG4gICAgPGltZyBjbGFzcz1cIm1pbWFnZVwiIHNyYz17IHByb3BzLnBob3RvU3JjIH0gLz5cbiAgICA8YSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvYT5cbiAgPC9kaXY+XG5cdFx0KTtcbn1cblxuIiwiY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBFdmVudE91dHB1dCB9IGZyb20gJy4vRXZlbnRPdXRwdXQnO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0XHRsb2NhdGlvbjogJycsXG5cdFx0XHRkYXRlOiAnJyxcblx0XHRcdHBob3RvOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RXZlbnQgPSB0aGlzLmdldEV2ZW50LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRTdGF0dXMgPSB0aGlzLnNldFN0YXR1cy5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHRnZXRFdmVudCgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5wYXN0T3JVcGNvbWluZyAmJiB0aGlzLnN0YXRlLmhvd01hbnlFdmVudHMpIHtcblxuXHRcdFx0dmFyIGFyZ3MgPSB7XG5cdFx0XHRcdHBhc3RPclVwY29taW5nOiB0aGlzLnN0YXRlLnBhc3RPclVwY29taW5nLFxuXHRcdFx0XHRob3dNYW55RXZlbnRzOiB0aGlzLnN0YXRlLmhvd01hbnlFdmVudHNcblx0XHRcdH07XG5cblx0XHRcdGFwaS5nZXRFdmVudFdpdGhBcmdzKGFyZ3MpXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRFdmVudCByZXNwb25zZScsIHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHR9XG5cblx0fVxuXG5cdHNldFN0YXR1cyhuZXdQcm9wcykge1xuXG5cdFx0dmFyIHByb3BzID0gbmV3UHJvcHMgPyBuZXdQcm9wcyA6IHRoaXMucHJvcHM7XG5cblx0XHRjb25zb2xlLmxvZygnc2V0U3RhdHVzIHByb3BzJywgcHJvcHMpO1xuXG5cdFx0aWYgKHByb3BzLnBhc3RPclVwY29taW5nICYmIHByb3BzLmhvd01hbnlFdmVudHMpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHBhc3RPclVwY29taW5nOiBwcm9wcy5wYXN0T3JVcGNvbWluZyxcblx0XHRcdFx0aG93TWFueUV2ZW50czogcHJvcHMuaG93TWFueUV2ZW50c1xuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50KCk7XG5cdFx0XHR9KTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygncHJvcHMnLCBwcm9wcyk7XG5cdFx0XHRpZiAocHJvcHMucGFzdE9yVXBjb21pbmcpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cGFzdE9yVXBjb21pbmc6IHByb3BzLnBhc3RPclVwY29taW5nXG5cdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJvcHMuaG93TWFueUV2ZW50cykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRob3dNYW55RXZlbnRzOiBwcm9wcy5ob3dNYW55RXZlbnRzXG5cdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ21vdW50IHJwb3JzJyk7XG5cdFx0dGhpcy5zZXRTdGF0dXMoKTtcblx0fVxuXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuXHRcdGNvbnNvbGUubG9nKCdyZWNlaXZlZCBycG9ycycpO1xuXHRcdHRoaXMuc2V0U3RhdHVzKG5ld1Byb3BzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkV2ZW50UHJldmlldyB0ZHlfcGhvdG9fYWxidW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkeV9waG90b19nYWxsZXJ5XCI+XG4gICA8L2Rpdj5cblx0XHQpXG5cdH1cbn0iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5cbi8vIGNvbnN0IGlucHV0cyA9IFsncGFzdE9yVXBjb21pbmcnLCAnaG93TWFueUV2ZW50cyddXG5cbmV4cG9ydCBjbGFzcyBFdmVudFNlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cGFzdE9yVXBjb21pbmc6ICc+PScsXG5cdFx0XHRob3dNYW55RXZlbnRzOiAnNSdcblx0XHR9XG5cblx0XHR0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5wYXN0T3JVcGNvbWluZykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHBhc3RPclVwY29taW5nOiB0aGlzLnByb3BzLnBhc3RPclVwY29taW5nXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucHJvcHMuaG93TWFueUV2ZW50cykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGhvd01hbnlFdmVudHM6IHRoaXMucHJvcHMuaG93TWFueUV2ZW50c1xuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgaW5wdXQgY2FobmdlcywgY2hhbmdlIHRoZSBzdGF0ZSB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIGFzIGlucHV0LCB0aGVuIHVwZGF0ZSBhdHRyaWJ1dGVzXG5cdGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG5cdFx0bGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRjYXNlICdwYXN0T3JVcGNvbWluZyc6XG5cdFx0XHRcdHRoaXMucHJvcHMudXBkYXRlQXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0cGFzdE9yVXBjb21pbmc6IHRoaXMuc3RhdGUucGFzdE9yVXBjb21pbmdcblx0XHRcdFx0fSk7XG5cdFx0XHRjYXNlICdob3dNYW55RXZlbnRzJzpcblx0XHRcdFx0Y29uc29sZS5sb2coJ2hvd01hbnlFdmVudHMnKTtcblx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRob3dNYW55RXZlbnRzOiB0aGlzLnN0YXRlLmhvd01hbnlFdmVudHNcblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJFdmVudFNlbGVjdFwiPlxuICAgICA8ZGl2PlxuICAgICAgIDxzdHJvbmc+IFVwY29taW5nIG9yIHBhc3QgZXZlbnRzPC9zdHJvbmc+XG4gICAgIDwvZGl2PlxuICAgICA8c2VsZWN0IG5hbWU9XCJwYXN0T3JVcGNvbWluZ1wiIHZhbHVlPXsgdGhpcy5zdGF0ZS5wYXN0T3JVcGNvbWluZyB9IG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9PlxuICAgICAgIDxvcHRpb24gdmFsdWU9XCI+PVwiPlVwY29taW5nIEV2ZW50czwvb3B0aW9uPlxuICAgICAgIDxvcHRpb24gdmFsdWU9XCI8XCI+UGFzdCBFdmVudHM8L29wdGlvbj5cbiAgICAgPC9zZWxlY3Q+XG4gICAgIDxkaXY+XG4gICAgICAgPHN0cm9uZz4gTnVtYmVyIG9mIGV2ZW50cyB0byBzaG93PC9zdHJvbmc+XG4gICAgIDwvZGl2PlxuICAgICA8aW5wdXQgbmFtZT1cImhvd01hbnlFdmVudHNcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIG1heD1cIjEwXCIgZGVmYXVsdD1cIjVcIiB2YWx1ZT17IHRoaXMuc3RhdGUuaG93TWFueUV2ZW50cyB9IG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9IC8+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH1cbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGdldEV2ZW50V2l0aEFyZ3MgPSAoYXJncykgPT4ge1xuXG5cdHZhciB7cGFzdE9yVXBjb21pbmcsIGhvd01hbnlFdmVudHN9ID0gYXJncztcblxuXHR2YXIgY2FsbCA9ICcvd3AtanNvbi90ZHlfZXZlbnRzL3YxL2V2ZW50cyc7XG5cblx0aWYgKGhvd01hbnlFdmVudHMpIHtcblx0XHRjYWxsICs9IGA/aG93TWFueUV2ZW50cz0ke2hvd01hbnlFdmVudHN9YFxuXHRcdGlmIChwYXN0T3JVcGNvbWluZykge1xuXHRcdFx0Y2FsbCArPSBgJnBhc3RPclVwY29taW5nPSR7cGFzdE9yVXBjb21pbmd9YFxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAocGFzdE9yVXBjb21pbmcpIHtcblx0XHRcdGNhbGwgKz0gYD9wYXN0T3JVcGNvbWluZz0ke3Bhc3RPclVwY29taW5nfWBcblx0XHR9XG5cdH1cblxuXHRjb25zb2xlLmxvZygnY2FsbCcsIGNhbGwpO1xuXG5cdHJldHVybiBheGlvcy5nZXQoY2FsbCk7XG59XG4iLCJleHBvcnQgY29uc3QgdHJ5UGFyc2VKc29uID0gKHN0cmluZykgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKHN0cmluZyk7XG5cdH0gY2F0Y2ggKCBlICkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiBmbGF0cGlja3IgdjQuNS4yLCBAbGljZW5zZSBNSVQgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbC5mbGF0cGlja3IgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgcGFkID0gZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICAgICAgcmV0dXJuIChcIjBcIiArIG51bWJlcikuc2xpY2UoLTIpO1xuICAgIH07XG4gICAgdmFyIGludCA9IGZ1bmN0aW9uIGludChib29sKSB7XG4gICAgICByZXR1cm4gYm9vbCA9PT0gdHJ1ZSA/IDEgOiAwO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgICBpZiAoaW1tZWRpYXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgaW1tZWRpYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdGltZW91dCAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH0sIHdhaXQpO1xuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lb3V0KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGFycmF5aWZ5ID0gZnVuY3Rpb24gYXJyYXlpZnkob2JqKSB7XG4gICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgPyBvYmogOiBbb2JqXTtcbiAgICB9O1xuXG4gICAgdmFyIGRvX25vdGhpbmcgPSBmdW5jdGlvbiBkb19ub3RoaW5nKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgdmFyIG1vbnRoVG9TdHIgPSBmdW5jdGlvbiBtb250aFRvU3RyKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQsIGxvY2FsZSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNbc2hvcnRoYW5kID8gXCJzaG9ydGhhbmRcIiA6IFwibG9uZ2hhbmRcIl1bbW9udGhOdW1iZXJdO1xuICAgIH07XG4gICAgdmFyIHJldkZvcm1hdCA9IHtcbiAgICAgIEQ6IGRvX25vdGhpbmcsXG4gICAgICBGOiBmdW5jdGlvbiBGKGRhdGVPYmosIG1vbnRoTmFtZSwgbG9jYWxlKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xuICAgICAgfSxcbiAgICAgIEc6IGZ1bmN0aW9uIEcoZGF0ZU9iaiwgaG91cikge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xuICAgICAgfSxcbiAgICAgIEg6IGZ1bmN0aW9uIEgoZGF0ZU9iaiwgaG91cikge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xuICAgICAgfSxcbiAgICAgIEo6IGZ1bmN0aW9uIEooZGF0ZU9iaiwgZGF5KSB7XG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgICAgfSxcbiAgICAgIEs6IGZ1bmN0aW9uIEsoZGF0ZU9iaiwgYW1QTSwgbG9jYWxlKSB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMoZGF0ZU9iai5nZXRIb3VycygpICUgMTIgKyAxMiAqIGludChuZXcgUmVnRXhwKGxvY2FsZS5hbVBNWzFdLCBcImlcIikudGVzdChhbVBNKSkpO1xuICAgICAgfSxcbiAgICAgIE06IGZ1bmN0aW9uIE0oZGF0ZU9iaiwgc2hvcnRNb250aCwgbG9jYWxlKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5zaG9ydGhhbmQuaW5kZXhPZihzaG9ydE1vbnRoKSk7XG4gICAgICB9LFxuICAgICAgUzogZnVuY3Rpb24gUyhkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcbiAgICAgIH0sXG4gICAgICBVOiBmdW5jdGlvbiBVKF8sIHVuaXhTZWNvbmRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhTZWNvbmRzKSAqIDEwMDApO1xuICAgICAgfSxcbiAgICAgIFc6IGZ1bmN0aW9uIFcoZGF0ZU9iaiwgd2Vla051bSkge1xuICAgICAgICB2YXIgd2Vla051bWJlciA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xuICAgICAgfSxcbiAgICAgIFk6IGZ1bmN0aW9uIFkoZGF0ZU9iaiwgeWVhcikge1xuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKHBhcnNlRmxvYXQoeWVhcikpO1xuICAgICAgfSxcbiAgICAgIFo6IGZ1bmN0aW9uIFooXywgSVNPRGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoSVNPRGF0ZSk7XG4gICAgICB9LFxuICAgICAgZDogZnVuY3Rpb24gZChkYXRlT2JqLCBkYXkpIHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgICB9LFxuICAgICAgaDogZnVuY3Rpb24gaChkYXRlT2JqLCBob3VyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XG4gICAgICB9LFxuICAgICAgaTogZnVuY3Rpb24gaShkYXRlT2JqLCBtaW51dGVzKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TWludXRlcyhwYXJzZUZsb2F0KG1pbnV0ZXMpKTtcbiAgICAgIH0sXG4gICAgICBqOiBmdW5jdGlvbiBqKGRhdGVPYmosIGRheSkge1xuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcbiAgICAgIH0sXG4gICAgICBsOiBkb19ub3RoaW5nLFxuICAgICAgbTogZnVuY3Rpb24gbShkYXRlT2JqLCBtb250aCkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgICB9LFxuICAgICAgbjogZnVuY3Rpb24gbihkYXRlT2JqLCBtb250aCkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgICB9LFxuICAgICAgczogZnVuY3Rpb24gcyhkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcbiAgICAgIH0sXG4gICAgICB3OiBkb19ub3RoaW5nLFxuICAgICAgeTogZnVuY3Rpb24geShkYXRlT2JqLCB5ZWFyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIoMjAwMCArIHBhcnNlRmxvYXQoeWVhcikpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHRva2VuUmVnZXggPSB7XG4gICAgICBEOiBcIihcXFxcdyspXCIsXG4gICAgICBGOiBcIihcXFxcdyspXCIsXG4gICAgICBHOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgSDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgIEo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXFxcXHcrXCIsXG4gICAgICBLOiBcIlwiLFxuICAgICAgTTogXCIoXFxcXHcrKVwiLFxuICAgICAgUzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgIFU6IFwiKC4rKVwiLFxuICAgICAgVzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgIFk6IFwiKFxcXFxkezR9KVwiLFxuICAgICAgWjogXCIoLispXCIsXG4gICAgICBkOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgaDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgIGk6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICBqOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgbDogXCIoXFxcXHcrKVwiLFxuICAgICAgbTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgIG46IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICBzOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgdzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgIHk6IFwiKFxcXFxkezJ9KVwiXG4gICAgfTtcbiAgICB2YXIgZm9ybWF0cyA9IHtcbiAgICAgIFo6IGZ1bmN0aW9uIFooZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgfSxcbiAgICAgIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMuc2hvcnRoYW5kW2Zvcm1hdHMudyhkYXRlLCBsb2NhbGUsIG9wdGlvbnMpXTtcbiAgICAgIH0sXG4gICAgICBGOiBmdW5jdGlvbiBGKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihmb3JtYXRzLm4oZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSAtIDEsIGZhbHNlLCBsb2NhbGUpO1xuICAgICAgfSxcbiAgICAgIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBwYWQoZm9ybWF0cy5oKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykpO1xuICAgICAgfSxcbiAgICAgIEg6IGZ1bmN0aW9uIEgoZGF0ZSkge1xuICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICB9LFxuICAgICAgSjogZnVuY3Rpb24gSihkYXRlLCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5vcmRpbmFsICE9PSB1bmRlZmluZWQgPyBkYXRlLmdldERhdGUoKSArIGxvY2FsZS5vcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKSA6IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuYW1QTVtpbnQoZGF0ZS5nZXRIb3VycygpID4gMTEpXTtcbiAgICAgIH0sXG4gICAgICBNOiBmdW5jdGlvbiBNKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihkYXRlLmdldE1vbnRoKCksIHRydWUsIGxvY2FsZSk7XG4gICAgICB9LFxuICAgICAgUzogZnVuY3Rpb24gUyhkYXRlKSB7XG4gICAgICAgIHJldHVybiBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgfSxcbiAgICAgIFU6IGZ1bmN0aW9uIFUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgICAgfSxcbiAgICAgIFc6IGZ1bmN0aW9uIFcoZGF0ZSwgXywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXRXZWVrKGRhdGUpO1xuICAgICAgfSxcbiAgICAgIFk6IGZ1bmN0aW9uIFkoZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgfSxcbiAgICAgIGQ6IGZ1bmN0aW9uIGQoZGF0ZSkge1xuICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgIH0sXG4gICAgICBoOiBmdW5jdGlvbiBoKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKSAlIDEyID8gZGF0ZS5nZXRIb3VycygpICUgMTIgOiAxMjtcbiAgICAgIH0sXG4gICAgICBpOiBmdW5jdGlvbiBpKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICB9LFxuICAgICAgajogZnVuY3Rpb24gaihkYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlLmdldERhdGUoKTtcbiAgICAgIH0sXG4gICAgICBsOiBmdW5jdGlvbiBsKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLmxvbmdoYW5kW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgfSxcbiAgICAgIG06IGZ1bmN0aW9uIG0oZGF0ZSkge1xuICAgICAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgfSxcbiAgICAgIG46IGZ1bmN0aW9uIG4oZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgIH0sXG4gICAgICBzOiBmdW5jdGlvbiBzKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgfSxcbiAgICAgIHc6IGZ1bmN0aW9uIHcoZGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZS5nZXREYXkoKTtcbiAgICAgIH0sXG4gICAgICB5OiBmdW5jdGlvbiB5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpLnN1YnN0cmluZygyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGVuZ2xpc2ggPSB7XG4gICAgICB3ZWVrZGF5czoge1xuICAgICAgICBzaG9ydGhhbmQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgICAgICAgbG9uZ2hhbmQ6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG4gICAgICB9LFxuICAgICAgbW9udGhzOiB7XG4gICAgICAgIHNob3J0aGFuZDogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgICBsb25naGFuZDogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cbiAgICAgIH0sXG4gICAgICBkYXlzSW5Nb250aDogWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxuICAgICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG50aCkge1xuICAgICAgICB2YXIgcyA9IG50aCAlIDEwMDtcbiAgICAgICAgaWYgKHMgPiAzICYmIHMgPCAyMSkgcmV0dXJuIFwidGhcIjtcblxuICAgICAgICBzd2l0Y2ggKHMgJSAxMCkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBcInN0XCI7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmFuZ2VTZXBhcmF0b3I6IFwiIHRvIFwiLFxuICAgICAgd2Vla0FiYnJldmlhdGlvbjogXCJXa1wiLFxuICAgICAgc2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxuICAgICAgdG9nZ2xlVGl0bGU6IFwiQ2xpY2sgdG8gdG9nZ2xlXCIsXG4gICAgICBhbVBNOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgICAgeWVhckFyaWFMYWJlbDogXCJZZWFyXCJcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZURhdGVGb3JtYXR0ZXIgPSBmdW5jdGlvbiBjcmVhdGVEYXRlRm9ybWF0dGVyKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmJGNvbmZpZyA9IF9yZWYuY29uZmlnLFxuICAgICAgICAgIGNvbmZpZyA9IF9yZWYkY29uZmlnID09PSB2b2lkIDAgPyBkZWZhdWx0cyA6IF9yZWYkY29uZmlnLFxuICAgICAgICAgIF9yZWYkbDEwbiA9IF9yZWYubDEwbixcbiAgICAgICAgICBsMTBuID0gX3JlZiRsMTBuID09PSB2b2lkIDAgPyBlbmdsaXNoIDogX3JlZiRsMTBuO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlT2JqLCBmcm10LCBvdmVycmlkZUxvY2FsZSkge1xuICAgICAgICB2YXIgbG9jYWxlID0gb3ZlcnJpZGVMb2NhbGUgfHwgbDEwbjtcblxuICAgICAgICBpZiAoY29uZmlnLmZvcm1hdERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBjb25maWcuZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10LCBsb2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZybXQuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uIChjLCBpLCBhcnIpIHtcbiAgICAgICAgICByZXR1cm4gZm9ybWF0c1tjXSAmJiBhcnJbaSAtIDFdICE9PSBcIlxcXFxcIiA/IGZvcm1hdHNbY10oZGF0ZU9iaiwgbG9jYWxlLCBjb25maWcpIDogYyAhPT0gXCJcXFxcXCIgPyBjIDogXCJcIjtcbiAgICAgICAgfSkuam9pbihcIlwiKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgY3JlYXRlRGF0ZVBhcnNlciA9IGZ1bmN0aW9uIGNyZWF0ZURhdGVQYXJzZXIoX3JlZjIpIHtcbiAgICAgIHZhciBfcmVmMiRjb25maWcgPSBfcmVmMi5jb25maWcsXG4gICAgICAgICAgY29uZmlnID0gX3JlZjIkY29uZmlnID09PSB2b2lkIDAgPyBkZWZhdWx0cyA6IF9yZWYyJGNvbmZpZyxcbiAgICAgICAgICBfcmVmMiRsMTBuID0gX3JlZjIubDEwbixcbiAgICAgICAgICBsMTBuID0gX3JlZjIkbDEwbiA9PT0gdm9pZCAwID8gZW5nbGlzaCA6IF9yZWYyJGwxMG47XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUsIGdpdmVuRm9ybWF0LCB0aW1lbGVzcywgY3VzdG9tTG9jYWxlKSB7XG4gICAgICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbG9jYWxlID0gY3VzdG9tTG9jYWxlIHx8IGwxMG47XG4gICAgICAgIHZhciBwYXJzZWREYXRlO1xuICAgICAgICB2YXIgZGF0ZV9vcmlnID0gZGF0ZTtcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO2Vsc2UgaWYgKHR5cGVvZiBkYXRlICE9PSBcInN0cmluZ1wiICYmIGRhdGUudG9GaXhlZCAhPT0gdW5kZWZpbmVkKSBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7ZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICB2YXIgZm9ybWF0ID0gZ2l2ZW5Gb3JtYXQgfHwgKGNvbmZpZyB8fCBkZWZhdWx0cykuZGF0ZUZvcm1hdDtcbiAgICAgICAgICB2YXIgZGF0ZXN0ciA9IFN0cmluZyhkYXRlKS50cmltKCk7XG5cbiAgICAgICAgICBpZiAoZGF0ZXN0ciA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRpbWVsZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKC9aJC8udGVzdChkYXRlc3RyKSB8fCAvR01UJC8udGVzdChkYXRlc3RyKSkgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO2Vsc2UgaWYgKGNvbmZpZyAmJiBjb25maWcucGFyc2VEYXRlKSBwYXJzZWREYXRlID0gY29uZmlnLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpO2Vsc2Uge1xuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9ICFjb25maWcgfHwgIWNvbmZpZy5ub0NhbGVuZGFyID8gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKSA6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgdmFyIG1hdGNoZWQsXG4gICAgICAgICAgICAgICAgb3BzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXRjaEluZGV4ID0gMCwgcmVnZXhTdHIgPSBcIlwiOyBpIDwgZm9ybWF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciB0b2tlbiA9IGZvcm1hdFtpXTtcbiAgICAgICAgICAgICAgdmFyIGlzQmFja1NsYXNoID0gdG9rZW4gPT09IFwiXFxcXFwiO1xuICAgICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZvcm1hdFtpIC0gMV0gPT09IFwiXFxcXFwiIHx8IGlzQmFja1NsYXNoO1xuXG4gICAgICAgICAgICAgIGlmICh0b2tlblJlZ2V4W3Rva2VuXSAmJiAhZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IHRva2VuUmVnZXhbdG9rZW5dO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpLmV4ZWMoZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoZWQgPSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgb3BzW3Rva2VuICE9PSBcIllcIiA/IFwicHVzaFwiIDogXCJ1bnNoaWZ0XCJdKHtcbiAgICAgICAgICAgICAgICAgICAgZm46IHJldkZvcm1hdFt0b2tlbl0sXG4gICAgICAgICAgICAgICAgICAgIHZhbDogbWF0Y2hbKyttYXRjaEluZGV4XVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc0JhY2tTbGFzaCkgcmVnZXhTdHIgKz0gXCIuXCI7XG5cbiAgICAgICAgICAgICAgb3BzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gX3JlZjMuZm4sXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IF9yZWYzLnZhbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkRGF0ZSA9IGZuKHBhcnNlZERhdGUsIHZhbCwgbG9jYWxlKSB8fCBwYXJzZWREYXRlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG1hdGNoZWQgPyBwYXJzZWREYXRlIDogdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHBhcnNlZERhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihwYXJzZWREYXRlLmdldFRpbWUoKSkpKSB7XG4gICAgICAgICAgY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgcHJvdmlkZWQ6IFwiICsgZGF0ZV9vcmlnKSk7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdHJ1ZSkgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZERhdGU7XG4gICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gY29tcGFyZURhdGVzKGRhdGUxLCBkYXRlMiwgdGltZWxlc3MpIHtcbiAgICAgIGlmICh0aW1lbGVzcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRpbWVsZXNzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZTEuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKGRhdGUyLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XG4gICAgfVxuICAgIHZhciBnZXRXZWVrID0gZnVuY3Rpb24gZ2V0V2VlayhnaXZlbkRhdGUpIHtcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMyAtIChkYXRlLmdldERheSgpICsgNikgJSA3KTtcbiAgICAgIHZhciB3ZWVrMSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG4gICAgICByZXR1cm4gMSArIE1hdGgucm91bmQoKChkYXRlLmdldFRpbWUoKSAtIHdlZWsxLmdldFRpbWUoKSkgLyA4NjQwMDAwMCAtIDMgKyAod2VlazEuZ2V0RGF5KCkgKyA2KSAlIDcpIC8gNyk7XG4gICAgfTtcbiAgICB2YXIgaXNCZXR3ZWVuID0gZnVuY3Rpb24gaXNCZXR3ZWVuKHRzLCB0czEsIHRzMikge1xuICAgICAgcmV0dXJuIHRzID4gTWF0aC5taW4odHMxLCB0czIpICYmIHRzIDwgTWF0aC5tYXgodHMxLCB0czIpO1xuICAgIH07XG4gICAgdmFyIGR1cmF0aW9uID0ge1xuICAgICAgREFZOiA4NjQwMDAwMFxuICAgIH07XG5cbiAgICB2YXIgSE9PS1MgPSBbXCJvbkNoYW5nZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbkRheUNyZWF0ZVwiLCBcIm9uRGVzdHJveVwiLCBcIm9uS2V5RG93blwiLCBcIm9uTW9udGhDaGFuZ2VcIiwgXCJvbk9wZW5cIiwgXCJvblBhcnNlQ29uZmlnXCIsIFwib25SZWFkeVwiLCBcIm9uVmFsdWVVcGRhdGVcIiwgXCJvblllYXJDaGFuZ2VcIiwgXCJvblByZUNhbGVuZGFyUG9zaXRpb25cIl07XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgX2Rpc2FibGU6IFtdLFxuICAgICAgX2VuYWJsZTogW10sXG4gICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgIGFsdEZvcm1hdDogXCJGIGosIFlcIixcbiAgICAgIGFsdElucHV0OiBmYWxzZSxcbiAgICAgIGFsdElucHV0Q2xhc3M6IFwiZm9ybS1jb250cm9sIGlucHV0XCIsXG4gICAgICBhbmltYXRlOiB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpID09PSAtMSxcbiAgICAgIGFyaWFEYXRlRm9ybWF0OiBcIkYgaiwgWVwiLFxuICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgICBjb25qdW5jdGlvbjogXCIsIFwiLFxuICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgICAgZGVmYXVsdEhvdXI6IDEyLFxuICAgICAgZGVmYXVsdE1pbnV0ZTogMCxcbiAgICAgIGRlZmF1bHRTZWNvbmRzOiAwLFxuICAgICAgZGlzYWJsZTogW10sXG4gICAgICBkaXNhYmxlTW9iaWxlOiBmYWxzZSxcbiAgICAgIGVuYWJsZTogW10sXG4gICAgICBlbmFibGVTZWNvbmRzOiBmYWxzZSxcbiAgICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxuICAgICAgZXJyb3JIYW5kbGVyOiBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgIH0sXG4gICAgICBnZXRXZWVrOiBnZXRXZWVrLFxuICAgICAgaG91ckluY3JlbWVudDogMSxcbiAgICAgIGlnbm9yZWRGb2N1c0VsZW1lbnRzOiBbXSxcbiAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICBsb2NhbGU6IFwiZGVmYXVsdFwiLFxuICAgICAgbWludXRlSW5jcmVtZW50OiA1LFxuICAgICAgbW9kZTogXCJzaW5nbGVcIixcbiAgICAgIG5leHRBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTEzLjIwNyA4LjQ3MmwtNy44NTQgNy44NTQtMC43MDctMC43MDcgNy4xNDYtNy4xNDYtNy4xNDYtNy4xNDggMC43MDctMC43MDcgNy44NTQgNy44NTR6JyAvPjwvc3ZnPlwiLFxuICAgICAgbm9DYWxlbmRhcjogZmFsc2UsXG4gICAgICBub3c6IG5ldyBEYXRlKCksXG4gICAgICBvbkNoYW5nZTogW10sXG4gICAgICBvbkNsb3NlOiBbXSxcbiAgICAgIG9uRGF5Q3JlYXRlOiBbXSxcbiAgICAgIG9uRGVzdHJveTogW10sXG4gICAgICBvbktleURvd246IFtdLFxuICAgICAgb25Nb250aENoYW5nZTogW10sXG4gICAgICBvbk9wZW46IFtdLFxuICAgICAgb25QYXJzZUNvbmZpZzogW10sXG4gICAgICBvblJlYWR5OiBbXSxcbiAgICAgIG9uVmFsdWVVcGRhdGU6IFtdLFxuICAgICAgb25ZZWFyQ2hhbmdlOiBbXSxcbiAgICAgIG9uUHJlQ2FsZW5kYXJQb3NpdGlvbjogW10sXG4gICAgICBwbHVnaW5zOiBbXSxcbiAgICAgIHBvc2l0aW9uOiBcImF1dG9cIixcbiAgICAgIHBvc2l0aW9uRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgcHJldkFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNNS4yMDcgOC40NzFsNy4xNDYgNy4xNDctMC43MDcgMC43MDctNy44NTMtNy44NTQgNy44NTQtNy44NTMgMC43MDcgMC43MDctNy4xNDcgNy4xNDZ6JyAvPjwvc3ZnPlwiLFxuICAgICAgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiBmYWxzZSxcbiAgICAgIHNob3dNb250aHM6IDEsXG4gICAgICBzdGF0aWM6IGZhbHNlLFxuICAgICAgdGltZV8yNGhyOiBmYWxzZSxcbiAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgIHdyYXA6IGZhbHNlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xuICAgICAgaWYgKGJvb2wgPT09IHRydWUpIHJldHVybiBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgICB2YXIgZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgXCJcIjtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiXCI7XG4gICAgICBlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgIGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpIGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyTm9kZShub2RlKSB7XG4gICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZFBhcmVudChub2RlLCBjb25kaXRpb24pIHtcbiAgICAgIGlmIChjb25kaXRpb24obm9kZSkpIHJldHVybiBub2RlO2Vsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkgcmV0dXJuIGZpbmRQYXJlbnQobm9kZS5wYXJlbnROb2RlLCBjb25kaXRpb24pO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTnVtYmVySW5wdXQoaW5wdXRDbGFzc05hbWUsIG9wdHMpIHtcbiAgICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSxcbiAgICAgICAgICBudW1JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm51bUlucHV0IFwiICsgaW5wdXRDbGFzc05hbWUpLFxuICAgICAgICAgIGFycm93VXAgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93VXBcIiksXG4gICAgICAgICAgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XG4gICAgICBudW1JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBudW1JbnB1dC5wYXR0ZXJuID0gXCJcXFxcZCpcIjtcbiAgICAgIGlmIChvcHRzICE9PSB1bmRlZmluZWQpIGZvciAodmFyIGtleSBpbiBvcHRzKSB7XG4gICAgICAgIG51bUlucHV0LnNldEF0dHJpYnV0ZShrZXksIG9wdHNba2V5XSk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG51bUlucHV0KTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dVcCk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93RG93bik7XG4gICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICB2YXIgc291cmNlID0gYXJnc1tfaV07XG5cbiAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJncy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIERFQk9VTkNFRF9DSEFOR0VfTVMgPSAzMDA7XG5cbiAgICBmdW5jdGlvbiBGbGF0cGlja3JJbnN0YW5jZShlbGVtZW50LCBpbnN0YW5jZUNvbmZpZykge1xuICAgICAgdmFyIHNlbGYgPSB7XG4gICAgICAgIGNvbmZpZzogT2JqZWN0LmFzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpLFxuICAgICAgICBsMTBuOiBlbmdsaXNoXG4gICAgICB9O1xuICAgICAgc2VsZi5wYXJzZURhdGUgPSBjcmVhdGVEYXRlUGFyc2VyKHtcbiAgICAgICAgY29uZmlnOiBzZWxmLmNvbmZpZyxcbiAgICAgICAgbDEwbjogc2VsZi5sMTBuXG4gICAgICB9KTtcbiAgICAgIHNlbGYuX2hhbmRsZXJzID0gW107XG4gICAgICBzZWxmLl9iaW5kID0gYmluZDtcbiAgICAgIHNlbGYuX3NldEhvdXJzRnJvbURhdGUgPSBzZXRIb3Vyc0Zyb21EYXRlO1xuICAgICAgc2VsZi5fcG9zaXRpb25DYWxlbmRhciA9IHBvc2l0aW9uQ2FsZW5kYXI7XG4gICAgICBzZWxmLmNoYW5nZU1vbnRoID0gY2hhbmdlTW9udGg7XG4gICAgICBzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xuICAgICAgc2VsZi5jbGVhciA9IGNsZWFyO1xuICAgICAgc2VsZi5jbG9zZSA9IGNsb3NlO1xuICAgICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG4gICAgICBzZWxmLmRlc3Ryb3kgPSBkZXN0cm95O1xuICAgICAgc2VsZi5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xuICAgICAgc2VsZi5vcGVuID0gb3BlbjtcbiAgICAgIHNlbGYucmVkcmF3ID0gcmVkcmF3O1xuICAgICAgc2VsZi5zZXQgPSBzZXQ7XG4gICAgICBzZWxmLnNldERhdGUgPSBzZXREYXRlO1xuICAgICAgc2VsZi50b2dnbGUgPSB0b2dnbGU7XG5cbiAgICAgIGZ1bmN0aW9uIHNldHVwSGVscGVyRnVuY3Rpb25zKCkge1xuICAgICAgICBzZWxmLnV0aWxzID0ge1xuICAgICAgICAgIGdldERheXNJbk1vbnRoOiBmdW5jdGlvbiBnZXREYXlzSW5Nb250aChtb250aCwgeXIpIHtcbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIG1vbnRoID0gc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh5ciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHlyID0gc2VsZi5jdXJyZW50WWVhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vbnRoID09PSAxICYmICh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDAgfHwgeXIgJSA0MDAgPT09IDApKSByZXR1cm4gMjk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5sMTBuLmRheXNJbk1vbnRoW21vbnRoXTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHNlbGYuZWxlbWVudCA9IHNlbGYuaW5wdXQgPSBlbGVtZW50O1xuICAgICAgICBzZWxmLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICBwYXJzZUNvbmZpZygpO1xuICAgICAgICBzZXR1cExvY2FsZSgpO1xuICAgICAgICBzZXR1cElucHV0cygpO1xuICAgICAgICBzZXR1cERhdGVzKCk7XG4gICAgICAgIHNldHVwSGVscGVyRnVuY3Rpb25zKCk7XG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSkgYnVpbGQoKTtcbiAgICAgICAgYmluZEV2ZW50cygpO1xuXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcbiAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHwgc2VsZi5jb25maWcubWluRGF0ZSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q2FsZW5kYXJXaWR0aCgpO1xuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyO1xuICAgICAgICB2YXIgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSAmJiBpc1NhZmFyaSkge1xuICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUmVhZHlcIik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJpbmRUb0luc3RhbmNlKGZuKSB7XG4gICAgICAgIHJldHVybiBmbi5iaW5kKHNlbGYpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRDYWxlbmRhcldpZHRoKCkge1xuICAgICAgICB2YXIgY29uZmlnID0gc2VsZi5jb25maWc7XG4gICAgICAgIGlmIChjb25maWcud2Vla051bWJlcnMgPT09IGZhbHNlICYmIGNvbmZpZy5zaG93TW9udGhzID09PSAxKSByZXR1cm47ZWxzZSBpZiAoY29uZmlnLm5vQ2FsZW5kYXIgIT09IHRydWUpIHtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YXIgZGF5c1dpZHRoID0gKHNlbGYuZGF5cy5vZmZzZXRXaWR0aCArIDEpICogY29uZmlnLnNob3dNb250aHM7XG4gICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGRheXNXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGRheXNXaWR0aCArIChzZWxmLndlZWtXcmFwcGVyICE9PSB1bmRlZmluZWQgPyBzZWxmLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoIDogMCkgKyBcInB4XCI7XG4gICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ2aXNpYmlsaXR5XCIpO1xuICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKGUpIHtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBpZiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSAhPT0gXCJibHVyXCIpIHtcbiAgICAgICAgICB0aW1lV3JhcHBlcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcmV2VmFsdWUgPSBzZWxmLl9pbnB1dC52YWx1ZTtcbiAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgIHVwZGF0ZVZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHNlbGYuX2lucHV0LnZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhbXBtMm1pbGl0YXJ5KGhvdXIsIGFtUE0pIHtcbiAgICAgICAgcmV0dXJuIGhvdXIgJSAxMiArIDEyICogaW50KGFtUE0gPT09IHNlbGYubDEwbi5hbVBNWzFdKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWlsaXRhcnkyYW1wbShob3VyKSB7XG4gICAgICAgIHN3aXRjaCAoaG91ciAlIDI0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICByZXR1cm4gMTI7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGhvdXIgJSAxMjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21JbnB1dHMoKSB7XG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgdmFyIGhvdXJzID0gKHBhcnNlSW50KHNlbGYuaG91ckVsZW1lbnQudmFsdWUuc2xpY2UoLTIpLCAxMCkgfHwgMCkgJSAyNCxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSAocGFyc2VJbnQoc2VsZi5taW51dGVFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MCxcbiAgICAgICAgICAgIHNlY29uZHMgPSBzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZCA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwIDogMDtcblxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBob3VycyA9IGFtcG0ybWlsaXRhcnkoaG91cnMsIHNlbGYuYW1QTS50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGltaXRNaW5Ib3VycyA9IHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZCB8fCBzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYubWluRGF0ZUhhc1RpbWUgJiYgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiYgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0cnVlKSA9PT0gMDtcbiAgICAgICAgdmFyIGxpbWl0TWF4SG91cnMgPSBzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQgfHwgc2VsZi5jb25maWcubWF4RGF0ZSAmJiBzZWxmLm1heERhdGVIYXNUaW1lICYmIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWF4RGF0ZSwgdHJ1ZSkgPT09IDA7XG5cbiAgICAgICAgaWYgKGxpbWl0TWF4SG91cnMpIHtcbiAgICAgICAgICB2YXIgbWF4VGltZSA9IHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZCA/IHNlbGYuY29uZmlnLm1heFRpbWUgOiBzZWxmLmNvbmZpZy5tYXhEYXRlO1xuICAgICAgICAgIGhvdXJzID0gTWF0aC5taW4oaG91cnMsIG1heFRpbWUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgaWYgKGhvdXJzID09PSBtYXhUaW1lLmdldEhvdXJzKCkpIG1pbnV0ZXMgPSBNYXRoLm1pbihtaW51dGVzLCBtYXhUaW1lLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgaWYgKG1pbnV0ZXMgPT09IG1heFRpbWUuZ2V0TWludXRlcygpKSBzZWNvbmRzID0gTWF0aC5taW4oc2Vjb25kcywgbWF4VGltZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpbWl0TWluSG91cnMpIHtcbiAgICAgICAgICB2YXIgbWluVGltZSA9IHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZCA/IHNlbGYuY29uZmlnLm1pblRpbWUgOiBzZWxmLmNvbmZpZy5taW5EYXRlO1xuICAgICAgICAgIGhvdXJzID0gTWF0aC5tYXgoaG91cnMsIG1pblRpbWUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgaWYgKGhvdXJzID09PSBtaW5UaW1lLmdldEhvdXJzKCkpIG1pbnV0ZXMgPSBNYXRoLm1heChtaW51dGVzLCBtaW5UaW1lLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgaWYgKG1pbnV0ZXMgPT09IG1pblRpbWUuZ2V0TWludXRlcygpKSBzZWNvbmRzID0gTWF0aC5tYXgoc2Vjb25kcywgbWluVGltZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcbiAgICAgICAgdmFyIGRhdGUgPSBkYXRlT2JqIHx8IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqO1xuICAgICAgICBpZiAoZGF0ZSkgc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXREZWZhdWx0SG91cnMoKSB7XG4gICAgICAgIHZhciBob3VycyA9IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyO1xuICAgICAgICB2YXIgbWludXRlcyA9IHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGU7XG4gICAgICAgIHZhciBzZWNvbmRzID0gc2VsZi5jb25maWcuZGVmYXVsdFNlY29uZHM7XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBtaW5faHIgPSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgdmFyIG1pbl9taW51dGVzID0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3VycywgbWluX2hyKTtcbiAgICAgICAgICBpZiAoaG91cnMgPT09IG1pbl9ocikgbWludXRlcyA9IE1hdGgubWF4KG1pbl9taW51dGVzLCBtaW51dGVzKTtcbiAgICAgICAgICBpZiAoaG91cnMgPT09IG1pbl9ociAmJiBtaW51dGVzID09PSBtaW5fbWludXRlcykgc2Vjb25kcyA9IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBtYXhfaHIgPSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgdmFyIG1heF9taW51dGVzID0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3VycywgbWF4X2hyKTtcbiAgICAgICAgICBpZiAoaG91cnMgPT09IG1heF9ocikgbWludXRlcyA9IE1hdGgubWluKG1heF9taW51dGVzLCBtaW51dGVzKTtcbiAgICAgICAgICBpZiAoaG91cnMgPT09IG1heF9ociAmJiBtaW51dGVzID09PSBtYXhfbWludXRlcykgc2Vjb25kcyA9IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICAgICAgICBpZiAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGhvdXJzICUgMjQsIG1pbnV0ZXMsIHNlY29uZHMgfHwgMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYuaG91ckVsZW1lbnQgfHwgIXNlbGYubWludXRlRWxlbWVudCB8fCBzZWxmLmlzTW9iaWxlKSByZXR1cm47XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRociA/ICgxMiArIGhvdXJzKSAlIDEyICsgMTIgKiBpbnQoaG91cnMgJSAxMiA9PT0gMCkgOiBob3Vycyk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChtaW51dGVzKTtcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVtpbnQoaG91cnMgPj0gMTIpXTtcbiAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKSBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2Vjb25kcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uWWVhcklucHV0KGV2ZW50KSB7XG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSArIChldmVudC5kZWx0YSB8fCAwKTtcblxuICAgICAgICBpZiAoeWVhciAvIDEwMDAgPiAxIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICEvW15cXGRdLy50ZXN0KHllYXIudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICBjaGFuZ2VZZWFyKHllYXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJpbmQoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgIHJldHVybiBiaW5kKGVsZW1lbnQsIGV2LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBlbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIGJpbmQoZWwsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICBldnQud2hpY2ggPT09IDEgJiYgaGFuZGxlcihldnQpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKCkge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLndyYXApIHtcbiAgICAgICAgICBbXCJvcGVuXCIsIFwiY2xvc2VcIiwgXCJ0b2dnbGVcIiwgXCJjbGVhclwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIiArIGV2dCArIFwiXVwiKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBiaW5kKGVsLCBcImNsaWNrXCIsIHNlbGZbZXZ0XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgc2V0dXBNb2JpbGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2Uob25SZXNpemUsIDUwKTtcbiAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlID0gZGVib3VuY2UodHJpZ2dlckNoYW5nZSwgREVCT1VOQ0VEX0NIQU5HRV9NUyk7XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgIS9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgYmluZChzZWxmLmRheXNDb250YWluZXIsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikgb25Nb3VzZU92ZXIoZS50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljKSBiaW5kKHNlbGYuX2lucHV0LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIXNlbGYuY29uZmlnLnN0YXRpYykgYmluZCh3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlZFJlc2l6ZSk7XG4gICAgICAgIGlmICh3aW5kb3cub250b3VjaHN0YXJ0ICE9PSB1bmRlZmluZWQpIGJpbmQod2luZG93LmRvY3VtZW50LCBcImNsaWNrXCIsIGRvY3VtZW50Q2xpY2spO2Vsc2UgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soZG9jdW1lbnRDbGljaykpO1xuICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJmb2N1c1wiLCBkb2N1bWVudENsaWNrLCB7XG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGYub3BlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKG9uTW9udGhOYXZDbGljaykpO1xuICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgW1wia2V5dXBcIiwgXCJpbmNyZW1lbnRcIl0sIG9uWWVhcklucHV0KTtcbiAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxlY3REYXRlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiYgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHNlbFRleHQgPSBmdW5jdGlvbiBzZWxUZXh0KGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC5zZWxlY3QoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcImluY3JlbWVudFwiXSwgdXBkYXRlVGltZSk7XG4gICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiYmx1clwiLCB1cGRhdGVUaW1lLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2sodGltZUluY3JlbWVudCkpO1xuICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xuICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZCkgYmluZChzZWxmLnNlY29uZEVsZW1lbnQsIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuc2Vjb25kRWxlbWVudCAmJiBzZWxmLnNlY29uZEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5hbVBNLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XG4gICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24ganVtcFRvRGF0ZShqdW1wRGF0ZSkge1xuICAgICAgICB2YXIganVtcFRvID0ganVtcERhdGUgIT09IHVuZGVmaW5lZCA/IHNlbGYucGFyc2VEYXRlKGp1bXBEYXRlKSA6IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8IChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1pbkRhdGUgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1heERhdGUgOiBzZWxmLm5vdyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoanVtcFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBqdW1wVG8uZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0ganVtcFRvLmdldE1vbnRoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZS5tZXNzYWdlID0gXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsganVtcFRvO1xuICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHRpbWVJbmNyZW1lbnQoZSkge1xuICAgICAgICBpZiAofmUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwiYXJyb3dcIikpIGluY3JlbWVudE51bUlucHV0KGUsIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIikgPyAxIDogLTEpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlICYmIGUudGFyZ2V0O1xuICAgICAgICB2YXIgaW5wdXQgPSBpbnB1dEVsZW0gfHwgdGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlICYmIHRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KFwiaW5jcmVtZW50XCIpO1xuICAgICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgICAgICBpbnB1dCAmJiBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRNb250aE5hdigpKTtcbiAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1pbm5lckNvbnRhaW5lclwiKTtcblxuICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xuICAgICAgICAgICAgdmFyIF9idWlsZFdlZWtzID0gYnVpbGRXZWVrcygpLFxuICAgICAgICAgICAgICAgIHdlZWtXcmFwcGVyID0gX2J1aWxkV2Vla3Mud2Vla1dyYXBwZXIsXG4gICAgICAgICAgICAgICAgd2Vla051bWJlcnMgPSBfYnVpbGRXZWVrcy53ZWVrTnVtYmVycztcblxuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XG4gICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gd2Vla051bWJlcnM7XG4gICAgICAgICAgICBzZWxmLndlZWtXcmFwcGVyID0gd2Vla1dyYXBwZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5yQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1yQ29udGFpbmVyXCIpO1xuICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlZWtkYXlzKCkpO1xuXG4gICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItZGF5c1wiKTtcbiAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmRheXNDb250YWluZXIpO1xuICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5yQ29udGFpbmVyKTtcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRUaW1lKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyYW5nZU1vZGVcIiwgc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhbmltYXRlXCIsIHNlbGYuY29uZmlnLmFuaW1hdGUgPT09IHRydWUpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcIm11bHRpTW9udGhcIiwgc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEpO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgdmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgJiYgc2VsZi5jb25maWcuYXBwZW5kVG8ubm9kZVR5cGUgIT09IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lIHx8IHNlbGYuY29uZmlnLnN0YXRpYykge1xuICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XG5cbiAgICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgICBpZiAoIWN1c3RvbUFwcGVuZCAmJiBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSkgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIHNlbGYuX2lucHV0Lm5leHRTaWJsaW5nKTtlbHNlIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkKSBzZWxmLmNvbmZpZy5hcHBlbmRUby5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd3JhcHBlclwiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSkgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCkgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmFsdElucHV0KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSkgKHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgPyBzZWxmLmNvbmZpZy5hcHBlbmRUbyA6IHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY3JlYXRlRGF5KGNsYXNzTmFtZSwgZGF0ZSwgZGF5TnVtYmVyLCBpKSB7XG4gICAgICAgIHZhciBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGRhdGUsIHRydWUpLFxuICAgICAgICAgICAgZGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWRheSBcIiArIGNsYXNzTmFtZSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIGRheUVsZW1lbnQuZGF0ZU9iaiA9IGRhdGU7XG4gICAgICAgIGRheUVsZW1lbnQuJGkgPSBpO1xuICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5mb3JtYXREYXRlKGRhdGUsIHNlbGYuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSk7XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJiBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5ub3cpID09PSAwKSB7XG4gICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtID0gZGF5RWxlbWVudDtcbiAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcImRhdGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZUlzRW5hYmxlZCkge1xuICAgICAgICAgIGRheUVsZW1lbnQudGFiSW5kZXggPSAtMTtcblxuICAgICAgICAgIGlmIChpc0RhdGVTZWxlY3RlZChkYXRlKSkge1xuICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwic3RhcnRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiYgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcImVuZFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSAmJiBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdLCB0cnVlKSA9PT0gMCk7XG4gICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT09IFwibmV4dE1vbnRoRGF5XCIpIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgIGlmIChpc0RhdGVJblJhbmdlKGRhdGUpICYmICFpc0RhdGVTZWxlY3RlZChkYXRlKSkgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzICYmIHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEgJiYgY2xhc3NOYW1lICE9PSBcInByZXZNb250aERheVwiICYmIGRheU51bWJlciAlIDcgPT09IDEpIHtcbiAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxzcGFuIGNsYXNzPSdmbGF0cGlja3ItZGF5Jz5cIiArIHNlbGYuY29uZmlnLmdldFdlZWsoZGF0ZSkgKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZvY3VzT25EYXlFbGVtKHRhcmdldE5vZGUpIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5mb2N1cygpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Rmlyc3RBdmFpbGFibGVEYXkoZGVsdGEpIHtcbiAgICAgICAgdmFyIHN0YXJ0TW9udGggPSBkZWx0YSA+IDAgPyAwIDogc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDE7XG4gICAgICAgIHZhciBlbmRNb250aCA9IGRlbHRhID4gMCA/IHNlbGYuY29uZmlnLnNob3dNb250aHMgOiAtMTtcblxuICAgICAgICBmb3IgKHZhciBtID0gc3RhcnRNb250aDsgbSAhPSBlbmRNb250aDsgbSArPSBkZWx0YSkge1xuICAgICAgICAgIHZhciBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGRlbHRhID4gMCA/IDAgOiBtb250aC5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgIHZhciBlbmRJbmRleCA9IGRlbHRhID4gMCA/IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCA6IC0xO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgIT0gZW5kSW5kZXg7IGkgKz0gZGVsdGEpIHtcbiAgICAgICAgICAgIHZhciBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoYy5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSA9PT0gLTEgJiYgaXNFbmFibGVkKGMuZGF0ZU9iaikpIHJldHVybiBjO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5leHRBdmFpbGFibGVEYXkoY3VycmVudCwgZGVsdGEpIHtcbiAgICAgICAgdmFyIGdpdmVuTW9udGggPSBjdXJyZW50LmNsYXNzTmFtZS5pbmRleE9mKFwiTW9udGhcIikgPT09IC0xID8gY3VycmVudC5kYXRlT2JqLmdldE1vbnRoKCkgOiBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgdmFyIGVuZE1vbnRoID0gZGVsdGEgPiAwID8gc2VsZi5jb25maWcuc2hvd01vbnRocyA6IC0xO1xuICAgICAgICB2YXIgbG9vcERlbHRhID0gZGVsdGEgPiAwID8gMSA6IC0xO1xuXG4gICAgICAgIGZvciAodmFyIG0gPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGg7IG0gIT0gZW5kTW9udGg7IG0gKz0gbG9vcERlbHRhKSB7XG4gICAgICAgICAgdmFyIG1vbnRoID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW21dO1xuICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gZ2l2ZW5Nb250aCAtIHNlbGYuY3VycmVudE1vbnRoID09PSBtID8gY3VycmVudC4kaSArIGRlbHRhIDogZGVsdGEgPCAwID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIC0gMSA6IDA7XG4gICAgICAgICAgdmFyIG51bU1vbnRoRGF5cyA9IG1vbnRoLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpID49IDAgJiYgaSA8IG51bU1vbnRoRGF5cyAmJiBpICE9IChkZWx0YSA+IDAgPyBudW1Nb250aERheXMgOiAtMSk7IGkgKz0gbG9vcERlbHRhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IG1vbnRoLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmIGlzRW5hYmxlZChjLmRhdGVPYmopICYmIE1hdGguYWJzKGN1cnJlbnQuJGkgLSBpKSA+PSBNYXRoLmFicyhkZWx0YSkpIHJldHVybiBmb2N1c09uRGF5RWxlbShjKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGxvb3BEZWx0YSk7XG4gICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkobG9vcERlbHRhKSwgMCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZvY3VzT25EYXkoY3VycmVudCwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciBkYXlGb2N1c2VkID0gaXNJblZpZXcoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgdmFyIHN0YXJ0RWxlbSA9IGN1cnJlbnQgIT09IHVuZGVmaW5lZCA/IGN1cnJlbnQgOiBkYXlGb2N1c2VkID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA6IHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAhPT0gdW5kZWZpbmVkICYmIGlzSW5WaWV3KHNlbGYuc2VsZWN0ZWREYXRlRWxlbSkgPyBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gOiBzZWxmLnRvZGF5RGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnRvZGF5RGF0ZUVsZW0pID8gc2VsZi50b2RheURhdGVFbGVtIDogZ2V0Rmlyc3RBdmFpbGFibGVEYXkob2Zmc2V0ID4gMCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChzdGFydEVsZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHNlbGYuX2lucHV0LmZvY3VzKCk7XG4gICAgICAgIGlmICghZGF5Rm9jdXNlZCkgcmV0dXJuIGZvY3VzT25EYXlFbGVtKHN0YXJ0RWxlbSk7XG4gICAgICAgIGdldE5leHRBdmFpbGFibGVEYXkoc3RhcnRFbGVtLCBvZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWlsZE1vbnRoRGF5cyh5ZWFyLCBtb250aCkge1xuICAgICAgICB2YXIgZmlyc3RPZk1vbnRoID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKSAtIHNlbGYubDEwbi5maXJzdERheU9mV2VlayArIDcpICUgNztcbiAgICAgICAgdmFyIHByZXZNb250aERheXMgPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKChtb250aCAtIDEgKyAxMikgJSAxMik7XG4gICAgICAgIHZhciBkYXlzSW5Nb250aCA9IHNlbGYudXRpbHMuZ2V0RGF5c0luTW9udGgobW9udGgpLFxuICAgICAgICAgICAgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBpc011bHRpTW9udGggPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSxcbiAgICAgICAgICAgIHByZXZNb250aERheUNsYXNzID0gaXNNdWx0aU1vbnRoID8gXCJwcmV2TW9udGhEYXkgaGlkZGVuXCIgOiBcInByZXZNb250aERheVwiLFxuICAgICAgICAgICAgbmV4dE1vbnRoRGF5Q2xhc3MgPSBpc011bHRpTW9udGggPyBcIm5leHRNb250aERheSBoaWRkZW5cIiA6IFwibmV4dE1vbnRoRGF5XCI7XG4gICAgICAgIHZhciBkYXlOdW1iZXIgPSBwcmV2TW9udGhEYXlzICsgMSAtIGZpcnN0T2ZNb250aCxcbiAgICAgICAgICAgIGRheUluZGV4ID0gMDtcblxuICAgICAgICBmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkocHJldk1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChkYXlOdW1iZXIgPSAxOyBkYXlOdW1iZXIgPD0gZGF5c0luTW9udGg7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJcIiwgbmV3IERhdGUoeWVhciwgbW9udGgsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGRheU51bSA9IGRheXNJbk1vbnRoICsgMTsgZGF5TnVtIDw9IDQyIC0gZmlyc3RPZk1vbnRoICYmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxIHx8IGRheUluZGV4ICUgNyAhPT0gMCk7IGRheU51bSsrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkobmV4dE1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0sIGRheUluZGV4KSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRheUNvbnRhaW5lclwiKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheXMpO1xuICAgICAgICByZXR1cm4gZGF5Q29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWlsZERheXMoKSB7XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyTm9kZShzZWxmLmRheXNDb250YWluZXIpO1xuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycykgY2xlYXJOb2RlKHNlbGYud2Vla051bWJlcnMpO1xuICAgICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnNob3dNb250aHM7IGkrKykge1xuICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgIGQuc2V0TW9udGgoc2VsZi5jdXJyZW50TW9udGggKyBpKTtcbiAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGJ1aWxkTW9udGhEYXlzKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICAgIHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkO1xuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIG9uTW91c2VPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRNb250aCgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhcIik7XG4gICAgICAgIHZhciBtb250aE5hdkZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIG1vbnRoRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiY3VyLW1vbnRoXCIpO1xuICAgICAgICB2YXIgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiLCB7XG4gICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHllYXJFbGVtZW50ID0geWVhcklucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgIHllYXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5sMTBuLnllYXJBcmlhTGFiZWwpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSkgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1taW5cIiwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XG4gICAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1tYXhcIiwgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHllYXJFbGVtZW50LmRpc2FibGVkID0gISFzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRNb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItY3VycmVudC1tb250aFwiKTtcbiAgICAgICAgY3VycmVudE1vbnRoLmFwcGVuZENoaWxkKG1vbnRoRWxlbWVudCk7XG4gICAgICAgIGN1cnJlbnRNb250aC5hcHBlbmRDaGlsZCh5ZWFySW5wdXQpO1xuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKGN1cnJlbnRNb250aCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aE5hdkZyYWdtZW50KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICB5ZWFyRWxlbWVudDogeWVhckVsZW1lbnQsXG4gICAgICAgICAgbW9udGhFbGVtZW50OiBtb250aEVsZW1lbnRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRNb250aHMoKSB7XG4gICAgICAgIGNsZWFyTm9kZShzZWxmLm1vbnRoTmF2KTtcbiAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChzZWxmLnByZXZNb250aE5hdik7XG5cbiAgICAgICAgZm9yICh2YXIgbSA9IHNlbGYuY29uZmlnLnNob3dNb250aHM7IG0tLTspIHtcbiAgICAgICAgICB2YXIgbW9udGggPSBidWlsZE1vbnRoKCk7XG4gICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMucHVzaChtb250aC55ZWFyRWxlbWVudCk7XG4gICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzLnB1c2gobW9udGgubW9udGhFbGVtZW50KTtcbiAgICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKG1vbnRoLmNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcbiAgICAgICAgc2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhzXCIpO1xuICAgICAgICBzZWxmLnllYXJFbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMgPSBbXTtcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xuICAgICAgICBzZWxmLnByZXZNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5wcmV2QXJyb3c7XG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcubmV4dEFycm93O1xuICAgICAgICBidWlsZE1vbnRocygpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9faGlkZVByZXZNb250aEFycm93O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgIT09IGJvb2wpIHtcbiAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5wcmV2TW9udGhOYXYsIFwiZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgPSBib29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3c7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChib29sKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyAhPT0gYm9vbCkge1xuICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLm5leHRNb250aE5hdiwgXCJkaXNhYmxlZFwiLCBib29sKTtcbiAgICAgICAgICAgICAgc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyA9IGJvb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSBzZWxmLnllYXJFbGVtZW50c1swXTtcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICByZXR1cm4gc2VsZi5tb250aE5hdjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRUaW1lKCkge1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhcikgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9DYWxlbmRhclwiKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci10aW1lXCIpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKTtcbiAgICAgICAgdmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIik7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPSBob3VySW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgdmFyIG1pbnV0ZUlucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItbWludXRlXCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgPSBtaW51dGVJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpIDogc2VsZi5jb25maWcudGltZV8yNGhyID8gc2VsZi5jb25maWcuZGVmYXVsdEhvdXIgOiBtaWxpdGFyeTJhbXBtKHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKSA6IHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGUpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3RlcFwiLCBzZWxmLmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIsIHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudC50b1N0cmluZygpKTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1pblwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjBcIiA6IFwiMVwiKTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1heFwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjIzXCIgOiBcIjEyXCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1taW5cIiwgXCIwXCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1tYXhcIiwgXCI1OVwiKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJJbnB1dCk7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobWludXRlSW5wdXQpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcudGltZV8yNGhyKSBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO1xuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XG4gICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNTZWNvbmRzXCIpO1xuICAgICAgICAgIHZhciBzZWNvbmRJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLXNlY29uZFwiKTtcbiAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKSA6IHNlbGYuY29uZmlnLmRlZmF1bHRTZWNvbmRzKTtcbiAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGVwXCIsIHNlbGYubWludXRlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIikpO1xuICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1pblwiLCBzZWxmLm1pbnV0ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1taW5cIikpO1xuICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1heFwiLCBzZWxmLm1pbnV0ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXhcIikpO1xuICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xuICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuICAgICAgICAgIHNlbGYuYW1QTSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWFtLXBtXCIsIHNlbGYubDEwbi5hbVBNW2ludCgoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPyBzZWxmLmhvdXJFbGVtZW50LnZhbHVlIDogc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpID4gMTEpXSk7XG4gICAgICAgICAgc2VsZi5hbVBNLnRpdGxlID0gc2VsZi5sMTBuLnRvZ2dsZVRpdGxlO1xuICAgICAgICAgIHNlbGYuYW1QTS50YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmFtUE0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGYudGltZUNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcbiAgICAgICAgaWYgKCFzZWxmLndlZWtkYXlDb250YWluZXIpIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7ZWxzZSBjbGVhck5vZGUoc2VsZi53ZWVrZGF5Q29udGFpbmVyKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXljb250YWluZXJcIik7XG4gICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVXZWVrZGF5cygpO1xuICAgICAgICByZXR1cm4gc2VsZi53ZWVrZGF5Q29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVXZWVrZGF5cygpIHtcbiAgICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICB2YXIgd2Vla2RheXMgPSBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kLmNvbmNhdCgpO1xuXG4gICAgICAgIGlmIChmaXJzdERheU9mV2VlayA+IDAgJiYgZmlyc3REYXlPZldlZWsgPCB3ZWVrZGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICB3ZWVrZGF5cyA9IHdlZWtkYXlzLnNwbGljZShmaXJzdERheU9mV2Vlaywgd2Vla2RheXMubGVuZ3RoKS5jb25jYXQod2Vla2RheXMuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lci5jaGlsZHJlbltpXS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlxcbiAgICAgICAgXCIgKyB3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlwiKSArIFwiXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xuICAgICAgICB2YXIgd2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xuICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci13ZWVrZGF5XCIsIHNlbGYubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7XG4gICAgICAgIHZhciB3ZWVrTnVtYmVycyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3NcIik7XG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXJzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrV3JhcHBlcjogd2Vla1dyYXBwZXIsXG4gICAgICAgICAgd2Vla051bWJlcnM6IHdlZWtOdW1iZXJzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNoYW5nZU1vbnRoKHZhbHVlLCBpc19vZmZzZXQpIHtcbiAgICAgICAgaWYgKGlzX29mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgaXNfb2Zmc2V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWx0YSA9IGlzX29mZnNldCA/IHZhbHVlIDogdmFsdWUgLSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgaWYgKGRlbHRhIDwgMCAmJiBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPT09IHRydWUgfHwgZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCArPSBkZWx0YTtcblxuICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyICs9IHNlbGYuY3VycmVudE1vbnRoID4gMTEgPyAxIDogLTE7XG4gICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGVhcih0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKSBzZWxmLmFsdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCkgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXREZWZhdWx0SG91cnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXG4gICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2xvc2VcIik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB0cmlnZ2VyRXZlbnQoXCJvbkRlc3Ryb3lcIik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHNlbGYuX2hhbmRsZXJzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIHZhciBoID0gc2VsZi5faGFuZGxlcnNbaV07XG4gICAgICAgICAgaC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaC5ldmVudCwgaC5oYW5kbGVyLCBoLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcblxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCkge1xuICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUpIHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLm1vYmlsZUlucHV0KTtcbiAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgJiYgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgd3JhcHBlci5sYXN0Q2hpbGQgJiYgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG5cbiAgICAgICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Ugc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpIHtcbiAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlKSBzZWxmLmFsdElucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XG4gICAgICAgICAgZGVsZXRlIHNlbGYuYWx0SW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5pbnB1dCkge1xuICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IHNlbGYuaW5wdXQuX3R5cGU7XG4gICAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xuICAgICAgICAgIHNlbGYuaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBbXCJfc2hvd1RpbWVJbnB1dFwiLCBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIiwgXCJfX2hpZGVQcmV2TW9udGhBcnJvd1wiLCBcImlzTW9iaWxlXCIsIFwiaXNPcGVuXCIsIFwic2VsZWN0ZWREYXRlRWxlbVwiLCBcIm1pbkRhdGVIYXNUaW1lXCIsIFwibWF4RGF0ZUhhc1RpbWVcIiwgXCJkYXlzXCIsIFwiZGF5c0NvbnRhaW5lclwiLCBcIl9pbnB1dFwiLCBcIl9wb3NpdGlvbkVsZW1lbnRcIiwgXCJpbm5lckNvbnRhaW5lclwiLCBcInJDb250YWluZXJcIiwgXCJtb250aE5hdlwiLCBcInRvZGF5RGF0ZUVsZW1cIiwgXCJjYWxlbmRhckNvbnRhaW5lclwiLCBcIndlZWtkYXlDb250YWluZXJcIiwgXCJwcmV2TW9udGhOYXZcIiwgXCJuZXh0TW9udGhOYXZcIiwgXCJjdXJyZW50TW9udGhFbGVtZW50XCIsIFwiY3VycmVudFllYXJFbGVtZW50XCIsIFwibmF2aWdhdGlvbkN1cnJlbnRNb250aFwiLCBcInNlbGVjdGVkRGF0ZUVsZW1cIiwgXCJjb25maWdcIl0uZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgc2VsZltrXTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXNDYWxlbmRhckVsZW0oZWxlbSkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gJiYgc2VsZi5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZWxlbSkpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlbGVtKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgdmFyIGlzQ2FsZW5kYXJFbGVtZW50ID0gaXNDYWxlbmRhckVsZW0oZS50YXJnZXQpO1xuICAgICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuaW5wdXQgfHwgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLnBhdGggJiYgZS5wYXRoLmluZGV4T2YgJiYgKH5lLnBhdGguaW5kZXhPZihzZWxmLmlucHV0KSB8fCB+ZS5wYXRoLmluZGV4T2Yoc2VsZi5hbHRJbnB1dCkpO1xuICAgICAgICAgIHZhciBsb3N0Rm9jdXMgPSBlLnR5cGUgPT09IFwiYmx1clwiID8gaXNJbnB1dCAmJiBlLnJlbGF0ZWRUYXJnZXQgJiYgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldCkgOiAhaXNJbnB1dCAmJiAhaXNDYWxlbmRhckVsZW1lbnQ7XG4gICAgICAgICAgdmFyIGlzSWdub3JlZCA9ICFzZWxmLmNvbmZpZy5pZ25vcmVkRm9jdXNFbGVtZW50cy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jb250YWlucyhlLnRhcmdldCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobG9zdEZvY3VzICYmIGlzSWdub3JlZCkge1xuICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSk7XG4gICAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuICAgICAgICBpZiAoIW5ld1llYXIgfHwgc2VsZi5jb25maWcubWluRGF0ZSAmJiBuZXdZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpIHx8IHNlbGYuY29uZmlnLm1heERhdGUgJiYgbmV3WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkgcmV0dXJuO1xuICAgICAgICB2YXIgbmV3WWVhck51bSA9IG5ld1llYXIsXG4gICAgICAgICAgICBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBuZXdZZWFyTnVtO1xuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5taW4oc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWF4KHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTmV3WWVhcikge1xuICAgICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlLCB0aW1lbGVzcykge1xuICAgICAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHRpbWVsZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRlVG9DaGVjayA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIHVuZGVmaW5lZCwgdGltZWxlc3MpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBkYXRlVG9DaGVjayAmJiBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1pbkRhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1pbkRhdGVIYXNUaW1lKSA8IDAgfHwgc2VsZi5jb25maWcubWF4RGF0ZSAmJiBkYXRlVG9DaGVjayAmJiBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1heERhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1heERhdGVIYXNUaW1lKSA+IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggPT09IDAgJiYgc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoZGF0ZVRvQ2hlY2sgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgYm9vbCA9IHNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggPiAwLFxuICAgICAgICAgICAgYXJyYXkgPSBib29sID8gc2VsZi5jb25maWcuZW5hYmxlIDogc2VsZi5jb25maWcuZGlzYWJsZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZCA9IGFycmF5W2ldO1xuICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiICYmIGQoZGF0ZVRvQ2hlY2spKSByZXR1cm4gYm9vbDtlbHNlIGlmIChkIGluc3RhbmNlb2YgRGF0ZSAmJiBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmIGQuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkpIHJldHVybiBib29sO2Vsc2UgaWYgKHR5cGVvZiBkID09PSBcInN0cmluZ1wiICYmIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBzZWxmLnBhcnNlRGF0ZShkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZCAmJiBwYXJzZWQuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPyBib29sIDogIWJvb2w7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJvYmplY3RcIiAmJiBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmIGQuZnJvbSAmJiBkLnRvICYmIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA+PSBkLmZyb20uZ2V0VGltZSgpICYmIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA8PSBkLnRvLmdldFRpbWUoKSkgcmV0dXJuIGJvb2w7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWJvb2w7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzSW5WaWV3KGVsZW0pIHtcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZWxlbS5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSA9PT0gLTEgJiYgc2VsZi5kYXlzQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xuICAgICAgICB2YXIgYWxsb3dJbnB1dCA9IHNlbGYuY29uZmlnLmFsbG93SW5wdXQ7XG4gICAgICAgIHZhciBhbGxvd0tleWRvd24gPSBzZWxmLmlzT3BlbiAmJiAoIWFsbG93SW5wdXQgfHwgIWlzSW5wdXQpO1xuICAgICAgICB2YXIgYWxsb3dJbmxpbmVLZXlkb3duID0gc2VsZi5jb25maWcuaW5saW5lICYmIGlzSW5wdXQgJiYgIWFsbG93SW5wdXQ7XG5cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgaXNJbnB1dCkge1xuICAgICAgICAgIGlmIChhbGxvd0lucHV0KSB7XG4gICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIHRydWUsIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0ID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0IDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgIH0gZWxzZSBzZWxmLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NhbGVuZGFyRWxlbShlLnRhcmdldCkgfHwgYWxsb3dLZXlkb3duIHx8IGFsbG93SW5saW5lS2V5ZG93bikge1xuICAgICAgICAgIHZhciBpc1RpbWVPYmogPSAhIXNlbGYudGltZUNvbnRhaW5lciAmJiBzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpO1xuXG4gICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopIHVwZGF0ZVRpbWUoKTtlbHNlIHNlbGVjdERhdGUoZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGZvY3VzQW5kQ2xvc2UoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICAgIGlmIChpc0lucHV0ICYmICFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmopIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiYgKGFsbG93SW5wdXQgPT09IGZhbHNlIHx8IGlzSW5WaWV3KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIF9kZWx0YSA9IGUua2V5Q29kZSA9PT0gMzkgPyAxIDogLTE7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSBmb2N1c09uRGF5KHVuZGVmaW5lZCwgX2RlbHRhKTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9udGgoX2RlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShnZXRGaXJzdEF2YWlsYWJsZURheSgxKSwgMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuaG91ckVsZW1lbnQpIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5rZXlDb2RlID09PSA0MCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICYmIGUudGFyZ2V0LiRpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XG4gICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KDEpLCAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1RpbWVPYmopIGZvY3VzT25EYXkodW5kZWZpbmVkLCBkZWx0YSAqIDcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiBzZWxmLmhvdXJFbGVtZW50KSBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZShlKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmopIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBlbGVtcyA9IFtzZWxmLmhvdXJFbGVtZW50LCBzZWxmLm1pbnV0ZUVsZW1lbnQsIHNlbGYuc2Vjb25kRWxlbWVudCwgc2VsZi5hbVBNXS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHZhciBpID0gZWxlbXMuaW5kZXhPZihlLnRhcmdldCk7XG5cbiAgICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1zW2kgKyAoZS5zaGlmdEtleSA/IC0xIDogMSldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKSB7XG4gICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVswXS5jaGFyQXQoMCk6XG4gICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzBdLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpOlxuICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVswXTtcbiAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzFdLmNoYXJBdCgwKTpcbiAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMV0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNWzFdO1xuICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25LZXlEb3duXCIsIGUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlbGVtKSB7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8IGVsZW0gJiYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgfHwgZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkpIHJldHVybjtcbiAgICAgICAgdmFyIGhvdmVyRGF0ZSA9IGVsZW0gPyBlbGVtLmRhdGVPYmouZ2V0VGltZSgpIDogc2VsZi5kYXlzLmZpcnN0RWxlbWVudENoaWxkLmRhdGVPYmouZ2V0VGltZSgpLFxuICAgICAgICAgICAgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHVuZGVmaW5lZCwgdHJ1ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgcmFuZ2VTdGFydERhdGUgPSBNYXRoLm1pbihob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLFxuICAgICAgICAgICAgcmFuZ2VFbmREYXRlID0gTWF0aC5tYXgoaG92ZXJEYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSxcbiAgICAgICAgICAgIGxhc3REYXRlID0gc2VsZi5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5sYXN0Q2hpbGQuZGF0ZU9iai5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBjb250YWluc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBtaW5SYW5nZSA9IDAsXG4gICAgICAgICAgICBtYXhSYW5nZSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgdCA9IHJhbmdlU3RhcnREYXRlOyB0IDwgbGFzdERhdGU7IHQgKz0gZHVyYXRpb24uREFZKSB7XG4gICAgICAgICAgaWYgKCFpc0VuYWJsZWQobmV3IERhdGUodCksIHRydWUpKSB7XG4gICAgICAgICAgICBjb250YWluc0Rpc2FibGVkID0gY29udGFpbnNEaXNhYmxlZCB8fCB0ID4gcmFuZ2VTdGFydERhdGUgJiYgdCA8IHJhbmdlRW5kRGF0ZTtcbiAgICAgICAgICAgIGlmICh0IDwgaW5pdGlhbERhdGUgJiYgKCFtaW5SYW5nZSB8fCB0ID4gbWluUmFuZ2UpKSBtaW5SYW5nZSA9IHQ7ZWxzZSBpZiAodCA+IGluaXRpYWxEYXRlICYmICghbWF4UmFuZ2UgfHwgdCA8IG1heFJhbmdlKSkgbWF4UmFuZ2UgPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgc2VsZi5jb25maWcuc2hvd01vbnRoczsgbSsrKSB7XG4gICAgICAgICAgdmFyIG1vbnRoID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW21dO1xuICAgICAgICAgIHZhciBwcmV2TW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbSAtIDFdO1xuXG4gICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSwgbCkge1xuICAgICAgICAgICAgdmFyIGRheUVsZW0gPSBtb250aC5jaGlsZHJlbltpXSxcbiAgICAgICAgICAgICAgICBkYXRlID0gZGF5RWxlbS5kYXRlT2JqO1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIG91dE9mUmFuZ2UgPSBtaW5SYW5nZSA+IDAgJiYgdGltZXN0YW1wIDwgbWluUmFuZ2UgfHwgbWF4UmFuZ2UgPiAwICYmIHRpbWVzdGFtcCA+IG1heFJhbmdlO1xuXG4gICAgICAgICAgICBpZiAob3V0T2ZSYW5nZSkge1xuICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xuICAgICAgICAgICAgICBbXCJpblJhbmdlXCIsIFwic3RhcnRSYW5nZVwiLCBcImVuZFJhbmdlXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluc0Rpc2FibGVkICYmICFvdXRPZlJhbmdlKSByZXR1cm4gXCJjb250aW51ZVwiO1xuXG4gICAgICAgICAgICBbXCJzdGFydFJhbmdlXCIsIFwiaW5SYW5nZVwiLCBcImVuZFJhbmdlXCIsIFwibm90QWxsb3dlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChob3ZlckRhdGUgPCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpID8gXCJzdGFydFJhbmdlXCIgOiBcImVuZFJhbmdlXCIpO1xuXG4gICAgICAgICAgICAgIGlmIChtb250aC5jb250YWlucyhlbGVtKSB8fCAhKG0gPiAwICYmIHByZXZNb250aCAmJiBwcmV2TW9udGgubGFzdENoaWxkLmRhdGVPYmouZ2V0VGltZSgpID49IHRpbWVzdGFtcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZSkgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwic3RhcnRSYW5nZVwiKTtlbHNlIGlmIChpbml0aWFsRGF0ZSA+IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlKSBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJlbmRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG1pblJhbmdlICYmIChtYXhSYW5nZSA9PT0gMCB8fCB0aW1lc3RhbXAgPD0gbWF4UmFuZ2UpICYmIGlzQmV0d2Vlbih0aW1lc3RhbXAsIGluaXRpYWxEYXRlLCBob3ZlckRhdGUpKSBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbW9udGguY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgX3JldCA9IF9sb29wKGksIGwpO1xuXG4gICAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uRWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcG9zaXRpb25FbGVtZW50ID0gc2VsZi5fcG9zaXRpb25FbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS50YXJnZXQgJiYgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuX2lucHV0LmRpc2FibGVkIHx8IHNlbGYuY29uZmlnLmlubGluZSkgcmV0dXJuO1xuICAgICAgICB2YXIgd2FzT3BlbiA9IHNlbGYuaXNPcGVuO1xuICAgICAgICBzZWxmLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF3YXNPcGVuKSB7XG4gICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcblxuICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgcG9zaXRpb25DYWxlbmRhcihwb3NpdGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPT09IHRydWUgJiYgc2VsZi5jb25maWcubm9DYWxlbmRhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkID8gbmV3IERhdGUoc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkpIDogbmV3IERhdGUoKSwgZmFsc2UpO1xuICAgICAgICAgICAgc2V0RGVmYXVsdEhvdXJzKCk7XG4gICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbGxvd0lucHV0ID09PSBmYWxzZSAmJiAoZSA9PT0gdW5kZWZpbmVkIHx8ICFzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZi5ob3VyRWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWluTWF4RGF0ZVNldHRlcih0eXBlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgIHZhciBkYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyB0eXBlICsgXCJEYXRlXCJdID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgdmFyIGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyAodHlwZSA9PT0gXCJtaW5cIiA/IFwibWF4XCIgOiBcIm1pblwiKSArIFwiRGF0ZVwiXTtcblxuICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGZbdHlwZSA9PT0gXCJtaW5cIiA/IFwibWluRGF0ZUhhc1RpbWVcIiA6IFwibWF4RGF0ZUhhc1RpbWVcIl0gPSBkYXRlT2JqLmdldEhvdXJzKCkgPiAwIHx8IGRhdGVPYmouZ2V0TWludXRlcygpID4gMCB8fCBkYXRlT2JqLmdldFNlY29uZHMoKSA+IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcykge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gc2VsZi5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICByZXR1cm4gaXNFbmFibGVkKGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgdHlwZSA9PT0gXCJtaW5cIikgc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKTtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lcikge1xuICAgICAgICAgICAgcmVkcmF3KCk7XG4gICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO2Vsc2Ugc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHR5cGUpO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPSAhIWludmVyc2VEYXRlT2JqICYmIGRhdGVPYmogIT09IHVuZGVmaW5lZCAmJiBpbnZlcnNlRGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcbiAgICAgICAgdmFyIGJvb2xPcHRzID0gW1wid3JhcFwiLCBcIndlZWtOdW1iZXJzXCIsIFwiYWxsb3dJbnB1dFwiLCBcImNsaWNrT3BlbnNcIiwgXCJ0aW1lXzI0aHJcIiwgXCJlbmFibGVUaW1lXCIsIFwibm9DYWxlbmRhclwiLCBcImFsdElucHV0XCIsIFwic2hvcnRoYW5kQ3VycmVudE1vbnRoXCIsIFwiaW5saW5lXCIsIFwic3RhdGljXCIsIFwiZW5hYmxlU2Vjb25kc1wiLCBcImRpc2FibGVNb2JpbGVcIl07XG4gICAgICAgIHZhciB1c2VyQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2VDb25maWcsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWxlbWVudC5kYXRhc2V0IHx8IHt9KSkpO1xuICAgICAgICB2YXIgZm9ybWF0cyQkMSA9IHt9O1xuICAgICAgICBzZWxmLmNvbmZpZy5wYXJzZURhdGUgPSB1c2VyQ29uZmlnLnBhcnNlRGF0ZTtcbiAgICAgICAgc2VsZi5jb25maWcuZm9ybWF0RGF0ZSA9IHVzZXJDb25maWcuZm9ybWF0RGF0ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImVuYWJsZVwiLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcuX2VuYWJsZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGVzKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5fZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJkaXNhYmxlXCIsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbmZpZy5fZGlzYWJsZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGVzKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5fZGlzYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdGltZU1vZGUgPSB1c2VyQ29uZmlnLm1vZGUgPT09IFwidGltZVwiO1xuXG4gICAgICAgIGlmICghdXNlckNvbmZpZy5kYXRlRm9ybWF0ICYmICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpKSB7XG4gICAgICAgICAgZm9ybWF0cyQkMS5kYXRlRm9ybWF0ID0gdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlID8gXCJIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKSA6IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgKyBcIiBIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyQ29uZmlnLmFsdElucHV0ICYmICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpICYmICF1c2VyQ29uZmlnLmFsdEZvcm1hdCkge1xuICAgICAgICAgIGZvcm1hdHMkJDEuYWx0Rm9ybWF0ID0gdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlID8gXCJoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTIEtcIiA6IFwiIEtcIikgOiBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgKyAoXCIgaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIikgKyBcIiBLXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pbkRhdGVcIiwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5EYXRlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4RGF0ZVwiLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcuX21heERhdGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG1pbk1heFRpbWVTZXR0ZXIgPSBmdW5jdGlvbiBtaW5NYXhUaW1lU2V0dGVyKHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWdbdHlwZSA9PT0gXCJtaW5cIiA/IFwiX21pblRpbWVcIiA6IFwiX21heFRpbWVcIl0gPSBzZWxmLnBhcnNlRGF0ZSh2YWwsIFwiSDppXCIpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pblRpbWVcIiwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLl9taW5UaW1lO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBtaW5NYXhUaW1lU2V0dGVyKFwibWluXCIpXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4VGltZVwiLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcuX21heFRpbWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IG1pbk1heFRpbWVTZXR0ZXIoXCJtYXhcIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLmNvbmZpZy5lbmFibGVUaW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMkJDEsIHVzZXJDb25maWcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9vbE9wdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPSBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IHRydWUgfHwgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSBcInRydWVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIEhPT0tTLmZpbHRlcihmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICAgIHJldHVybiBzZWxmLmNvbmZpZ1tob29rXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgc2VsZi5jb25maWdbaG9va10gPSBhcnJheWlmeShzZWxmLmNvbmZpZ1tob29rXSB8fCBbXSkubWFwKGJpbmRUb0luc3RhbmNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuaXNNb2JpbGUgPSAhc2VsZi5jb25maWcuZGlzYWJsZU1vYmlsZSAmJiAhc2VsZi5jb25maWcuaW5saW5lICYmIHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoICYmICFzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoICYmICFzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIHBsdWdpbkNvbmYgPSBzZWxmLmNvbmZpZy5wbHVnaW5zW19pXShzZWxmKSB8fCB7fTtcblxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwbHVnaW5Db25mKSB7XG4gICAgICAgICAgICBpZiAoSE9PS1MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IGFycmF5aWZ5KHBsdWdpbkNvbmZba2V5XSkubWFwKGJpbmRUb0luc3RhbmNlKS5jb25jYXQoc2VsZi5jb25maWdba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQ29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHNlbGYuY29uZmlnW2tleV0gPSBwbHVnaW5Db25mW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QYXJzZUNvbmZpZ1wiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0dXBMb2NhbGUoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXSA9PT0gXCJ1bmRlZmluZWRcIikgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpKTtcbiAgICAgICAgc2VsZi5sMTBuID0gT2JqZWN0LmFzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQsIHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgPT09IFwib2JqZWN0XCIgPyBzZWxmLmNvbmZpZy5sb2NhbGUgOiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwiZGVmYXVsdFwiID8gZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gOiB1bmRlZmluZWQpO1xuICAgICAgICB0b2tlblJlZ2V4LksgPSBcIihcIiArIHNlbGYubDEwbi5hbVBNWzBdICsgXCJ8XCIgKyBzZWxmLmwxMG4uYW1QTVsxXSArIFwifFwiICsgc2VsZi5sMTBuLmFtUE1bMF0udG9Mb3dlckNhc2UoKSArIFwifFwiICsgc2VsZi5sMTBuLmFtUE1bMV0udG9Mb3dlckNhc2UoKSArIFwiKVwiO1xuICAgICAgICBzZWxmLmZvcm1hdERhdGUgPSBjcmVhdGVEYXRlRm9ybWF0dGVyKHNlbGYpO1xuICAgICAgICBzZWxmLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoe1xuICAgICAgICAgIGNvbmZpZzogc2VsZi5jb25maWcsXG4gICAgICAgICAgbDEwbjogc2VsZi5sMTBuXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwb3NpdGlvbkNhbGVuZGFyKGN1c3RvbVBvc2l0aW9uRWxlbWVudCkge1xuICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUHJlQ2FsZW5kYXJQb3NpdGlvblwiKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uRWxlbWVudCA9IGN1c3RvbVBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7XG4gICAgICAgIHZhciBjYWxlbmRhckhlaWdodCA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNoaWxkcmVuLCBmdW5jdGlvbiAoYWNjLCBjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBhY2MgKyBjaGlsZC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH0sIDApLFxuICAgICAgICAgICAgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBjb25maWdQb3MgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbi5zcGxpdChcIiBcIiksXG4gICAgICAgICAgICBjb25maWdQb3NWZXJ0aWNhbCA9IGNvbmZpZ1Bvc1swXSxcbiAgICAgICAgICAgIGNvbmZpZ1Bvc0hvcml6b250YWwgPSBjb25maWdQb3MubGVuZ3RoID4gMSA/IGNvbmZpZ1Bvc1sxXSA6IG51bGwsXG4gICAgICAgICAgICBpbnB1dEJvdW5kcyA9IHBvc2l0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGRpc3RhbmNlRnJvbUJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGlucHV0Qm91bmRzLmJvdHRvbSxcbiAgICAgICAgICAgIHNob3dPblRvcCA9IGNvbmZpZ1Bvc1ZlcnRpY2FsID09PSBcImFib3ZlXCIgfHwgY29uZmlnUG9zVmVydGljYWwgIT09IFwiYmVsb3dcIiAmJiBkaXN0YW5jZUZyb21Cb3R0b20gPCBjYWxlbmRhckhlaWdodCAmJiBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodDtcbiAgICAgICAgdmFyIHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIGlucHV0Qm91bmRzLnRvcCArICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd1RvcFwiLCAhc2hvd09uVG9wKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0JvdHRvbVwiLCBzaG93T25Ub3ApO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKSByZXR1cm47XG4gICAgICAgIHZhciBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMubGVmdCAtIChjb25maWdQb3NIb3Jpem9udGFsICE9IG51bGwgJiYgY29uZmlnUG9zSG9yaXpvbnRhbCA9PT0gXCJjZW50ZXJcIiA/IChjYWxlbmRhcldpZHRoIC0gaW5wdXRCb3VuZHMud2lkdGgpIC8gMiA6IDApO1xuICAgICAgICB2YXIgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtIGlucHV0Qm91bmRzLnJpZ2h0O1xuICAgICAgICB2YXIgcmlnaHRNb3N0ID0gbGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgcmlnaHRNb3N0KTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYykgcmV0dXJuO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcblxuICAgICAgICBpZiAoIXJpZ2h0TW9zdCkge1xuICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSByaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUpIHJldHVybjtcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICBidWlsZERheXMoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZm9jdXNBbmRDbG9zZSgpIHtcbiAgICAgICAgc2VsZi5faW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgIT09IC0xIHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYuY2xvc2UsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZWxlY3REYXRlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSBmdW5jdGlvbiBpc1NlbGVjdGFibGUoZGF5KSB7XG4gICAgICAgICAgcmV0dXJuIGRheS5jbGFzc0xpc3QgJiYgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiYgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSAmJiAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdEFsbG93ZWRcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHQgPSBmaW5kUGFyZW50KGUudGFyZ2V0LCBpc1NlbGVjdGFibGUpO1xuICAgICAgICBpZiAodCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHZhciB0YXJnZXQgPSB0O1xuICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBuZXcgRGF0ZSh0YXJnZXQuZGF0ZU9iai5nZXRUaW1lKCkpO1xuICAgICAgICB2YXIgc2hvdWxkQ2hhbmdlTW9udGggPSAoc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPCBzZWxmLmN1cnJlbnRNb250aCB8fCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSA+IHNlbGYuY3VycmVudE1vbnRoICsgc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDEpICYmIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIjtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtID0gdGFyZ2V0O1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIikgc2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGVjdGVkRGF0ZV07ZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJtdWx0aXBsZVwiKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBpc0RhdGVTZWxlY3RlZChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4KSBzZWxmLnNlbGVjdGVkRGF0ZXMuc3BsaWNlKHBhcnNlSW50KHNlbGVjdGVkSW5kZXgpLCAxKTtlbHNlIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpIHNlbGYuY2xlYXIoZmFsc2UpO1xuICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgIT09IDApIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcblxuICAgICAgICBpZiAoc2hvdWxkQ2hhbmdlTW9udGgpIHtcbiAgICAgICAgICB2YXIgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgaWYgKGlzTmV3WWVhcikgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuc2hvd1RpbWVJbnB1dCA9IHRydWU7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgICAgaWYgKCFzaG91bGRDaGFuZ2VNb250aCAmJiBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgJiYgc2VsZi5jb25maWcuc2hvd01vbnRocyA9PT0gMSkgZm9jdXNPbkRheUVsZW0odGFyZ2V0KTtlbHNlIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAmJiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKTtcbiAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCkgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICB9LCA0NTEpO1xuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgdmFyIHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG4gICAgICAgICAgdmFyIHJhbmdlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG5cbiAgICAgICAgICBpZiAoc2luZ2xlIHx8IHJhbmdlKSB7XG4gICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgQ0FMTEJBQ0tTID0ge1xuICAgICAgICBsb2NhbGU6IFtzZXR1cExvY2FsZSwgdXBkYXRlV2Vla2RheXNdLFxuICAgICAgICBzaG93TW9udGhzOiBbYnVpbGRNb250aHMsIHNldENhbGVuZGFyV2lkdGgsIGJ1aWxkV2Vla2RheXNdXG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICBpZiAob3B0aW9uICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIG9wdGlvbik7ZWxzZSB7XG4gICAgICAgICAgc2VsZi5jb25maWdbb3B0aW9uXSA9IHZhbHVlO1xuICAgICAgICAgIGlmIChDQUxMQkFDS1Nbb3B0aW9uXSAhPT0gdW5kZWZpbmVkKSBDQUxMQkFDS1Nbb3B0aW9uXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4geCgpO1xuICAgICAgICAgIH0pO2Vsc2UgaWYgKEhPT0tTLmluZGV4T2Yob3B0aW9uKSA+IC0xKSBzZWxmLmNvbmZpZ1tvcHRpb25dID0gYXJyYXlpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgIGp1bXBUb0RhdGUoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRTZWxlY3RlZERhdGUoaW5wdXREYXRlLCBmb3JtYXQpIHtcbiAgICAgICAgdmFyIGRhdGVzID0gW107XG4gICAgICAgIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBBcnJheSkgZGF0ZXMgPSBpbnB1dERhdGUubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGQsIGZvcm1hdCk7XG4gICAgICAgIH0pO2Vsc2UgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJudW1iZXJcIikgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtlbHNlIGlmICh0eXBlb2YgaW5wdXREYXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2luZ2xlXCI6XG4gICAgICAgICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlLnNwbGl0KHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uKS5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicmFuZ2VcIjpcbiAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGUuc3BsaXQoc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKS5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGlucHV0RGF0ZSkpKTtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQgaW5zdGFuY2VvZiBEYXRlICYmIGlzRW5hYmxlZChkLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0RGF0ZShkYXRlLCB0cmlnZ2VyQ2hhbmdlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGZvcm1hdCA9IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSB8fCBkYXRlIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0ZS5sZW5ndGggPT09IDApIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xuICAgICAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDA7XG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5zZWxlY3RlZERhdGVzWzBdO1xuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICBqdW1wVG9EYXRlKCk7XG4gICAgICAgIHNldEhvdXJzRnJvbURhdGUoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSk7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlKSB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcGFyc2VEYXRlUnVsZXMoYXJyKSB7XG4gICAgICAgIHJldHVybiBhcnIuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHJ1bGUgPT09IFwibnVtYmVyXCIgfHwgcnVsZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhcnNlRGF0ZShydWxlLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocnVsZSAmJiB0eXBlb2YgcnVsZSA9PT0gXCJvYmplY3RcIiAmJiBydWxlLmZyb20gJiYgcnVsZS50bykgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb206IHNlbGYucGFyc2VEYXRlKHJ1bGUuZnJvbSwgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIHRvOiBzZWxmLnBhcnNlRGF0ZShydWxlLnRvLCB1bmRlZmluZWQpXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNldHVwRGF0ZXMoKSB7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICBzZWxmLm5vdyA9IHNlbGYucGFyc2VEYXRlKHNlbGYuY29uZmlnLm5vdykgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHByZWxvYWRlZERhdGUgPSBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fCAoKHNlbGYuaW5wdXQubm9kZU5hbWUgPT09IFwiSU5QVVRcIiB8fCBzZWxmLmlucHV0Lm5vZGVOYW1lID09PSBcIlRFWFRBUkVBXCIpICYmIHNlbGYuaW5wdXQucGxhY2Vob2xkZXIgJiYgc2VsZi5pbnB1dC52YWx1ZSA9PT0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlciA/IG51bGwgOiBzZWxmLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKHByZWxvYWRlZERhdGUpIHNldFNlbGVjdGVkRGF0ZShwcmVsb2FkZWREYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgdmFyIGluaXRpYWxEYXRlID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDAgPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gOiBzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpID4gc2VsZi5ub3cuZ2V0VGltZSgpID8gc2VsZi5jb25maWcubWluRGF0ZSA6IHNlbGYuY29uZmlnLm1heERhdGUgJiYgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRUaW1lKCkgPCBzZWxmLm5vdy5nZXRUaW1lKCkgPyBzZWxmLmNvbmZpZy5tYXhEYXRlIDogc2VsZi5ub3c7XG4gICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBpbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IGluaXRpYWxEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCkgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQpIHNlbGYuY29uZmlnLm1pblRpbWUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5taW5UaW1lLCBcIkg6aVwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZCkgc2VsZi5jb25maWcubWF4VGltZSA9IHNlbGYucGFyc2VEYXRlKHNlbGYuY29uZmlnLm1heFRpbWUsIFwiSDppXCIpO1xuICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lID0gISFzZWxmLmNvbmZpZy5taW5EYXRlICYmIChzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkgPiAwIHx8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpID4gMCB8fCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKSA+IDApO1xuICAgICAgICBzZWxmLm1heERhdGVIYXNUaW1lID0gISFzZWxmLmNvbmZpZy5tYXhEYXRlICYmIChzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkgPiAwIHx8IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpID4gMCB8fCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFNlY29uZHMoKSA+IDApO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJzaG93VGltZUlucHV0XCIsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9zaG93VGltZUlucHV0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xuICAgICAgICAgICAgc2VsZi5fc2hvd1RpbWVJbnB1dCA9IGJvb2w7XG4gICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lcikgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJzaG93VGltZUlucHV0XCIsIGJvb2wpO1xuICAgICAgICAgICAgc2VsZi5pc09wZW4gJiYgcG9zaXRpb25DYWxlbmRhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xuICAgICAgICBzZWxmLmlucHV0ID0gc2VsZi5jb25maWcud3JhcCA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKSA6IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCFzZWxmLmlucHV0KSB7XG4gICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgZWxlbWVudCBzcGVjaWZpZWRcIikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaW5wdXQuX3R5cGUgPSBzZWxmLmlucHV0LnR5cGU7XG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XG4gICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5pbnB1dDtcblxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcbiAgICAgICAgICBzZWxmLmFsdElucHV0ID0gY3JlYXRlRWxlbWVudChzZWxmLmlucHV0Lm5vZGVOYW1lLCBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIFwiICsgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcyk7XG4gICAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmFsdElucHV0O1xuICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgIHNlbGYuYWx0SW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xuICAgICAgICAgIHNlbGYuYWx0SW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xuICAgICAgICAgIHNlbGYuYWx0SW5wdXQudGFiSW5kZXggPSBzZWxmLmlucHV0LnRhYkluZGV4O1xuICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgIHNlbGYuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmlucHV0LnBhcmVudE5vZGUpIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5hbHRJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XG4gICAgICAgIHNlbGYuX3Bvc2l0aW9uRWxlbWVudCA9IHNlbGYuY29uZmlnLnBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9pbnB1dDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XG4gICAgICAgIHZhciBpbnB1dFR5cGUgPSBzZWxmLmNvbmZpZy5lbmFibGVUaW1lID8gc2VsZi5jb25maWcubm9DYWxlbmRhciA/IFwidGltZVwiIDogXCJkYXRldGltZS1sb2NhbFwiIDogXCJkYXRlXCI7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnN0ZXAgPSBzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikgfHwgXCJhbnlcIjtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC50YWJJbmRleCA9IDE7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcbiAgICAgICAgc2VsZi5tb2JpbGVGb3JtYXRTdHIgPSBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIiA/IFwiWS1tLWRcXFxcVEg6aTpTXCIgOiBpbnB1dFR5cGUgPT09IFwiZGF0ZVwiID8gXCJZLW0tZFwiIDogXCJIOmk6U1wiO1xuXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGVmYXVsdFZhbHVlID0gc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSkgc2VsZi5tb2JpbGVJbnB1dC5tYXggPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgXCJZLW0tZFwiKTtcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzZWxmLmlucHV0LnBhcmVudE5vZGUpIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgIH0gY2F0Y2ggKF9hKSB7fVxuXG4gICAgICAgIGJpbmQoc2VsZi5tb2JpbGVJbnB1dCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZWxmLnNldERhdGUoZS50YXJnZXQudmFsdWUsIGZhbHNlLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiA9PT0gdHJ1ZSkgcmV0dXJuIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgc2VsZi5vcGVuKGUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgdmFyIGhvb2tzID0gc2VsZi5jb25maWdbZXZlbnRdO1xuXG4gICAgICAgIGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaG9va3NbaV0gJiYgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBob29rc1tpXShzZWxmLnNlbGVjdGVkRGF0ZXMsIHNlbGYuaW5wdXQudmFsdWUsIHNlbGYsIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCA9PT0gXCJvbkNoYW5nZVwiKSB7XG4gICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJpbnB1dFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgICAgIGUuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXNEYXRlU2VsZWN0ZWQoZGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZi5zZWxlY3RlZERhdGVzW2ldLCBkYXRlKSA9PT0gMCkgcmV0dXJuIFwiXCIgKyBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPj0gMCAmJiBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlIHx8ICFzZWxmLm1vbnRoTmF2KSByZXR1cm47XG4gICAgICAgIHNlbGYueWVhckVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHllYXJFbGVtZW50LCBpKSB7XG4gICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSk7XG4gICAgICAgICAgZC5zZXRNb250aChzZWxmLmN1cnJlbnRNb250aCArIGkpO1xuICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IG1vbnRoVG9TdHIoZC5nZXRNb250aCgpLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbikgKyBcIiBcIjtcbiAgICAgICAgICB5ZWFyRWxlbWVudC52YWx1ZSA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID0gc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCkgOiBzZWxmLmN1cnJlbnRZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID0gc2VsZi5jb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkICYmIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkgPyBzZWxmLmN1cnJlbnRNb250aCArIDEgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCkgOiBzZWxmLmN1cnJlbnRZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0RGF0ZVN0cihmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlcy5tYXAoZnVuY3Rpb24gKGRPYmopIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5mb3JtYXREYXRlKGRPYmosIGZvcm1hdCk7XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZCwgaSwgYXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLmNvbmZpZy5lbmFibGVUaW1lIHx8IGFyci5pbmRleE9mKGQpID09PSBpO1xuICAgICAgICB9KS5qb2luKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiA/IHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uIDogc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSkge1xuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XG5cbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUZvcm1hdFN0cikge1xuICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkID8gc2VsZi5mb3JtYXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLm1vYmlsZUZvcm1hdFN0cikgOiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IGdldERhdGVTdHIoc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG5cbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBnZXREYXRlU3RyKHNlbGYuY29uZmlnLmFsdEZvcm1hdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAhPT0gZmFsc2UpIHRyaWdnZXJFdmVudChcIm9uVmFsdWVVcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgICB2YXIgaXNOZXh0TW9udGggPSBzZWxmLm5leHRNb250aE5hdi5jb250YWlucyhlLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGlzUHJldk1vbnRoIHx8IGlzTmV4dE1vbnRoKSB7XG4gICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYueWVhckVsZW1lbnRzLmluZGV4T2YoZS50YXJnZXQpID49IDApIHtcbiAgICAgICAgICBlLnRhcmdldC5zZWxlY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd1VwXCIpKSB7XG4gICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd0Rvd25cIikpIHtcbiAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaXNLZXlEb3duID0gZS50eXBlID09PSBcImtleWRvd25cIixcbiAgICAgICAgICAgIGlucHV0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVtpbnQoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBzZWxmLmwxMG4uYW1QTVswXSldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pbiA9IHBhcnNlRmxvYXQoaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1taW5cIikpLFxuICAgICAgICAgICAgbWF4ID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1heFwiKSksXG4gICAgICAgICAgICBzdGVwID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0ZXBcIikpLFxuICAgICAgICAgICAgY3VyVmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApLFxuICAgICAgICAgICAgZGVsdGEgPSBlLmRlbHRhIHx8IChpc0tleURvd24gPyBlLndoaWNoID09PSAzOCA/IDEgOiAtMSA6IDApO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXJWYWx1ZSArIHN0ZXAgKiBkZWx0YTtcblxuICAgICAgICBpZiAodHlwZW9mIGlucHV0LnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIGlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHZhciBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsXG4gICAgICAgICAgICAgIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAobmV3VmFsdWUgPCBtaW4pIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbWF4ICsgbmV3VmFsdWUgKyBpbnQoIWlzSG91ckVsZW0pICsgKGludChpc0hvdXJFbGVtKSAmJiBpbnQoIXNlbGYuYW1QTSkpO1xuICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSkgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAtMSwgc2VsZi5ob3VyRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xuICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSkgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAxLCBzZWxmLmhvdXJFbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi5hbVBNICYmIGlzSG91ckVsZW0gJiYgKHN0ZXAgPT09IDEgPyBuZXdWYWx1ZSArIGN1clZhbHVlID09PSAyMyA6IE1hdGguYWJzKG5ld1ZhbHVlIC0gY3VyVmFsdWUpID4gc3RlcCkpIHtcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNW2ludChzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IHNlbGYubDEwbi5hbVBNWzBdKV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBwYWQobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluaXQoKTtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9mbGF0cGlja3Iobm9kZUxpc3QsIGNvbmZpZykge1xuICAgICAgdmFyIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICAgICAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgaWYgKG5vZGUuX2ZsYXRwaWNrciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICBub2RlLl9mbGF0cGlja3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gRmxhdHBpY2tySW5zdGFuY2Uobm9kZSwgY29uZmlnIHx8IHt9KTtcbiAgICAgICAgICBpbnN0YW5jZXMucHVzaChub2RlLl9mbGF0cGlja3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdHBpY2tyID0gTm9kZUxpc3QucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IodGhpcywgY29uZmlnKTtcbiAgICAgIH07XG5cbiAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKFt0aGlzXSwgY29uZmlnKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGZsYXRwaWNrciA9IGZ1bmN0aW9uIGZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlTGlzdCkgcmV0dXJuIF9mbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZyk7ZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2ZsYXRwaWNrcih3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNvbmZpZyk7XG4gICAgICByZXR1cm4gX2ZsYXRwaWNrcihbc2VsZWN0b3JdLCBjb25maWcpO1xuICAgIH07XG5cbiAgICBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IGRlZmF1bHRzO1xuICAgIGZsYXRwaWNrci5sMTBucyA9IHtcbiAgICAgIGVuOiBPYmplY3QuYXNzaWduKHt9LCBlbmdsaXNoKSxcbiAgICAgIGRlZmF1bHQ6IE9iamVjdC5hc3NpZ24oe30sIGVuZ2xpc2gpXG4gICAgfTtcblxuICAgIGZsYXRwaWNrci5sb2NhbGl6ZSA9IGZ1bmN0aW9uIChsMTBuKSB7XG4gICAgICBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCA9IE9iamVjdC5hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0LCBsMTBuKTtcbiAgICB9O1xuXG4gICAgZmxhdHBpY2tyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICB9O1xuXG4gICAgZmxhdHBpY2tyLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoe30pO1xuICAgIGZsYXRwaWNrci5mb3JtYXREYXRlID0gY3JlYXRlRGF0ZUZvcm1hdHRlcih7fSk7XG4gICAgZmxhdHBpY2tyLmNvbXBhcmVEYXRlcyA9IGNvbXBhcmVEYXRlcztcblxuICAgIGlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBqUXVlcnkuZm4uZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBEYXRlLnByb3RvdHlwZS5mcF9pbmNyID0gZnVuY3Rpb24gKGRheXMpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyAodHlwZW9mIGRheXMgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChkYXlzLCAxMCkgOiBkYXlzKSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cuZmxhdHBpY2tyID0gZmxhdHBpY2tyO1xuICAgIH1cblxuICAgIHJldHVybiBmbGF0cGlja3I7XG5cbn0pKSk7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9mbGF0cGlja3IgPSByZXF1aXJlKCdmbGF0cGlja3InKTtcblxudmFyIF9mbGF0cGlja3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxhdHBpY2tyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBob29rcyA9IFsnb25DaGFuZ2UnLCAnb25PcGVuJywgJ29uQ2xvc2UnLCAnb25Nb250aENoYW5nZScsICdvblllYXJDaGFuZ2UnLCAnb25SZWFkeScsICdvblZhbHVlVXBkYXRlJywgJ29uRGF5Q3JlYXRlJ107XG5cbnZhciBEYXRlVGltZVBpY2tlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXRlVGltZVBpY2tlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVUaW1lUGlja2VyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRGF0ZVRpbWVQaWNrZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEYXRlVGltZVBpY2tlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVUaW1lUGlja2VyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuXG4gICAgICB2YXIgcHJldk9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XG5cbiAgICAgIC8vIEFkZCBwcm9wIGhvb2tzIHRvIG9wdGlvbnNcbiAgICAgIGhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGhvb2spKSB7XG4gICAgICAgICAgb3B0aW9uc1tob29rXSA9IHByb3BzW2hvb2tdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBwcmV2IG9uZXMgdG9vIHNvIHdlIGNhbiBjb21wYXJlIGFnYWluc3QgdGhlbSBsYXRlclxuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLmhhc093blByb3BlcnR5KGhvb2spKSB7XG4gICAgICAgICAgcHJldk9wdGlvbnNbaG9va10gPSBfdGhpczIucHJvcHNbaG9va107XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgb3B0aW9uc0tleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcHRpb25zKTtcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSBvcHRpb25zS2V5cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgIHZhciBrZXkgPSBvcHRpb25zS2V5c1tpbmRleF07XG4gICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IHByZXZPcHRpb25zW2tleV0pIHtcbiAgICAgICAgICAvLyBIb29rIGhhbmRsZXJzIG11c3QgYmUgc2V0IGFzIGFuIGFycmF5XG4gICAgICAgICAgaWYgKGhvb2tzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5mbGF0cGlja3Iuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBwcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLmZsYXRwaWNrci5zZXREYXRlKHByb3BzLnZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHtcbiAgICAgICAgICBfdGhpczMubm9kZS5ibHVyICYmIF90aGlzMy5ub2RlLmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5wcm9wcy5vcHRpb25zKTtcblxuICAgICAgLy8gQWRkIHByb3AgaG9va3MgdG8gb3B0aW9uc1xuICAgICAgaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICBpZiAoX3RoaXMzLnByb3BzW2hvb2tdKSB7XG4gICAgICAgICAgb3B0aW9uc1tob29rXSA9IF90aGlzMy5wcm9wc1tob29rXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmxhdHBpY2tyID0gbmV3IF9mbGF0cGlja3IyLmRlZmF1bHQodGhpcy5ub2RlLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3Iuc2V0RGF0ZSh0aGlzLnByb3BzLnZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZmxhdHBpY2tyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcHRpb25zID0gX3Byb3BzLm9wdGlvbnMsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gX3Byb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb3B0aW9ucycsICdkZWZhdWx0VmFsdWUnLCAndmFsdWUnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICAgIC8vIERvbid0IHBhc3MgaG9va3MgdG8gZG9tIG5vZGVcblxuXG4gICAgICBob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wc1tob29rXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gb3B0aW9ucy53cmFwID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgX3RoaXM0Lm5vZGUgPSBub2RlO1xuICAgICAgICAgIH0gfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIHByb3BzLCB7IGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgX3RoaXM0Lm5vZGUgPSBub2RlO1xuICAgICAgICB9IH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVRpbWVQaWNrZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5EYXRlVGltZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk1vbnRoQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uWWVhckNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlYWR5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uVmFsdWVVcGRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25EYXlDcmVhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSwgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5EYXRlVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHt9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRGF0ZVRpbWVQaWNrZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xudmFyIGRpdiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQuYmluZChSZWFjdCwgJ2RpdicpO1xudmFyIGlmcmFtZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQuYmluZChSZWFjdCwgJ2lmcmFtZScpO1xuXG52YXIgZGl2U3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBoZWlnaHQ6IDAsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgbWF4V2lkdGg6ICcxMDAlJ1xufTtcblxudmFyIGlmcmFtZVN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xuXG4gIC8qXG4gICAqICBUdXJuIGAxNjo5YCBpbnRvIGA5IC8gMTZgIGludG8gYDU2LjI1JWBcbiAgICogIFR1cm4gYDQ6M2AgaW50byBgMyAvIDRgIGludG8gYDc1JWBcbiAgICovXG59O3ZhciByYXRpb1RvUGVyY2VudCA9IGZ1bmN0aW9uIHJhdGlvVG9QZXJjZW50KHJhdGlvKSB7XG4gIHZhciBfcmF0aW8kc3BsaXQkbWFwID0gcmF0aW8uc3BsaXQoJzonKS5tYXAoZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiBOdW1iZXIobnVtKTtcbiAgfSksXG4gICAgICBfcmF0aW8kc3BsaXQkbWFwMiA9IF9zbGljZWRUb0FycmF5KF9yYXRpbyRzcGxpdCRtYXAsIDIpLFxuICAgICAgdyA9IF9yYXRpbyRzcGxpdCRtYXAyWzBdLFxuICAgICAgaCA9IF9yYXRpbyRzcGxpdCRtYXAyWzFdO1xuXG4gIHJldHVybiBoIC8gdyAqIDEwMCArICclJztcbn07XG5cbi8qXG4gKiAgVXNhZ2U6IDxSZXNwb25zaXZlRW1iZWQgc3JjPSdhY2UgeW91dHViZSB2aWRlbycgcmF0aW89JzQ6MycgLz5cbiAqL1xudmFyIFJlc3BvbnNpdmVFbWJlZCA9IGZ1bmN0aW9uIFJlc3BvbnNpdmVFbWJlZChwcm9wcykge1xuICB2YXIgcGFkZGluZ0JvdHRvbSA9IHJhdGlvVG9QZXJjZW50KHByb3BzLnJhdGlvKTtcbiAgdmFyIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgZGl2U3R5bGUsIHsgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvdHRvbSB9KTtcbiAgdmFyIGlmcmFtZVByb3BzID0gT2JqZWN0LmFzc2lnbih7IGZyYW1lQm9yZGVyOiAwIH0sIHByb3BzLCB7IHN0eWxlOiBpZnJhbWVTdHlsZSB9KTtcbiAgZGVsZXRlIGlmcmFtZVByb3BzLnJhdGlvO1xuICByZXR1cm4gZGl2KHsgc3R5bGU6IHN0eWxlIH0sIGlmcmFtZShpZnJhbWVQcm9wcykpO1xufTtcblxuUmVzcG9uc2l2ZUVtYmVkLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZFF3NHc5V2dYY1EnLFxuICByYXRpbzogJzE2OjknXG59O1xuXG5SZXNwb25zaXZlRW1iZWQucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJhdGlvOiBmdW5jdGlvbiByYXRpbyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAoIS9cXGQrOlxcZCsvLnRlc3QocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCByYXRpbyBzdXBwbGllZCB0byBSZXNwb25zaXZlRW1iZWQuIEV4cGVjdGVkIGEgc3RyaW5nIGxpa2UgXCIxNjo5XCIgb3IgYW55IDIgbnVtYmVycyBzZXBlcmF0ZWQgYnkgYSBjb2xvbicpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zaXZlRW1iZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiXSwic291cmNlUm9vdCI6IiJ9