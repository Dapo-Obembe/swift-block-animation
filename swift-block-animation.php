<?php
/**
 * Plugin Name:       Swift Block Animations
 * Plugin URI:        https://github.com/Dapo-Obembe/swift-block-animation
 * Github Plugin URI: https://github.com/Dapo-Obembe/swift-block-animation
 * Description:       Add custom animation controls to core or custom WordPress blocks in the block editor.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Dapo Obembe
 * Author URI:        https://www.dapoobembe.com
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       swift-block-animation
 */

namespace SwiftBlockAnimation;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Load Swift Block Animation's textdomain.
 */
function swift_block_animation_load_textdomain() {
    load_plugin_textdomain(
        'swift-block-animation',
        false,
        dirname( plugin_basename( __FILE__ ) ) . '/languages'
    );
}
add_action( 'init', __NAMESPACE__ . '\swift_block_animation_load_textdomain' );


/**
 * Enqueue assets for the block editor.
 */
function swift_block_animation_block_editor_assets() {
    $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    wp_enqueue_script(
        'swift-block-animation-editor',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_style(
        'swift-block-animation-editor-style',
        plugin_dir_url( __FILE__ ) . 'build/style-index.css',
        [],
        $asset_file['version']
    );

}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ .'\swift_block_animation_block_editor_assets' );

/**
 * Enqueue assets for the frontend.
 */
function swift_block_animation_block_frontend_assets() {
      $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    wp_enqueue_script(
        'swift-block-animation-frontend',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    wp_enqueue_style(
        'swift-block-animation-style',
        plugin_dir_url( __FILE__ ) . 'build/style-index.css',
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
    );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ .'\swift_block_animation_block_frontend_assets' );
