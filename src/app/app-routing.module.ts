import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/log-in',
    pathMatch: 'full',
  },
  {
    path: 'log-in',
    component: SigninComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'user-profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
