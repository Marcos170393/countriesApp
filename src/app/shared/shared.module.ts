import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ImageComponent } from './components/image/image.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    AboutPageComponent,                          
    HomePageComponent, 
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    ImageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    ImageComponent,
    LoaderComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
