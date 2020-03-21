import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

interface HttpResult {
  result: number
}
@Injectable({
  providedIn: 'root'
})

export class BoxServiceService {

  constructor(private http: HttpClient) { }

  postBoxData(formData): Observable<HttpResult[]> {

    return this.http.post<HttpResult[]>("http://192.168.50.60:9000/api/box", formData).pipe(
      tap(_ => this.log('postData')),
      catchError(this.handleError<HttpResult[]>('getHeroes', []))
    );
  }

  private log(message: string) {
    console.log(message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
