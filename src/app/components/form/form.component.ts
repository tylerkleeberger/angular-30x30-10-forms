import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registrant } from 'src/app/data/registrant';
import { RegistrationService } from 'src/app/data/registration.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  registrants = [];
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


  add(): void {
    if (this.registrant) {
      this.registrantService.addRegistrant(this.registrant)
        .subscribe(() => this.goBack());
    }
  }


  delete(registrant: Registrant): void {
    this.registrants = this.registrants.filter(h => h !== registrant);
    this.registrantService.deleteRegistrant(registrant.id).subscribe();
}


// add(registrant) {
  //   this.registrantservice.addRegistrant({} as Registrant).subscribe(registrant => {this.registrants.push(registrant);
  //   });
  // }
}
