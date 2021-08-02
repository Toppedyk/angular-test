import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]= [];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }

}
