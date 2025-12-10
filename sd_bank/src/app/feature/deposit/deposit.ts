import { Component } from '@angular/core';
import {HlmCardImports} from '@spartan-ng/helm/card'
import {HlmLabelImports} from '@spartan-ng/helm/label'
import {HlmInputImports} from '@spartan-ng/helm/input'
import {HlmButtonImports} from '@spartan-ng/helm/button'

@Component({
  selector: 'app-deposit',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  templateUrl: './deposit.html',
  styleUrl: './deposit.css',
})
export class Deposit {

}
