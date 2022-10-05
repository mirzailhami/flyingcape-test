import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { ProductsComponent } from './pages/products/products.component';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ChipModule } from 'primeng/chip';
import {InputMaskModule} from 'primeng/inputmask';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {MenuModule} from 'primeng/menu';

import { PlanComponent } from './pages/plan/plan.component';
import { ModalTrailerComponent } from './components/modal-trailer/modal-trailer.component';
import { HeaderComponent } from './components/header/header.component';

const PrimengModule = [
  ButtonModule,
  InputTextModule,
  CarouselModule,
  CardModule,
  TagModule,
  DynamicDialogModule,
  ChipModule,
  InputMaskModule,
  BlockUIModule, PanelModule, ToastModule, MenuModule
];

const components = [
  AppComponent,
  AccountComponent,
  LoginComponent,
  PageNotfoundComponent,
  ProductsComponent,
  PlanComponent, ModalTrailerComponent, HeaderComponent
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule
  ],
  declarations: [components],
  bootstrap: [AppComponent],
})
export class AppModule {}
