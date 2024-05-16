import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //get all-contacts function
  getAllContacts() {
    return this.http.get("http://localhost:3000/contacts")
  }
  // view contact api
  viewContact(contactId: any) {

    return this.http.get('http://localhost:3000/contacts/'+contactId)
  }

  getGroup(groupId:String){
    // api call - asynchronous 
  return this.http.get('http://localhost:3000/groups/'+groupId)
}
  
getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
}
//api to add / store contact details to server
addContact(contact: any){
  return this.http.post(' http://localhost:3000/contacts',contact)
}
removeContact(id:any){
  return this.http.delete('http://localhost:3000/contacts/'+id)
}
//api call for update a particular contact
updateContact(id:any,contact:any){
  return this.http.put('http://localhost:3000/contacts/'+id,contact)
}

}
 