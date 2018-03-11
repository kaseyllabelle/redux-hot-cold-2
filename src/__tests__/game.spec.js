import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import Game from '../components/game';
import store from '../store';

Enzyme.configure({ adapter: new Adapter() });

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game store={store} />);
  });
});