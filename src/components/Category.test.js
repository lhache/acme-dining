import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { withApollo } from 'react-apollo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Category from './Category';

configure({ adapter: new Adapter() });

const category = {
  name: 'name'
}

it('renders without crashing', () => {
  const wrapper = shallow(<Category category={category} />)
  expect(wrapper).toMatchSnapshot();
});

it('renders with proper props', () => {
  const wrapper = shallow(<Category category={category} />)
  const inst = wrapper.instance();
  expect(inst.props.category).toBe(category)
});
