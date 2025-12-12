import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { HlmCardImports } from '@spartan-ng/helm/card'
import { HlmLabelImports } from '@spartan-ng/helm/label'
import { HlmInputImports } from '@spartan-ng/helm/input'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmFormFieldImports } from '@spartan-ng/helm/form-field'
import { LoginService } from '../../core/service/login.service';
// import { HlmAutocomplete } from '@spartan-ng/helm/autocomplete'

// Account interface
interface Account {
  email: string;
  password: string;
  branch: string;
}


@Component({
  selector: 'app-create-account',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports, HlmInputImports, HlmFormFieldImports, ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
  standalone: true
})
export class CreateAccount {
  // key for localStorage
  private readonly LOGIN_KEY = 'login';

  // createFormGroup of type FormGroup
  createFormGroup!: FormGroup;
  // savedLogin is a empty array
  savedLogin: Account[]  = [];

  // 
  // 
  constructor(private formBuilder: FormBuilder) {
    this.initiateForm()
  }

  // 
  initiateForm() {
    this.createFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      branch: ['', [Validators.required]]
    })
  }

  submitForm() {
    if (this.createFormGroup.valid) {
      alert("Logging in");
      this.saveLogin(this.createFormGroup.value);
    } else {
      alert("All fields are required");
    }

    console.log(this.createFormGroup.value);
  }

  private saveLogin(data: Account) {
    this.savedLogin.push(data);
    localStorage.setItem(this.LOGIN_KEY, JSON.stringify(Account));
  }

  ShowLogin() {
    const savedLogin = localStorage.getItem(this.LOGIN_KEY);
    this.savedLogin=JSON.parse(savedLogin!)
  }



}



