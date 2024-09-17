import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('test header', () => {
	it('render without crashing', () => {
		const wr = shallow(<Header />);
		expect(wr.exists()).toEqual(true);
	});

	it('render an img correctly', () => {
		const wr = shallow(<Header />);
		expect(wr.exists('img')).toEqual(true);
		expect(wr.conatinsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
	});
})
