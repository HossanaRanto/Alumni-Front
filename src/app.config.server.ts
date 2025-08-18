import { provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { serverRoutes } from './routes.server';

export const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);