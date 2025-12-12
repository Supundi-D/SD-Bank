import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly LOGIN_KEY = 'login';


  
  createFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.initiateForm()
  }

  initiateForm(){
    this.createFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      branch: ['', [Validators.required]]
    })
  }

  submitForm() {
    if (this.createFormGroup.valid){
      alert("Logging in");
      this.saveLogin(this.createFormGroup.value)
    }else{
      alert("All fields are required");
      
    }

    console.log(this.createFormGroup.value);

    }

  private saveLogin(data:string){
    localStorage.setItem(this.LOGIN_KEY,data);
  }

  private ShowLogin(data:string) {
     localStorage.getItem(this.LOGIN_KEY);
  }
}