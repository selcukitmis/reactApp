import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

it('renders correct', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
