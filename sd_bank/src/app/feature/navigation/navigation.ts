import { Component } from '@angular/core';
import { BrnNavigationMenuImports } from '@spartan-ng/brain/navigation-menu';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';


@Component({
  selector: 'app-navigation',
  imports: [HlmNavigationMenuImports, BrnNavigationMenuImports, HlmIconImports],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  protected readonly _components = [
		{
			title: 'Create Account',
			url:'/create-account'
		},
    {
			title: 'Deposit',
			url:'/deposit'
		},
    {
			title: 'Withdrawal',
			url:'/withdrawal'
		},
    {
			title: 'Transfer',
			url:'/transfer'
		}
		
	];

}
