import { Routes } from '@angular/router';
import { AboutComponent } from "app/about/about.component";
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'prefix'
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'flight-search'
    }
]
