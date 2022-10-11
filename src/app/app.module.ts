import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WassComponent } from './wass/wass.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:name', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOFourComponent }, // 404
  { path: '**', redirectTo: '/not-found' } // path: '**' means any other path
]
@NgModule({
  declarations: [
    AppComponent,
    WassComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AppareilService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
