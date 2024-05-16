import { group } from '@angular/animations';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyContact } from 'src/models/MyContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

contactId:any
contact:MyContact={}
groupId:String="";
groupName: String=""
constructor(private api:ApiService, private activatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.activatedRoute.params
  .subscribe((data:any) => {
    this.contactId = data['id'] 
    
  })

  this.api.viewContact(this.contactId) 
  .subscribe((result:any) =>{
    this.contact = result
    console.log(this.contact);
    this.groupId = result.groupId
    this.api.getGroup(this.groupId)
    .subscribe((result:any) => {
   this.groupName = result.name
      
    })
     
  })
}  

}