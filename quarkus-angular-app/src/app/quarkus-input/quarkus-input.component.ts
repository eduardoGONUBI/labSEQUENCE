import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quarkus-input',
  templateUrl: './quarkus-input.component.html',
  styleUrls: ['./quarkus-input.component.css']
})
export class QuarkusInputComponent {
  n: number = 0; // Set a default value
  result: number = 0;

  constructor(private http: HttpClient) {}

    calculate() {
  console.log('Calculating with n:', this.n);

  if (this.n !== undefined) {
    this.http.get<number>(`http://localhost:8080/labseq//${this.n}`).subscribe(result => {
      console.log('API Response:', result);
      this.result = result; // Update the result variable
    });
  }

  }
}
