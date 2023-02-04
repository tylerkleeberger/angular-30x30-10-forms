import { Component, OnInit } from '@angular/core';
import { Registrant } from 'src/app/data/registrant';
import { RegistrationService } from 'src/app/data/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  registrants: Registrant[] = [];

  constructor(private registrantService: RegistrationService) { }

  ngOnInit(): void {
    this.getRegistrants();
  }

  getRegistrants(): void {
    this.registrantService.getRegistrants().subscribe(registrants => this.registrants = registrants.reverse().slice(0,5));
  }

}
