import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'src/app/home/home.page'
@Component({
  selector: 'app-badri',
  templateUrl: './badri.page.html',
  styleUrls: ['./badri.page.scss'],
})
export class BadriPage implements OnInit {

  name: string='';
  email: string='';
  number: string='';
  dateOfBirth: string='';
  gender: string='';
  skills: string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.name = params['name'];
    this.email = params['email'];
    this.number = params['number'];
    this.dateOfBirth = params['dateOfBirth'];
    this.gender = params['gender'];
    this.skills = params['skills'];

  })

}
}
