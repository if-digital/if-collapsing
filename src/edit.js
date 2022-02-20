/**
 * Retrieves the translation
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useSelect } from '@wordpress/data';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Import styling
 */
import './editor.scss';

/**
 * Const
 */
const MY_TEMPLATE = [
	[ 'ifdigital/if-collapsing-item', {} ]
]


/**
 * Edit renderer
 */
export default function Edit( { clientId, attributes, isSelected, setAttributes } ) {

	/**
	* count
	**/
	const attr = (clientId);
	const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks );
	const innerBlockCountLenght = innerBlockCount.length;
	setAttributes({ collapsing_count: innerBlockCountLenght })

	const appenderToUse = () => {
		if ( innerBlockCount.length < 5 ) {
			return (
				<InnerBlocks.ButtonBlockAppender/>
			);
		} else {
			return false;
		}
	}

	return (
		<div { ...useBlockProps() } data-view={ attributes.collapsing_typ } data-items={ innerBlockCountLenght }>
			<InspectorControls>
				<PanelBody title="Typ" initialOpen={ true }>
					<PanelRow>
						<SelectControl
							label="Darstellungsform"
							value={ attributes.collapsing_typ }
							options={ [
									{ label: 'Accordions', value: 'is-style-accordions' },
									{ label: 'Tabs', value: 'is-style-tabs' },
							] }
							onChange={ ( val_collapsing_typ ) => setAttributes({ collapsing_typ: val_collapsing_typ }) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

      <InnerBlocks
        template={MY_TEMPLATE}
        allowedBlocks={ ['ifdigital/if-collapsing-item'] }
				renderAppender={ () => appenderToUse() }
      />

		</div>
	);
}
