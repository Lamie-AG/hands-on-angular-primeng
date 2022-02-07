import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'Contracts', routerLink: '/contracts' },
    { label: 'Claims', routerLink: '/claims' },
    { label: 'Customers', routerLink: '/customers' },
    { label: 'Cancelations', routerLink: '/cancelations' },
    { label: 'Devices', routerLink: '/devices' },
  ];;
  constructor() { }

  ngOnInit(): void {
  }

}
