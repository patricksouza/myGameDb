import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'environments/environment';
import { APIResponse, Data } from 'app/models/data.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getValuesList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Data>> {
    let params = new HttpParams().set('ordering', ordering);
    //if a search was requested do this
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Data>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
  getValueDetails(id: string): Observable<Data> {
    const valueInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    return forkJoin({
      valueInfoRequest,
    }).pipe(
      map((response: any) => {
        return {
          ...response['valueInfoRequest'],
        };
      })
    );
  }
}
