import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from '../components/Filter';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

test('Filter should match snapshot', () => {
  const component = renderer.create(
    <Wrapper>
      <Filter />
    </Wrapper>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Filter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Filter />
      </Wrapper>,
    );
  });
  it('is receiving and running JS', () => {
    expect(2 + 3).toEqual(5);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('The default value for filter is Filter by Exchange', () => {
    expect(wrapper.find('option').first().text()).toEqual(
      ' Filter by Exchange ',
    );
  });

  it('has an option to reset filters', () => {
    expect(wrapper.find({ value: 'Reset filters' }).text()).not.toBeNull();
  });

  it('has a filter for NASDAQ exchange', () => {
    expect(wrapper.find({ value: 'NASDAQ' }).text()).toEqual('NASDAQ');
  });

  it('has a filter for NYSE exchange', () => {
    expect(wrapper.find({ value: 'NYSE' }).text()).toEqual('NYSE');
  });

  it('has a filter for Other exchange', () => {
    expect(wrapper.find({ value: 'Other' }).text()).toEqual('Other');
  });
});
