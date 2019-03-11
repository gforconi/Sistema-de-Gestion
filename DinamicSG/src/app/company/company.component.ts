import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

   companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }
  getCompanies() {
    return this.companyService.getCompanies()
               .subscribe(
                companies => {
                  console.log(companies);
                  this.companies = companies
                 }
                );
 }
}
