import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';


@Injectable({
  providedIn: 'root'
})
export class UserBloodBankDonateHttpService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all users as per filter
   */
   fetchAlldonateUser(
    limit: number = API_CONFIG.pageSize,
    page: number = 1,
    where?: object,
   ): Observable<any> {
    const skip = (page - 1) * limit;
    let filter = {
      limit,
      skip,
      where,
    }
    let httpParams = new HttpParams();
    httpParams = httpParams.append('filter', JSON.stringify(filter));
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.donate.fetchAll,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch admin user details by its {id}
   */
   fetchdonateUserById(id: string): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.donate.fetchById + `/${id}`,
  
    );
  }
  /**
   * creates admin user
  */
   createdonateUser(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.donate.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates endpoint
  */
   updatedonateUser(reqBody: any, donateUserId:string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.donate.update + `/${donateUserId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deletedonateUser(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.donate.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
  /**
   * @description fetch all Member as per filter
   
   */
   fetchAllBloodBank(): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.bloodBank.fetchall
    );
  }
  fetchAllUser(): Observable<any>{
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.users.fetchAll,
      
    );
  }
}
