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
  base = 'EUR';
  counter = 'USD';
  rate: any;
  convertedAmount: number | null = null;
  loading: boolean = false;
  currencies: string[] = ['EUR', 'USD'];

  constructor(private fxRateService: FxRateService) { }

  ngOnInit(): void {
    this.getRate();
  }

  getRate(): void {
    this.loading = true;
    this.fxRateService.getFxRate(this.base, this.counter, this.date, this.amount).subscribe({
      next: (data) => {
        this.rate = data;
        this.convertedAmount = this.calculateConvertedAmount();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching FX rate:', error);
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
