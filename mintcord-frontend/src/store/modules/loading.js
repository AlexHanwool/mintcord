import { createAction, handleActions } from 'redux-actions';

// action types
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// action creators
export const startLoading = createAction(START_LOADING, requestType => requestType);
export const finishLoading = createAction(FINISH_LOADING, requestType => requestType);

// initial state
const initialState = {};

// reducer
export default handleActions({
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false
  })
}, initialState)