import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { Todo, TodoService } from './services/todo.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { CardComponent } from './components/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AsyncPipe, CardComponent, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'front-angular';

  inputValue = '';
  protected todos$: Observable<Todo[]> = of([]);

  // Services
  private todoService = inject(TodoService);

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todos$ = this.todoService.loadTodos();
  }

  addTodo() {
    if (!this.inputValue) return;

    this.todoService
      .addTodo(this.inputValue)
      .pipe(take(1))
      .subscribe((_) => this.loadTodos());
  }
}
