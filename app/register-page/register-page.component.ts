import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})


export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }

  public fbFormGroup = this.fb.group({

    username: ['', Validators.required],
    email: ['', Validators.required],
    mobno: ['', Validators.required],
    password: ['', Validators.required],

  });

  public async readFormValue() {

    const data = this.fbFormGroup.value;
    // console.log(data);

    const url = "http://localhost:3000/adduser";

    await this.http.post(url, data).toPromise();

    window.alert("All Done! Thankyou For Register....");


    this.fbFormGroup.reset("");
  };

}
