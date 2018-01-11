import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataComponent } from './components/data/data.component';

// rutas
import { APP_ROUTING, APP_ROUTING_PROVIDERS } from './app.routes';

// providers
import { DataService } from './providers/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
  ],
  providers: [
    APP_ROUTING_PROVIDERS,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
