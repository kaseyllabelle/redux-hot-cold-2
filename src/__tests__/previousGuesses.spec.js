import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import PreviousGuesses from '../components/previousGuesses';

Enzyme.configure({ adapter: new Adapter() });

describe('<PreviousGuesses />', () => {
  it.only('Renders without crashing', () => {
    shallow(<PreviousGuesses />);
  });
});