import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/MyContact';
import { MyGroups } from 'src/models/MyGroups';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: MyContact={}
  allGroups: MyGroups[]=[]

  constructor(private api:ApiService ,private router:Router){
  
    this.contact.groupId = "select a group"
    
  }
  ngOnInit(): void {
   this.api.getAllGroups()
   .subscribe((result:any) => {
    console.log(result);
    this.allGroups = result
    
   })
  }
   addContact(){
    this.api.addContact(this.contact)
    .subscribe(
      (result:any)=>{
        console.log(result);
        alert("new contact added")
        this.router.navigateByUrl('')
      }
    )
   }
}
