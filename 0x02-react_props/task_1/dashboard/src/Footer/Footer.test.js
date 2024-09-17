import shallow from 'enzyme';
import React from 'react';
import Footer from './Footer';
import { getFullYear, getFooterCopy} from '../utils/utils';



describe('a bunch of hoes', () => {
	it('test one', () => {
		cont vr = shallow(<Footer />);
		expect(vr.exist()).toEqual(true);
	});

	it('a bunch of hoes to ', () => {
		const vr = shallow(<Footer />);
		expect(vr.text(
			${`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}
		));
	});
})
