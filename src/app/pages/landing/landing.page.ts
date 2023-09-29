import { Component, OnInit } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }
register(){
this.toastCtrl.create({
  message:'entered to the registerPage',
  duration:2000,
  color:'success'

}

).then((toastEl)=>{
  toastEl.present()
})
}
signin(){
  this.toastCtrl.create({
    message:'entered to the signin page',
    duration:2000,
    color:'success'
  
  }
  
  ).then((toastEl)=>{
    toastEl.present()
  })

}
}
