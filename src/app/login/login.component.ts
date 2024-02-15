// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   login: { username: string, password: string }[] = [
//     { username: "kk", password: "kk" }
//   ];
//   username: string = '';
//   password: string = '';
//   ischecked: boolean = false;
//   isvalid: boolean = false;

//   onsubmit() {
//     const isvalidate = this.login.some(login => login.username === this.username && login.password);
//     if (!isvalidate) {
//       this.isvalid = true;
//     } else {
//       alert("Login Failed - invalid username or password");
//     }
//     this.ischecked = true;

//   }
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login:{username:string,password:string}[]=[
  {username:'admin', password:'admin@123'},
  {username:'ananya',password:'ananya@123'}
];
username:string='';
password:string='';
isvalidate:boolean=false;
ischecked:boolean=false;
check(){
  const isvalidate = this.login.some(login => login.username === this.username && login.password === this.password);
if(isvalidate){
  this.isvalidate=true;
}else {
  this.isvalidate=false;
}
this.ischecked=true;
}        

}