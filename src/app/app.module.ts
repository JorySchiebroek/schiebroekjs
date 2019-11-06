import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
  faRocket,
  faTabletAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faAdobe,
  faAngular,
  faCss3Alt,
  faDribbble,
  faGithub,
  faHtml5,
  faJsSquare,
  faLinkedin,
  faReact,
  faSketch,
  faStackOverflow,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';

import { ModalComponent } from './modal/modal.component';
import { DisneyComponent } from './modal/disney/disney.component';
import { BelastingdienstComponent } from './modal/belastingdienst/belastingdienst.component';
import { BrofishComponent } from './modal/brofish/brofish.component';
import { CheckmeComponent } from './modal/checkme/checkme.component';
import { GrundfosComponent } from './modal/grundfos/grundfos.component';
import { MembershipComponent } from './modal/membership/membership.component';

@NgModule({
  declarations: [
    AppComponent,
    BelastingdienstComponent,
    BrofishComponent,
    CheckmeComponent,
    DisneyComponent,
    GrundfosComponent,
    MembershipComponent,
    ModalComponent
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
      faAdobe,
      faAngleDown,
      faAngular,
      faCss3Alt,
      faDribbble,
      faEnvelope,
      faGamepad,
      faGithub,
      faHtml5,
      faJsSquare,
      faLinkedin,
      faMobileAlt,
      faReact,
      faRocket,
      faSketch,
      faStackOverflow,
      faTabletAlt,
      faVuejs
    );
  }
}
