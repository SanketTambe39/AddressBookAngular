import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookData } from '../AddressBookData';
import { AddressbookService } from '../service/addressbook.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  person:AddressBookData = new AddressBookData();

  constructor(private route: ActivatedRoute,
    private router: Router, private addrService: AddressbookService) { }

  id:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    if (this.id != null) {
      this.addrService.getPerson(this.id).subscribe(data => {
        debugger
        this.person.personId = data.personId;
        this.person.city = data.city;
        this.person.address = data.address;
        this.person.fullName = data.fullName;
        this.person.state = data.state;
        console.log("received data =", this.person.city)
      })
    }
  }

  onSubmit() {
    this.save()
  }
  save() {
    console.log("inside save");
    if (this.id == null) {
      this.addrService.createPerson(this.person)
        .subscribe(data => console.log("Data", data))
      this.person = new AddressBookData();
      this.gotoList();
    }
    else{
      this.onUpdate();
    }
  }

  onUpdate() {
    console.log("====>>>",this.person)
    this.addrService.updatePerson(this.id, this.person)
      .subscribe();
    this.person = new AddressBookData();
    this.gotoList()
  }

  gotoList() {
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 1000);
  }

}
