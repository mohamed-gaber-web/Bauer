import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { getListOfIssues } from 'src/app/api.constatnt';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class IssuesResolver implements Resolve<boolean> {

  constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const params = `?page=${1}&Size=${20}`;
    return this.dataService.getList(`${getListOfIssues}` + params)
      .pipe(
      catchError((error: any) => {
        return of('no data', error)
      })
    )
  }
}
