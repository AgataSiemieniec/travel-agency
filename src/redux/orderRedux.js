// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types aktualizacja wartości danej opcji w stanie aplikacji
export const SET_OPTION = createActionName('SET_OPTION');

// action creators
export const setOrderOption = payload => ({ payload, type: SET_OPTION });

// reducer  reakcja na akcję
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    default:
      return statePart;
  }
}
//Pamiętaj, że reducer nie może zmieniać statePart, ani żadnego obiektu (ani tablicy) pobranych z niego.
//Dlatego tworzymy nowe obiekty, rozpakowując do nich wartości otrzymane w statePart.
