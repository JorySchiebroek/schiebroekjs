import { BrowserModule } from '@angular/platform-browser';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faDribbble,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDribbble,
      faEnvelope,
      faGithub,
      faLinkedin
    );
  }
}
