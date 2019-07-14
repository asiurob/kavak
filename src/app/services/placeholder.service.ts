import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService implements Resolve<any> {

  constructor( private HTTP: HttpClient ) { }

  get(): Observable<any> {
    return this.HTTP.get('https://jsonplaceholder.typicode.com/posts');
  }

  getOne( id: number ): Observable<any> {
    return this.HTTP.get(`https://jsonplaceholder.typicode.com/posts/${ id }`);
  }

  resolve( word: any ): Observable<any> {
    return this.HTTP.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map( ( res: any ) => res.filter( ( obj: any ) => {
        if ( obj.title.includes( word ) || obj.body.includes( word ) ) {
          return obj;
        }
      }) ),
      catchError( ( err: any ) => Observable.throw( err.json() ) )
    );
  }
}
