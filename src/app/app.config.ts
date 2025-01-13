import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngxs/store'
import { ApiService } from './base/http/api-service.interface';
import { MockApiService } from './base/http/mock-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: ApiService, useClass: MockApiService},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore()]
};
