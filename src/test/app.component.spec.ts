import { TestBed, async } from "@angular/core/testing";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "../app/app.component";
import { FlightManagerComponent } from "../app/flight-manager/components/flight-manager/flight-manager.component";
import { FlightCardComponent } from "../app/flight-manager/components/flight-card/flight-card.component";
import { ErrorCardComponent } from '../app/flight-manager/components/error-card/error-card.component';
import { AboutComponent } from "../app/about/about.component";

describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'flight-manager', component: FlightManagerComponent },
    { path: 'about', component: AboutComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FlightManagerComponent,
        FlightCardComponent,
        AboutComponent,
        ErrorCardComponent
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it(`should have as title App Started`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App started!');
  });

  it(`should render Home in a li tag`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Home');
  });


});
