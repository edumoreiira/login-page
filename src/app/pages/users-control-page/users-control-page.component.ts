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

type UserStatus = 'edited' | 'error' | 'unchanged' | 'undo';
@Component({
  selector: 'app-users-control-page',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, CommonModule, InputComponent, DropdownSelectionComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './users-control-page.component.html',
  styleUrl: './users-control-page.component.scss',
  animations: [slide, popUp, fadeInOut, parentAnimations]
})


export class UsersControlPageComponent implements OnInit{
  usersHasChanged: boolean = false;
  isEditorActive: boolean = false;
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
    this.getAllUsers();
  }
  
  createUserForm(id: string, name: string, birthDate: string, email: string, username: string, password: string){
    const formGroup = new FormGroup<UserForm>({
      id: new FormControl(id, [Validators.required]),
      name: new FormControl(name, [Validators.required]),
      birthDate: new FormControl(birthDate, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      username: new FormControl(username, [Validators.required]),
      password: new FormControl(password, [Validators.required, Validators.minLength(2)])
    });

    (this.userForm.get('user') as FormArray).push(formGroup);
  }

  removeUserForm(index: number){
    this.getAllUsersForm().removeAt(index);
  }
  getAllUsers(){
    this.users$ = this.controlService.getAllUsers()
  }
  getAllUsersForm(): FormArray{
    return this.userForm.get("user") as FormArray;
  }
  
  editUser(userForm: AbstractControl, validation: boolean, id: string,
  name: string, birthDate: string, email: string, username: string, password: string){
    console.log(validation)
    if(validation === true){
      const user = this.userControl.find(user => user.id === id);
      
      if(user?.status === 'edited' || (!this.isFormChanged(user!, userForm) && user?.status !== 'undo') ){
        console.log("x")
        return
      }
      this.controlService.editUser(id, username, password, name, birthDate, email).subscribe({
        next: () => {
          console.log("y")
          this.usersHasChanged = true;
          user!.status = 'edited'
          userForm.disable();
        },
        error: () => {
          console.log("z")
          user!.status = 'error'
        }
      })
    }

  }

  editAllUsers(validation: boolean){
    if(validation === true){
      const usersForm = this.getAllUsersForm();
      usersForm.controls.forEach((userForm) => {
        this.editUser(userForm, validation, userForm.value.id, userForm.value.name, userForm.value.birthDate,
        userForm.value.email, userForm.value.username, userForm.value.password);
      });
    }
  }

  undoChanges(userForm: AbstractControl, index: number){

    const backupUser = this.userControl[index];
    userForm.enable();
    this.userControl[index].status = 'undo';

    userForm.patchValue({
      name: backupUser.name,
      birthDate: backupUser.birthDate,
      email: backupUser.email,
      username: backupUser.username,
      password: backupUser.password
    })
    // console.log(userForm)
  }

  controlRowsAndFormGroup(row: User){

    //retorna o index do array rowsToEdit caso o usuário já tenha sido selecionado, caso contrário retorna -1
    const index = this.userControl.findIndex(user => user.id === row.id);
    
    if(index !== -1){
      this.userControl.splice(index, 1);
      this.removeUserForm(index);
      
    }else{
      row.status = 'unchanged';
      this.userControl.push(row);
      this.createUserForm(row.id, row.name, row.birthDate, row.email, row.username, row.password);
    }
  }

  isUserOnRegisterList(row: User): boolean{
    const user = this.userControl.find(user => user.id === row.id) || undefined;

    if(user){
      return true
    }
    return false
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

      if(initial.status === 'undo'){
        return false; // caso tenha algum formulario em estado 'undo', retornará false antes de checar os outros
      }

      return (initial.id === form.id &&
             initial.name === form.name &&
             initial.birthDate === form.birthDate &&
             initial.email === form.email &&
             initial.username === form.username &&
             initial.password === form.password) 
             || (initial.status === 'edited') //exceção para caso o formulario ja tenha sido editado, retornar true
    };

    const result = this.userControl.every((user, index) => {
      return  condition(user, this.getAllUsersForm().at(index));
    })

    return result;
  }

  userStatus(index: number): UserStatus{
    const user = this.userControl[index];
    const userForm = this.userForm.get('user')!.get([index]);
    console.log(userForm)
    if(user.status === 'edited'){
      return 'edited'
    }else if(user.status === 'error'){
      return 'error'
    }else if(user.status === 'undo' && !this.isFormChanged(user, userForm!)){
      return 'undo'
    }
    return 'unchanged'
  }

  closeEditor(){
    this.isEditorActive = false;

    if(this.usersHasChanged){
      this.getAllUsers(); // atualiza os usuarios na tabela;
    }
  }

  openEditor(){
    this.isEditorActive = true
    this.usersHasChanged = false;
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
