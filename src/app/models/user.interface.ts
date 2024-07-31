import {  FormControl } from "@angular/forms"

export interface User {
    id: string,
    name: string,
    birthDate: string,
    email: string,
    username: string,
    password: string,
    status?:  'unchanged' | 'edited' | 'error' | 'undo' | 'deleted',
    addedToEdit?: boolean,
}

export interface UserForm{
    id: FormControl,
    username: FormControl,
    password: FormControl,
    birthDate: FormControl,
    name: FormControl,
    email: FormControl,
}