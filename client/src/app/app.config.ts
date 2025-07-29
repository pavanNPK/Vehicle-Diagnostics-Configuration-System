import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {OverlaySpinnerInterceptor} from "./modules/core/interceptors/overlay-spinner.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NbMenuModule, NbThemeModule} from "@nebular/theme";
import {provideClientHydration} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers:
    [
      {provide: HTTP_INTERCEPTORS, useClass: OverlaySpinnerInterceptor, multi: true},
      provideHttpClient(withFetch(), withInterceptorsFromDi()),
      provideRouter(routes),
      provideClientHydration(),
      provideStore(),
      provideEffects(),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
      importProvidersFrom(
        BrowserAnimationsModule,
        NbThemeModule.forRoot(),
        NbMenuModule.forRoot(),
      )
    ]
};
