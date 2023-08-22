import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'huble';
  currentSign = "+";
  val1: any;
  val2: any;
  ans: any;
  constructor(private db: AngularFireDatabase) {

  }
  save() {
    this.db.list('calculator').push({
      val1: this.val1,
      sign: this.currentSign,
      val2: this.val2,
      ans: this.ans
    })
  } 
  add() {
    if(!(this.val1 == "") || !(this.val2 == "")) {
      this.ans = this.val1 + this.val2;this.save()
    } else {
      alert('please enter a value')
    }
  }
  minus() {this.ans = this.val1 - this.val2;this.save()}
  multiply() {this.ans = this.val1 * this.val2;this.save()}
  divide() {this.ans = this.val1 / this.val2;this.save()}
  reset(){
    this.val1 = '';
    this.val2 = '';
    this.ans = '';
  }
}
