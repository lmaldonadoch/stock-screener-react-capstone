import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../containers/StocksForm';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

test('Form should match snapshot', () => {
  const component = renderer.create(
    <Wrapper>
      <Form />
    </Wrapper>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Form />
      </Wrapper>,
    );
  });
  it('is receiving and running JS', () => {
    expect(2 + 3).toEqual(5);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('starts with an empty input', () => {
    expect(wrapper.find('input').text()).toEqual('');
  });
});
