import React from 'react';
// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
});
