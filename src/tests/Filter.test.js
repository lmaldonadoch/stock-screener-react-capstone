import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../components/Filter';
import Wrapper from './Wrapper';

test('Filter is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Filter />
    </Wrapper>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
