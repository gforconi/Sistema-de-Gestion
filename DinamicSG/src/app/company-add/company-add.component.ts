import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent {

  company = new Company();
  submitted = false;

  constructor(
    private companyService: CompanyService,
    private location: Location) { }

    newCompany(): void {
      this.submitted = false;
      this.company = new Company();
    }
  
   addCompany() {
     this.submitted = true;
     this.save();
   }
  
    goBack(): void {
      this.location.back();
    }
  
    private save(): void {
      console.log(this.company);
      this.companyService.addCompany(this.company)
          .subscribe();
    }

}
