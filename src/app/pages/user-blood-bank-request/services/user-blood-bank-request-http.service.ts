import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';

@Injectable({
  providedIn: 'root'
})
export class UserBloodBankRequestHttpService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all users as per filter
   */
   fetchAllRequestUser(
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
      this.baseUrl + API_ENDPOINT.bloodRequest.fetchAll,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch admin user details by its {id}
   */
   fetchRequestUserById(id: string): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.bloodRequest.fetchById + `/${id}`,
  
    );
  }
  /**
   * creates admin user
  */
   createRequestUser(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.bloodRequest.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates endpoint
  */
   updatedRequestUser(reqBody: any, requestUserId:string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.bloodRequest.update + `/${requestUserId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deleteRequestUser(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.bloodRequest.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
}
