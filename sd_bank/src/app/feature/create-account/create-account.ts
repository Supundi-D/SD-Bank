import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { HlmCardImports } from '@spartan-ng/helm/card'
import { HlmLabelImports } from '@spartan-ng/helm/label'
import { HlmInputImports } from '@spartan-ng/helm/input'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmFormFieldImports } from '@spartan-ng/helm/form-field'
// import { HlmAutocomplete } from '@spartan-ng/helm/autocomplete'


@Component({
  selector: 'app-create-account',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports, HlmInputImports, HlmFormFieldImports, ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {

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
    if (!this.createFormGroup.valid){
      alert("All fields are required");
      return;
    }

    console.log(this.createFormGroup.value);

    }
}

