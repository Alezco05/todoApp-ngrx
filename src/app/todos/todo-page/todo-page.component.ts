import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { toggleAll } from '../todos.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completados: boolean = false;
  constructor(private store: Store<AppState>) {
    this.store.select('todos');
  }

  ngOnInit(): void {}

  toggleAll() {
    this.completados = !this.completados;
    this.store.dispatch(toggleAll({completado: this.completados}));
  }
}
