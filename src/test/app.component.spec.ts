import { TestBed, async } from "@angular/core/testing";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "../app/app.component";
import { FlightManagerComponent } from "../app/flight-manager/flight-manager.component";
import { FlightCardComponent } from "../app/flight-manager/flight-card.component";
import { ErrorCardComponent } from '../app/flight-manager/error-card.component';
import { AboutComponent } from "../app/about/about.component";

import { FilterPipe} from "../app/flight-manager/filter.pipe";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

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
        ErrorCardComponent,
        FilterPipe
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot(routes),
        Ng4LoadingSpinnerModule
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
