/**
 * Registers
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Import styling
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import edit_item from './edit_item';
import save_item from './save_item';

/**
 * Block definition
 */
registerBlockType('ifdigital/if-collapsing', {
  title: 'Tab / Accordion',
  // attributes
  attributes: {
   collapsing_typ: {
     type: 'string',
     default: 'is-style-accordions'
   },
   collapsing_count: {
     type: 'number',
   },
  },

	/**
	 * @see ./edit.js
	 */
	edit: edit,

	/**
	 * @see ./save.js
	 */
	save: save,
});

registerBlockType('ifdigital/if-collapsing-item', {
  title: 'Tab / Accordion Panel',

  // parent block
  parent: [ 'ifdigital/if-collapsing' ],

  // attributes
  attributes: {
   collapsing_item_title: {
     type: 'string',
   },
   collapsing_item_id: {
     type: 'number',
   },
  },

	/**
	 * @see ./edit_item.js
	 */
	edit: edit_item,

	/**
	 * @see ./save_item.js
	 */
	save: save_item,
});
