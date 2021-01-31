import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a link to the correct address', () => {
    const expectedLink = '/trip/Bleee';
    const component = shallow(<TripSummary id='Bleee' />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct src and alt for image', () => {
    const expectedAlt = 'Lorem Lorem';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary imageSrc={expectedSrc} name={expectedAlt}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render props name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '300';
    const expectedDays =  10;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays}/>);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

    const renderedCost = component.find('.details').text();
    expect(renderedCost).toEqual(expectedCost);

    const renderedDays = component.find('details').text();
    expect(renderedDays).toEqual(expectedDays);
  });

  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});
