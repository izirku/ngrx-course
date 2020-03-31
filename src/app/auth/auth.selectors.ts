import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducers';

// selector is memoized accessor to store state
// if state hasn't changed, memoized value will be returned
// type unsafe:
// export const isLoggedIn = createSelector(
//   state => state['auth'],
//   (auth: AuthState) => !!auth.user
// );

// type safe using Feature Selector:
export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const isLoggedIn = createSelector(selectAuthState, auth => !!auth.user);

export const isLoggedOut = createSelector(isLoggedIn, loggedIn => !loggedIn);
