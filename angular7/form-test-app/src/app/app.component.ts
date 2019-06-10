import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-test-app';
  submitted = false;
  email = '';
  subscription = '';
  password = '';
  defaultQuestion = "advanced";

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  @ViewChild('f') signupForm: NgForm;

  onSubmit(){
    console.log(this.signupForm);
    this.submitted = true;
    console.log(this.email = this.signupForm.value.email);
    console.log(this.subscription = this.signupForm.value.subscription);
    console.log(this.password = this.signupForm.value.password);


    this.signupForm.reset();
  }
  
}
