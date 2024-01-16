import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TaskComponent } from './components/task/task.component';
import { taskReducer } from './store/reducers/task.reducer';
import { TaskEffects } from './store/effects/task.effects';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    StoreModule.forRoot({ tasks: taskReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    FormsModule,
    EffectsModule.forRoot([TaskEffects])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
