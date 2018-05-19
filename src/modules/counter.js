const initialState = {
  foods: [],
  brands: [],
  brand: { fields: { name: null, _id: null } },
  calories: { fields: { cal_min: 200, cal_max: 800 } },
  values: { min: 450, max: 850 },
  macros: {
    fields: {
      nf_total_fat: null,
      nf_total_carbohydrate: null,
      nf_protein: null
    }
  }
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        brands: action.payload.hits
      };

    case 'SET_RESTAURANT':
      return {
        ...state,
        brand: action.payload
      };

    case 'SET_CALS':
      console.log(action.payload);
      let calories = {
        fields: { cal_min: action.payload.min, cal_max: action.payload.max }
      };
      return {
        ...state,
        calories: calories
      };

    case 'SET_VALS':
      // console.log(action.payload); //{min: 450, max: 867}
      return {
        ...state,
        values: action.payload
      };

    case 'SET_MACROS':
      return {
        ...state,
        macros: action.payload
      };

    case 'GET_ITEMS':
      return {
        ...state,
        foodItems: action.payload
      };

    default:
      return state;
  }
};
// used to search for restaurants based on search
export const submit = values => {
  console.log(values, this);
  return dispatch => {
    let url = new URL('https://api.nutritionix.com/v1_1/brand/search');
    let data = {
      query: values.restaurant,
      min_score: 1,
      appId: 'a49ed4c7',
      appKey: '393944159c41c173ad29ff4a1d08ad97'
    };

    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    // console.log(url);
    fetch(url, {
      method: 'GET'
    })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);

        dispatch({
          type: 'SUBMIT',
          payload: myJson
        });
      });
  };
};

// used to select and choose which restaurant from list
export const setRestaurant = value => {
  // console.log(value, this);
  return dispatch => {
    dispatch({
      type: 'SET_RESTAURANT',
      payload: value
    });
  };
};

// define the calorie params
export const setCals = values => {
  console.log(values, this);
  return dispatch => {
    dispatch({
      type: 'SET_CALS',
      payload: values
    });
  };
};

export const setVals = values => {
  // console.log(values, this);
  return dispatch => {
    dispatch({
      type: 'SET_VALS',
      payload: values
    });
  };
};

//define any macro params
export const setMacros = values => {
  // console.log(values, this);
  return dispatch => {
    dispatch({
      type: 'SET_MACROS',
      payload: values
    });
  };
};

// find food items with brand id & cal params
// export const getFoodItems2 = value => {
//   console.log(value, this);

// };

//return food items based on brand and calorie params
export const getFoodItems = () => (dispatch, getState) => {
  const state = getState();
  console.log(state);

  // return dispatch => {
  let url = new URL(`https://api.nutritionix.com/v1_1/search/`);
  let data = {
    brand_id: state.counter.brand._id,
    results: '0:50',
    cal_min: state.counter.calories.fields.cal_min,
    cal_max: state.counter.calories.fields.cal_max,
    fields:
      'brand_name,item_name,nf_calories,nf_total_fat,nf_total_carbohydrate,nf_protein,nf_serving_size_qty,nf_serving_size_unit',
    appId: 'a49ed4c7',
    appKey: '393944159c41c173ad29ff4a1d08ad97'
  };

  Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
  console.log(url);
  return fetch(url, {
    method: 'GET'
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);

      dispatch({
        type: 'GET_ITEMS'
        // payload: value
      });
    });
  // };
};
