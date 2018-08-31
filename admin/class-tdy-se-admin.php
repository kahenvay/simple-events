<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://tredny.com
 * @since      1.0.0
 *
 * @package    Tdy_Se
 * @subpackage Tdy_Se/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Tdy_Se
 * @subpackage Tdy_Se/admin
 * @author     Ulysse Coates <u.coates@gmail.com>
 */
class Tdy_Se_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tdy_Se_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tdy_Se_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		global $typenow;
		if( $typenow == 'tdy_events' ) {
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/tdy-se-admin.css', array(), $this->version, 'all' );
			wp_enqueue_style( 'jquery.ui.theme', plugin_dir_url( __FILE__ ) . '/css/datepicker.css', array(), $this->version, 'all' );
		} 

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tdy_Se_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tdy_Se_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		global $typenow;
		if( $typenow == 'tdy_events' ) {
			wp_enqueue_script( 'jquery-ui-datepicker' );
			wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/tdy-se-admin.js', array( 'jquery' ), $this->version, false );
		}

	}

}
