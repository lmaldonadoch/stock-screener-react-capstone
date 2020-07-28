import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../containers/StocksForm';
import Wrapper from './Wrapper';

test('Form i rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Form />
    </Wrapper>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
