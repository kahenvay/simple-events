<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://tredny.com
 * @since             1.0.0
 * @package           Tdy_Se
 *
 * @wordpress-plugin
 * Plugin Name:       Tredny Events
 * Plugin URI:        https://github.com/kahenvay/simple-events
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Ulysse Coates
 * Author URI:        https://tredny.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       tdy-se
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
} 

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'TREDNY_EVENTS_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-tdy-se-activator.php
 */
function activate_tdy_se() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-tdy-se-activator.php';
	Tdy_Se_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-tdy-se-deactivator.php
 */
function deactivate_tdy_se() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-tdy-se-deactivator.php';
	Tdy_Se_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_tdy_se' );
register_deactivation_hook( __FILE__, 'deactivate_tdy_se' );


/**
* Register Custom Event
*/
function tdy_se_custom_post_type() {

		$labels = array(
			'name'                  => _x( 'Events', 'Event General Name', 'tdy_se_text_domain' ),
			'singular_name'         => _x( 'Event', 'Event Singular Name', 'tdy_se_text_domain' ),
			'menu_name'             => __( 'Events', 'tdy_se_text_domain' ),
			'name_admin_bar'        => __( 'Event', 'tdy_se_text_domain' ),
			'archives'              => __( 'Event Archives', 'tdy_se_text_domain' ),
			'attributes'            => __( 'Event Attributes', 'tdy_se_text_domain' ),
			'parent_item_colon'     => __( 'Parent Event:', 'tdy_se_text_domain' ),
			'all_items'             => __( 'All Events', 'tdy_se_text_domain' ),
			'add_new_item'          => __( 'Add New Event', 'tdy_se_text_domain' ),
			'add_new'               => __( 'Add New', 'tdy_se_text_domain' ),
			'new_item'              => __( 'New Event', 'tdy_se_text_domain' ),
			'edit_item'             => __( 'Edit Event', 'tdy_se_text_domain' ),
			'update_item'           => __( 'Update Event', 'tdy_se_text_domain' ),
			'view_item'             => __( 'View Event', 'tdy_se_text_domain' ),
			'view_items'            => __( 'View Events', 'tdy_se_text_domain' ),
			'search_items'          => __( 'Search Event', 'tdy_se_text_domain' ),
			'not_found'             => __( 'Not found', 'tdy_se_text_domain' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'tdy_se_text_domain' ),
			'featured_image'        => __( 'Featured Image', 'tdy_se_text_domain' ),
			'set_featured_image'    => __( 'Set featured image', 'tdy_se_text_domain' ),
			'remove_featured_image' => __( 'Remove featured image', 'tdy_se_text_domain' ),
			'use_featured_image'    => __( 'Use as featured image', 'tdy_se_text_domain' ),
			'insert_into_item'      => __( 'Insert into item', 'tdy_se_text_domain' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'tdy_se_text_domain' ),
			'items_list'            => __( 'Events list', 'tdy_se_text_domain' ),
			'items_list_navigation' => __( 'Events list navigation', 'tdy_se_text_domain' ),
			'filter_items_list'     => __( 'Filter items list', 'tdy_se_text_domain' ),
		);

		if (defined('TDY_PA_PAGE_BLOCK')) {
		  $template_array = array(
		  	array( 'tdy-se/editor' ), array( TDY_PA_PAGE_BLOCK )
		  );
		} else {
			$template_array = array('tdy-se/editor');
		}

		// // print_r($template_array);
		// // echo TDY_PA_PAGE_BLOCK;
		// // print_r (defined(TDY_PA_PAGE_BLOCK));

		$args = array(
			'label'                 => __( 'Event', 'tdy_se_text_domain' ),
			'description'           => __( 'Event Description', 'tdy_se_text_domain' ),
			'labels'                => $labels,
			'supports'              => array( 'editor', 'title', 'revisions', 'page-attributes', 'custom-fields' ),
			'taxonomies'            => array( 'category', 'post_tag' ),
			'hierarchical'          => true,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'show_in_rest' 					=> true,
			'template' 							=> $template_array,
			// 'template_lock' 				=> 'all',
			'menu_position'         => 5,
			'menu_icon'							=> 'dashicons-calendar-alt',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'page',
		);
		register_post_type( 'tdy_events', $args );

	}
