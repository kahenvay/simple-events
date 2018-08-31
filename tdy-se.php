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
		$args = array(
			'label'                 => __( 'Event', 'tdy_se_text_domain' ),
			'description'           => __( 'Event Description', 'tdy_se_text_domain' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'revisions', 'page-attributes' ),
			'taxonomies'            => array( 'category', 'post_tag' ),
			'hierarchical'          => true,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'show_in_rest' 					=> true,
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

add_filter( 'gutenberg_can_edit_post_type', function( $can_edit, $post_type ){
    if ( $can_edit && 'tdy_events' === $post_type ) {
        return false;
    }
    return $can_edit;
}, 20, 2 );


add_filter('single_template', 'tdy_se_my_custom_template');
function tdy_se_my_custom_template($single) {

    global $post;

    /* Checks for single template by post type */
    if ( $post->post_type == 'tdy_events' ) {
        if ( file_exists( __DIR__ . '/public/partials/single-tdy_events.php' ) ) {
            return __DIR__ . '/public/partials/single-tdy_events.php';
        }
    }

    return $single;

}

add_filter( 'archive_template', 'tdy_se_get_custom_post_type_template' ) ;
function tdy_se_get_custom_post_type_template($archive) {

    global $post;

    /* Checks for archive template by post type */
    if ( $post->post_type == 'tdy_events' ) {
        if ( file_exists( __DIR__ . '/public/partials/archive-tdy_events.php' ) ) {
            return __DIR__ . '/public/partials/archive-tdy_events.php';
        }
    }

    return $archive;

}

/**
* Adding Meta Boxes
*/
function tdy_se_add_meta_custom_box(){
  $screens = ['tdy_events'];
  foreach ($screens as $screen) {
    add_meta_box(
      'tdy_se_date',          	// Unique ID
      __( 'Event Details', 'tdy_se_text_domain'),   	// Box title
      'tdy_se_add_meta_custom_box_html',  // Content callback, must be of type callable
      $screen,                   // Post type
      'advanced',
      'high'
    );
  }
}
add_action( 'add_meta_boxes', 'tdy_se_add_meta_custom_box' );

/**
 * Outputs the content of the meta box
 */
function tdy_se_add_meta_custom_box_html($post){

	global $post;

	wp_nonce_field( basename( __FILE__ ), 'tdy_meta_nonce' );

	$meta_data = get_post_meta(get_the_ID());

	$date = '';
	$location = '';
	$description = '';
	$photoString = '';

	if ($meta_data) {
		if ($meta_data['_tdy_se_date_meta'] && $meta_data['_tdy_se_date_meta'][0]) {
			$date = $meta_data['_tdy_se_date_meta'][0];
			$showDate = date("l, d F, Y", strtotime($date));
		}
		
	  if ($meta_data['_tdy_se_location_meta'] && $meta_data['_tdy_se_location_meta'][0]) {
	  	$location = $meta_data['_tdy_se_location_meta'][0];
	  }
	  
	  if ($meta_data['_tdy_se_description_meta'] && $meta_data['_tdy_se_description_meta'][0]) {
	  	$description = $meta_data['_tdy_se_description_meta'][0];
	  }
	  
	  if ($meta_data['_tdy_se_photo_meta'] && $meta_data['_tdy_se_photo_meta'][0] ) {
	  	$photoString = $meta_data['_tdy_se_photo_meta'][0];
	  	$photoArray = json_decode($photoString);
	  	$photoSrc = $photoArray[0]->src;
	  }
	  
	}

	?>

	<!-- Date text  -->
	<fieldset>
      <label for="_tdy_se_date_meta"><?php _e('Event Date', 'tdy_se_text_domain');?></label>
      <input type="text" class="regular-text datepicker" id="show_tdy_se_date_meta" name="show_tdy_se_date_meta" value="<?php if(!empty($showDate)) echo $showDate; ?>"/>
      <input type="hidden" class="regular-text datepicker" id="_tdy_se_date_meta" name="_tdy_se_date_meta" value="<?php if(!empty($date)) echo $date; ?>"/>
  </fieldset>

  <!-- Location text  -->
  <fieldset>
      <label for="_tdy_se_location_meta"><?php _e('Location', 'tdy_se_text_domain');?></label>
      <input type="text" class="regular-text" id="_tdy_se_location_meta" name="_tdy_se_location_meta" value="<?php if(!empty($location)) echo $location; ?>"/>
  </fieldset>

  <!-- Details text  -->
  <fieldset>
      <label for="_tdy_se_description_meta"><?php _e('Event Description', 'tdy_se_text_domain');?></label>
      <?php wp_editor($description, '_tdy_se_description_meta'); ?>
  </fieldset>


  <!-- Photos Upload  -->
  <fieldset>
      <label for="_tdy_se_photo_meta">
          <input type="hidden" id="_tdy_se_photo_meta" name="_tdy_se_photo_meta" value='<?php if(!empty($photoString)) echo $photoString; ?>' />
          <input id="upload_photos_button" type="button" class="button" value="<?php _e( 'Upload Event Photo', 'tdy_se_text_domain'); ?>" />
          <span><?php esc_attr_e('Event Photo', 'tdy_se_text_domain');?></span>
      </label>
      <?php if(!empty($photoString)): ?>
      <div class="tdy-se-upload-wrapper">
		     <div id="upload_photos_preview" class="tdy-se-upload-preview">
		        <img src="<?php echo $photoSrc; ?>" />
		     </div>
      </div>
      <?php endif; ?>
      <button id="tdy-se-delete_photos_button" class="tdy-se-delete-image">Remove all photos</button>
  </fieldset>
  <?php
}

/**
 * Saves the custom meta input
 */
function tdy_se_meta_save( $post_id ) {
 
    // Checks save status
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'tdy_meta_nonce' ] ) && wp_verify_nonce( $_POST[ 'tdy_meta_nonce' ], basename( __FILE__ ) ) ) ? 'true' : 'false';
 
    // Exits script depending on save status
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }
 
    // Checks for input and sanitizes/saves if needed
    if( isset( $_POST[ '_tdy_se_date_meta' ] ) ) {
        update_post_meta( $post_id, '_tdy_se_date_meta', sanitize_text_field( $_POST[ '_tdy_se_date_meta' ] ) );
    }

    if( isset( $_POST[ '_tdy_se_location_meta' ] ) ) {
        update_post_meta( $post_id, '_tdy_se_location_meta', sanitize_text_field( $_POST[ '_tdy_se_location_meta' ] ) );
    }

    if( isset( $_POST[ '_tdy_se_description_meta' ] ) ) {
        update_post_meta( $post_id, '_tdy_se_description_meta', sanitize_text_field( $_POST[ '_tdy_se_description_meta' ] ) );
    }

    if( isset( $_POST[ '_tdy_se_photo_meta' ] ) ) {
        update_post_meta( $post_id, '_tdy_se_photo_meta', sanitize_text_field( $_POST[ '_tdy_se_photo_meta' ] ) );
    }
 
}
add_action( 'save_post', 'tdy_se_meta_save' );


