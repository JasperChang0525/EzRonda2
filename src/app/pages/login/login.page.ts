import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  matric: string=""
  password: string=""

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router, 
    public user:UserService) { }

  ngOnInit() {
  }

  async login() {
    const { matric, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(matric + '@siswa.ukm.edu.my', 
      password)

      if(res.user){
        this.user.setUser({
          matric,
          uid: res.user.uid
        })
        this.router.navigateByUrl('home')
      }
      
    }catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("User not found")
      }
    }

  }
}