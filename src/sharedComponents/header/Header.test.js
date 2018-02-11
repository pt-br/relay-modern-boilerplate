import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header />
    );
    expect(wrapper).toMatchSnapshot();
  });
});