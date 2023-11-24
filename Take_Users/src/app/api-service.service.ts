import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:3000/api/users';
  private userAddedSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // updateUser(user: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${user.id}`, user,this.httpOptions);
  // }

  addUser(user: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}`,user,this.httpOptions)
             .pipe(tap((newUser: any) => // Emit an event when a user is added
                                        this.userAddedSubject.next(newUser)),
             catchError(this.handleError<any>('addUserError')));;

    
  }

  // Observable to subscribe to user added events
  onUserAdded(): Observable<any> {
    return this.userAddedSubject.asObservable();
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
}
