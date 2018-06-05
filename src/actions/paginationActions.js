export const prevPage = value => {
  // console.log(value, this);
  return dispatch => {
    dispatch({
      type: 'PREV_PAGE',
      payload: value
    });
  };
};

export const nextPage = value => {
  // console.log(value, this);
  return dispatch => {
    dispatch({
      type: 'NEXT_PAGE',
      payload: value
    });
  };
};

export const handleClick = event => {
  console.log(event);
  return dispatch => {
    dispatch({
      type: 'HANDLE_CLICK'
    });
  };
};
