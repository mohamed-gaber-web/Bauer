import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { StorageService } from './shared/services/storage.service';
import { ToasterServive } from './shared/services/toaster.service';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService, private router: Router, private toaster: ToasterServive) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loaderService.show();
    const token = this.storageService.getAccessToken();

    if (token) {
      httpRequest = httpRequest.clone({
        headers: httpRequest.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return next.handle(httpRequest).pipe(
      // finalize(() => {
      //   this.loaderService.hide();
      // }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
            this.storageService.clearStorage();
            this.router.navigate(['/'], {
              queryParams: { returnUrl: this.router.routerState.snapshot.url },
            });
          } else if(err.status === 400) {
            this.toaster.error('top', err.error.error)
          } else if(err.status === 500) {
            this.toaster.error('top', 'Please check conection !!')
          }
        }

        return throwError(err);
      })
      );
  }
}
