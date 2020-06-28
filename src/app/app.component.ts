import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intercept';
  constructor(private http: HttpClient) {}

  list() {
    this.http.delete(`http://41.32.95.166:8080/zad-mass-pos/company/delete?entityId=88`).subscribe((data: any) => {
      console.log('data', data);
    });
  }
}
