

/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// import { EventSelect } from './components/EventSelect';
// import { EventPreview } from './components/EventPreview';
// import 'flatpickr/dist/themes/material_green.min.css'
import Flatpickr from 'react-flatpickr';
import ResponsiveEmbed from 'react-responsive-embed';
import * as utils from './../utils'
// import { VLRichText } from './components/VLRichText';

const {MediaUpload, PlainText, RichText} = wp.editor;
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType, InspectorControls} = wp.blocks; // Import registerBlockType() from wp.blocks
const {apiRequest} = wp;
const {Button, /*TextControl, TextareaControl*/ } = wp.components;


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

registerBlockType('vl/editor', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Tredny Event Editor'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Tredny Event Editor'),
		__('Calendar'),
	],
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
		},


	},

	/**
	* The edit function describes the structure of your block in the context of the editor.
	* This represents what the editor will render when the block is used.
	*
	* The "edit" property must be a valid function.
	*
	* @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	*/
	edit: function(props) {
		// Creates a <p class='wp-block-cgb-main'></p>.

		const {attributes: {tdy_se_start_date, tdy_se_end_date, tdy_se_location, tdy_se_main_title, tdy_se_main_description, tdy_se_sub_title, tdy_se_sub_description, tdy_se_third_description, tdy_se_photo_url, tdy_se_photo_alt, tdy_se_photo_id, tdy_se_youtube_url}, setAttributes} = props;



		const getImageButton = (openEvent) => {
			if (tdy_se_photo_url) {
				return (
					<img src={ tdy_se_photo_url } onClick={ openEvent } className="image" />
					);
			} else {
				return (
					<div className="button-container">
       <Button onClick={ openEvent } className="button button-large">
         Pick an image
       </Button>
     </div>
					);
			}
		};

		const onMediaSelect = (media) => {
			setAttributes({
				tdy_se_photo_alt: media.alt,
				tdy_se_photo_url: media.url
			});
		}

		//Not dry but can't seem to find a solution, no retrievable events fired?
		const handleMainDescriptionChange = (content) => {
			setAttributes({
				// tdy_se_main_description: JSON.stringify(content)
				tdy_se_main_description: content[0]
			})
		}

		const handleSubDescriptionChange = (content) => {
			setAttributes({
				// tdy_se_main_description: JSON.stringify(content)
				tdy_se_sub_description: content[0]
			})
		}

		// 
		return (
			// dateFormat: 'DD, d MM, yy',
			// altFormat: "yymmdd",
			<div className={ props.className }>
     <h2> Event Details </h2>
     <MediaUpload onSelect={ onMediaSelect } type="image" value={ tdy_se_photo_id } render={ ({open}) => getImageButton(open) } />
     <PlainText onChange={ content => setAttributes({
                           	tdy_se_main_title: content
                           }) } value={ tdy_se_main_title } placeholder="Primary title for the event..." className="heading" />
     <RichText label="Text" help="Enter some text" value={ tdy_se_main_description } placeholder="Primary description about the event..." onChange={ handleMainDescriptionChange } />
     <RichText label="Text" help="Enter some text" value={ tdy_se_sub_description } placeholder="Sencondary description about the event..." onChange={ handleSubDescriptionChange } />
     <PlainText onChange={ content => setAttributes({
                           	tdy_se_sub_title: content
                           }) } value={ tdy_se_sub_title } placeholder="Sencondary title for the event..." />
   </div>
			);
	},


	// actualy use native embed
	// <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' ratio='16:9' />



	/**
	* The save function defines the way in which the different attributes should be combined
	* into the final markup, which is then serialized by Gutenberg into post_content.
	*
	* The "save" property must be specified and must be a valid function.
	*
	* @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	*/
	save: function(props) {
		const {attributes: {pastOrUpcoming, howManyEvents}, setAttributes} = props;
		return null;
	},
});
