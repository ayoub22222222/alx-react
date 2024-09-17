import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';


describe('describe the purpose of of this test', () => {
	it('part one', () => {
		const wr = shallow(<Login />);
		expect(wr.exists()).toEqual(true);
	});

	it('decription for the second test', () => {
		const wr = shallow(<Login />);
		expect(wr.find('label')).toHaveLenght(2);
		expect(wr.find('input')).toHaveLenght(2);
	});
})
