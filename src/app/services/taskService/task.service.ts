// task.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Task } from 'src/app/models/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  createTask(task: Task): Observable<any> {
    console.log('from service',task);

    const newTask : any = {
      "title": task.title,
      "description": task.description,
      "priority": task.priority,
      "startDate": task.startDate,
      "dueDate": task.dueDate,
      "createdByUserId": task.createdBy,
      "assignedToUserId": task.assignedTo,
      "status": task.status,
      "tagIds": [1, 2]
    }
    return this.http.post<any>(`${this.apiUrl}/tasks`, newTask);


  }

 
  deleteTask(taskId: number): Observable<void> {
    const userId = 1; 
    return this.http.delete<void>(`${this.apiUrl}/tasks/${taskId}/${userId}`);
  }
  
  updateTask(task: Task): Observable<Task> {
   
    const userId = 1; 
    return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}/${userId}`, task);
  }
}
