import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/core/interfaces/IUser';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  form!: FormGroup;
  // ---
  userData!: IUser;
  // ---
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [''],
      family: [''],
      mobileNumber: [''],
      nationalCode: [''],
      email: [''],
      birthDay: [''],
      evidence: [null],
      fieldOfStudy: [''],
      address: [''],
    })
  }

  getData(): void {
    this.userData = this.profileService.getUserById(0);
    this.form.patchValue(this.userData);
  }

}
