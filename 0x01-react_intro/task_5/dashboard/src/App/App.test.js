import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders App-header', () => {
  expect(wrapper.find('header.app-header').exists()).toEqual(true);
});
it('renders App-body', () => {
  expect(wrapper.find('main.app-body').exists()).toEqual(true);
});
it('renders App-footer', () => {
  expect(wrapper.find('footer.app-footer').exists()).toEqual(true);
});