/**
* Exposing meta data
*/

// REMOVE DUPLICATES AFTER TESTIGN
function filter_tdy_events_json( $data, $post, $context ) {

// $phone = get_post_meta( $post->ID, '_phone', true );
// if( $phone ) {
//     $data->data['phone'] = $phone;
// }

$meta_data = get_post_meta(get_the_ID());
$date = $meta_data['_tdy_se_date_meta'][0];
$location = $meta_data['_tdy_se_location_meta'][0];
$description = $meta_data['_tdy_se_description_meta'][0];
$photos = $meta_data['_tdy_se_photo_meta'][0];

if ($date) {
	 // $data->data['_tdy_se_date_meta'] = $date;
	 $data->data['date'] = $date;
}
if ($location) {
	 // $data->data['_tdy_se_location_meta'] = $location;
	 $data->data['location'] = $location;
}
if ($description) {
	 // $data->data['_tdy_se_description_meta'] = $description;
	 $data->data['description'] = $description;
}
if ($photos) {
	 // $data->data['_tdy_se_photo_meta'] = $photos;
	 $data->data['photo'] = $photos;
} 

return $data;
}
add_filter( 'rest_prepare_tdy_events', 'filter_tdy_events_json', 10, 3 );

if(!function_exists('tdy_se_add_query_meta')) {
  function tdy_se_add_query_meta($wp_query = "") {

      //return In case if wp_query is empty or postmeta already exist
      if( (empty($wp_query)) || (!empty($wp_query) && !empty($wp_query->posts) && isset($wp_query->posts[0]->postmeta)) ) { return $wp_query; }

      $sql = $postmeta = '';
      $post_ids = array();
      $post_ids = wp_list_pluck( $wp_query->posts, 'ID' );
      if(!empty($post_ids)) {
        global $wpdb;
        $post_ids = implode(',', $post_ids);
        $sql = "SELECT meta_key, meta_value, post_id FROM $wpdb->postmeta WHERE post_id IN ($post_ids)";
        $postmeta = $wpdb->get_results($sql, OBJECT);
        if(!empty($postmeta)) {
          foreach($wp_query->posts as $pKey => $pVal) {
            $wp_query->posts[$pKey]->postmeta = new StdClass();
            foreach($postmeta as $mKey => $mVal) {
              if($postmeta[$mKey]->post_id == $wp_query->posts[$pKey]->ID) {
                $newmeta[$mKey] = new stdClass();
                $newmeta[$mKey]->meta_key = $postmeta[$mKey]->meta_key;
                $newmeta[$mKey]->meta_value = maybe_unserialize($postmeta[$mKey]->meta_value);
                $wp_query->posts[$pKey]->postmeta = (array) array_merge((array) $wp_query->posts[$pKey]->postmeta, (array) $newmeta);
                unset($newmeta);
              }
            }
          }
        }
        unset($post_ids); unset($sql); unset($postmeta);
      }
      return $wp_query;
  }
}

