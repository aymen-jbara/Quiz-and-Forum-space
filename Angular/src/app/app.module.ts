import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cote-client/header/header.component';
import { SideBarComponent } from './cote-client/side-bar/side-bar.component';
import { SideChatComponent } from './cote-client/side-chat/side-chat.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { AddPostComponent } from './cote-client/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAdminComponent } from './dashboard-admin/header-admin/header-admin.component';
import { SideBarAdminComponent } from './dashboard-admin/side-bar-admin/side-bar-admin.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';


import {CommonModule} from "@angular/common";
import {ChartsModule} from "ng2-charts";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {AlertModule} from "ngx-bootstrap/alert";
import {ModalModule} from "ngx-bootstrap/modal";
import {QVTComponent} from "./dashboard-admin/Forum/qvt/qvt.component";
import {QVTCoteClientComponent} from "./dashboard-admin/Forum/qvtcote-client/qvtcote-client.component";
import { ModelClientComponent } from './dashboard-admin/Forum/model-Client/model-client.component';
import { ModelAdminComponent } from './dashboard-admin/Forum/model-admin/model-admin.component';
import {StarComponent} from "./dashboard-admin/Forum/star/star.component";
import { StartOpinionComponent } from './dashboard-admin/Forum/start-opinion/start-opinion.component';

import {NgxPaginationModule} from "ngx-pagination";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {GameCardComponent} from "./dashboard-admin/Forum/Game/game-card/game-card.component";
import {RestartDialogComponent} from "./dashboard-admin/Forum/Game/restart-dialog/restart-dialog.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {GameComponent} from "./dashboard-admin/Forum/Game/Game.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToastrModule} from "ngx-toastr";
import {XOComponent} from "./dashboard-admin/Forum/XO/XO.component";
import {IconComponent} from "./dashboard-admin/Forum/XO/components/icon/icon.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SideChatComponent,
    HomeClientComponent,
    AddPostComponent,
    HeaderAdminComponent,
    SideBarAdminComponent,
    HomeAdminComponent,
    ListCollaborationComponent,
    AddCollaborationComponent,
    LoginComponent,
    RegisterComponent,
    QVTComponent,
    QVTCoteClientComponent,
    ModelClientComponent,
    ModelAdminComponent,
    StarComponent,
    StartOpinionComponent,
    GameCardComponent,
    RestartDialogComponent,
    GameComponent,
    XOComponent,
    IconComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    CommonModule,
    ChartsModule,
    CarouselModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    NgxQRCodeModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
