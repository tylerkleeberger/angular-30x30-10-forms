import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registrant } from 'src/app/data/registrant';
import { RegistrationService } from 'src/app/data/registration.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit{
  @Input() registrant?: Registrant;

  constructor(
    private route: ActivatedRoute,
    private registrantService: RegistrationService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getRegistrant();
  }

  getRegistrant(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.registrantService.getRegistrant(id).subscribe(registrant => this.registrant = registrant);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.registrant) {
      this.registrantService.updateRegistrant(this.registrant)
        .subscribe(() => this.goBack());
    }
  }

}