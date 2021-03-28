import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all users as per filter
   */
   fetchAllUsers(
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
      this.baseUrl + API_ENDPOINT.users.fetchAll,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch endpoint details by its {id}
   */
   fetchUserById(id: string): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.users.fetchById + `/${id}`,
  
    );
  }
  /**
   * creates endpoint
  */
   createUser(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.users.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates endpoint
  */
   updateUser(reqBody: any, userId: string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.users.update + `/${userId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deleteUser(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.users.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
  
}
