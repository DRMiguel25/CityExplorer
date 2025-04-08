import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { LocalstorageService } from './localstorage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorage = inject(LocalstorageService);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    // Solo si estamos en el navegador, accedemos a localStorage
    if (localStorage.getItem('accessToken')) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }

  // En el servidor permitimos pasar (opcional: redireccionar a login si quieres controlar ahí también)
  return true;
};
// Nota: En el servidor no hay localStorage, así que no se puede acceder a él.