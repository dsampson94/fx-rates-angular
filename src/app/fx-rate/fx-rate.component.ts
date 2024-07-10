import { Component, OnInit } from '@angular/core';
import { FxRateService } from '../fx-rate.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fx-rate',
  templateUrl: './fx-rate.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./fx-rate.component.css']
})
export class FxRateComponent implements OnInit {
  base = 'EUR';
  counter = 'USD';
  rate: any;

  constructor(private fxRateService: FxRateService) { }

  ngOnInit(): void {
    this.getRate();
  }

  getRate(): void {
    this.fxRateService.getFxRate(this.base, this.counter).subscribe({
      next: (data) => {
        this.rate = data;
      },
      error: (error) => {
        console.error('Error fetching FX rate:', error);
      }
    });
  }
}
