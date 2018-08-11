import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const getState = createReducer(0, {
  [types.GET_STATE](state, action) {
    return state + 1;
  }
});
