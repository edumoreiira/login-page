import { FormArray, FormControl } from "@angular/forms"

export interface User {
    id: string,
    name: string,
    birthDate: string,
    email: string,
    username: string,
    password: string,
    edited?: boolean
}

export interface UserForm{
    id: FormControl,
    username: FormControl,
    password: FormControl,
    birthDate: FormControl,
    name: FormControl,
    email: FormControl,
}