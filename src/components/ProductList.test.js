import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductList from './ProductList'

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<ProductList />)
  expect(wrapper).toMatchSnapshot();
});
