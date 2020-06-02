import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { BondingComponent } from './components/bonding/bonding.component';
import { DisplayComponent } from './components/display/display.component';
import { ErrorComponent } from './components/error/error.component';

//Definir rutas
const appRoutes: Routes = [
    {path: 'home', component: AddComponent},
    {path: 'ingreso-datos', component: AddComponent},
    {path: 'vinculacion-excel', component: BondingComponent},
    {path: 'previsualizacion', component: DisplayComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar configuracion de las rutas/servicio de rutas
export const appRoutingProviders: any[] = [];
//cargar nuestra config. de rutas en el router de angular appRoutes y hacer que funcione
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
