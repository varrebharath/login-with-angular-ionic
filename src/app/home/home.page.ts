import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[DatePipe]
})
export class HomePage implements OnInit {
details:FormGroup
current:Date=new Date();
date;
mindate='1990-01-01'
selectedValue: string[] = [];
submitted=false

errors={
  'name':[{type:'required', message:'fill the first name'}],
  'number':[
    {type:'required',message:"provide the valid  mobile number"},
    {type:'maxlength',message:'number must be 10 digits only'},
    {type:'minlength', message:'number must be 10 digits'}  ,
   
  ],
  'email':[{type: 'required', message:'provide the valid email'},
          { type:'pattern', message:'provide the valid email address'}],
  'password': [
    {type:'required', message: 'please provide a pasword'},
    {type:'maxlength', message: 'cant take morethan 30 characters'},
    { type: 'pattern', message: 'Password must be contain atleast 8 letters one lowercase and one uppercase letter one digit and one special character.'},
    {type:'minlength', message: 'length should be 8 letters'}

],
'selectedDate':[{type: 'required', message:'provide the valid date'}],
'gender':[{type: 'required', message:'selet the gender'}],
'skills':[{type: 'required', message:'selet the skills'}]
}
constructor(private fb:FormBuilder,private dp:DatePipe,private toastCtrl:ToastController,private nc:NavController,private routers:Router) {
  this.details=this.fb.group({
    name:['',Validators.required],
    number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['',[Validators.required,Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      gender:['',Validators.required],
      skills:['',Validators.required],
      selectedDate: ['', Validators.required],

    })
    this.date=this.dp.transform(this.current,'YYY-MM-dd')
    

  }
  ngOnInit() {
  }
  onSubmit() {
   
       if(this.details.valid){
       this.submitted=true
       const formData=this.details.value


        console.log(this.details)
        this.toastCtrl.create({
          message:"detailes are sucessfuly added",
          duration:2000,
          color:'success'
        }).then((toastEl)=>{
          toastEl.present()
        })
        this.nc.navigateRoot('/badri',{
          queryParams:{
            name:formData.name,
            email:formData.email,
            number:formData.number,
            dateOfBirth:formData.selectedDate,
            gender:formData.gender,
            skills:formData.skills
          }
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
