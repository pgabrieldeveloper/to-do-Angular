import { Component, OnInit } from '@angular/core';
import { TaskList } from '../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  public taskList: Array<TaskList> = [
   
  ];

  constructor() { }

  ngOnInit(): void {
  }
  public setTask(event:string){

    this.taskList.push({task:event,checked:false})
  }
  public deleteById(index: number) {
    this.taskList.splice(index,1);
  }
  public deleteAll(){
    const confirm = window.confirm("Deseja realmente apagar tudo ?");
    if(confirm){
      this.taskList = [];

    }
  }

}
