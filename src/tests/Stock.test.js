import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Stock from '../components/Stock';
import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

test('Stock should match snapshot', () => {
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

describe('Stock component', () => {
  let wrapper;
  const stock = {
    exchange: 'Nasdaq',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: '320',
  };
  beforeEach(() => {
    wrapper = mount(
      <Wrapper>
        <Stock stock={stock} />
      </Wrapper>,
    );
  });
  it('is receiving and running JS', () => {
    expect(2 + 3).toEqual(5);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Displays stock name', () => {
    expect(wrapper.find('.info-box-company').text()).toEqual('Apple Inc.');
  });

  it('Displays stock symbol', () => {
    expect(wrapper.find('.info-box-ticker').text()).toEqual('AAPL');
  });

  it('Displays stock price', () => {
    expect(wrapper.find('.info-box-price').text()).toEqual('$320');
  });
});
