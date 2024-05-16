import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/MyContact';
import { MyGroups } from 'src/models/MyGroups';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId:any;
  contact:MyContact={}
  groupId:any;
  groupName:String=''
  groups:MyGroups[]=[]
constructor(private activatedRoute:ActivatedRoute, private api:ApiService ,private router:Router){

}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(
    (data:any) => {
    this.contactId = data['id']
    console.log(this.contactId);
  
    }
  )
  if(this.contactId){
    this.api.viewContact(this.contactId).subscribe(
      (result:any) => {
        console.log(result);
        this.contact = result;
        this.groupId = result.groupId
        this.api.getGroup(this.groupId).subscribe(
          (data:any) => {
            this.groupName = data['name']
          }
        )
        //to fetch all group
        this.api.getAllGroups().subscribe((result:any) => {
          this.groups = result
        })
      }
    )
  }
}
updateContact(contact:MyContact){
  this.api.updateContact(this.contactId,contact).subscribe(
    (result:any) => {
      console.log(result);
      alert('contact updated successfully')
      this.router.navigateByUrl('')
    }
  )
}

}