/**
* Extra endpoint for upcoming events
*/

add_action( 'rest_api_init', function () {
  register_rest_route( 'tdy_events/v1', '/upcoming', array(
    'methods' => 'GET',
    'callback' => 'get_upcoming_events',
  ) );
} );

function get_upcoming_events( $data ) {
  $today = date('Ymd');
	$args = array(
	    'post_type' => 'tdy_events',
	    'posts_per_page' => '5',
	    'meta_key' => '_tdy_se_date_meta',
	    'orderby'           => 'meta_value_num',
	    'meta_query' => array(
	        array(
	            'key' => '_tdy_se_date_meta'
	        ),
	        array(
	            'key' => '_tdy_se_date_meta',
	            'value' => $today,
	            'compare' => '>='
	        )
	    ),
	    'orderby' => 'meta_value_num',
	    'order' => 'ASC'
	);

	$upcoming_events_querry = new WP_Query($args);


	if ( empty( $upcoming_events_querry ) ) {
    return new WP_Error( 'no_events', 'Couldn\'t find any upcoming events', array( 'status' => 404 ) );
  }

	// return $upcoming_events_querry;
	return tdy_se_add_query_meta($upcoming_events_querry)->posts;
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'tdy_events/v1', '/past', array(
    'methods' => 'GET',
    'callback' => 'get_past_events',
  ) );
} );

function get_past_events( $data ) {
  $today = date('Ymd');
	$args = array(
	    'post_type' => 'tdy_events',
	    'posts_per_page' => '5',
	    'meta_key' => '_tdy_se_date_meta',
	    'orderby'           => 'meta_value_num',
	    'meta_query' => array(
	        array(
	            'key' => '_tdy_se_date_meta'
	        ),
	        array(
	            'key' => '_tdy_se_date_meta',
	            'value' => $today,
	            'compare' => '<'
	        )
	    ),
	    'orderby' => 'meta_value_num',
	    'order' => 'ASC'
	);

	$past_events_querry = new WP_Query($args);


	if ( empty( $past_events_querry ) ) {
    return new WP_Error( 'no_events', 'Couldn\'t find any past events', array( 'status' => 404 ) );
  }

	// return $past_events_querry;
	return tdy_se_add_query_meta($past_events_querry)->posts;
}

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
* Gutenberg Block 
*/

require_once 'main-block-render.php';

function tdy_se_my_register_main() {

  // Register our block script with WordPress
  wp_register_script(
    'main',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Register our block's base CSS  
  wp_register_style(
    'main-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'main-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('tdy-se/main', array(
  	'render_callback' => 'tdy_se_main_callback',
    'editor_script' => 'main',
    'editor_style' => 'main-edit-style',
    'style' => 'main-style'
  ));

  // register_meta( 'post', 'location', array(
  //       'show_in_rest' => true,
  //   ) );
}

add_action('init', 'tdy_se_my_register_main');




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
