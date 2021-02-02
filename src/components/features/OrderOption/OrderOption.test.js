import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('should render without crashing', ( )=> {
    const component = shallow(
      <OrderOption
        name='Lorem ipsum'
        type='type'
      />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(
      <OrderOption />);
    expect(component).toEqual({});
  }); //czy przy braku podanego typu opcji komponent zachowa się poprawnie, czyli zwróci null.

  it('should render correct title with name props', () => {
    const expectedName ='Lorem ipsum';
    const expectedType ='text';
    const component = shallow(
      <OrderOption
        name={expectedName}
        type={expectedType}
      />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup  operacje, które będą wykonywane przed każdym testem*/
    //każdy test będzie miał do dyspozycji świeżo wyrenderowany komponent
    //OrderOption, i nie musimy używać funkcji shallow w każdym z testów!
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */ // tworzenie atrapy funkcji
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );

      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();

    });
    /* common tests - testy dotyczące każdego subkomponentu,*/
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });
    /* type-specific tests -testy dla konkretnych typów opcji  */
    switch (type) {
      /* tests for dropdown */
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1); //sprawdzamy, czy ta funkcja została wykonana dokładnie jeden raz
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue }); //zy została wywołana z poprawnymi argumentami
        });
        break;
      }
      /* tests for icons */
      case 'icons': {
        it('contains div with icon class', () => {
          const icons = renderedSubcomponent.find('div .icon');
          expect(icons.length).toBe(mockProps.values.length);

        });
        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('div .icon').last().simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      /* tests for checkboxes */
      case 'checkboxes': {
        it('contains ', () => {
          const checkboxes= renderedSubcomponent.find('input[type="checkboxes"]');
          expect(checkboxes.length).toBe(1);

        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input .value').simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
        });
        break;
      }

      /* tests for number */
      case 'number': {
        it('contains input', () => {
          const input = renderedSubcomponent.find('input[type="number"]');
          expect(input.length).toBe(1);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      /* tests for text */
      case 'text': {
        it('contains input', () => {
          const input = renderedSubcomponent.find('input[type="text"]');
          expect (input.length).toBe(1);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      /* tests for date */
      case 'date': {
        it('should run DatePicker on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

    }
  });
}
// Wewnątrz pętli wykorzystujemy describe do stworzenia nowego pakietu testów,
// którego opis zawiera typ, po którym aktualnie iterujemy
