import { Component, Renderer2 } from '@angular/core';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import { ThemeService } from '../../core/service/theme.service';

@Component({
  selector: 'app-my-account',
  imports: [HlmButtonImports],
  standalone: true,
  templateUrl: './my-account.html',
  styleUrl: './my-account.css',
})
export class MyAccount {
  constructor(
    private themeService: ThemeService
  ){}

  toggleDark(){

    this.themeService.toggleDark();

  }

}
