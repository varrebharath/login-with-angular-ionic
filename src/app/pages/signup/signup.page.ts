import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
signup: FormGroup
submitted=false
  constructor(private fb:FormBuilder,private routers:Router,private alertCtrls:AlertController,private toastCtrl: ToastController) {
    this.signup=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pasword:['',[Validators.required,Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    })
  

   }
   errors={
    'firstname':[{type:'required', message:'fill the first name'}],
    'lastname':[{type:'required',message:'fill the last name'}],
    'mobilenumber':[
      {type:'required',message:"provide the valid  mobile number"},
      {type:'maxlength',message:'number must be 10 digits only'},
      {type:'minlength', message:'number must be 10 digits'}  ,
     
    ],
    'email':[{type: 'required', message:'provide the valid email'},
            { type:'pattern', message:'provide the valid email address'}],
    'pasword': [
      {type:'required', message: 'please provide a pasword'},
      {type:'maxlength', message: 'cant take morethan 30 characters'},
      { type: 'pattern', message: 'Password must be contain atleast 8 letters one lowercase and one uppercase letter one digit and one special character.'},
      {type:'minlength', message: 'length should be 8 letters'}

  ]
   }
   


  ngOnInit() {


  }
submit(){
  this.submitted=true
  if(this.signup.valid){
    console.log(this.signup)
    this.routers.navigate(['/home'])
    this.toastCtrl.create({
      message:"successfully created account",
      duration:2000,
      color:'success'
    }).then((toastEl)=>{
      toastEl.present()
    })
  }else{
    this.toastCtrl.create({
      message:"fill the required fields",
      duration:2000,
      color:'danger'
    }).then((toastEl)=>{
      toastEl.present()
    })
  }
  }

}

