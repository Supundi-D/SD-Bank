import { Component } from '@angular/core';
import {HlmCardImports} from '@spartan-ng/helm/card'
import {HlmLabelImports} from '@spartan-ng/helm/label'
import {HlmInputImports} from '@spartan-ng/helm/input'
import {HlmButtonImports} from '@spartan-ng/helm/button'
import { HlmItemImports } from '@spartan-ng/helm/item';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { BrnInputOtp } from '@spartan-ng/brain/input-otp';
import { HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot } from '@spartan-ng/helm/input-otp';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';


@Component({
  selector: 'app-transfer',
  imports: [HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports,HlmSpinnerImports, HlmItemImports,BrnSelectImports, HlmSelectImports,HlmInputOtp, HlmInputOtpGroup, HlmInputOtpSlot, BrnInputOtp],
  templateUrl: './transfer.html',
  styleUrl: './transfer.css',
})
export class Transfer {
  transfer = {
    amount: 0
  };

}
