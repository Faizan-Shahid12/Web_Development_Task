import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];
  private apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';
  updateUserForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.updateUserForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<User[]>(this.apiUrl).subscribe(users => {
      this.users = users;
    });
  }

  fillUpdateForm(user: User): void {
    this.updateUserForm.setValue({
      id: user.id,
      name: user.name,
      email: user.email
    });
  }

  updateUser(): void {
    if (this.updateUserForm.valid) {
      const updatedUser = this.updateUserForm.value;
      this.http.put<User>(`${this.apiUrl}/${updatedUser.id}`, updatedUser).subscribe(() => {
        this.loadUsers();
        this.updateUserForm.reset();
      });
    }
  }

  deleteUser(id: number): void {
    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe(() => {
      this.loadUsers();
    });
  }
}
