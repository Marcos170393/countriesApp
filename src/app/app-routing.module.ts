import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact/contact-page.component';

const routes:Routes = [
    // {
    //     path:'home',
    //     component:HomePageComponent,
    // },
    {
        path:'about',
        component:AboutPageComponent
    },
    {
        path:'contact',
        component:ContactPageComponent
    },
    {//carga de modulo countries para poder acceder a todas las rutas alli definidas.
        //el loadChildren significa que va a cargarlo solamente cuando una persona solicite la ruta
        //de otra forma nunca se va a cargar en la aplicacion
        path:'countries',
        loadChildren: ()=> import('./countries/countries.module')
            .then( m => m.CountriesModule)
    },
    {
        path:'**',
        redirectTo:'countries'
    }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
