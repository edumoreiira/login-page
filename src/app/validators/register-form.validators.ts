import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const noSpaceAllowed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if(control.value != null && control.value.indexOf(' ') != -1){
        return { noSpaceAllowed: true }
    }
    return null;
}

export const passwordMismatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.parent?.get('password')
    if(control.value && password?.value && control.value !== password?.value){
        return { passwordMismatch: true }
    }
    return null;
}

export const noSpecialCharacters: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const regex = /^[a-zA-Z ]+$/;
    const isValid = regex.test(control.value);

    return isValid ? null : { noSpecialCharacters: true };
}

export const requiredSpecialCharacters: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const regex = /^[a-zA-Z\d]+$/;
    const isValid = !regex.test(control.value);

    return isValid ? null : { requiredSpecialCharacters: true };
}

export const validBornDate: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if(control.value){
        if(!regex.test(control.value)){
            return { invalidDateFormat: 'Formato inválido' }
        }
        //formDate
        const [year, month, day] = control.value.split('-').map(Number);
        //currentDate
        const date = new Date();
        const [currentYear, currentMonth, currentDay] = date.toJSON().split('T')[0].split('-').map(Number);
    
        if(year > currentYear || year < 1900){
            return { invalidDateFormat: 'Ano inválido' }
        }
        
        if(year === currentYear){
            if(month > currentMonth){
                return { invalidDateFormat: 'Mês inválido' }
            }
            if(month === currentMonth && day > (currentDay + 1)){
                console.log("day")
                return { invalidDateFormat: 'Dia inválido' }
            }
        }
    
    }


    return null
}