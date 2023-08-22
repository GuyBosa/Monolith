import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgImageSliderModule } from 'ng-image-slider';

var config = {
    apiKey: "AIzaSyCGvbXqPPh_Fa5As68ev5BBf0sZgYB0Zhs",
    authDomain: "codeschool-9351e.firebaseapp.com",
    databaseURL: "https://codeschool-9351e.firebaseio.com",
    projectId: "codeschool-9351e",
    storageBucket: "codeschool-9351e.appspot.com",
    messagingSenderId: "127974585517"
  };


import { AppComponent } from './app.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { SnapdocsComponent } from './snapdocs/snapdocs.component';
import { MonolithStorySliderComponent } from './monolith-story-slider/monolith-story-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    NgImageSliderModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule, FormsModule],
  declarations: [AppComponent, HeroBannerComponent, SnapdocsComponent, MonolithStorySliderComponent, NavbarComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
