import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    id: Math.random(),
    texto: '',
    completado: false,
  };
  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl = new FormControl('', Validators.required);
  editando: boolean = false;
  @ViewChild('inputFisico') txtFisico: ElementRef | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.txtInput.setValue(this.todo.texto);
    this.chkCompletado.setValue(this.todo.completado);
    this.chkCompletado.valueChanges.subscribe(val => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }
  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtFisico?.nativeElement.select();
    }, 1);
  }
  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid || this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }
  borrar(){
    this.store.dispatch(actions.borrar({id:this.todo.id}));
  }
}
