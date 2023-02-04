import { Component, OnInit } from '@angular/core';
import { Registrant } from 'src/app/data/registrant';
import { RegistrationService } from 'src/app/data/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registrants: Registrant[] = [];
  selectedRegistrant?: Registrant;

  constructor(
    private registrantservice: RegistrationService) { }

  ngOnInit(): void {
    this.getRegistrants();
  }

  onSelect(registrant: Registrant): void {
    this.selectedRegistrant = registrant;
  }

  getRegistrants(): void {
    this.registrantservice.getRegistrants()
    .subscribe(registrants => this.registrants = registrants.sort());
  }

  add(name: string, location: string, contact: string): void {
    name = name.trim();
    if (!name) { return; }
    this.registrantservice.addRegistrant({ name } as Registrant).subscribe(registrant => {this.registrants.push(registrant);
    });
  }

  delete(registrant: Registrant): void {
    this.registrants = this.registrants.filter(h => h !== registrant);
    this.registrantservice.deleteRegistrant(registrant.id).subscribe();
  }
  
  genId(registrants: Registrant[]): number {
    return registrants.length > 0 ? Math.max(...registrants.map(registrant => registrant.id)) + 1 : 11;
  }

}
