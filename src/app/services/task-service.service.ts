import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }


  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
