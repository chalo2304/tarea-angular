import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';


const APP_ROUTES: Routes = [
  { path: 'data', component: DataComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'data' }
];

export const APP_ROUTING_PROVIDERS: any[] = [];
export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES, { useHash: true } );
