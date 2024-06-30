import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-users-control-page',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, CommonModule],
  templateUrl: './users-control-page.component.html',
  styleUrl: './users-control-page.component.scss'
})


export class UsersControlPageComponent {
  users: User[] = [
    {
      id: "25d87a77-2f16-4ff7-881e-f645c96fd53d",
      name: "Edu15",
      birthDate: "1990-05-15",
      email: "edu@gmail.com",
      username: "Bobos",
      password: "123456"
    },
    {
      id: "a173600a-cc1c-4993-ab98-c26f853c3ef1",
      name: "Eduardo",
      birthDate: "2001-12-11",
      email: "edu@gmail.com",
      username: "jkky",
      password: "Edu12345"
    },
    {
      id: "14d40c47-ace4-47d7-929f-5fa00fa161dc",
      name: "Eduardo",
      birthDate: "2001-12-11",
      email: "edu@gmail.com",
      username: "jkky1",
      password: "Edu12345"
    },
    {
      id: "aacfc785-6074-49e2-88df-fbb2c4b0ae40",
      name: "456",
      birthDate: "1561-06-15",
      email: "a@a.com",
      username: "4564",
      password: "1231313"
    }
  ]
}
