import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';

@Injectable({
  providedIn: 'root'
})
export class RoleHttpService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all Role as per filter
   */
   fetchAllRole(
    limit: number = API_CONFIG.pageSize,
    page: number = 1,
    where?: object,
   ): Observable<any> {
    const skip = (page - 1) * limit;
    let filter = {
      limit,
      skip,
      where
    }
    let httpParams = new HttpParams();
    httpParams = httpParams.append('filter', JSON.stringify(filter));
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.role.fetchAll,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch role details by its {id}
   */
   fetchRoleById(id: string): Observable<any> {
    let params = new HttpParams();
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.role.fetchById + `/${id}`,
      { params }
    );
  }
  /**
   * creates role
  */
   createRole(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.role.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates role
  */
   updateRole(reqBody: any, roleId: string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.role.update + `/${roleId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deleteEndpoint(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.role.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
  
  
}
