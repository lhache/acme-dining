import React from 'react';
import ReactDOM from 'react-dom';
import { withApollo } from 'react-apollo';
import { client } from '../index';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CategoryList } from './CategoryList';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<CategoryList />);
  expect(wrapper).toMatchSnapshot();
});
