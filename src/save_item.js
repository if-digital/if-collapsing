/**
 * Retrieves the translation
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 **/
import { InnerBlocks } from '@wordpress/block-editor';
import { useInstanceId } from "@wordpress/compose";

/**
 * React hook
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Save
 */
export default function save( props ) {
	const label = '<label>';

	if(props.attributes.collapsing_item_id == 0 ){
		return (
			<div {...useBlockProps.save()}>
				<input checked aria-roledescription="tab" type="radio" id={`wp-block-ifdigital-if-collapsing-item-id-${props.attributes.collapsing_item_id}`} name="tab-group" />
				<label role="tab" for={`wp-block-ifdigital-if-collapsing-item-id-${props.attributes.collapsing_item_id}`}>{props.attributes.collapsing_item_title}</label>
				<div class="wp-block-ifdigital-if-collapsing-item-content">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}else{
		return (
			<div {...useBlockProps.save()}>
				<input aria-roledescription="tab" type="radio" id={`wp-block-ifdigital-if-collapsing-item-id-${props.attributes.collapsing_item_id}`} name="tab-group" />
				<label role="tab" for={`wp-block-ifdigital-if-collapsing-item-id-${props.attributes.collapsing_item_id}`}>{props.attributes.collapsing_item_title}</label>
				<div class="wp-block-ifdigital-if-collapsing-item-content">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
}
