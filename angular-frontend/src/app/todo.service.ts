import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + '/api/todos/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createTodo(todoData: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl + '/api/todos/', todoData)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateTodo(todoData: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl + '/api/todos/' + todoData.id, todoData)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(this.baseUrl + '/api/todos/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
