import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Bootstrap the AppComponent with HttpClientModule included globally
bootstrapApplication(AppComponent, {
  providers: [HttpClientModule]
}).catch(err => console.error(err));
