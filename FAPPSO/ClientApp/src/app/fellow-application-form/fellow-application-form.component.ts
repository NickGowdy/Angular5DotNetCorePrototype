import { Component } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'fellow-application-form',
    templateUrl: './fellow-application-form.component.html',
  })

  export class FellowApplicationFormComponent {
    nextSubmissionDate = '15 December 2017'
    
    followingSubmissionDeadlines = ['7th March 2018','26 Jun 2018','13th Sept 2018']


    public beforeChange($event: NgbPanelChangeEvent) {
       

        if ($event.panelId === 'pnlPersonDetails') {
            alert("get person details in this event");
        }

        if ($event.panelId === 'pnlEngineeringCouncilRegistration') {
            alert("get engineering council registration form in this event");
        }
      };
  }