import { Component } from '@angular/core';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { Withdrawal } from '../../withdrawal/withdrawal';

@Component({
  selector: 'app-table',
  imports: [HlmTableImports],
  standalone:true,
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table  {
  protected _invoices = [
		{
			invoice: '2025-11-20',
			Deposit: 'LKR 2000',
			Withdrawal: '',
			Amount: 'LKR 2000',
		},
    {
			invoice: '2025-11-21',
			Deposit: 'LKR 4000',
			Withdrawal: '',
			Amount: 'LKR 6000',
		},
    {
			invoice: '2025-11-22',
			Deposit: '',
			Withdrawal: 'LKR 1000',
			Amount: 'LKR 5000',
		},
    {
			invoice: '2025-11-23',
			Deposit: 'LKR 2000',
			Withdrawal: '',
			Amount: 'LKR 3000',
		},
    {
			invoice: '2025-11-24',
			Deposit: 'LKR 5000',
			Withdrawal: '',
			Amount: 'LKR 8000',
		},
    {
			invoice: '2025-11-25',
			Deposit: 'LKR 2000',
			Withdrawal: '',
			Amount: 'LKR 10000',
		},
    {
			invoice: '2025-11-26',
			Deposit: 'LKR 10000',
			Withdrawal: '',
			Amount: 'LKR 20000',
		},
    {
			invoice: '2025-11-27',
			Deposit: '',
			Withdrawal: 'LKR 15000',
			Amount: 'LKR 5000',
		},
	];
}