import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';

import { IonicModule } from '@ionic/angular';
import { CdTimerModule } from 'angular-cd-timer';

@NgModule({
  declarations: [
    HeaderComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    CdTimerModule,


  ],
  exports: [TranslateModule, HeaderComponent, IonicModule, CdTimerModule]
})

export class SharedModule {}
