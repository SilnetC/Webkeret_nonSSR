import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LandingComponent } from './pages/landing/landing.component';
//import { CompareComponent } from './pages/compare/compare.component';
//import { ListComponent } from './pages/list/list.component';
//import { BuildComponent } from './pages/build/build.component';
//import { LoginComponent } from './pages/login/login.component';
//import { RegistrationComponent } from './pages/registration/registration.component';
import { MenuComponent } from './common/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { FormatSaveDatePipe } from './common/pipes/format-save-date.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    //LandingComponent,
    //CompareComponent,
    //ListComponent,
    //BuildComponent,
    //LoginComponent,
    //RegistrationComponent,
    MenuComponent,
    //FormatSaveDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    //FlexLayoutModule,
    MatListModule,
    AngularFireModule.initializeApp({"projectId":"webkeret-pc-project","appId":"1:987009277672:web:dc99d22d0fd3de4f08b35d","storageBucket":"webkeret-pc-project.appspot.com","apiKey":"AIzaSyBkmKghdpxzI4MuZ8OO1gRkt1oVkfiYGeY","authDomain":"webkeret-pc-project.firebaseapp.com","messagingSenderId":"987009277672","measurementId":"G-FRZJ4MW9ZS"}),
    //provideFirebaseApp(() => initializeApp({"projectId":"webkeret-pc-project","appId":"1:987009277672:web:dc99d22d0fd3de4f08b35d","storageBucket":"webkeret-pc-project.appspot.com","apiKey":"AIzaSyBkmKghdpxzI4MuZ8OO1gRkt1oVkfiYGeY","authDomain":"webkeret-pc-project.firebaseapp.com","messagingSenderId":"987009277672","measurementId":"G-FRZJ4MW9ZS"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
