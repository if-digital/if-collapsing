<?php
/**
 * Plugin Name:       IF.COLLAPSING
 * Description:       Easy to build Tabs or Accordions by using this Gutenberg Block. No Javascript, only pure CSS.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            IF.DIGITAL GmbH
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       if-collapsing
 *
 * @package           ifdigital
 */

/**
 * Registers the block
*/
function ifdigital_if_collapsing_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ifdigital_if_collapsing_block_init' );
