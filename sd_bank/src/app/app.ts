import { Component, OnInit, signal } from '@angular/core';
import { MyAccount } from "./feature/my-account/my-account";
import { ThemeService } from './core/service/theme.service';
import { Login } from "./feature/login/login";
import { CreateAccount } from "./feature/create-account/create-account";
import {hlmH1} from '@spartan-ng/helm/typography';
import { Deposit } from "./feature/deposit/deposit";
import { RouterOutlet } from '@angular/router';
import { Withdrawal } from "./feature/withdrawal/withdrawal";
import { Transfer } from "./feature/transfer/transfer";
import { Navigation } from "./feature/navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyAccount, Login, CreateAccount, Deposit, Withdrawal, Transfer, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('sd_bank');

  constructor(private themeService: ThemeService){}
  

  ngOnInit(): void {
    this.themeService.setupTheme();
  }
}
