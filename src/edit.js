import { useBlockProps } from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

import { headings } from "./TOC";

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const setTableAttribute = () => {
		const data = wp.data.select( 'core/block-editor' );
		const blocks = data.getBlocks();
		const headArray = [];
		const headings = blocks.map( ( item, index ) => {
			if ( item.name === 'core/heading' && item.attributes.level === 2 ) {
				var hashslug = '#' + item.attributes.content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\ł/g, 'l').replace(/\s+/g, '-').replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
				headArray.push([item.attributes.content, hashslug]);
			}
		} );
		return headArray;
	}

	useEffect(() => {
		setAttributes( {message: setTableAttribute()} )
	}, []);

	const blockProps = useBlockProps({
		className: 'table-of-contents'
	})

	return (
		<div {...blockProps}>
			<h4>Spis treści</h4>
			<ol>
				{ headings(attributes.message) }
			</ol>
		</div>
	)
}
