import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output()
  public eventEmmitTask = new EventEmitter();

  public task: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  public submmitEventTask(){
    this.task = this.task.trim();
    if(this.task){
      this.eventEmmitTask.emit(this.task);
      this.task = "";
    }
  }

}
