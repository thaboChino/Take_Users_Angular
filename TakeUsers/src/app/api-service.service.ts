import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user,this.httpOptions);
  }

  addUser(user: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}`,user,this.httpOptions)
             .pipe(tap((newUser: any) => console.log(`added user:${newUser.first_name}`)),
             catchError(this.handleError<any>('addUserError')));;

    
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
}
