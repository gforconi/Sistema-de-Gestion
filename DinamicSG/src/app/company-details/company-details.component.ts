import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  company = new Company() ;
  submitted = false;
  message: string;

  constructor(
    private CompanyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.CompanyService.getCompany(id)
      .subscribe(company => this.company = company);
  }

  update(): void {
    this.submitted = true;
    this.CompanyService.updateCompany(this.company)
        .subscribe(result => this.message = "Company Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.CompanyService.deleteCompany(this.company._id)
        .subscribe(result => this.message = "Company Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }

}
