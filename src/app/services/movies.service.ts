import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter,Injectable,Output } from '@angular/core';
import { catchError ,Observable, retry,throwError } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  base_Url ="http://localhost:3000/movies";
  
  constructor(private http: HttpClient) { }

  httpOptions =
  {
    headers: new  HttpHeaders({
      'Content-type':'application/json',

     }),
  };

  handleError(error : HttpErrorResponse)  
  {
    if(error.error instanceof ErrorEvent)
    {
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    }
    else{
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError
    (
      'Something happend with request, try again'
    );
  } 

  getList():Observable<Movie>
  {
    return this.http
      .get<Movie>(this.base_Url)
      .pipe(retry(2),catchError(this.handleError));

  }

  getItem(id:String): Observable<Movie>
  {
    return this.http
    .get<Movie>(this.base_Url + '/' + id)
    .pipe(retry(2), catchError(this.handleError));
  }

  udpdateItem(Id: string,item:any): Observable<Movie>
  {
    return this.http
      .put<Movie>(this.base_Url+ '/'+ Id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  createItem(item:any):Observable<Movie>
  {
    return this.http
    .post<Movie>(this.base_Url,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  deleteItem(id:string):Observable<Movie>
  {
    return this.http.delete<Movie>(`${this.base_Url}/${id}`,this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }
}
