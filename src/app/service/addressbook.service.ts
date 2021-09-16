import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressBookData } from '../AddressBookData'

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

  getAddressBookData(): Observable<AddressBookData[]>{
    return this.http.get<AddressBookData[]>(`http://localhost:8082/addressbook/persons`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`http://localhost:8082/addressbook/person/${id}`);
  }

  createPerson(person: Object): Observable<Object> {
    return this.http.post(`http://localhost:8082/addressbook/create`, person);
  }

  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8082/addressbook/update/${id}`, value);
  }

}
