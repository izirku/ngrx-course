import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { login, logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// SHOULD NOT BE INJECTED ANYWHERE, USED BY @ngrx/effects INTERNALLY
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {
    // BAD, but works...
    // actions$.subscribe(action => {
    //   if (action.type === '[Login Page] User Login') {
    //     localStorage.setItem('user', JSON.stringify(action['user']));
    //   }
    // });
    //
    // BETTER, but not quite, we can do better
    // const login$ = this.actions$.pipe(
    //   ofType(login),
    //   tap(action => {
    //     localStorage.setItem('user', JSON.stringify(action.user));
    //   })
    // );
    // login$.subscribe();
    //
    // EVEN BETTER, but still not there
    // const login$ = createEffect(
    //   () =>
    //     this.actions$.pipe(
    //       ofType(login),
    //       tap(action => {
    //         localStorage.setItem('user', JSON.stringify(action.user));
    //       })
    //     ),
    //   { dispatch: false }
    // );
  }

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(login),
        tap(action => {
          localStorage.setItem('user', JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );
}
