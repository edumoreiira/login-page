import { Component, OnInit } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { CommonModule } from '@angular/common';
import { User, UserForm } from '../../models/user.interface';
import { InputComponent } from '../../components/input/input.component';
import { DropdownSelectionComponent } from '../../components/dropdown-selection/dropdown-selection.component';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';
import { fadeInOut, parentAnimations, popUp, slide } from '../../animations/transition-animations';
import { ButtonComponent } from '../../components/button/button.component';
import { LoginSignupService } from '../../services/login-signup.service';
import { Observable } from 'rxjs';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-control-page',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, CommonModule, InputComponent, DropdownSelectionComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './users-control-page.component.html',
  styleUrl: './users-control-page.component.scss',
  animations: [slide, popUp, fadeInOut, parentAnimations]
})


export class UsersControlPageComponent implements OnInit{
  isAllFormsChanged: boolean = false;
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
  userControl: User[] = [];

  constructor(private controlService: LoginSignupService){

    this.userForm = new FormGroup({
      user: new FormArray([
      ])
    });
    
  }
  ngOnInit(): void {
    this.users$ = this.controlService.getAllUsers();
  }
  
  createUserForm(id: string, name: string, birthDate: string, email: string, username: string, password: string){
    const formGroup = new FormGroup<UserForm>({
      id: new FormControl(id, [Validators.required]),
      name: new FormControl(name, [Validators.required]),
      birthDate: new FormControl(birthDate, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      username: new FormControl(username, [Validators.required]),
      password: new FormControl(password, [Validators.required, Validators.minLength(5)])
    });

    (this.userForm.get('user') as FormArray).push(formGroup);
  }

  removeUserForm(index: number){
    this.usersForm().removeAt(index);
  }

  usersForm(): FormArray{
    return this.userForm.get("user") as FormArray;
  }
  

  controlRowsAndFormGroup(row: User, event: Event){
    const editButton = event.target as HTMLButtonElement;


    //retorna o index do array rowsToEdit caso o usuário já tenha sido selecionado, caso contrário retorna -1
    const index = this.userControl.findIndex(user => user.id === row.id);

    if(index !== -1){
      this.userControl.splice(index, 1);
      this.removeUserForm(index);
      editButton.classList.remove('registry__edit-button--active');
      
    }else{
      row.edited = false;
      this.userControl.push(row);
      this.createUserForm(row.id, row.name, row.birthDate, row.email, row.username, row.password);
      editButton.classList.add('registry__edit-button--active');
    }
  }

  toggleShowPassword(event: Event){
    const element = event.target as HTMLElement;
    element.classList.toggle('registry__item--censored')
  }

  isFormChanged(initialValues: User, formValues: AbstractControl): boolean{
    const initial = initialValues;
    const form = formValues.value

    //retorna true caso qualquer uma das validacoes forem verdadeiras.
    const result = initial.id !== form.id || 
    initial.name !== form.name || 
    initial.birthDate !== form.birthDate || 
    initial.email !== form.email || 
    initial.username !== form.username || 
    initial.password !== form.password


    return result;
  }

  isAllFormChanged(): boolean{

    const condition = (initial: User, formValues: AbstractControl) => {
      const form = formValues.value
      return initial.id === form.id &&
             initial.name === form.name &&
             initial.birthDate === form.birthDate &&
             initial.email === form.email &&
             initial.username === form.username &&
             initial.password === form.password;
    };

    const result = this.userControl.every((user, index) => {
      return  condition(user, this.usersForm().at(index));
    })

    return result;
  }

  test(user: [User]){
    
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
