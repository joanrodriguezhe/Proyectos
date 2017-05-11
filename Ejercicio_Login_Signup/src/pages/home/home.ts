import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';

import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data:  any = { 
    myToggle : false,
    option : "Signup" 
  };

  public liUsername: any;
  public liPassword: any;
  
  public suUsername: any;
  public suEmail: any;
  public suPassword1: any;
  public suPassword2: any;

  public myFormLogIn: FormGroup;
  public myFormSignUp: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.myFormLogIn = this.formBuilder.group({
      liUsername: ['', Validators.required],
      liPassword: ['', Validators.required]
    })

    this.liUsername = this.myFormLogIn.controls['liUsername'];
    this.liPassword = this.myFormLogIn.controls['liPassword'];

    this.myFormSignUp = this.formBuilder.group({
      suUsername: ['', Validators.required],
      suEmail: ['', Validators.required],
      suPassword1: ['', Validators.required],
      suPassword2: ['', Validators.required]
    })

    this.suUsername = this.myFormSignUp.controls['suUsername'];
    this.suEmail = this.myFormSignUp.controls['suEmail'];
    this.suPassword1 = this.myFormSignUp.controls['suPassword1'];
    this.suPassword2 = this.myFormSignUp.controls['suPassword2'];

  }

  toggleChange(val){
    if(!val)
      this.data.option = "SignUp";
    else
      this.data.option = "LogIn";
  }

  openPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }

  sendDataLogIn(){

  }

  sendDataSignUp(){

  }

}
