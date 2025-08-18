import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { serverConfig } from './app.config.server';

const bootstrap = bootstrapApplication(AppComponent, serverConfig)
  .catch(err => console.error(err));

  export default bootstrap;