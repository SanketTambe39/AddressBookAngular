import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddressBooksData } from '../AddressBookData';
import { AddressbookService } from '../service/addressbook.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  persons!: Observable<AddressBooksData[]>;

  constructor(private addrService: AddressbookService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.persons = this.addrService.getAddressBookData();
  }

  deletePerson(id: number) {
    console.log("inside delete");
    
    this.addrService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData()
        })
  }

}
