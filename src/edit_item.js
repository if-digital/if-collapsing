/**
 * Retrieves the translation
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 **/
 import { useSelect } from '@wordpress/data';
 import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
 import { useInstanceId } from "@wordpress/compose";
 import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';
 import { useState } from '@wordpress/element';


/**
 * Import styling
 */
import './editor.scss';

/**
 * React hook
 */
import { useBlockProps } from '@wordpress/block-editor';


const input = '';
/**
 * Edit
*/
export default function Edit( { clientId, attributes, isSelected, setAttributes } ) {

  const attr = (clientId);
  const instanceId = useInstanceId(Edit);
  const blockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ) );
  const blockCountLenght = blockCount.length;
	const { title, collapsing_item_id } = attributes;
	setAttributes({ collapsing_item_id: instanceId });

  return (
    <div {...useBlockProps()}>

      <input type="radio" id={`wp-block-ifdigital-if-collapsing-item-id-${collapsing_item_id}`} name="tab-group" />

      <label for={`wp-block-ifdigital-if-collapsing-item-id-${collapsing_item_id}`}>
        <RichText key="editable"
          tagName="span"
          placeholder="Title"
          value={ attributes.collapsing_item_title }
          onChange={ ( val_collapsing_item_title ) => setAttributes({ collapsing_item_title: val_collapsing_item_title }) }
        />
      </label>

      <div class="wp-block-ifdigital-if-collapsing-item-content">
        <InnerBlocks />
      </div>

    </div>
  );
}
