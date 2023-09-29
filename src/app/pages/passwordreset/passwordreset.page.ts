import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,FormsModule, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class PasswordresetPage implements OnInit {
resetpasword: FormGroup
errors={
  'reset':[{type: 'required', message:'provide the valid email'},
            { type:'pattern', message:'provide the valid email address'}]
}
  constructor(private fb:FormBuilder, private alertCtrls: AlertController,private toastCtrl:ToastController) { 
    this.resetpasword=this.fb.group({
      reset:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  ngOnInit() {
  }
send(){
  if(this.resetpasword.valid){
    console.log(this.resetpasword)
    this.toastCtrl.create({
      message:'password reset link was sent for your given email address',
      color:'success',
      duration:2000
    }).then((toastEl)=>{
      toastEl.present()
    })
  }
  else{
    this.toastCtrl.create({
      message:'please provide the correct email address',
      color:'danger',
      duration:2000
    }).then((toastEl)=>{
      toastEl.present()
    })
  }
}
}
