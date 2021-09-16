import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressBooksData } from '../AddressBookData'

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  deletePerson(id: number) {
    return this.http.delete(`http://localhost:8082/addressbook/delete/${id}`);
  }

  constructor(private http: HttpClient) {
    console.log("Inside Service");
   }

  getAddressBookData(): Observable<AddressBooksData[]>{
    return this.http.get<AddressBooksData[]>(`http://localhost:8082/addressbook/persons`);
  }

  createPerson(person: Object): Observable<Object> {
    return this.http.post(`http://localhost:8082/addressbook/create`, person);
  }

}
