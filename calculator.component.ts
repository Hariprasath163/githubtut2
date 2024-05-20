import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) { }

  calculate(operator: string) {
    const url = `http://localhost:8000/${operator}`; // Replace with your backend URL
    this.http.get<any>(url, { params: { num1: this.num1, num2: this.num2 } })
      .subscribe(response => {
        this.result = response.result;
        this.error = null;
      }, error => {
        this.result = null;
        this.error = error.error?.error || "An error occurred.";
      });
  }
}
