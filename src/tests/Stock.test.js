import React from 'react';
import renderer from 'react-test-renderer';
import Stock from '../components/Stock';
import Wrapper from './Wrapper';

test('Stock is rendered', () => {
  const stock = {
    exchange: 'Nasdaq',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: '320',
  };
  const component = renderer.create(
    <Wrapper>
      <Stock stock={stock} />
    </Wrapper>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
