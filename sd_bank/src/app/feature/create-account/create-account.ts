import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
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
  public control = new FormControl('', Validators.required);
  
  

  // private readonly _options: string[] = [
  //   'Nugegoda',
  //   'Kandy',
  //   'Colombo'
  // ];

  // public readonly search = signal('');

  // public readonly filteredOptions = computed(() =>
  //   this._options.filter((option) => option.toLowerCase().includes(this.search().toLowerCase())),
  // );
}

