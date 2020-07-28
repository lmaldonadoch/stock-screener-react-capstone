import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from '../components/Nav';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

test('Nav should match snapshot', () => {
  const component = renderer.create(
    <Wrapper>
      <Nav />
    </Wrapper>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Nav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Nav />
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
