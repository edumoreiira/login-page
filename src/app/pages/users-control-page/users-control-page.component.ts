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
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-control-page',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, CommonModule, InputComponent, DropdownSelectionComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './users-control-page.component.html',
  styleUrl: './users-control-page.component.scss',
  animations: [slide, popUp, fadeInOut, parentAnimations]
})


export class UsersControlPageComponent implements OnInit{
  isEditorActive = false;
  userForm: FormGroup;
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

  constructor(private controlService: LoginSignupService){

    this.userForm = new FormGroup({
      user: new FormArray([
      ])
    });
    
  }
  users(): FormArray{
    return this.userForm.get("user") as FormArray;
  }
  ngOnInit(): void {
      this.users$ = this.controlService.getAllUsers();
  }

  createUserForm(){
    const formGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    (this.userForm.get('user') as FormArray).push(formGroup);
  }
  addRowToFormGroup(row: User, event: Event){
    const editButton = event.target as HTMLButtonElement;


    //retorna o index do array rowsToEdit caso o usuário já tenha sido selecionado, caso contrário retorna -1
    const index = this.usersToEdit.findIndex(user => user.id === row.id);

    if(index !== -1){
      this.usersToEdit.splice(index, 1);
      editButton.classList.remove('registry__edit-button--active');
      
    }else{
      row.edited = false;
      this.usersToEdit.push(row);
      this.createUserForm();
      editButton.classList.add('registry__edit-button--active');
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
