import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';

@Injectable({
  providedIn: 'root'
})
export class ApikeyHttpService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all users as per filter
   */
   fetchAllApiKeys(
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
      this.baseUrl + API_ENDPOINT.apiKey.fetchAll,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch endpoint details by its {id}
   */
   fetchApiKeyById(id: string): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.apiKey.fetchById + `/${id}`,
  
    );
  }
  /**
   * creates endpoint
  */
   createApiKey(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.apiKey.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates endpoint
  */
   updateApiKey(reqBody: any, apiId: string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.apiKey.update + `/${apiId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deleteApiKey(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.apiKey.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
  
  /**
   * @description fetch all users as per filter
   * @param {number} [pageSize=API_CONFIG.pageSize]
   * @param {number} [currentPage=1]
   * @param {object} [where={}]
   * @returns {Observable<any>}
   * @memberof UsersHttpService
   */
   fetchAllRole(): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.role.fetchAll
    );
  }
}


