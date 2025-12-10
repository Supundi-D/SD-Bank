import { Component } from '@angular/core';
import {HlmCardImports} from '@spartan-ng/helm/card'
import {HlmLabelImports} from '@spartan-ng/helm/label'
import {HlmInputImports} from '@spartan-ng/helm/input'
import {HlmButtonImports} from '@spartan-ng/helm/button'

@Component({
  selector: 'app-withdrawal',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  templateUrl: './withdrawal.html',
  styleUrl: './withdrawal.css',
})
export class Withdrawal {

}
