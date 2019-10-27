import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: string;
  locales = ['en', 'da', 'nl'];
  title = 'schiebroekjs';
  year = new Date().getFullYear();

  ngOnInit() {
    this.changeLanguage(navigator.language.substring(0, 2));
  }

  changeLanguage(language) {
    if (this.locales.includes(language)) {
      this.language = language;
    } else {
      this.language = 'en';
    }
  }
}
