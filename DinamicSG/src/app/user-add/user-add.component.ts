import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CompanyService } from '../company.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  user = new User();
  submitted = false;

  constructor(
    private companyService: CompanyService,
    private location: Location) { }

    newUser(): void {
      this.submitted = false;
      this.user = new User();
    }
    addUser() {
      this.submitted = true;
      this.save();
    }
   
    goBack(): void {
      this.location.back();
     }

    private save(): void {
      console.log(this.user);
      this.companyService.addUser(this.user)
          .subscribe();
    }


}
