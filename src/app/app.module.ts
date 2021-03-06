import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { DemoMaterialModule } from './material.module';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { MainService } from './_services/main.service';
import { AngularFirestoreModule}from '../../node_modules/angularfire2/firestore';
import {AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AMainComponent } from './a-main/a-main.component';
import { AboutComponent } from './about/about.component';


import { SigninComponent } from './signin/signin.component';


//import { AuthGuard } from "./_services/auth.gaurd";

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthService } from './_services/auth.service';
import { NotifyService } from './_services/notify.service';
import 'hammerjs';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AgmCoreModule } from '@agm/core';

import { MyMapComponent } from './my-map/my-map.component';
import { MarkerdetailComponent } from './markerdetail/markerdetail.component';
import { TitleComponent } from './title/title.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    AMainComponent,
    AboutComponent,


    SigninComponent,


    MyMapComponent,
    MarkerdetailComponent,
    TitleComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ImageCropperModule,
  RouterModule.forRoot([
    // {
    //     path : 'signin',
    //     component: SigninComponent,
    //     canActivate: [AuthGuard]

    //   },
    //   {
    //     path:'articleNew',
    //     component:ArticleNewComponent
    //   }



]),

MatCarouselModule.forRoot(),

    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    MarkdownModule.forRoot(),
    CovalentTextEditorModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),


    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    QRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBt4GWgutgc8URi0kHpyRT_S720WGONf8s'
    }),

  ],
  providers: [MainService,AuthService,NotifyService,AngularFireAuthModule,AngularFirestore],


  bootstrap: [AppComponent]
})
export class AppModule { }
