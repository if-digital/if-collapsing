/**
 * Retrieves the translation
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * React hook block
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save
 */
export default function save( props ) {
	return (
		<div {...useBlockProps.save()} data-view={ props.attributes.collapsing_typ } data-items={ props.attributes.collapsing_count }>

      <InnerBlocks.Content />

		</div>
	);
}
