import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from '../src/app/app-routing.module';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
