import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';
import { InputComponent } from '../../components/input/input.component';
import { DropdownSelectionComponent } from '../../components/dropdown-selection/dropdown-selection.component';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';
import { slide } from '../../animations/transition-animations';

@Component({
  selector: 'app-users-control-page',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, CommonModule, InputComponent, DropdownSelectionComponent],
  templateUrl: './users-control-page.component.html',
  styleUrl: './users-control-page.component.scss',
  animations: [slide]
})


export class UsersControlPageComponent {
  users: User[] = [
    {
      id: "25d87a77-2f16-4ff7-881e-f645c96fd53d",
      name: "Edu15asdadaaaddddddddddddddddddddddd",
      birthDate: "1990-05-15",
      email: "edu@gmail.com",
      username: "Bobos",
      password: "123456"
    },
    {
      id: "a173600a-cc1c-4993-ab98-c26f853c3ef1",
      name: "Eduardoasdadaaaddddddddddddddddddddddd",
      birthDate: "2001-12-11",
      email: "edu@gmail.com",
      username: "jkky",
      password: "Edu12345"
    },
    {
      id: "14d40c47-ace4-47d7-929f-5fa00fa161dc",
      name: "Eduardoasdadaaaddddddddddddddddddddddd",
      birthDate: "2001-12-11",
      email: "edu@gmail.com",
      username: "jkky1",
      password: "Edu12345"
    },
    {
      id: "aacfc785-6074-49e2-88df-fbb2c4b0ae40",
      name: "456asdadaaaddddddddddddddddddddddd",
      birthDate: "1561-06-15",
      email: "a@a.com",
      username: "4564",
      password: "1231313"
    }
  ]

  toggleShowPassword(event: Event){
    const element = event.target as HTMLElement;
    element.classList.toggle('registry__item--censored')
  }

  tableColumns: DropdownListOptions[] = [
    { name: 'Registro', isActive: true },
    { name: 'Nome', isActive: true },
    { name: 'Data', isActive: true },
    { name: 'E-mail', isActive: true },
    { name: 'Username', isActive: true },
    { name: 'Senha', isActive: true },
  ]

  changeTable(tableName: string){
    //percorre o array de tableColumns ate achar o primeiro elemento com nome passado em tableName
    const table = this.tableColumns.find(column => column.name === tableName);
    //toggle no booleano isActive
    if(table){
      table.isActive = !table.isActive;
    }
  }
}
