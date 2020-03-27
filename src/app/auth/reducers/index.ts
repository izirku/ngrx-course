import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
  on
} from '@ngrx/store';

import * as AuthActions from '../auth.actions';
import { User } from '../model/user.model';

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: undefined
};

// export const reducers: ActionReducerMap<AuthState> = {};

// function authReducer(state, action): State {}

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return { user: undefined };
  })
);
