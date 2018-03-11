import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import Feedback from '../components/feedback';

Enzyme.configure({ adapter: new Adapter() });

describe('<Feedback />', () => {
  it.only('Renders without crashing', () => {
    shallow(<Feedback />);
  });
});