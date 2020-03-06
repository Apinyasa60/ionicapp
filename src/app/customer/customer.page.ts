import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  id: string;
  name: string;
  lastname: string;
  address: string;
  tel: string

  input_id: string;
  input_name: string;
  input_lastname: string;
  input_address: string;
  input_tel: string;


  constructor() { }

  ngOnInit() {
  }

}
