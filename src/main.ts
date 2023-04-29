import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BootstrapModule } from './bootstrap/bootstrap.module';


platformBrowserDynamic().bootstrapModule(BootstrapModule)
  .catch(err => console.error(err));