add_action( 'init', 'tdy_se_custom_post_type' );

// add_filter( 'gutenberg_can_edit_post_type', function( $can_edit, $post_type ){
//     if ( $can_edit && 'tdy_events' === $post_type ) {
//         return false;
//     }
//     return $can_edit;
// }, 20, 2 );

function tdy_se_meta_gutenberg_my_block_init() {
    register_meta( 'post', 'tdy_se_start_date', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_end_date', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_location', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_main_title', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_main_description', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_sub_title', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_sub_description', array(
        'show_in_rest' => true,
        'single' => true, 
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_third_description', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_photo_url', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_photo_alt', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_photo_id', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
    register_meta( 'post', 'tdy_se_youtube_url', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ) );
}
add_action( 'init', 'tdy_se_meta_gutenberg_my_block_init' );

/* Here was php metabox version */


/**
* Rest API
*/
require_once 'rest_endpoint.php'; 

/**
* Pagination
*/

function tdy_se_pagination_bar( $custom_query ) {

    $total_pages = $custom_query->max_num_pages;
    $big = 999999999; // need an unlikely integer

    if ($total_pages > 1){
        $current_page = max(1, get_query_var('paged'));

        echo paginate_links(array(
            'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
            'format' => '?paged=%#%',
            'current' => $current_page,
            'total' => $total_pages,
        ));
    }
}




/**
* Gutenberg Blocks
*/

/*Page*/

require_once 'page-block-render.php';

function tdy_se_my_register_page() {

  // Register our block script with WordPress
  wp_register_script(
    'tdy-se-page-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Register our block's base CSS  
  wp_register_style(
    'tdy-se-page-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'tdy-se-page-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('tdy-se/page', array(
  	'render_callback' => 'tdy_se_page_callback',
    'editor_script' => 'tdy-se-page-js',
    'editor_style' => 'tdy-se-page-edit-style',
    'style' => 'tdy-se-page-style'
  ));

  // register_meta( 'post', 'location', array(
  //       'show_in_rest' => true,
  //   ) );
}

add_action('init', 'tdy_se_my_register_page');


/* Editor */

require_once 'editor-block-render.php';

function tdy_se_my_register_editor() {

	//trying to register block only for this CPT
	global $typenow;
	if( $typenow == 'tdy_events' ) {
  
	  // Register our block script with WordPress
	  wp_register_script(
	    'tdy-se-editor-js',
	    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
	    array('wp-blocks', 'wp-element')
	  );

	  // Register our block's base CSS  
	  wp_register_style(
	    'tdy-se-editor-style',
	    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
	    array( 'wp-blocks' )
	  );
	  
	  // Register our block's editor-specific CSS
	  wp_register_style(
	    'tdy-se-editor-edit-style',
	    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
	    array( 'wp-edit-blocks' )
	  );  
	  
	  // Enqueue the script in the editor
	  register_block_type('tdy-se/editor', array(
	  	'render_callback' => 'tdy_se_editor_callback',
	    'editor_script' => 'tdy-se-editor-js',
	    'editor_style' => 'tdy-se-editor-edit-style',
	    'style' => 'tdy-se-editor-style'
	  ));

	  // register_meta( 'post', 'location', array(
	  //       'show_in_rest' => true,
	  //   ) );
	}
} 

add_action('init', 'tdy_se_my_register_editor');

// /**
// * Hiding editor block from page inse
// */
// function tdy_se_allowed_block_types( $allowed_block_types, $post ) {
//     if ( $post->post_type !== 'post' ) {
//     		print_r($allowed_block_types);
//     		echo 'BANANA  ' . $allowed_block_types ;
//         return $allowed_block_types;
//     }
//     return array( 'core/paragraph' );
// }

// add_filter( 'allowed_block_types', 'tdy_se_allowed_block_types', 10, 2 );


/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-tdy-se.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_tdy_se() {

	$plugin = new Tdy_Se();
	$plugin->run();

}
run_tdy_se();
