export const addToTotal = item => {
  // console.log(item, this);
  return dispatch => {
    dispatch({
      type: 'ADD_TOTAL',
      item: item
    });
  };
};

export const removeItem = key => {
  // console.log(key, this);
  return dispatch => {
    dispatch({
      type: 'REMOVE_ITEM',
      key: key
    });
  };
};
