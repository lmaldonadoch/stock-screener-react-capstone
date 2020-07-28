import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';
import Wrapper from './Wrapper';

test('Nav is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Nav />
    </Wrapper>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
