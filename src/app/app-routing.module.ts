import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PassengerComponent } from './passenger/passenger.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'login', component: LoginComponent},
  {path:'passenger', component:PassengerComponent},
  {path:'',redirectTo:'/welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
