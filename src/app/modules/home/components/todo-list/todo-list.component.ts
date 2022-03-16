import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {


  public taskList: Array<TaskList> = [
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
      this.taskList.sort((first,last)=> Number(first.checked) - Number(last.checked));
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
  validationTask(event:string, i:number){
      console.log(event);
      if(!event.length){
        const confirm = window.confirm("A task está vazia deseja deletar ?");
        if(confirm){
          this.taskList.splice(i,1);
        }
      }
  }

}
