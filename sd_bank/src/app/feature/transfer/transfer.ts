import { Component } from '@angular/core';
import {HlmCardImports} from '@spartan-ng/helm/card'
import {HlmLabelImports} from '@spartan-ng/helm/label'
import {HlmInputImports} from '@spartan-ng/helm/input'
import {HlmButtonImports} from '@spartan-ng/helm/button'

@Component({
  selector: 'app-transfer',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  templateUrl: './transfer.html',
  styleUrl: './transfer.css',
})
export class Transfer {

}
