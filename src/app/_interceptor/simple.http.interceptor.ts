import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from "rxjs";

export class SimpleHttpInterceptor implements HttpInterceptor {

  // @todo Fails after injecting userService
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request
    const clonedRequest = req.clone({
      setHeaders: {
        // @todo Use the real session
        Authorization: `Bearer asdad`
      }
    })

    return next.handle(clonedRequest).pipe(
      tap(r => {
        console.log('r', r);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status >= 500) {
          console.log('Server error occured!');
        }

        return throwError(() => error);
      })
    );
  }

}
