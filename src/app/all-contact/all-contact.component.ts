import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/MyContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
  
  allContacts:MyContact[]=[]
  searchKey:String=''
  constructor(private api:ApiService ){

  }


  ngOnInit(): void {
   this.getAllContact()
  }
getAllContact(){
  this.api.getAllContacts()
  .subscribe((result:any) =>{
  console.log(result);
  this.allContacts = result;
  
  }) 
}

  deleteContact(contactId:any){
    this.api.removeContact(contactId)
    .subscribe((result:any)=>{
    console.log(result);
    this.getAllContact()
    
    })
  }
}
