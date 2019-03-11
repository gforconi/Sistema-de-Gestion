import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  { 
    path: 'company', 
    component: CompanyComponent 
  },
  { 
    path: 'company/add', 
    component: CompanyAddComponent 
  },
  { 
    path: 'company/:id', 
    component: CompanyDetailsComponent 
  },
  { 
    path: '', 
    redirectTo: 'company', 
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
