/**
 * ndf interceptor
 *  @author Muhamed Hassan <muhamed.hassan92@zad-solution.com>
 */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// @Injectable()
@Injectable({ providedIn: 'root' })
export class AppInterceptor implements HttpInterceptor {
  errorText: any;
  lang: string;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (localStorage.getItem('user') !== null) {
    //   const user = JSON.parse(localStorage.getItem('user'));
    const user = JSON.parse(localStorage.getItem('user'));

    const clonedRequest = request.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + user.token,
        // "Content-Type": "application/json"
      }),
    });
    return next.handle(clonedRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // alert('error .. event instanceof HttpResponse');
          if (event.body.errorStatus) {
            if (event.body.errorResponsePayloadList.length > 0) {
              // alert('error .. event.body.errorResponsePayloadList.length > 0');
            } else {
              // alert('another errror');
            }
          }
          // if (event.body.errorStatus && this.lang === 'ar') {
          //     this.sweetAlert.showError('error', this.errorText);
          //     console.log('errorResponsePayloadList', event.body.errorResponsePayloadList[0]);
          // } else if (event.body.errorStatus && this.lang === 'en') {
          //     this.sweetAlert.showError('error', this.lang);
          // }
          //  else if (event.body.resultData.resultData) {
          // }
          // alert('response');
          console.log(' interceptor - response', event.body);
        } else if (event instanceof HttpErrorResponse) {
          // alert('error');
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        // tslint:disable-next-line:max-line-length
        // if (err.status === 401 || err.status === 403 || sessionStorage.getItem('user') === null || err.message === 'Access Denied') {
        //     // auto logout if 401 response returned from api
        //     localStorage.clear();
        //     location.reload(true);
        //     this.router.navigate(['/login']);
        // } else if (err.status === 404 || err.status === 400) {
        //     alert('404');
        // } else {
        const error = err || err;
        // const error = err.error.message || err.statusText;
        return throwError(error);
        // }
      })
    );
    // }
    // return next.handle(request);
  }
}
