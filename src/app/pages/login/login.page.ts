import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   login: FormGroup
   submitted=false;

  errors={
    'username':[{
      type: 'required', message: 'field cant be empty'
    },
    {
      type: 'minlength', message: 'name must be atleast 3 characters'
    },
    {
      type: 'maxlength', message: 'name shoulb be maximum 10 characters'
    }],
    'pasword': [
      {type:'required', message: 'please provide a pasword'},
      {type:'maxlength', message: 'cant take morethan 30 characters'},
      { type: 'pattern', message: 'Password must be contain atleast 8 letters one lowercase and one uppercase letter one digit and one special character.'},
      {type:'minlength', message: 'length should be 8 letters'}

  ]
  }
  
  

 
  constructor(private fb:FormBuilder, private router:Router, private alertCtrls:AlertController,private toastCtrl:ToastController) {
    this.login = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      pasword:['',[Validators.required,Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    })
    
   }

  ngOnInit() {
 

  }
submit(){
  this.submitted=true
  if(this.login.valid){
    this.router.navigate(['/home'])
this.toastCtrl.create({
  message:'login sucessfully completed',
  duration:2000,
  color:'success'
}).then((toastEl)=>{
  toastEl.present();
})
  }
  else{
    this.toastCtrl
    .create({
  
      message: 'please provide the correct login details',
      duration:2000,
      color:'danger'
     
    })
    .then((alertEl) => {
      alertEl.present();
    });
  }

}

}
