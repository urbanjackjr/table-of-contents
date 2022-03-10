import { useBlockProps } from '@wordpress/block-editor';

import { headings } from "./TOC";

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save({
		className: 'table-of-contents'
	})

	return (
		<div {...blockProps}>
			<h4>Spis treści</h4>
			<ol>
				{ headings(attributes.message) }
			</ol>
		</div>
	);
}
