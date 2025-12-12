import { Component } from '@angular/core';
import {HlmCardImports} from '@spartan-ng/helm/card'
import {HlmLabelImports} from '@spartan-ng/helm/label'
import {HlmInputImports} from '@spartan-ng/helm/input'
import {HlmButtonImports} from '@spartan-ng/helm/button'
import { Router } from '@angular/router';
import { LoginService } from '../../core/service/login.service';

@Component({
  selector: 'app-login',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private router: Router, 
  ){}

  NavigateToCreate(){
    this.router.navigate(['/create-account']);
  }
  NavigateToDeposit(){
    this.router.navigate(['/depost']);
  }
  }

