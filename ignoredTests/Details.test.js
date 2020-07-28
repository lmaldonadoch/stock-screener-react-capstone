import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../pages/Details';
import Wrapper from './Wrapper';

test('Details i rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Details />
    </Wrapper>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
