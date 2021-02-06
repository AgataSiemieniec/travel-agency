import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <HappyHourAd
      />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow (<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  const mockProps = {
    title: 'Happy Hour',
    promoDescription: 'Its your time! Take advantage of Happy Hour! All offers 20% off!',
  };

  it('should render props title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});
