import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
  // C:\Users\kthkw\Documents\4. Hobbies\Web Dev Projects\to-do-list\src\assets\tasks.json
