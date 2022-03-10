import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('create-block/table-of-contents', {
	edit: Edit,
	
	save,
});
