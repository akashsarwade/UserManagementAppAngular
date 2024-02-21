import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ErrorsComponent } from './component/errors/errors.component';

import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/route-gurad.service';
import { ListTodosComponent } from './component/list-todos/list-todos.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},

  {path:'**',component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
