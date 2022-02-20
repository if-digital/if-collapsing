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
export default function Edit( { attributes, isSelected, setAttributes } ) {

  const instanceId = useInstanceId(Edit);
	const { title, collapsing_item_id } = attributes;
	setAttributes({ collapsing_item_id: instanceId });

  if ( collapsing_item_id == 0 ) {

    return (
      <div {...useBlockProps()}>

        <input checked type="radio" id={`wp-block-ifdigital-if-collapsing-item-id-${collapsing_item_id}`} name="tab-group" />

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

  } else {

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
}
