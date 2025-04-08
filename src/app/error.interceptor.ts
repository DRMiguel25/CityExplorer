import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LocalstorageService } from './localstorage.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  let token: string | null = null;
  let router: Router | null = null;

  if (isBrowser) {
    const localStorage = inject(LocalstorageService);
    token = localStorage.getItem('accessToken');
    router = inject(Router);
  }

  if (token) {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (isBrowser && err.status === 401 && router) {
        router.navigate(['/login']);
      }
      return throwError(() => err.error);
    })
  );
};
