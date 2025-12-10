import { Component } from '@angular/core';
import { BrnAlertDialogImports } from '@spartan-ng/brain/alert-dialog';
import { HlmAlertDialogImports } from '@spartan-ng/helm/alert-dialog';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { Router } from '@angular/router';
import { Table } from "./table/table";

@Component({
  selector: 'app-balance',
  imports: [BrnAlertDialogImports, HlmAlertDialogImports, HlmButtonImports, Table],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance {
  constructor(
    private router: Router
  ) {}
  navigateToDepoit(){

    this.router.navigate(['/deposit']);

  }
  

}
