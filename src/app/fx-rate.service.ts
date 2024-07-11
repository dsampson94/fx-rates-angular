import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FxRateService {
  private apiUrl = 'https://fx-rates-express.vercel.app';

  constructor(private http: HttpClient) { }

  getFxRate(base: string, counter: string, date: string, amount: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const params = new HttpParams()
      .set('base', base)
      .set('counter', counter)
      .set('amount', amount.toString());

    return this.http.get<any>(`${this.apiUrl}/fxrate`, { headers, params });
  }
}
