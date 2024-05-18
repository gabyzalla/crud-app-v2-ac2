import { Component } from '@angular/core';

interface Task {
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskList: Task[] = [
    { description: 'Task 1', done: false },
    { description: 'Task 2', done: false }
  ];

  changeTask(task: Task) {
    task.done = !task.done;
  }
}
