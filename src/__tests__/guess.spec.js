import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import Guess from '../components/guess';

Enzyme.configure({ adapter: new Adapter() });

describe('<Guess />', () => {
  it.only('Renders without crashing', () => {
    shallow(<Guess />);
  });
});