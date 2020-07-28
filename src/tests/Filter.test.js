import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../components/Filter';
import Wrapper from './Wrapper';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

test('Filter is rendered', () => {
  const component = renderer.create(
    <Wrapper>
      <Filter />
    </Wrapper>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const mockStore = configureMockStore([thunk]);
configure({ adapter: new Adapter() });

describe('NAV', () => {
  it('should find filter', () => {
    const store = mockStore({
      filter: null,
    });
    const wrapper = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    expect(wrapper.find('filter')).toEqual({});
  });
});
