import { Component, OnInit } from '@angular/core';
import {PoliticiantestimonialService } from "../politiciantestimonial/politiciantestimonial.service";

@Component({
  selector: 'app-politiciantestimonial',
  templateUrl: './politiciantestimonial.component.html',
  styleUrls: ['./politiciantestimonial.component.css']
})
export class PoliticiantestimonialComponent implements OnInit {

  constructor(
    private politiciantestimonialService : PoliticiantestimonialService
  ) { }
 politiciantestimoniales : any = [];
 politiciantestimonial : any ;

  ngOnInit() {
    this.getAll();
    this.getOne(1);
    this.add();


  }

  getAll(){
this.politiciantestimonialService.getAll().subscribe(res => {
  if (res){
    this.politiciantestimoniales= res; 
  }
} , error=>{
  console.log(error);
});
  }
getOne(id){
  this.politiciantestimonialService.getOne(id).subscribe(res => {
    if (res){
      this.politiciantestimonial= res; 
    }
  } , error=>{
    console.log(error);
  });
  }
  add(){
    var data={politiciantestimonial_DESC:" "};
    this.politiciantestimonialService.add(data).subscribe(res => {
      if (res){
        this.politiciantestimonial= res; 
      }
    } , error=>{
      console.log(error);
    });
    }
}
