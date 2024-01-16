import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
// import { TaskFormComponent } from './components/task-form/task-form.component';


const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: 'form', component: TaskFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
