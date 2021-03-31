import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { API_ENDPOINT, API_CONFIG } from '@const/api.constant';

@Injectable({
  providedIn: 'root'
})
export class BloodBankHttpService {

  private readonly baseUrl = environment.websiteNodeHost;

  constructor(private _http: HttpClient) {}

  /**
   * fetch all users as per filter
   */
   fetchAllBloodBank(
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
      this.baseUrl + API_ENDPOINT.bloodBank.fetchall,
      {
        params: httpParams
      }
    );
  }
  /**
   *fetch endpoint details by its {id}
   */
   fetchBloodBankById(id: string): Observable<any> {
    return this._http.get<any>(
      this.baseUrl + API_ENDPOINT.bloodBank.fetchById + `/${id}`,
  
    );
  }
  /**
   * creates endpoint
  */
   createBloodBank(reqBody: any): Observable<any> {
    let params = new HttpParams();
    return this._http.post<any>(
      this.baseUrl + API_ENDPOINT.bloodBank.create,
      reqBody ,
      { params }
    );
  }
 
  /**
   *updates endpoint
  */
   updateBloodBank(reqBody: any, urlId: string): Observable<any> {
    return this._http.put<any>(
      this.baseUrl + API_ENDPOINT.bloodBank.update + `/${urlId}`,
       reqBody 
    );
  }
  /**
   * delete endpoint
  */
   deleteBloodBank(reqBody: any): Observable<any> {
    return this._http.delete<any>(
      this.baseUrl + API_ENDPOINT.bloodBank.delete + `/${reqBody.id}`,
       reqBody 
    );
  }
  
}
