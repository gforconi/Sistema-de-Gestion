import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//company
import { CompanyComponent } from './company/company.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
// users
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';

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
    path: 'user', 
    component: UserComponent 
  },
  { 
    path: 'user/add', 
    component: UserAddComponent 
  },
  { 
    path: 'user/:id', 
    component: UserDetailsComponent 
  },
  { 
    path: '', 
    redirectTo: 'user', 
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
