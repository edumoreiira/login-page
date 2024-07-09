import { FormControl } from "@angular/forms";

export interface RegisterForm {
    username: FormControl,
    password: FormControl,
    passwordConfirm: FormControl,
    name: FormControl,
    email: FormControl,
    dateBirth: FormControl
}