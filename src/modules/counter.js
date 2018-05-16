const initialState = {
  count: 0,
  name: 'Jon',
  strain: '',
  foods: [],
  brands: [],
  brand: { fields: { name: null, _id: null } }
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case 'CHANGENAME':
      return {
        ...state,
        name: 'Szeto',
        brands: action.payload.hits
      };

    case 'SET_BRAND':
      return {
        ...state,
        brand: action.payload
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
      // "results": '0:12',
      min_score: 1,
      appId: 'a49ed4c7',
      appKey: '393944159c41c173ad29ff4a1d08ad97'
    };

    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    console.log(url);
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
          type: 'CHANGENAME',
          payload: myJson
        });
      });
  };
};

// used to select and choose which restaurant from list
export const setBrand = value => {
  console.log(value, this);
  return dispatch => {
    dispatch({
      type: 'SET_BRAND',
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

// find food items with brand id & cal params
export const getFoodItems = value => {
  console.log(value, this);
  return dispatch => {
    let url = new URL(`https://api.nutritionix.com/v1_1/search/`);
    let data = {
      brand_id: value._id,
      results: '0:50',
      cal_min: 50,
      cal_max: 280,
      fields: '*',
      appId: 'a49ed4c7',
      appKey: '393944159c41c173ad29ff4a1d08ad97'
    };

    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    console.log(url);
    fetch(url, {
      method: 'GET'
    })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);

        dispatch({});
      });
  };
};
