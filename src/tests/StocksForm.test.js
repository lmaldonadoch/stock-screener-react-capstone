import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../containers/StocksForm';
import Wrapper from './Wrapper';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('Form i rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Form />
    </Wrapper>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Form', () => {
  it('is receiving and runing JS', () => {
    expect(2 + 3).toEqual(5);
  });
});
