import { Component } from '@angular/core';
import { UserListComponent } from './user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, HttpClientModule, ReactiveFormsModule], // Include ReactiveFormsModule
  template: `<app-user-list></app-user-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
