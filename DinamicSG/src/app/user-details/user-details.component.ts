import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { User } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user = new User() ;
  submitted = false;
  message: string;

  constructor(
    private CompanyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.CompanyService.getUser(id)
      .subscribe(user => this.user = user);
  }
  update(): void {
    this.submitted = true;
    this.CompanyService.updateUser(this.user)
        .subscribe(result => this.message = "User Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.CompanyService.deleteUser(this.user._id)
        .subscribe(result => this.message = "User Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}
