import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';

@Injectable({
  providedIn: 'root'
})
export class UrlHttpsService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all users as per filter
   */
   fetchAllUrls(
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
      this.baseUrl + API_ENDPOINT.url.fetchAll,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch endpoint details by its {id}
   */
   fetchEndpointById(id: string): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.url.fetchById + `/${id}`,
  
    );
  }
  /**
   * creates endpoint
  */
   createEndpoint(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.url.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates endpoint
  */
   updateUrl(reqBody: any, urlId: string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.url.update + `/${urlId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deleteEndpoint(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.url.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
  /**
   * @description fetch all Role as per filter
   
   */
   fetchAllRole(
   ): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.role.fetchAll
    );
  }
  
}
