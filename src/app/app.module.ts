import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageService } from './services/page.service';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './components/pages/pages.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';

const appRoutes: Routes = [
  {path: 'admin/pages', component: AdminPagesComponent},
  {path: 'admin/add-page', component: AdminAddPageComponent},
  {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
  {path: ':page', component: PagesComponent},
 {path: '', component: PagesComponent} // default homepage
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    AdminPagesComponent,
    AdminAddPageComponent,
    AdminEditPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
