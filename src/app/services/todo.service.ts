import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:5229';
  private baseUrl = `${this.apiUrl}/todos`;

  loadTodos() {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}`);
  }

  addTodo(todo: string) {
    return this.httpClient.post<Todo>(`${this.baseUrl}`, { name: todo });
  }
}

export interface Todo {
  id: string;
  name: string;
  addedDate: Date;
}
