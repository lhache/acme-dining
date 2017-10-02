import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { withApollo } from 'react-apollo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

const search = () => {
  return true;
}

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<Search search={search} />)
  expect(wrapper).toMatchSnapshot();
});

it('has the default text state as empty string', () => {
  const wrapper = shallow(<Search search={search} />)
  expect(wrapper.state().text).toBe('');
});

it('has the props search of type function', () => {
  const wrapper = shallow(<Search search={search} />)
  const instance = wrapper.instance()
  expect(instance.props.search).toBeTruthy()

});

it('has the text state changing when there is a change on the input', () => {
  const wrapper = shallow(<Search search={search} />)


});

it('calls _handleSubmit on form submit', () => {

  const wrapper = shallow(<Search search={search} />)
  const _handleSubmit = jest.fn()
  wrapper._handleSubmit = _handleSubmit

  wrapper.find('button').simulate('click');
  expect(wrapper._handleSubmit).toHaveBeenCalled()


});
