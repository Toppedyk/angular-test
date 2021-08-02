import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }


  getTasks(): Task[] {
    return TASKS;
  }
}
