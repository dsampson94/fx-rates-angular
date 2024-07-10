import { Component, OnInit } from '@angular/core';
import { FxRateService } from '../fx-rate.service';
import { DecimalPipe, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fx-rate',
  templateUrl: './fx-rate.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    DecimalPipe,
    NgForOf
  ],
  styleUrls: ['./fx-rate.component.css']
})
export class FxRateComponent implements OnInit {
  date: string = new Date().toISOString().split('T')[0];
  amount: number = 100;
  base = 'USD';
  counter = 'EUR';
  rate: any;
  convertedAmount: number | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(private fxRateService: FxRateService) { }

  ngOnInit(): void {}

  getRate(): void {
    this.loading = true;
    this.error = null;
    this.fxRateService.getFxRate(this.base, this.counter, this.date, this.amount).subscribe({
      next: (data) => {
        this.rate = data;
        this.convertedAmount = this.calculateConvertedAmount();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching FX rate:', error);
        this.error = 'Failed to fetch FX rate. Please try again.';
        this.loading = false;
      }
    });
  }

  calculateConvertedAmount(): number {
    return this.amount * this.rate.rate;
  }

  onSubmit(): void {
    this.getRate();
  }
}
