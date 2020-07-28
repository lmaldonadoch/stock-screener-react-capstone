import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from '../pages/Catalog';
import Wrapper from './Wrapper';

test('Catalog i rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Catalog />
    </Wrapper>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
