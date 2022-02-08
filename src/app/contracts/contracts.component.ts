import { Component, OnInit } from '@angular/core';
import { Contract } from './contract';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  contracts: Array<Contract> = [];
  tableHeight = window.innerHeight-150; // todo: improve height

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.contracts.push(this.fakeContract());
    }
    console.table(this.contracts);
  }

  fakeContract(): Contract {
    return {
      status: faker.random.arrayElement(["OnRisk", "Cancelled", "NTU", "Declined"]),
      premium: faker.random.arrayElement([2.99, 4.99, 8.99, 11.99, 12.99]),
      startDate: faker.date.past(),
      endDate: faker.date.future(),
      policy: faker.random.alphaNumeric(10),
      phone: faker.phone.phoneNumber(),
      imei: faker.random.alphaNumeric(14),
      owner: faker.random.arrayElement(["AUT", "BGR", "SVN", "HRV"]),
      contractType: faker.random.arrayElement(["HSI01_1", "HSI01_2", "HSI01_3"]),
      customer: {
        id: faker.random.alphaNumeric(10),
        name: faker.name.findName()
      },
      device: {
        id: faker.random.alphaNumeric(10),
        name: faker.random.arrayElement(["Samsung", "Apple", "Xiamoi"]) + " " + faker.random.alphaNumeric(),
        price: faker.random.number({ min: 100, max: 1000 })
      }
    }
  }

}
