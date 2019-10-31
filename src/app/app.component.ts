import { Component, HostListener, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import {
  DESIGN_SKILLS,
  DESIGN_TOOLS,
  DEVELOPMENT_SKILLS,
  DEVELOPMENT_TOOLS,
  LOCALES,
  PARTNERS,
  PROJECTS,
  SOME
} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('about', { static: false }) aboutElement: ElementRef;
  @ViewChild('projectbar', { static: false }) projectsElement: ElementRef;
  @ViewChild('collaborations', { static: false }) collaborationsElement: ElementRef;
  @ViewChild('contact', { static: false }) contactElement: ElementRef;

  aboutOffset: number;
  activeLocale: string;
  activeProject: any;
  collaborationsOffset: number;
  contactOffset: number;
  currentActive: number;
  desSkills: string[];
  desTools: string[];
  devSkills: string[];
  devTools: string[];
  locales: string[];
  partners: string[];
  projects: any[];
  projectsOffset: number;
  showBurgerMenu: boolean;
  some: any[];
  title: string;
  viewport: number;
  year: number;

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    this.setActiveNavItem();
  }

  @HostListener('window:resize', ['$event'])
  onresize() {
    this.getViewport();
    this.getOffsets();
  }

  constructor() { }

  ngOnInit() {
    this.desSkills = DESIGN_SKILLS;
    this.desTools = DESIGN_TOOLS;
    this.devSkills = DEVELOPMENT_SKILLS;
    this.devTools = DEVELOPMENT_TOOLS;
    this.locales = LOCALES;
    this.partners = PARTNERS;
    this.projects = PROJECTS;
    this.showBurgerMenu = false;
    this.some = SOME;
    this.title = 'schiebroekjs';
    this.year = new Date().getFullYear();

    this.activeLocale = this.locales[0];
    this.activeProject = this.projects[0];
    this.currentActive = 1;

    this.getViewport();
    this.changeLanguage(navigator.language.substring(0, 2));
  }

  ngAfterViewInit() {
    this.getOffsets();
    this.setActiveNavItem();
  }

  getViewport() {
    this.viewport = window.innerWidth;
  }

  getOffsets() {
    const offset = -500;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop + offset;
    this.projectsOffset = this.projectsElement.nativeElement.offsetTop + offset;
    this.collaborationsOffset = this.collaborationsElement.nativeElement.offsetTop + offset;
    this.contactOffset = this.contactElement.nativeElement.offsetTop + offset;
  }

  setActiveNavItem() {
    if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.projectsOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.projectsOffset && window.pageYOffset < this.collaborationsOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.collaborationsOffset && window.pageYOffset < this.contactOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.currentActive = 4;
    } else {
      this.currentActive = 1;
    }
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
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
}
