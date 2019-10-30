import { Component, OnInit, HostListener } from '@angular/core';

import { PARTNERS, PROJECTS, SOME } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  viewport: number;

  desSkills = ['Analysing', 'Concepting', 'Design', 'UX', 'Testing'];
  desTools = ['sketch', 'photoshop', 'illustrator', 'figma'];
  devSkills = ['HTML', 'Javascript', 'Scss', 'Angular', 'React', 'Vue', 'Ruby'];
  devTools = ['iterm', 'postman', 'vscode'];
  title = 'schiebroekjs';
  year = new Date().getFullYear();

  locales = ['en', 'da', 'nl'];
  activeLocale = this.locales[0];

  partners = PARTNERS;
  projects = PROJECTS;
  some = SOME;

  activeProject = this.projects[0];

  bothCharts = {
    options: {
      responsive: true,
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          borderColor: 'rgba(255,255,255,.25)'
        }
      },
      scale: {
        angleLines: {
          display: false
        },
        ticks: {
          display: false,
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    },
    type: 'radar'
  };

  developerChart = {
    data: [
      { data: [100, 90, 80, 80, 70, 70, 60], label: 'Development' }
    ],
    labels: ['HTML', 'Javascript', 'Scss', 'Angular', 'React', 'Vue', 'Ruby']
  };

  designerChart = {
    data: [
      { data: [60, 80, 90, 90, 70], label: 'Design' }
    ],
    labels: ['Analysing', 'Concepting', 'Design', 'UX', 'Testing']
  };

  @HostListener('window:resize', ['$event'])
  onresize() {
    this.getViewport();
  }

  ngOnInit() {
    this.changeLanguage(navigator.language.substring(0, 2));
    this.getViewport();
  }

  getViewport() {
    this.viewport = window.innerWidth;
    console.log('viewport: ' + this.viewport);
  }

  changeLanguage(language) {
    if (this.locales.includes(language)) {
      this.activeLocale = language;
    }
  }

  changeProject(project) {
    if (this.projects.includes(project)) {
      this.activeProject = project;
    }
  }

  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
}
