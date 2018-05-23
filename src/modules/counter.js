const initialState = {
  foods: [],
  brands: [],
  restaurant: { fields: { name: null, _id: null } },
  foodItems: [],
  calories: { fields: { cal_min: 250, cal_max: 500 } },
  macros: {
    fields: {
      nf_total_fat: null,
      nf_total_carbohydrate: null,
      nf_protein: null
    }
  },
  value: ''
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        brands: action.payload.hits
      };

    case 'SET_RESTAURANT':
      return {
        ...state,
        restaurant: action.payload
      };

    case 'SET_CALS':
      // console.log(action.payload);
      let calories = {
        fields: { cal_min: action.payload.min, cal_max: action.payload.max }
      };
      // console.log(calories);
      return {
        ...state,
        calories: calories
      };

    case 'SET_MACROS':
      return {
        ...state,
        macros: action.payload
      };

    case 'GET_ITEMS':
      // console.log(action);
      return {
        ...state,
        foodItems: action.payload //action.payload.hits throws unhandled rejection TypeError
      };

    default:
      return state;
  }
};
