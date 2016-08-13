import { Component } from '@angular/core';
import { FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html',
    directives:[REACTIVE_FORM_DIRECTIVES]

})
export class DataDrivenComponent {
    myForm: FormGroup;
    genders=['Male', 'Female'];
    constructor(){
        this.myForm=new FormGroup({
            'username': new FormControl('Harry', [Validators.required, this.exampleValidator]),
            'email': new FormControl('', 
                                    [Validators.required, 
                                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            'password': new FormControl('', Validators.required),
            'gender': new FormControl('Male'),
            'hobbies': new FormArray([
                new FormControl('cooking', Validators.required, this.asyncExampleValidator)
            ])
        });
        this.myForm.statusChanges.subscribe(
            (data:any) => console.log(data)
        );
    }
    onAddHobby(){
        (<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator));
    }
    onSubmit(){
        console.log(this.myForm);
    }
    exampleValidator(control: FormControl):{[s:string]:boolean}{
        if (control.value === "Example"){
            return {'example': true};
        }
        return null; 
    }

    asyncExampleValidator(control:FormControl): Promise<any> | Observable<any>{
        const promise=new Promise<any>(
            (resolve, reject) => {
                setTimeout(()=>{
                    if (control.value === "Example"){ 
                        resolve({'invalid':true});
                    }else{
                        resolve(null);
                    }
                }, 1500);
            }
        );
        return promise;
    }
}
