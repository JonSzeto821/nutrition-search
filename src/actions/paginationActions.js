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

export const handleClick = number => {
  // console.log(number, this);
  return dispatch => {
    dispatch({
      type: 'HANDLE_CLICK',
      payload: number
    });
  };
};
