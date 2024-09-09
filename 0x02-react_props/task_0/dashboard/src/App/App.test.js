import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe("test tree component", () => {
	it('test number one', () => {
		const component = shallow(<App />);
		expect(component).toBeDefined();
	});

	it('test number two', () => {
		const component = shallow(<App />);
		expect(component.find('.App-header')).toBeDefined();
	});

	it('test number tree', () => {
		const component = shallow(<App />);
		expect(component.find('.App-body')).toBeDefined();
	});

	it('test number foor', () => {
		const component = shallow(<App />);
		expect(component.find('App-footer')).toBeDefined();
	})
})
