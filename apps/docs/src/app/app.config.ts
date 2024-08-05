import { appRoutes } from './app.routes';
import { initIcons } from './icon.init';

import { IconRegistry, initFlowbite } from 'flowbite-angular';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER, type ApplicationConfig } from '@angular/core';
import { DomSanitizer, provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    initFlowbite(),
    {
      provide: APP_INITIALIZER,
      useFactory: initIcons,
      deps: [IconRegistry, DomSanitizer],
      multi: false,
    },
  ],
};
