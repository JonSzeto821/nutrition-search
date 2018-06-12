// used to search for restaurants based on search
export const submit = values => {
  // console.log(values, this);
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
  // console.log(values, this);
  return dispatch => {
    dispatch({
      type: 'SET_CALS',
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

//return food items based on brand and calorie params
export const getFoodItems = () => (dispatch, getState) => {
  const state = getState();
  // console.log(state);

  let url = new URL(`https://api.nutritionix.com/v1_1/search/`);
  let data = {
    brand_id: state.reducer.restaurant._id,
    results: '0:50',
    cal_min: state.reducer.calories.fields.cal_min,
    cal_max: state.reducer.calories.fields.cal_max,
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
        type: 'GET_ITEMS',
        payload: myJson.hits
      });
    });
};

//apply filter params to food items list
export const applyFilter = () => {
  console.log('APPLY FILTER');
  return dispatch => {
    dispatch({
      type: 'APPLY_FILTER'
    });
  };
};
