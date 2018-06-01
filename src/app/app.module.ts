import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmojiProvider } from '../providers/emoji';
import { HttpClientModule } from "@angular/common/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TicketPage } from '../pages/ticket/ticket';
import { ChartsModule } from 'ng2-charts';
import { TicketProvider } from '../providers/ticket/ticket';
import {FreshChatPage} from '../pages/fresh-chat/fresh-chat';
import {FaqPage} from '../pages/faq/faq';
import {LandingPage} from '../pages/landing/landing';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LandingPage,
    FreshChatPage,
    FaqPage,
    TicketPage


  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // ChartsModule,
    IonicModule.forRoot(MyApp
    // ,{
    //   tabsHideOnSubPages:true,
    //   tabsLayout:'icon-left',
    //   preloadModules: true
    // }
    ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LandingPage,
    FreshChatPage,
    FaqPage,
    TicketPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    AuthServiceProvider,
    TicketProvider


  ]
})
export class AppModule {}
