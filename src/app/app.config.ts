import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// PrimeNG setup
import { providePrimeNG } from 'primeng/config';

// NgZorro setup
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MyPrimengPreset } from './styles/my-primeng-theme';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    // PrimeNG setup
    providePrimeNG({
      theme: {
        preset: MyPrimengPreset,
      }
    }),
    // NgZorro setup
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideHttpClient()
  ]
};
