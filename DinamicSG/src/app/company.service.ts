import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl = 'http://localhost:8080/api/company';  // URL to web api
  private userUrl = 'http://localhost:8080/api/users';
  constructor( 
    private http: HttpClient
  ) { }
  
  // Companies
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

  // users
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }

  getUser(id: string): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  deleteUser (user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.userUrl, user, httpOptions);
  }
}