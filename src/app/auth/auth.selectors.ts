import { createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

// selector is memoized accessor to store state
// if state hasn't changed, memoized value will be returned
export const isLoggedIn = createSelector(
  state => state['auth'],
  (auth: AuthState) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, loggedIn => !loggedIn);
