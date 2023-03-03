import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string): any {

    return (formGroup: FormGroup) => {

        let password = formGroup.controls[passwordKey];
        let passwordConfirmation = formGroup.controls[passwordConfirmationKey];

        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true})
            // return {mismatchedPasswords: true}
        }
        return null

    }

}

export function emailValidator(control: FormControl) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
    return null;

}
