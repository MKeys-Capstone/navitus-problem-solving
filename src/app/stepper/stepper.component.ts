import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class StepperComponent implements OnInit {
  personalInfoForm: FormGroup;
  addressForm: FormGroup;
  employmentForm: FormGroup;
  educationForm: FormGroup;
  interestsForm: FormGroup;
  skillsForm: FormGroup;
  referencesForm: FormGroup;
  summaryForm: FormGroup;
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalInfoForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    this.addressForm = this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    });

    this.employmentForm = this._formBuilder.group({
      employer: ['', Validators.required],
      position: ['', Validators.required],
    });

    this.educationForm = this._formBuilder.group({
      institution: ['', Validators.required],
      degree: ['', Validators.required],
    });

    this.interestsForm = this._formBuilder.group({
      hobbies: ['', Validators.required],
    });

    this.skillsForm = this._formBuilder.group({
      technicalSkills: ['', Validators.required],
    });

    this.referencesForm = this._formBuilder.group({
      referenceName: ['', Validators.required],
      referenceContact: ['', Validators.required],
    });

    this.summaryForm = this._formBuilder.group({
      additionalInfo: [''],
    });
  }

  setStepTest() {
    console.log(this.stepper);
    this.stepper.selectedIndex = 4;
  }

  submitForm() {
    console.log('Personal Info:', this.personalInfoForm.value);
    console.log('Address:', this.addressForm.value);
    console.log('Employment:', this.employmentForm.value);
    console.log('Education:', this.educationForm.value);
    console.log('Interests:', this.interestsForm.value);
    console.log('Skills:', this.skillsForm.value);
    console.log('References:', this.referencesForm.value);
    console.log('Summary:', this.summaryForm.value);

    // Here you would normally send this data to a database
    alert('Form submitted successfully!');
  }
}
