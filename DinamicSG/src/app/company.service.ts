import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl = 'http://localhost:8080/api/company';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getCompanies (): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl)
  }

  getCompany(id: string): Observable<Company> {
    const url = `${this.companyUrl}/${id}`;
    return this.http.get<Company>(url);
  }

  addCompany (company: Company): Observable<Company> {
    return this.http.post<Company>(this.companyUrl, company, httpOptions);
  }

  deleteCompany (company: Company | string): Observable<Company> {
    const id = typeof company === 'string' ? company : company._id;
    const url = `${this.companyUrl}/${id}`;

    return this.http.delete<Company>(url, httpOptions);
  }

  updateCompany (company: Company): Observable<any> {
    return this.http.put(this.companyUrl, company, httpOptions);
  }
}