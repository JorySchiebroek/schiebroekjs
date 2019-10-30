import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faEnvelope,
  faGamepad,
  faMobileAlt,
  faTabletAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faDribbble,
  faGithub,
  faLinkedin,
  faReact,
  faStackOverflow,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAngleDown,
      faAngular,
      faDribbble,
      faEnvelope,
      faGamepad,
      faGithub,
      faLinkedin,
      faMobileAlt,
      faReact,
      faStackOverflow,
      faTabletAlt,
      faVuejs
    );
  }
}
