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

  // list() {
  //   this.http
  //     .delete(
  //       `http://41.32.95.166:8080/zad-mass-pos/company/delete?entityId=88`
  //     )
  //     .subscribe((data: any) => {
  //       console.log('data', data);
  //     });
  // }
  login() {
    this.http
      .post(`http://41.32.95.166:8080/zad-mass-pos/auth/sign-in`, {
        userEmail: 'admin@gmail.com',
        password: '123',
      })
      .subscribe((data: any) => {
        localStorage.setItem('user', data.resultData);
      });
  }
}
