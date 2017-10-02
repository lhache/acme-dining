import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Product from './Product';
import { withApollo } from 'react-apollo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const product = {
  title: 'title',
  description: 'description'
}

it('renders without crashing', () => {
  const wrapper = shallow(<Product product={product} />)
  expect(wrapper).toMatchSnapshot();
});

it('renders with proper props', () => {
  const wrapper = shallow(<Product product={product} />)
  const inst = wrapper.instance();
  expect(inst.props.product).toBe(product)
});

it('should have the title with normal font style', () => {
  // meaning not bold
})

it('should have the description hidden', () => {

})

it('has default showDescription state equal to false', () => {
  const wrapper = shallow(<Product product={product} />)
  expect(wrapper.state().showDescription).toBe(false);
});

it('shows the description when the element is cliked', () => {

})

it('shows the title in bold when the element is cliked', () => {

})
