import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { FlightManagerComponent } from './flight-manager/components/flight-manager/flight-manager.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'flight-manager',
        pathMatch: 'prefix'
    },
    {
        path: 'flight-manager',
        component: FlightManagerComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'flight-manager'
    }
];
