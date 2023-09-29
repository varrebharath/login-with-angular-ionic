import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DatePipe } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LoginPage } from './pages/login/login.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home/home.page';
import { BadriPage } from './pages/badri/badri.page';
@NgModule({
  declarations: [AppComponent,LoginPage,BadriPage],
  imports: [BrowserModule, IonicModule.forRoot(),FormsModule,ReactiveFormsModule,DatePipe, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
