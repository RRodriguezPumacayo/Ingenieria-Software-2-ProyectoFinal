// HomePage.test.js
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../react/dist/App';

describe('HomePage', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = shallow(<HomePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('debería contener un mensaje de bienvenida', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p').text()).toEqual('Welcome to the Recipe Book Application...');
  });

  it('debería contener un enlace para ver recetas', () => {
    const wrapper = shallow(<HomePage />);
    const link = wrapper.find('Link[to="/recipes"]');
    expect(link.exists()).toBe(true);
    expect(link.text()).toEqual('View My Recipes');
  });
});
