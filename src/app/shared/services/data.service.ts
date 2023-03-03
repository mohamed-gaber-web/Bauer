import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public headers = new HttpHeaders().set('Accept-Language','ar-EG');


  constructor(private http: HttpClient) { }


  getList(route: string, options?: any): Observable<any> {
    return this.http.get(route, options);
  }

  post(route: string, object: any, options?: any) {
    return this.http.post(route, object, options);
  }

  put(route: string, object: any, options?: any) {
    return this.http.put(route,object, options);
  }

  delete(route: string, body: any) {
    return this.http.delete(route, body);
  }
  getItemById(route: string, id: string, options?: any): Observable<any> {
    return this.http.get(`${route}?issueId=${id}`);
  }
  getItemByObjectId(route: string, object: string, id: string, options?: any): Observable<any> {
    return this.http.get(`${route}${object}=${id}`, options);
  }
}
