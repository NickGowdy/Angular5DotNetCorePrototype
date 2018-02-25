import { Component } from '@angular/core';

@Component({
    selector: 'fellow-application-form',
    templateUrl: './fellow-application-form.component.html',
  })

  export class FellowApplicationFormComponent {
    nextSubmissionDate = '15 December 2017'
    
    followingSubmissionDeadlines = ['7th March 2018','26 Jun 2018','13th Sept 2018']
  }