import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA',
  authDomain: 'fireship-lessons.firebaseapp.com',
  databaseURL: 'https://fireship-lessons.firebaseio.com',
  projectId: 'fireship-lessons',
  storageBucket: 'fireship-lessons.appspot.com',
  messagingSenderId: '758773997881',
  appId: '1:758773997881:web:8991643725992873'
};

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirePerformanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
