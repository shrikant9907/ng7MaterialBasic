import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
