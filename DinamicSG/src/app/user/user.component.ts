import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    return this.companyService.getUsers()
               .subscribe(
                users => {
                  console.log(users);
                  this.users = users
                 }
                );
 }

}
