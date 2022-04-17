import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ArtForSaleComponent } from './views/art-for-sale/art-for-sale.component';
import { CommissionsComponent } from './views/commissions/commissions.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'art-for-sale', component: ArtForSaleComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
