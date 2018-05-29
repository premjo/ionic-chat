import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreshChatPage } from './fresh-chat';

@NgModule({
  declarations: [
    FreshChatPage,
  ],
  imports: [
    IonicPageModule.forChild(FreshChatPage),
  ],
})
export class FreshChatPageModule {}
