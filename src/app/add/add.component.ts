import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBooksData } from '../AddressBookData';
import { AddressbookService } from '../service/addressbook.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  person:AddressBooksData = new AddressBooksData();

  constructor(fb: FormBuilder, private router: ActivatedRoute,
    private route: Router, private addrService: AddressbookService) { }

  id:any;

  newPerson(): void {
    this.person = new AddressBooksData();
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    console.log(this.id);
  }

  onSubmit() {
    this.save()
  }
  save() {
    console.log("inside save");
    
    this.addrService.createPerson(this.person)
      .subscribe(data => console.log("Data", data))
    this.person = new AddressBooksData();
    this.gotoList();
  }
  gotoList() {
    setTimeout(() => {
      this.route.navigate(['home'])
    }, 1000);
  }
}
