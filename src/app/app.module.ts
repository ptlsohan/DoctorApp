import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthComponent } from './auth/containers/auth/auth.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShellComponent} from './user/patient/container/shell/shell.component';
import {PatientModule} from './user/patient/patient.module';
import {PatientService} from './user/patient/services/patient.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  {path: 'login', component: AuthComponent},
  {path: 'shell', component: ShellComponent},

]





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    PatientModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([])
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
