export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  name: 'Jon',
  strain: '',
  foods: []
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    case 'CHANGENAME':
      return {
        ...state,
        name: 'Szeto',
        foods: action.payload.hits
      };

    default:
      return state;
  }
};

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  };
};

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

export const exercise = () => {
  return dispatch => {
    let url = 'https://www.nutritionix.com/track-api/v2/natural/exercise';
    let data = {
      query: 'ran 3 miles',
      gender: 'female',
      weight_kg: 72.5,
      height_cm: 167.64,
      age: 30
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
        // 'x-app-id':'a49ed4c7',
        // 'x-app-key':'393944159c41c173ad29ff4a1d08ad97',
        // 'Accept': 'application/json, text/plain, /',
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      })
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
};

export const submitMacro = values => {
  console.log(values, this);
  return dispatch => {
    let url = 'https://api.nutritionix.com/v1_1/search';
    let data = {
      // "brand_id":'513fbc1283aa2dc80c00055c',
      query: 'dominos',
      cal_min: 300,
      cal_max: 900,
      appId: 'a49ed4c7',
      appKey: '393944159c41c173ad29ff4a1d08ad97'
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
        // 'x-app-id':'a49ed4c7',
        // 'x-app-key':'393944159c41c173ad29ff4a1d08ad97',
        // 'Accept': 'application/json, text/plain, /',
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      })
    })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);

        // dispatch({
        //   type: 'CHANGENAME',
        //   payload: myJson,
        //   });
      });
  };
};
