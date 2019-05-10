import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';
const perf = firebase.performance();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  screenTrace: firebase.performance.Trace;

  ngOnInit() {
    this.screenTrace = perf.trace('loginScreen');
    this.screenTrace.start();
  }

  ngOnDestroy() {
    this.screenTrace.stop();
  }


  constructor(private afAuth: AngularFireAuth) {}

  async login(email, pass) {
    const trace = perf.trace('userLogin');
    trace.start();

    try {
      const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, pass);

      trace.putAttribute('verified', `${credential.user.emailVerified}`);

      trace.stop();

    } catch (err) {
      trace.putAttribute('errorCode', err.code);
      trace.stop();
    }

  }

}
