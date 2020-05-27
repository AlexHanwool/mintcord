import { createAction, handleActions } from 'redux-actions';

// action types
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// initial state
const initialState = {
  modal: {
    info: false,
    addFriend: false,
  }
};

// reducer
export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return {
      ...state,
      modal: {
        ...state.modal,
        [modalName]: true
      }
    }
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return {
      ...state,
      modal: {
        ...state.modal,
        [modalName]: false
      }
    }
  }
}, initialState)