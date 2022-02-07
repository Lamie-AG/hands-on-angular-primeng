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

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.contracts.push(this.fakeContract());
    }
    console.table(this.contracts);
  }

  mapStatus(status: "OnRisk" | "Cancelled"): string {
    switch (status) {
      case "OnRisk":
        return "warn";
      case "Cancelled":
        return "error";
      default:
        return "info";
    }
  }

  fakeContract(): Contract {
    return {
      status: faker.random.arrayElement(["OnRisk", "Cancelled"]),
      premium: faker.random.arrayElement([2.99, 4.99, 8.99, 11.99, 12.99]),
      startDate: faker.date.past(),
      endDate: faker.date.future(),
      customer: {
        id: faker.random.alpha(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName()
      },
      device: {
        id: faker.random.alpha(),
        name: faker.random.arrayElement(["Samsung", "Apple", "Xiamoi"]) + " " + faker.random.alphaNumeric(),
        price: faker.random.number({ min: 100, max: 1000 })
      }
    }
  }

}
