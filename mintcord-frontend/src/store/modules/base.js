import { createAction, handleActions } from 'redux-actions';

// action types
const ACTION_TYPE = 'base/ACTION_TYPE';

// action creators
export const actionType = createAction(ACTION_TYPE);

// initial state
const initialState = {};

// reducer
export default handleActions({
  [ACTION_TYPE]: (state, action) => {
    return state;
  },
}, initialState)