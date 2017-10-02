import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { withApollo } from 'react-apollo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot();
});
