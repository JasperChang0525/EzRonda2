import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';

import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  matric: string =""
  name: string =""
  password: string =""
  cpassword: string =""
 
  

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public afStore: AngularFirestore,
    public user:UserService,
    public alertController: AlertController,
    private toastControl: ToastController) { }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })
  }

  onChange(selectedValue){
    console.info("Selected: ", selectedValue)
  }

  async presentToast() {
    let toast = this.toastControl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    }).then(toast => toast.present());

  }

  async register() {
    const { matric, name, password, cpassword} = this
    if(password !== cpassword){
      return console.error("Passwords do not match")
    }

    try {
      const res= await this.afAuth.auth.createUserWithEmailAndPassword(matric + '@siswa.ukm.edu.my', password)
      
      this.afStore.doc(`users/${matric}`).set({
        name,
        password
      })


      this.user.setUser({
        matric,
        uid: res.user.uid
      })

      this.presentAlert('Success', 'You are registered!')
      this.presentToast()

      
      this.router.navigateByUrl('login')
      console.log(res)
    }catch(error){
      console.dir(error)
    }
    
  }

}