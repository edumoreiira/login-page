import { Component, OnInit } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';
import { InputComponent } from '../../components/input/input.component';
import { DropdownSelectionComponent } from '../../components/dropdown-selection/dropdown-selection.component';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';
import { fadeInOut, parentAnimations, popUp, slide } from '../../animations/transition-animations';
import { ButtonComponent } from '../../components/button/button.component';
import { LoginSignupService } from '../../services/login-signup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-control-page',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, CommonModule, InputComponent, DropdownSelectionComponent, ButtonComponent],
  templateUrl: './users-control-page.component.html',
  styleUrl: './users-control-page.component.scss',
  animations: [slide, popUp, fadeInOut, parentAnimations]
})


export class UsersControlPageComponent implements OnInit{
  isEditorActive = false;
  users$ = new Observable<User[]>();
  tableColumns: DropdownListOptions[] = [
    { name: 'Registro', isActive: true },
    { name: 'Nome', isActive: true },
    { name: 'Data', isActive: true },
    { name: 'E-mail', isActive: true },
    { name: 'Username', isActive: true },
    { name: 'Senha', isActive: true },
  ]
  usersToEdit: User[] = [];

  constructor(private controlService: LoginSignupService){}
  
  ngOnInit(): void {
      this.users$ = this.controlService.getAllUsers();
  }  
  addRowToEditList(row: User, event: Event){
    const editButton = event.target as HTMLButtonElement;


    //retorna o index do array rowsToEdit caso o usuário já tenha sido selecionado, caso contrário retorna -1
    const index = this.usersToEdit.findIndex(user => user.id === row.id);

    if(index !== -1){
      this.usersToEdit.splice(index, 1);
      editButton.classList.remove('registry__edit-button--active');
      
    }else{
      row.edited = false;
      this.usersToEdit.push(row);
      editButton.classList.add('registry__edit-button--active');
      console.log(this.usersToEdit)
    }
  }

  toggleShowPassword(event: Event){
    const element = event.target as HTMLElement;
    element.classList.toggle('registry__item--censored')
  }


  changeTable(tableName: string){
    //percorre o array de tableColumns ate achar o primeiro elemento com nome passado em tableName
    const table = this.tableColumns.find(column => column.name === tableName);
    //toggle no booleano isActive
    if(table){
      table.isActive = !table.isActive;
    }
  }


}
