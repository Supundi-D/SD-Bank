import { Component, Renderer2 } from '@angular/core';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';
import { ThemeService } from '../../core/service/theme.service';

@Component({
  selector: 'app-my-account',
  imports: [HlmButtonImports,HlmLabel, HlmSwitch],
  standalone: true,
  templateUrl: './my-account.html',
  styleUrl: './my-account.css',
})
export class MyAccount {
  constructor(
    private themeService: ThemeService
  ){}

  toggleDark(){

    this.themeService.toggleDark()

  }

}
