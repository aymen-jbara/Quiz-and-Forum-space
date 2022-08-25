import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {ModelClientComponent} from "./dashboard-admin/Forum/model-Client/model-client.component";
import {ModelAdminComponent} from "./dashboard-admin/Forum/model-admin/model-admin.component";
import {GameComponent} from "./dashboard-admin/Forum/Game/Game.component";
import {XOComponent} from "./dashboard-admin/Forum/XO/XO.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'accueil',component:HomeClientComponent},
  {path:'dashboardAdmin',component:HomeAdminComponent},
  {path:'listCollaboration',component:ListCollaborationComponent},
  {path:'addCollaborator',component:AddCollaborationComponent},
  {path:'register',component:RegisterComponent},
  {path:'Forum',component:ModelClientComponent},
  {path:'qvt',component:ModelAdminComponent},
  {path:'Forum/Game/Memory',component:GameComponent},
  {path:'Forum/Game/XO',component:XOComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
