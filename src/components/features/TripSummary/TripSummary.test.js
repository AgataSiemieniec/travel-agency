import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a link to the correct address', () => {
    const expectedLink = '/trip/Bleee';
    const component = shallow(
      <TripSummary
        id='Bleee'
        image='image.jpg'
        name='name'
        cost='300'
        days={10}
        tags={[]}
      />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct src and alt for image', () => {
    const expectedAlt = 'Lorem Lorem';
    const expectedSrc = 'image.jpg';
    const component = shallow(
      <TripSummary
        id="id"
        image={expectedSrc}
        name={expectedAlt}
        cost='300'
        days={10}
        tags={[]}
      />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render props name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '300';
    const expectedDays =  10;
    const component = shallow(
      <TripSummary
        id="id"
        image='image.jpg'
        name={expectedName}
        cost={expectedCost}
        days={expectedDays}
        tags={[]}
      />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

    expect(component.find('.details span').at(0).text()).toEqual (`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toBe (`from ${expectedCost}`);
  });

  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render spans with 3 tags', () => {
    const expectedTags = ['pool', 'spa', 'beach'];
    const component = shallow(
      <TripSummary
        id="id"
        image= 'image.jpg'
        tags={expectedTags}
        name='name'
        cost='300'
        days={10}
      />);

    expect(component.find('.tags span').at(0).text()).toEqual('pool');
    expect(component.find('.tags span').at(1).text()).toEqual('spa');
    expect(component.find('.tags span').at(2).text()).toEqual('beach');
  });
  it('should not render if props tags is false, not given or is an empty array', () => {
    const component = shallow(
      <TripSummary
        id="id"
        image= 'image.jpg'
        tags={[]}
        name='name'
        cost='300'
        days={10}
      />
    );
    expect(component.hasClass('tags')).toBe(false);
  });
});
